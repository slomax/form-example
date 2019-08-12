export class ValidationRule<E> {
  constructor(
      public errorMessage: string,
      public validationFunction: (value: E) => Boolean
  ){};
}

export class FormField<E> {
  public errorMessages:Array<string> = [];
  public isValid:boolean = true;
  constructor(public label:string, public value:E, public validationRules:Array<ValidationRule<E>>) {}

  validate() {
    //utility methods not to be used outside this method
    const clearErrorMessages = () => (this.errorMessages = []);
    const errorMessagesIsEmpty = () => this.errorMessages.length === 0;

    //now perform validation
    clearErrorMessages();
    this.validationRules.forEach((validationRule: ValidationRule<any>) => {
      const valueIsValid = validationRule.validationFunction(this.value);
      if (!valueIsValid) {
        const errorMessage = validationRule.errorMessage;
        this.errorMessages.push(errorMessage);
      }
      return valueIsValid;
    });
    const allValidationRulesPassed = errorMessagesIsEmpty();
    this.isValid = allValidationRulesPassed;
  };
}
