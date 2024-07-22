"use client";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { toast } from "react-toastify";
import InputFieldPage from "@/component/shared/form/Inputfield";

const Login = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      router.push("/filterapi");
    }
  }, [router]);

  // Handle Login
  const onSubmit = (data) => {
    let objData = {
      email: "dev@yopmail.com",
      password: "12345",
    };

    if (data.email === objData.email && data.password === objData.password) {
      localStorage.setItem("loginData", JSON.stringify(data));
      setCookie("login", JSON.stringify(data));
      router.push("/filterapi");
      toast.info("Login Successful");
    } else {
      toast.error("Please enter valid email and password");
    }
    reset();
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="heading-login">Login</h2>
        <InputFieldPage
          errors={errors}
          label="Email"
          name="email"
          control={control}
          type="email"
        />
        <br />
        <br />
        <InputFieldPage
          errors={errors}
          label="Password"
          name="password"
          control={control}
          type="password"
          className="TextField"
        />
        <div className="forget-create">
          <p className="paragraph">Create account</p>
          <p className="paragraph">Forget Password?</p>
        </div>
        <br />
        <Button type="submit" className="login-button" variant="outlined">
          Login
        </Button>
        <br />
        <p className="para-signup">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="sign-up">
            Sign Up
          </Link>
        </p>
        <p className="para-signup">Login with</p>
        <div className="icons">
          <FacebookRoundedIcon className="facebook" />
          <TwitterIcon className="twitter" />
          <GoogleIcon className="google" />
        </div>
      </form>
    </div>
  );
};

export default Login;
