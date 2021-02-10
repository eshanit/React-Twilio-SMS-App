// exports.handler = async function(event, context, callback) {
//   // your server-side functionality
//   console.log('queryStringParameters', event.queryStringParameters)
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ msg: 'Hello, World!' }),
//   })
// }

const client = require("twilio")(
  process.env.REACT_APP_TWILIO_ACCOUNT_SID,
  process.env.REACT_APP_TWILIO_AUTH_TOKEN
);

exports.handler = async function(event, context, callback) {
  // your server-side functionality
  //console.log('queryStringParameters', event)

  const {to, body} = JSON.parse(event.body)

  console.log(to, body)

      client.messages.create({
          from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
          to: to,
          body: body,
        })
        .then(callback(null,
          {
            statusCode: 200,
            body: JSON.stringify({success: true})
           }
         )
        .catch((err) => {
            console.log(err);
            JSON.stringify({ success: false });
        }));


}