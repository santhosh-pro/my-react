import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password Name is required"),
});
export const loginFormOptions = { resolver: yupResolver(validationSchema) };
