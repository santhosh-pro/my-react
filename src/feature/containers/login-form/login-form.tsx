import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginRequest } from "../../../core/login/login-request";
import { login, loginSelector } from "../../../core/login/login-store";
import { loginFormOptions } from "./login-form-validators";

function LoginForm() {
  /*Form*/
  const { register, handleSubmit, formState } =useForm<LoginRequest>(loginFormOptions);
  const { errors } = formState;

  /*State*/
  const { payload, errorMessage, loading, hasErrors,isSuccess } =useSelector(loginSelector);
  const dispatch = useDispatch();

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
    console.log("success..");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username")} />
        <p>{errors.username?.message}</p>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
