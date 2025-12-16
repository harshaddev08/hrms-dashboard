import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const loginConstant = {
  initialValues,
  loginSchema,
};

export default loginConstant;
