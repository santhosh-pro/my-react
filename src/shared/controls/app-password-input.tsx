interface AppPasswordInputModel {
  placeholder: string;
  errorMessage?: string;
}

function AppPasswordInput(props: AppPasswordInputModel) {
  return (
    <div>
      <input type="password" placeholder={props.placeholder} />
      <p>{props.errorMessage}</p>
    </div>
  );
}
export default AppPasswordInput;
