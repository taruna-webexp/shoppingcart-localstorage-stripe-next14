"use client";
import './filterapi.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import Navbar from '@/component/navbar/navbar';
import FilterButton from '@/component/Filterbutton/filterbutton';
import CardPage from '@/component/Card/card';


const FilterApi = () => {

  const [data, setData] = useState([]);
  const [getValue, setValue] = useLocalStorage("cart", []);

  const fetchApi = async (filterKey = '', filterValue = '') => {
    try {
      let url = 'http://dummyjson.com/users';
      if (filterKey && filterValue) {
        url = `${url}/filter?key=${filterKey}&value=${filterValue}`;
      }
      const res = await axios.get(url);
      const apiData = res.data.users;

      const updatedApi = apiData.map((item, index) => ({
        ...item,
        price: Math.floor(Math.random() * 2000),
        discount: Math.floor(Math.random() * 70),
        counts: 1,
      }));
    
      setData(updatedApi);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = async (key, value) => {
    await fetchApi(key, value);
  };

  const handleBtnClick = (items) => {
    try {
      const updatedCart = [...getValue, items];
      // localStorage.setItem('cart', JSON.stringify(updatedCart));
      setValue(updatedCart);
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  return (
    <>
      <Navbar getValue={getValue} />
      <div className='main'>
        <div className='aside'>
          <h1 className='head-filter'>Filter</h1>
          <FilterButton handleClick={handleClick} />
        </div>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "32% 32% 32%", gap: "12px", marginTop: "25px", width:"100%" }}>
            {data.map((items) => (
              <div key={items.id}>
                <CardPage items={items} handleBtnClick={handleBtnClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterApi;
