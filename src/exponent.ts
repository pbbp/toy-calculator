import { multiply } from "./multiply";
import { divide } from "./divide";

export function exponentiate(base : number, exponent: number) {

    if (exponent === 0)
        return 1;

    else if (exponent === 1) 
        return base;

    else if (exponent < 0)
        return multiply(
            (new Array(exponent)).fill(
                divide([1, base])
            )
        );    

    else
        return multiply(
            (new Array(exponent)).fill(base)
        );    

    
}