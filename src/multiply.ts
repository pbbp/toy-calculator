
export function multiply(multipliers : number[]) {
    if (multipliers && multipliers.length > 0) {
        return multipliers.reduce( 
            (prev, current, index, list) => {
                return prev * current;
            } );
    }

    return 0;
}