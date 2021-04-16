import {choice,remove} from './helpers';
import {m} from './foods';

let f=choice(m);
console.log(`i wouldd like a ${f} please`);
console.log(`here you go ${f}`);
console.log(`can i have some more`);
let g= remove(m,f);
console.log(`sorry .we only have ${g} fruits left`);
