import React from 'react';
import sendSMS from '@/pages/api/sendSMS';

const SendForm = () => {
  const handleSendSMS = async () => {
    try {
      const result = await sendSMS();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleSendSMS}>Send SMS</button>
    </div>
  );
};

export default SendForm;
