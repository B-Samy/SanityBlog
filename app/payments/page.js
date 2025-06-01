'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById('razorpay-script')) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const res = await fetch('/api/create-order', { method: 'POST' });
    const data = await res.json();

    if (!data?.order) {
      alert('Failed to create order');
      setLoading(false);
      return;
    }

    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert('Failed to load Razorpay SDK');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: data.order.currency,
      name: 'Test Corp',
      description: 'Test Transaction',
      order_id: data.order.id,
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Razorpay Payment</h1>
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: loading ? '#888' : '#1a73e8',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
        }}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>

      <div
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <h2>Super Card</h2>
        <p>This is a clean, stylish card with no Tailwind or CSS Modules.</p>
      </div>
    </div>
  );
}
