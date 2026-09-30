const secret = () => process.env.SESSION_SECRET || '';

async function hmac(value: string) {
  const s = secret();
  if (s.length < 32) throw new Error('SESSION_SECRET is not configured securely.');
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(s), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}

export async function makeAdminToken() {
  const payload = `admin:${Math.floor(Date.now()/1000)}`;
  return `${payload}.${await hmac(payload)}`;
}

export async function verifyToken(token?: string|null) {
  try {
    if (!token) return false;
    const [payload, sig] = token.split('.');
    if (!payload || !sig || !payload.startsWith('admin:')) return false;
    const issued = Number(payload.slice(6));
    if (!Number.isFinite(issued) || issued > Date.now()/1000 || Date.now()/1000 - issued > 43200) return false;
    return (await hmac(payload)) === sig;
  } catch { return false; }
}
