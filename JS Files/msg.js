// Include the Twilio module
// const Twilio = require('twilio');
import Twilio from 'twilio'

function smsSend(){
  const accountSid = 'AC62084bbbcb9777b7e6496b5c58ffbd69';
  const authToken = '9ffa2f834dd8cc209c802292956d081d';
  
  // Create a new Twilio client with your credentials
  const client = new Twilio(accountSid, authToken);
  
  // Send an SMS message
  client.messages
    .create({
      body: 'This is a test message from Twilio!',
      from: '+12512946735',
      to: '+918839582124'
    })
    .then(message => console.log('Message sent:', message.sid))
    .catch(error => console.error('Error sending message:', error));
}

smsSend();
