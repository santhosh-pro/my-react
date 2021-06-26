export interface State<T> {
  payload: T;
  errorMessage:string;
  isSuccess:boolean;
  loading: boolean;
  hasErrors: boolean;
}
