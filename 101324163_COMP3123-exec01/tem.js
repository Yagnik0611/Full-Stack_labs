
const ex1 =(ary,counter)=>{
    const greetText='Hello '
for(var name of ary){
    
    console.log(`${greetText+name}`)

}}

 ex1(['logan paul',"jake paul"],2)




const capitalize =([word,...rest] )=>  {
return word.toUpperCase()+ rest.join('') 
}

console.log(capitalize("fooBar"));
console.log(capitalize("Nodejs"));



let ex3=(ary) =>

{ 
    return ary.map(x=> capitalize(x));
}

console.log(ex3(["blue","black","green"]))

let ex4=(array) =>{
    
    return array.filter(number=> number< 20);
}

console.log(ex4([5,55,12,50,1]))
   

const ex5= (array)=>{
 let sum =  array.reduce( (x, y) =>{return x + y;})
console.log(sum)
    let product = array.reduce( (x, y)=> { return x * y;})
    console.log(product)}


ex5([5,21,1,4])

class  car {
    constructor(model, year) {
    this.model = model;
    this.year = year;
    }
     model(){
        return this.model;
    }
    year(){
        return this.year
    }
     details() { return this.model+"-"+this.year; }
   
    }


    class Sedan extends car {
    constructor(model,year,balance) {

        super(model,year); 

        this.balance= balance;
       
        }

        info() {

        return this.details()+ "has a balance of "+this.balance;
        }
    }

const car1 = new car('Audi R8',2015)

const sedan1= new Sedan('Honda',2018,30000);
console.log(sedan1.info())
console.log(car1.details())