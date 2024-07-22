import React from 'react'
import TextField from "@mui/material/TextField";
import { Controller } from 'react-hook-form';
const InputFieldPage = ({ label, name, control,type,className,helperText }) => {
  return (
    <>
      <Controller control={control} name={name}
        defaultValue=""
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <>
          <TextField {...field} type={type} className={className} label={label} variant="outlined"   helperText={helperText} /> 
          
          </>
        )} />
    </>
  )
}

export default InputFieldPage