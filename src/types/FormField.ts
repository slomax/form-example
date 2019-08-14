export class ValidationRule<E> {
  constructor(
      public errorMessage: string,
      public validationFunction: (value: E) => Boolean
  ){};
}

export class FormField<E> {
  constructor(public label:string, public value:E, public validationRules:Array<ValidationRule<E>>, public key:string) {}
}
