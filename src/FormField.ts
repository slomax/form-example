interface ValidationRule<E> {
    errorMessage:string,
    validationFunction: (value: E) => Boolean
}

export class FormField<E> {

    public constructor(public value:E, public label:string){
        this.validationRules = [];
    };

    public isValid: boolean = true;
    private errorMessages: Array<String>=[];
    private validationRules: Array<ValidationRule<E>>;

    public validate = () => {
        this.clearErrorMessages();
        this.validationRules.forEach((validationRule:ValidationRule<E>) => {
            const valueIsValid = validationRule.validationFunction(this.value);
            if(!valueIsValid) {
                const errorMessage = validationRule.errorMessage;
                this.errorMessages.push(errorMessage);
            }
            return valueIsValid;
        });
        const allValidationRulesPassed = this.errorMessagesIsEmpty();
        this.isValid = allValidationRulesPassed;
    };

    private clearErrorMessages = () => this.errorMessages = [];

    private errorMessagesIsEmpty = () => this.errorMessages.length === 0;

}
