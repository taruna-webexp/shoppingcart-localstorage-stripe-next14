import React from 'react'
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from "@mui/material/RadioGroup";
import { Controller } from 'react-hook-form'

const RadioButtonPage = ({ control, handleCheckboxChange, formData, labelField, radioData, name, errors }) => {
  return (
    <>
      <FormLabel className="TextField" id="demo-controlled-radio-buttons-group">{labelField}</FormLabel>
      <Controller control={control} name={name}
        render={({ field }) => (
          <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" {...field}>
            {radioData.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio
                  checked={formData.gender == item.value}
                  onChange={handleCheckboxChange}
                  name={name}
                  value={item.value}
                />
                }
                label={item.label} />
            ))}
          </RadioGroup>
        )} />
    </>
  )
}

export default RadioButtonPage 
