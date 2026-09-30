'use client';
import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Login(){ const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [loading,setLoading]=useState(false); const router=useRouter();
async function submit(e:React.FormEvent){e.preventDefault();setLoading(true);setError(''); const r=await fetch('/api/admin/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({password})}); if(r.ok) router.replace('/admin'); else {const j=await r.json();setError(j.error||'ورود ناموفق بود.');} setLoading(false)}
return <main className="adminLogin"><form onSubmit={submit} className="loginCard"><div className="loginIcon"><ShieldCheck/></div><span className="sectionKicker">مدیریت امن</span><h1>ورود مدیر سایت</h1><p>برای مدیریت محتوای جُنودالزهراء رمز مدیر را وارد کنید.</p><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="رمز عبور مدیر" autoFocus/><button className="btn btnDark" disabled={loading}>{loading?'در حال ورود…':'ورود به پنل'}</button>{error&&<div className="errorBox">{error}</div>}</form></main> }
