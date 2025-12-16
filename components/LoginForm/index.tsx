"use client";

import { Button, Checkbox, Input, Typography } from "../common";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import loginConstant from "@/constant/loginConstant";

export const LoginForm = () => {
  const router = useRouter();
  const { initialValues, loginSchema } = loginConstant;

  const handleForgotPassword = () => {
    router.push("forgot-password");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("TEST", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-5 pb-7">
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="Email Address"
          placeholder="Enter username"
        />
        <Input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          label="Password"
          placeholder="Enter password"
          type="password"
        />
        <div className="flex justify-between">
          <Checkbox label="Remember me" id="remember-me" />
          <button
            className="cursor-pointer"
            type="button"
            onClick={handleForgotPassword}
          >
            <Typography variant="body2" className="text-primary-500" as="span">
              Forgot Password?
            </Typography>
          </button>
        </div>
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};
