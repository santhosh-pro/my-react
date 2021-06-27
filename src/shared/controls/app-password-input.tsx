interface AppPasswordInputModel {
  placeholder: string;
  errorMessage?: string;
  name:string;
  register:any
}

function AppPasswordInput(props: AppPasswordInputModel) {
  return (
    <div>
      <input name={props.name} type="password" placeholder={props.placeholder} ref={props.register}/>
      <p>{props.errorMessage}</p>
    </div>
  );
}
export default AppPasswordInput;
