var Promise = require('promise');
/*eslint-disable no-console*/

function asyncMethod(message, num){
  return new Promise(function (fulfill, reject){
    setTimeout(function(){
      console.log(message + ' ' + num);
      fulfill(num + 1);
    }, 500)
  });
}

async function main(){
  var one = await asyncMethod('Open Db Connection', 0)
  var two = await asyncMethod('Find User', one)
  var three = await asyncMethod('validate User', two)
  var four = await asyncMethod('do stuff', three)
}

main();
