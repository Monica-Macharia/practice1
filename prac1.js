//pseudocode
//function1 loop
//function2 hold an array and use function1 as a parameter


//First class function
 const funvar = function(obj){
     for(let key in obj){
         console.log(key)
     }
 }
//high-order function
 function objholder(flows){
        cat={name: "rosee",gender: "female", height: 78}
        flows(cat);
 }

 objholder(funvar);
