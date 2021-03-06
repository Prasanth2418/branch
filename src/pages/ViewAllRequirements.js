import React, { useEffect,useState } from "react";
import { styled,Table,TableBody,TableContainer,TableCell,tableCellClasses,TableHead,TableRow,Paper,Button,Stack, Container,Grid,Typography,IconButton,InputBase,TableSortLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {  loadUsers, sortUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import Filter from "./FilterRequirement";






const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const Home = () => {
  let dispatch = useDispatch();
  let navigate= useNavigate();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers(0,4,0));
  },[]);

  // const handleDelete = (id) => {
  //   if(window.confirm("Are you sure you wanted to delete the user?")){
  //     dispatch(deleteUser(id));
  //   }
  // };
 
  const [search,setSearch]=useState("")
  const handleSort =(value) =>{
    dispatch(sortUser(value))
  }
  return (
     <Container>
    <div>
      <Grid >
        <Typography variant="h4" sx={{position:"absolute",top:130}}>
          Requirements
        </Typography>
        <Typography variant="p" sx={{position:"absolute",top:170}}>
        Track & manage your Requirements here.
        </Typography>
        </Grid>
      <div>
      
      <Button color="primary" variant="contained"  
      sx={{marginTop:20,display:"block",marginLeft:"auto",textAlign:"center",textTransform:"capitalize",fontSize:"15px"}}
       onClick={() => navigate("/addrequirement")}>
         + New Requirement
      </Button>
      
      </div>
      <br/>
       {<Filter/>}
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'right', width: 350,border:1,float:"right"}}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search "
        defaultValue={search}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearch(e.target.value)}
      />
      </Paper>
      <br/>   <br/> 
      
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
             
             <TableSortLabel 
             direction='desc'
             active={true}
             onClick={()=>handleSort("name")}> <StyledTableCell >Requirements</StyledTableCell></TableSortLabel>
              <StyledTableCell align="center" >Total positions</StyledTableCell>
              <StyledTableCell align="center">Positions closed</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Assigned to</StyledTableCell>
              <TableSortLabel 
              direction='desc'
              active={true}
             onClick={()=>handleSort("LastModified")}> <StyledTableCell align="center">Last Modified</StyledTableCell>.</TableSortLabel>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.filter(user =>user.name.toLowerCase().includes(search.toLowerCase()))
            .map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name} <br/> {user.No}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.TotalPositions}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.PositionsClosed}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.Status}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.Assignedto}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.LastModified}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Stack direction="row" spacing={1} >
                      <Button sx={{color:'black'}}
                      onClick={() => navigate(`/editrequirement/${user.id}`)}
                      >
                      <EditIcon/>
                      </Button>
                      
                    </Stack>
                    
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <>
      
        </>
      </TableContainer>
    </div>
     </Container>

  );
};

export default Home;
