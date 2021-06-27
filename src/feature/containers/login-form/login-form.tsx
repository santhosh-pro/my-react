import { useDispatch, useSelector } from "react-redux";
import { login, loginSelector } from "../../../core/login/login-store";
import { useHistory } from 'react-router-dom';
import { Form, Formik } from "formik";
import { TextInputField } from "../../../shared/controls/text-input-field";
import { initialValue, validate } from "./login-form-validators";

function LoginForm() {

  /*State*/
  const { payload, errorMessage, loading, hasErrors,isSuccess } =useSelector(loginSelector);
  const dispatch = useDispatch();

  /* Route */
  const history = useHistory();

  if (loading) {
    console.log("loading..");
  }
  if (hasErrors) {
    console.log("error..",errorMessage);
  }
  if (isSuccess) {
    history.replace('/home');
  }
  return (
    <div>
      <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(data) => {
        dispatch(login())
      }}
    >
      {formik => (
        <div>
          <h1>Sign Up</h1>
          <Form>
            <TextInputField label="Email" name="email" type="email" />
            <TextInputField label="password" name="password" type="password" />
            <button type="submit">Login</button>
          </Form>
        </div>
      )}
    </Formik>
    </div>
  );
}

export default LoginForm;
