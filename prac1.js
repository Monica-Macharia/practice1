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

 //

 books= [
     {
     name: "Forever",
     store: 1,
     remaining: 23
    },{
     name: "Love",
     store: 2,
     remaining: 2
     },{
        name: "Lover",
        store: 3,
        remaining: 1
        },
    {
            name: "Love",
            store: 4,
            remaining: 3
            }
        ]
//  console.log(books.book2.store)

//pseudocode
//when books are below 4 alert "restock!"
//function loops through the object and grabs remaining[value]
//then checks the amount against a condition
//function that returns an alert.

const loopthrough = function(arrays){
    for(let item of arrays){  
        if(item.remaining < 4){
            console.log(`Restock quick: ${item.name} is at ${item.remaining}`)
        }
        else{
            console.log(`Safe: ${item.name} is at ${item.remaining}`)
        }
        // console.log(item.remaining)
                   
    }
    
}

function feeder(fun){
    fun(books)
}
feeder(loopthrough);

dog=["hut", "hunt", "gut", "jug","tall"]

function looped(arr){
    const itemy = arr.map((item)=>item.toUpperCase())
    console.log(itemy)
}
looped(dog);
console.log(dog);