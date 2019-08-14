export const REQUIRED_ERROR = 'This field is required.';
export function required<Boolean>(value:any){
    switch(typeof value) {
        case "string":
            return value.length > 0;
            break;
        default:
            return value !== null && value !== undefined;
    }
}

export const NUMBER_ERROR = 'This field must be a number.';
export function number<Boolean>(value:number) {
    return isNaN(value);
}