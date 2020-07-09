
export function difference(subtractors : number[]) {
    if (subtractors && subtractors.length > 0) {
        return subtractors.reduce( 
            (prev, current, index, list) => {
                return prev - current;
            } );
    }

    return 0;
}