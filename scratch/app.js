function asyncMethod(message, cb){
  setTimeout(function(){
    console.log(message); // eslint-disable-line no-console
    cb();
  }, 500)
}

asyncMethod('Open DB Connection', function(){
  asyncMethod('Find User', function(){
    asyncMethod('validate User', function(){
      asynchMethod('do stuff', function(){})
    })
  })
})
