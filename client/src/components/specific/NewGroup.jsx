import React, { useState } from 'react'
import { Dialog, DialogTitle, InputAdornment, TextField,Stack,Input, List, ListItem, ListItemText, Typography, Button,Avatar } from '@mui/material'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'


const NewGroup = () => {
 
  const groupName= useInputValidation("lol")
  const submitHandler=()=>{}
  const [members,setMembers]= useState(sampleUsers);
  const [selectedMembers,setSelectedMembers]=useState([]);
  const selectMemberHandler=(id)=>{
    setSelectedMembers((prev)=>prev.includes(id)? prev.filter((currElement)=>currElement !==id):[...prev,id])
    
    console.log(selectedMembers);

  };
  const closeHandler=()=>{}
  return (
    <Dialog open onClose={closeHandler}>
    <Stack p={{xs:"2rem",sm:"3rem"}} width={"25rem"} spacing="2rem">
      <DialogTitle textAlign={"center"} variant="h4">NewGroup</DialogTitle>
      <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
      <Typography variant='body1' >Members</Typography>

      <Stack>
      {
   members.map((i)=>(
       <UserItem
       user={i}
       key={i._id}
       handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}
       />
    ))
}
</Stack>
<Stack direction={"row"} justifyContent={"space-evenly"}>
  <Button variant="text" color='error'>Cancel</Button>
  <Button variant='contained' onClick={submitHandler}> Create </Button>
</Stack>
    </Stack>
  </Dialog>  
  )
}

export default NewGroup
