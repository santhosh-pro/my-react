interface AppTextInputModel {
  placeholder: string;
  errorMessage?: string;
  register:any;
}

function AppTextInput(props: AppTextInputModel) {
  return <div>
      <input type="text" placeholder={props.placeholder} ref={props.register}/>
      <p>{props.errorMessage}</p>
  </div>;
}
export default AppTextInput;
