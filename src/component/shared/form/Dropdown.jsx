import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Controller } from 'react-hook-form';

const DropDownPage = ({ control, name, courseData, className, label, handleDropdownChange, helperText }) => {
    return (
        <>
            <FormControl fullWidth className="selectController">
                <Controller
                    label={label}
                    name={name}
                    defaultValue="Select Value"
                    control={control}
                    render={({ field }) => (
                        <Select
                            className={className}
                            {...field}

                            onChange={(e) => {
                                field.onChange(e);
                                handleDropdownChange(e.target.value);
                            }}
                        >
                            {courseData.map((item) => (
                                <MenuItem
                                    helperText={helperText}
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
            </FormControl>
        </>
    )
}
export default DropDownPage