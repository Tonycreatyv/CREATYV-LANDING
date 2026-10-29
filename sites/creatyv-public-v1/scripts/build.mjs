import './verify.mjs';
import {cp,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url);
await mkdir(new URL('build/',root),{recursive:true});
await cp(new URL('public/',root),new URL('build/',root),{recursive:true});
console.log('Build estático creado en '+fileURLToPath(new URL('build/',root)));
