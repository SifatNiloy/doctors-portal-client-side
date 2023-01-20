import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const CheckoutForm = ({booking}) => {
    const [cardError, setCardError]= useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [clientSecret, setClientSecret ] = useState('');
    const stripe= useStripe();
    const elements = useElements();
    const {price, patient, email }= booking;

    useEffect(() => {
        
        
        // Create PaymentIntent as soon as the page loads
        if(isLoading){
            return <Spinner></Spinner>
        }
        fetch("http://doctors-portal2.sifatniloy.com/create-payment-intent", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" ,
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
            setIsLoading(false)
    }, [price]);


    const handleSubmit= async(event)=>{
        event.preventDefault()
        if (!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card===null){
            return;
        }

        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log(error)
            setCardError(error.message)
        }
        else{
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:patient ,
                        email: email,
                    },
                },
            },
        );
        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        console.log('paymentIntent',paymentIntent)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-4 btn btn-sm btn-secondary' 
                type="submit" 
                    disabled={!stripe || !clientSecret}>                    
                    Pay
                </button>
            </form>
            <p className="text-2xl text-red-500">{cardError}</p>
        </>
    );
};

export default CheckoutForm;