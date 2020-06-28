
export function sum(addends : number[]) {
    if (addends && addends.length > 0) {
        return addends.reduce( 
            (prev, current, index, list) => {
                return prev + current;
            }, 0);
    }

    return 0;
}