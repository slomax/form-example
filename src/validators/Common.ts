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
