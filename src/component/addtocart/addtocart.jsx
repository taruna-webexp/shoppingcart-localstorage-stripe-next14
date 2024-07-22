import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

const AddToCart = ({ getData, handleAddCount, handleSubCount, DeleteItem, counts }) => {
    return (
        <>
            <div className='add-cart'>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <h1 className='shopping-cart'>Shopping Cart</h1>
                <div className='close-icon'>
                    <Link href="/filterapi"><CloseIcon /></Link>
                </div>
                </div>
                {getData.map((items, index) => (
                    <div key={index}>
                        <div className='view-cart'>
                            <div className='image-sec'>
                                <div>
                                    <img className='product-image' src={items.image} alt="" />
                                </div>
                                <Button variant='outlined' className='cart-btn' onClick={() => handleAddCount(index)}><AddIcon /></Button>
                                <span className='count-number'>{items.counts}</span>
                                <Button variant='outlined' className='cart-btn' onClick={() => handleSubCount(index)}><RemoveIcon /></Button>
                                <Button variant='outlined' className='cart-btn' onClick={() => DeleteItem(index)}><DeleteIcon /></Button>
                            </div>
                            <div className='para-items'>
                                <p>ID:{items.id}</p>
                                <p>Department: {items.company.department}</p>
                                <p>First Name: {items.firstName}</p>
                                <p>Last Name: {items.lastName}</p>
                                <p>Gender: {items.gender}</p>
                                <p>Phone Number: {items.phone}</p>
                                <p>Email: {items.email}</p>
                                <p className='price'><del>₹{items.price * counts[index]}</del> ₹{(items.price - (items.price * items.discount) / 100) * counts[index]} <span style={{ color: "green", marginLeft: "7px", fontSize: "17px" }}>  {items.discount}% off</span> </p>
                                <p className='total-price'></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AddToCart