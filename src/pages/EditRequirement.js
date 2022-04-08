import React,{useState,useEffect} from 'react'
import { Typography,Button,TextField,Container } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import {  getSingleUser, updateUser } from '../redux/actions';
import { useNavigate,useParams } from 'react-router-dom';



const EditUser = () => {
const [state,setState]=useState({
  name:"",
  TotalPositions:"",
  PositionsClosed:"",
  Status:"",
  Assignedto:"",
  LastModified:"",
  
});
let Navigate= useNavigate();
const [error,setError] =useState("");
let {id} =useParams();
const {user}=useSelector((state)=>state.data);
let dispatch =useDispatch();
const {name,TotalPositions,PositionsClosed,Status,Assignedto,LastModified}=state;
useEffect(()=>{
    dispatch(getSingleUser(id))

},[]);
useEffect(() =>{
    if(user){
        setState({...user});
    }
},[user]);
const handleInputChange =(e) =>{
  let {name,value} =e.target;
  setState({...state,[name]:value});
}
const handleSubmit =(e)=>{
  e.preventDefault();
  if(!name||!TotalPositions||!PositionsClosed||!Status||!Assignedto||!LastModified){
    setError("please fill the All input fields");
  }else{
    dispatch(updateUser(state,id));
    Navigate("/Requirements")
    setError("")

  }
};

  return (
    <Container>
      <Typography variant='h5'>Edit Requirement</Typography>
      {error && <h3  style={{color:"red"}}>{error}</h3>}
    <form
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
        alignItems:"center"
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
    <TextField 
    id="standard-basic" 
    label="Requirement" 
    variant="standard" 
    value={name || ""} 
    type="text" 
    name="name"
    onChange={handleInputChange}
    />
    <br/><br/>
    <TextField 
    id="standard-basic" 
    label="Total Positions" 
    variant="standard" 
    type="number" 
    value={TotalPositions || ""}
    name="TotalPositions"
    onChange={handleInputChange}
    />
    <br/><br/>
    <TextField 
    id="standard-basic" 
    label="Positions Closed" 
    variant="standard" 
    type="number"
    name='PositionsClosed' 
    value={PositionsClosed || ""}
    onChange={handleInputChange}
    />
    <br/><br/>
   
    <TextField 
    id="standard-basic" 
    label="Status" 
    variant="standard" 
    value={Status ||""} 
    name="Status"
    type="text"
    onChange={handleInputChange}
    />
    <br/><br/>
    <TextField 
    id="standard-basic" 
    label="Assigned to" 
    variant="standard" 
    value={Assignedto || ""}  
    name="Assignedto"
    type="text"
    onChange={handleInputChange}
    />
    <br/><br/>
    <TextField 
    id="standard-basic" 
    label="Last Modified" 
    variant="standard" 
    value={LastModified ||""}
    name="LastModified" 
    type="text"
    onChange={handleInputChange}
    />
    <br/><br/>
    <Button 
    variant='contained' 
    color='primary' 
    type='submit'
    >
      Update
    </Button>
    </form>
    </Container>
  )
}

export default EditUser;