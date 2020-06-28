
export function divide(divisors : number[]) {
    if (divisors && divisors.length > 0) {
        return divisors.reduce( 
            (prev, current, index, list) => {
                return prev / current;
            } );
    }
}