import Information from "./StuInfo"



var info ={

    course: "Welcome to Fullstack Development - I",
    topic: "React JS Programming Week09 Lab exercise",
    id: "101324163",
    name: "Yagnik Patel",
    college: "George Brown College, Toronto"
}
function Main(){
    return (
        <>
       <Information Information = {info}/>
      
        </>
    )
}
export default Main