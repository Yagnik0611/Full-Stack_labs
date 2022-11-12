import styled from "styled-components";
 const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 40px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin: 10px;
 }
 .select{
  position: relative;
  width: 200px;
  height: 40px;

  border: none;
  text-transform: capitalize;
  color: black;
  background: white;
  text-align: left;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;
}

 
 .div{
  width: 700px;
  margin: auto;
  margin-top: 15px;
  border: 3px solid #4287f5;
  text-align: left;
 }
 h2 {
 margin : 15px;
  
  color: #4287f5;
}
 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
   
`;

export default Styles