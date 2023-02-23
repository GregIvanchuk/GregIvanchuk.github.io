import styles from "./OrdersForm.module.css";
import React from "react";
import { useState } from "react";
import FramedCart from "../FramedCart";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
function OrdersForm({ openCart,itemsCart,setItemsCart,sum }) {
    let [onSub, setOnSub] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        async function fetchData() {
        let ord = {data,itemsCart,sum:sum}
      await axios.post("https://2013-188-191-238-217.eu.ngrok.io/users",ord);
        setItemsCart([]);
      await  itemsCart.forEach((item) => {
         axios.delete(`https://2013-188-191-238-217.eu.ngrok.io/cart/${item.id}`);
        });
        setOnSub(!onSub);
    }
    fetchData() 
    };
    return onSub ? (
        <FramedCart openCart={openCart} />
    ) : (
        <div className={styles.drawer}>
            <div className={styles.cart_Items}>
                <img
                    onClick={openCart}
                    className={styles.close_button}
                    width={16}
                    height={16}
                    src="/images/hrestuk.svg"
                    alt="close"
                />
                <div className={styles.form}>
                    <h3>Введіть необхідні дані:</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("firstName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="firstName"
                            type="text"
                            placeholder=" Ім'я"
                        />
                        {errors.firstName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input
                            {...register("lastName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="lastName"
                            type="text"
                            placeholder=" Прізвище"
                        />
                        {errors.firstName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input 
                            {...register("phoneNumber",{ 
                                required: "Field is required",
                            })}
                            name="phoneNumber"
                            type="tel"
                            placeholder=" Номер телефону"
                        />
                        {errors.phoneNumber && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input
                            {...register("city",{ 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="city"
                            type="text"
                            placeholder=" Місто"
                        />
                        {errors.phoneNumber && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input 
                            {...register("numberMail",{ 
                                required: "Field is required",
                                minLength: 1,
                                maxLength: 3,
                            })}
                            name="numberMail"
                            type="number"
                            placeholder=" Віділення нової пошти"
                        />
                        {errors.phoneNumber && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default OrdersForm;
