function asyncMethod(message){
  setTimeout(function(){
    console.log(message); // eslint-disable-line no-console
  }, 500)
}

asyncMethod('Open DB Connection');
