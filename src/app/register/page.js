'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InputFieldPage from '@/component/shared/form/Inputfield';


export default function RegisterForm() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <div className="form-section">
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <h2 className="heading-signup">Sign Up</h2>
          <InputFieldPage
            errors={errors}
            label="Name"
            name="name"
            control={control}
            type="text"
          />{" "}
          <br />
          <br />
          <InputFieldPage
            errors={errors}
            label="Email"
            name="email"
            control={control}
            type="email"
          />{" "}
          <br />
          <br />
          <InputFieldPage
            errors={errors}
            label="Password"
            name="password"
            control={control}
            type="password"
            className="TextField"
          /><br /><br />
          <InputFieldPage
            errors={errors}
            // label="DOB"
            name="dob"
            control={control}
            type="date"
            className="TextField"
          /><br /><br />
          <Button type="submit" className="signup-button" variant="outlined">
            Sign Up
          </Button>
          <br />
          <p className="para-signup">Already have an account? <Link href="/" className="sign-up">Login</Link></p>
          <p className="para-signup">Sign up with</p>
          <div className="icons">
          <FacebookRoundedIcon className="facebook" />
          <TwitterIcon className="twitter" />
          <GoogleIcon className="google" />
        </div>
        </form>
      </div>
    </>
  )
}
