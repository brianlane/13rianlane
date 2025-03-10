import { writeFileSync } from 'fs';

const CNAME_PATH = './dist/CNAME';
const customDomain = 'www.13rianlane.com';

writeFileSync(CNAME_PATH, customDomain, { encoding: 'utf8' });

console.log(`Custom domain set to: ${customDomain}`);