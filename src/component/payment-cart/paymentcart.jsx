'use client';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

const PaymentCart = ({ totalDiscount, totalPrice, getData, token, counts }) => {
    const [countData, setCountData] = useState(1)
    // console.log("countData", countData)
    useEffect(() => {
        let countPrice = 0;
        getData.map((items, index) => (
            countPrice += items.counts
        ));
        // console.log("countPrice", countPrice)
        setCountData(countPrice);

    }, [getData, counts]);

    return (
        <>
            <div className='payment-cart'>
                <p>Price Details</p><hr />
                <p>Price ({countData} items):
                    ₹{totalPrice}
                </p>
                <p>Discount: -₹{totalDiscount}</p>
                <p>Delivery Charges: <del>₹40</del>Free</p>
                <p>Total amount: ₹{totalPrice - totalDiscount}</p>
                <StripeCheckout
                    name="My Store"
                    stripeKey='pk_test_51PR9g9DoBVjTdzXuZRAsuAhv9DpIC9LLZ6jZCrxJlNNJUNjOzRxh16agJgTVvgvL4UBNsFf45tSHAT53ehoqxlX000joTROvmZ'
                    amount={(totalPrice - totalDiscount) * 100}
                    image={getData[0]?.image}
                    token={token}
                    currency="INR"
                    shippingAddress={true}
                    billingAddress={true}
                    zipCode={true}>
                    <Button variant='outlined' className='pay-btn'>Proceed to pay</Button>
                </StripeCheckout>
            </div>
        </>
    )
}

export default PaymentCart