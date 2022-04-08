import React,{useState} from 'react'
import { Typography,Button,TextField,Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
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
let dispatch =useDispatch();
const {name,TotalPositions,PositionsClosed,Status,Assignedto,LastModified}=state;
const handleInputChange =(e) =>{
let {name,value} =e.target;
setState({...state,[name]:value});
}
const handleSubmit =(e)=>{
  e.preventDefault();
  if(!name||!TotalPositions||!PositionsClosed||!Status||!Assignedto||!LastModified){
    setError("please fill the All input fields");
  }else{
    dispatch(addUser(state));
    Navigate("/Requirements")
    setError("")

  }
};

  return (
    <Container>
      <Typography variant='h5'>Add Requirement</Typography>
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
    value={name} 
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
    value={TotalPositions}
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
    value={PositionsClosed}
    onChange={handleInputChange}
    />
    <br/><br/>
    
    
    <TextField 
    id="standard-basic" 
    label="Status" 
    variant="standard" 
    value={Status} 
    name="Status"
    type="text"
    onChange={handleInputChange}
    />
    <br/><br/>
    <TextField 
    id="standard-basic" 
    label="Assigned to" 
    variant="standard" 
    value={Assignedto}  
    name="Assignedto"
    type="text"
    onChange={handleInputChange}
    />
    <br/><br/>
    <TextField 
    id="standard-basic" 
    label="Last Modified" 
    variant="standard" 
    value={LastModified}
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
      Create
    </Button>
    </form>
    </Container>
  )
}

export default AddUser;