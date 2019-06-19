exports.graphqlHandler = (event, context, callback) => {
  console.log('Received event {}', JSON.stringify(event, 3));
  if(event.field == 'getMessage') {
    callback(null, {
      id: 2,
      content: 'Message for Registered Users',
      author: 'Registered Author'
    })
  }
};


