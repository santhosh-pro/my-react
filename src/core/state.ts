export type State<T> ={
  payload: T;
  errorMessage:string;
  isSuccess:boolean;
  loading: boolean;
  hasErrors: boolean;
}
