'use client';
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const FilterButton = ({ handleClick, handleViewClick }) => {
    const [formData, setFormData] = useState({
        gender: "",
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const {
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    const handleCheckboxChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'radio') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    return (
        <div>
            <div>
                <h3 className='head'> Gender: </h3>
                <div className='depart-filter'>
                    <RadioGroup row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"                    >
                        <FormControlLabel onClick={() => handleClick('gender', 'female')} {...label} value="female" control={<Radio />} label="Female" />
                        <FormControlLabel onClick={() => handleClick('gender', 'male')} {...label} value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </div>
            </div>
            <div>
                <h3 className='head'>Department: </h3>
                <div className='depart-filter'>
                    <RadioGroup row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"                    >
                        <FormControlLabel onClick={() => handleClick('company.department', 'Engineering')}{...label} value="Engineering" control={<Radio />} label="Engineering" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Support')}  {...label} value="Support" control={<Radio />} label="Support" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Marketing')}  {...label} value="Marketing" control={<Radio />} label="Marketing" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Accounting')}  {...label} value="Accounting" control={<Radio />} label="Accounting" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Services')}  {...label} value="Services" control={<Radio />} label="Services" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Research and Development')}  {...label} value="Research and Development" control={<Radio />} label="R&D" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Legal')}   {...label} value="Legal" control={<Radio />} label="Legal" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Human Resources')}  {...label} value="Human Resources" control={<Radio />} label="HR" />
                        <FormControlLabel onClick={() => handleClick('company.department', 'Product Management')}  {...label} value="Product Management" control={<Radio />} label="Product Management" />
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}

export default FilterButton