const Africastalking = require('africastalking');


const africastalking = Africastalking({
  apiKey: '523ba6cc06535027c286002ea9d84e95a41011f40dbbb60fbddc1bea35ee44dc',
  username: 'sandbox',
});


module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
          to: '+254758882039', 
          message: 'Hey AT Ninja! Wassup...',
          from: '22566'
        });
        console.log(result);
      } catch(ex) {
        console.error(ex);
      } 

};
