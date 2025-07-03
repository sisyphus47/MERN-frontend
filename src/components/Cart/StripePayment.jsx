import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_KEY"); // Replace with your publishable key

const StripePaymentForm = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const card = elements.getElement(CardElement);

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (result.error) {
      console.error(result.error);
      onError(result.error);
      setIsLoading(false);
    } else {
      // Send payment method ID to your server to create a payment intent.
      // For testing, you can simulate a successful response.
      console.log("Payment Method ID:", result.paymentMethod.id);
      setIsLoading(false);
      onSuccess(result.paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

const StripePayment = ({ amount, onSuccess, onError }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripePaymentForm
        amount={amount}
        onSuccess={onSuccess}
        onError={onError}
      />
    </Elements>
  );
};

export default StripePayment;
