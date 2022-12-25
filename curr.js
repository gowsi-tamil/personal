function curry(func){
    return function cur(...args){
        console.log(args.length)
        if(args.length >=func.length){
            return func(...args);
        }else{
            return function(...next){
                return cur(...args,...next);
            }
        }
    }
}
const sum =(a,b,c,d) => a+b+c+d;
const tss = curry(sum);
console.log(tss(1)(3)(5)(7));