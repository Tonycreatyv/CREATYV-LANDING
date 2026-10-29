import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const manifest=JSON.parse(await readFile(path.join(root,'source-sha256.json'),'utf8'));
for(const [file,hash] of Object.entries(manifest)){const bytes=await readFile(path.join(root,'public',file));if(createHash('sha256').update(bytes).digest('hex')!==hash)throw Error('Baseline modificado: '+file)}
const html=await readFile(path.join(root,'public/index.html'),'utf8');
for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(/^(?:https?:|data:|mailto:|#|tel:)/.test(m[1]))continue;await readFile(path.join(root,'public',m[1]))}
for(const file of Object.keys(manifest).filter(x=>/\.(html|css|js|svg)$/.test(x))){const text=await readFile(path.join(root,'public',file),'utf8');if(/appgprj_|appgver_|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY|\b(?:ghp_|github_pat_|sb_secret_|sk-proj-)[A-Za-z0-9_]{15,}/.test(text))throw Error('Revisar dato privado: '+file)}
console.log(`PASS: ${Object.keys(manifest).length} archivos idénticos al origen; recursos y escaneo de secretos correctos.`);
