export interface FormValues {
  'form-name': string;
  fullName: string;
  email: string;
  message: string;
}

export interface FormErrors {
  fullName: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

// export enum InputWidth {
//   FULL = 'full',
//   HALF = 'half',
// }
