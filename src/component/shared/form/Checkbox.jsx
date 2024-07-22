import React from "react";
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxPage = ({ control, name, checkBoxData, label, errors }) => {
  return (
    <div>
      <FormLabel className="TextField" id="demo-controlled-radio-buttons-group">{label}</FormLabel> <br />
      {checkBoxData.map((item, index) => {
        return (
          <label className="checkboxOuter" key={item.value}>
            <Controller
              name={`${name}[${item.value}]`}
              defaultValue={index === 7 ? true : false}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<Checkbox
                    checked={field.value}
                    value={item.value}
                  />}
                />
              )}
            />
            {item.label}
            <br />
          </label>
        );

      })}
    </div>
  );
};

export default CheckBoxPage;
