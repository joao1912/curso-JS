(function(){
    const arr = [1, 3, 5, "opa", true]
    const arr_1 = arr.filter(function( el ){
        return typeof el === "number"
    })
    console.log(arr_1)

})()