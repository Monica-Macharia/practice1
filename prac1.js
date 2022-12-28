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

function finder(carni){
   const search = carni.find((element)=> element === "gut")
  
    console.log(search.toUpperCase())
}
   



finder(dog)

console.log("Hello".substring(1, 3))

//.reduce()
//we need a reducer function that returns the accumulator.
//we need another function that uses.reduce() and the accumulator alongside the element

function reducer(accumulator, element){
    console.log(accumulator, element)
  let amount = element.remaining
 
 return accumulator += amount

  
}


// let final = books.reduce(reducer, 0)
    
// console.log(final)

//  books.forEach(function(item){
//     console.log(item.name.toUpperCase())
// })

// console.log(books.toUpperCase(books.name))
["for", "tall", "jud"].indexOf("tall");

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "W"}
 
  ]
  function mapper(array){
    array.map(function(element){
        if(element.result === "W"){
       console.log(Number.parseInt(element.year, 10) + 10)}
       else{
          console.log(record)
       }
    })
  }
  mapper(record)
  function finders(array){
    array.filter(function(item){
        if(item.result === "W"){
            console.log(item.year);
        }})
        
  }
  finders(record)
//   function finders(arrays){
//     arrays.find(function (arrays){
//         if (arrays.result === "W"){
//             console.log(arrays)
//             console.log(arrays.year)
//         }
//         else{
//             console.log("undefined")
//         }

//     })
//   }

//   finders(record);

let trees= [3,5,6,7,8]
let trees2= [9, ...trees, 2 ]


console.log(trees2);

let 