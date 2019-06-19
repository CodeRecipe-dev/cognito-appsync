exports.graphqlHandler = (event, context, callback) => {
  console.log('Received event {}', JSON.stringify(event, 3));
  if(event.field == 'getMessage') {
    callback(null, {
      id: 1,
      content: 'Message for Guests',
      author: 'Guest Author'
    })
  }
};


