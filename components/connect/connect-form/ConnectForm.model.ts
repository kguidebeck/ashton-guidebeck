export interface FormValues {
  'form-name': string;
  full_name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  full_name: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

// export enum InputWidth {
//   FULL = 'full',
//   HALF = 'half',
// }
