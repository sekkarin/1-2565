let p = [true, true, false, false];
let q = [true, false, true, false];
let Np = [];
let Nq = [];
let pTq = [];
let pTqANq = [];
let result = [];
for (let i = 0; i < p.length; i++) {
    Np.push(!p[i]); // not p
    Nq.push(!q[i]); // not q
    if ((p[i] == true) && (q[i] == false)) //p -> q
        pTq.push(false);
    else
        pTq.push(true);

    pTqANq.push(pTq && Nq); // and
    if ((pTqANq[i] == true) && (Np[i] == false))
        result.push(false);
    else
        result.push(true);
}
console.log(Np);
console.log(Nq);
console.log(pTq); 
console.log(pTqANq);  
console.log(result);
