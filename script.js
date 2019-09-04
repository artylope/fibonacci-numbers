console.log('linked');

let fibonacci = function(num, returnList=false){

    let arr = [0, 1];
      for (let i = 2; i < num + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
      }

    if (returnList === false){
        //returnList is false, return number
        return arr[num];
    } else if (returnList === true) {
        //returnList is true, return list
        return arr;
    }

}

function fib_r( num, returnList=false) {
    let arr = [0,1];

    for (let i = 2; i < num + 1; i++){
      arr.push(fib_r(i- 1) + fib_r(i - 2))
    }

    if (returnList === false){
        //returnList is false, return number
        return arr[num];
    } else if (returnList === true) {
        //returnList is true, return list
        return arr;
    }


}
