
// export default (req, res) => {
//     res.statusCode = 200;
//     res.send({ message: "helloWorld" });
//   };


exports.handler = async function(event, context, callback) {
  // your server-side functionality
  console.log('queryStringParameters', event.queryStringParameters)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })
}
