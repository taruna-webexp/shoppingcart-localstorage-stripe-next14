"use client";
import React, { useState, useEffect } from 'react';
import './viewcart.css';
import AddToCart from '@/component/addtocart/addtocart';
import PaymentCart from '@/component/payment-cart/paymentcart';
import { Payment } from '@mui/icons-material';

const ViewCart = () => {
  const [getData, setGetData] = useState([]);
  const [counts, setCounts] = useState([]);
  const [tokenData, setTokenData] = useState(); // token payment state
  const [totalPrice, setTotalPrice] = useState(0); // total price state
  const [discount, setDiscount] = useState(0); // discount state
  const [totalDiscount, setTotalDiscount] = useState(0); // total discount state
  const [openDialog, setOpenDialog] = useState(false); // Dialog state

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setGetData(cartData);

    const storedCounts = JSON.parse(localStorage.getItem("counts"));
    if (storedCounts && storedCounts.length === cartData.length) {
      setCounts(storedCounts);
    } else {
      const initialCounts = cartData.map(() => 1);
      localStorage.setItem("counts", JSON.stringify(initialCounts));
      setCounts(initialCounts);
    }
  }, []);

  useEffect(() => {
    let totalDiscount = 0;
    let disCount = 0;
    let subTotal = 0;
    getData.map((items, index) => (
      subTotal += items.price * counts[index],
      disCount += items.discount + counts[index],
      totalDiscount += Math.trunc(((items.price * items.discount) / 100) * counts[index])
    ));
    setTotalDiscount(totalDiscount);
    setDiscount(disCount);
    setTotalPrice(subTotal);
  }, [getData, counts]);

  const updateLocalStorage = (newCounts) => {
    const updatedCart = getData.map((item, index) => ({
      ...item,
      counts: newCounts[index]
    }));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('counts', JSON.stringify(newCounts));
  };

  const handleAddCount = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] < 10) {
      newCounts[index] += 1;
      setCounts(newCounts);
      updateLocalStorage(newCounts);
    } else {
      alert("Please add only 10 items");
    }
  };

  const handleSubCount = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
      updateLocalStorage(newCounts);
    }
  };

  const DeleteItem = (index) => {
    const updatedCart = getData.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    const newCounts = counts.filter((_, i) => i !== index);
    setCounts(newCounts);
    localStorage.setItem('counts', JSON.stringify(newCounts));
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const token = (token) => {
    setTokenData(token);
    handleClickOpen();
  };

  return (
    <>
      <div className='main-cart'>
        <AddToCart handleAddCount={handleAddCount} handleSubCount={handleSubCount} getData={getData} DeleteItem={DeleteItem} counts={counts} />
        <PaymentCart totalDiscount={totalDiscount} totalPrice={totalPrice} token={token} getData={getData} counts={counts} />
      </div>
      <Payment handleClose={handleClose} openDialog={openDialog} tokenData={tokenData} />
    </>
  );
};

export default ViewCart;
