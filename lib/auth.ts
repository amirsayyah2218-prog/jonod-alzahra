import { cookies } from 'next/headers';
import { makeAdminToken, verifyToken } from './session-core';
export const COOKIE='jonod_admin';
export { makeAdminToken, verifyToken };
export async function isAdmin(){ return verifyToken((await cookies()).get(COOKIE)?.value); }
