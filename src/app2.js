var Promise = require('promise');
/*eslint-disable no-console*/

function asyncMethod(message){
  return new Promise(function (fulfill){
    setTimeout(function(){
      console.log(message);
      fulfill();
    }, 500)
  });
}

function findUser(){
  return asyncMethod('Find User')
}

function validateUser(){
  return asyncMethod('Vaidate User')
}

function doStuff(){
  return asyncMethod('do stuff')
}

asyncMethod('Open DN Connecton')
  .then(findUser)
  .then(validateUser)
  .then(doStuff)
  .then(function(){})
