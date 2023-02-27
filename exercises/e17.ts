export const minBy = <T>(array: T[], cb: (arg: T) => number) => {
    let min = 0;
    for(let i = 1; i < array.length; i++) {
        const current = array[i];
        const currMin = array[min];
        if(current !== undefined && currMin !== undefined) {
            if(cb(current) < cb(currMin)) {
                min = i;
            }
        }
    }

    return array[min];
};

export function maxBy<T>(array : T[], cb: (arg: T) => number) {
    let max = 0;
    for(let i = 1; i < array.length; i++) {
        const current = array[i];
        const currMax = array[max];
        if(current !== undefined && currMax !== undefined) {
            if(cb(current) > cb(currMax)) {
                max = i;
            }
        }
    }

    return array[max];
}
