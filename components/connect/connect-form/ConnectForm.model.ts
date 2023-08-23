export interface FormValues {
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
