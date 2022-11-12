import React, {Component} from 'react';

import Data from './Data';
const INITIAL_VALUE ={
    email:"",
    name:"",
    address:"",
    address2:"",
    city:"",
    postalcode:""
    ,
    send:false

}



export default class DataEntry extends Component{
    constructor(props){
        super(props)
        this.state={
           ...INITIAL_VALUE
        }
        this.Province =['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory']

       
    }
    onSubmitLogin = (event)=>{
        event.preventDefault()
       
        this.setState({send: true})
      
    }
    clearForm = (event)=>{
        
        event.preventDefault()
      this.setState({...INITIAL_VALUE})
    }
    onValueChanged =(event)=>{
      
        this.setState({[event.target.name]:event.target.value})
        

    }
    render= () =>{
        return(
            <>
            <h1> Data Entry form</h1>
            
            <form> 
                <label>Email</label>
                <input value ={this.state.email}onChange={event=>this.onValueChanged(event)}type="text" name="email" placeholder='Enter Email'/> 
                <label>Name</label>
                <input value ={this.state.name} onChange={event=>this.onValueChanged(event)} type="text" name="name" placeholder='FUll name'/> 
                <label>Address1</label>
                 <input value ={this.state.address} onChange={event=>this.onValueChanged(event)} type="text" name="address" placeholder=' 1234 main sr'/>
                 <label>Address2</label>
                <input value ={this.state.address2} onChange={event=>this.onValueChanged(event)} type="text" name="address2" placeholder='apartment studio,or floor'/> 
                <label>City</label>
                <input value ={this.state.city} onChange={event=>this.onValueChanged(event)} type="text" name="city" placeholder='city'/> 

                <label>Province</label>
  
                <select className="select" onChange={this.onValueChanged} name ="province">
                    {this.Province.map(province =>(
                        <option key={province} value={province}>{province}</option>))}

                </select>
                <label>Postalcode</label>
                <input value ={this.state.postalcode} onChange={event=>this.onValueChanged(event)} type="text" name="postalcode" placeholder='city'/> 

                <input  onClick={this.clearForm} className="submitButton" type="submit" name="btnSubmit" value="reset"/> 
                <input  onClick={this.onSubmitLogin} className="submitButton" type="submit" name="btnSubmit" value="Submit "/> 

             

 </form>
 
 {this.state.send &&
                        <Data 
                        email= {this.state.email} 
                        name= {this.state.name} 
                        address={this.state.address} 
                        address2={this.state.address2} 
                        city={this.state.city} 
                        postalcode={this.state.postalcode} 
                        province = {this.state.province}
                    
                />
            }

 </>
    
        )
        

    }
    }