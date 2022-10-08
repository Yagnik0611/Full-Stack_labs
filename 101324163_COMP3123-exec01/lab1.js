
// Excercise 1
function capitalize(string="the quick brown fox"){
   
    let array= string.split(" ")
    console.log(array)
    var newString=""
    for (let word in array){

        newString += array[word].charAt(0).toUpperCase()+ array[word].slice(1)+" "
        
    }
    return newString

}

// Excercise 2
  
 function max(){
    const array = Array.prototype.slice.call(arguments);
  
    return Math.max(...array);
    
}
// Excercise 3
function moveCharacter(string){
   
let length = string.length
 if (length>=3){
            let lastChar= string.slice(0,length-3)

            let firstChar= string.slice(length-3,length)

            return result = firstChar.concat(lastChar)
            

 }
 else{
     return string
 }


}

// Excercise 4
function angle_Type(angle){
   
    let result=""
     if (angle >=0 && angle<90){ result= "Acute Angle"}
     else if ( angle==90){ result= "Right Angle"}
     else if(angle>=90 && angle<180){ result= "Obtuse Angle"}
     else if( angle==180){
        result= "Straigh Angle"
     }
     return result

}

console.log(capitalize())

console.log(max(10,50,60))

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

 

console.log(moveCharacter("Javascript"));

