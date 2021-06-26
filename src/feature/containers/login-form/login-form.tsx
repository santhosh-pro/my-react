import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginRequest } from "../../../core/login/login-request";
import { login, loginSelector } from "../../../core/login/login-store";
import { loginFormOptions } from "./login-form-validators";
import { useHistory } from 'react-router-dom';
import AppTextInput from "../../../shared/controls/app-text-input";
import AppPasswordInput from "../../../shared/controls/app-password-input";

function LoginForm() {
  /*Form*/
  const { register, handleSubmit, formState } =useForm<LoginRequest>(loginFormOptions);
  const { errors } = formState;

  /*State*/
  const { payload, errorMessage, loading, hasErrors,isSuccess } =useSelector(loginSelector);
  const dispatch = useDispatch();

  /* Route */
  const history = useHistory();

  /*Form Submit*/
  const onSubmit = (data:LoginRequest) => {
    dispatch(login())
  };

  
  if (loading) {
    console.log("loading..");
  }
  if (hasErrors) {
    console.log("error..",errorMessage);
  }
  if (isSuccess) {
    history.push('/home');
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppTextInput placeholder="Username"
         errorMessage={errors.username?.message} register={register}></AppTextInput>
        <AppPasswordInput placeholder="Password" errorMessage={errors.password?.message} {...register("username")}></AppPasswordInput>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
