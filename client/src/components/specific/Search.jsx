import React from 'react'
import { Dialog, DialogTitle, InputAdornment, TextField,Stack,Input, List, ListItem, ListItemText } from '@mui/material'
import {Search as SearchIcon} from "@mui/icons-material"
import { useInputValidation } from '6pp'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../../constants/sampleData'
import { useState } from 'react'

const users=[1,2,3,]
const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const [users, setUsers]=useState(sampleUsers);
  const addFriendHandler=(id)=>
  {
    console.log(id);
  }
  return <Dialog open>
    <Stack p={"2rem"} direction={"column"} width={"25rem"}>
      <DialogTitle textAlign={"center"}>Find People</DialogTitle>
      <TextField
      label=""
      value={Search.value}
      onChange={Search.changeHandler}
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment:(
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        )
      }}
      />
      <List>
{
    users.map((i)=>(
       <UserItem
       user={i}
       kry={i._id}
       handler={addFriendHandler}
       handlerIsLoading={isLoadingSendFriendRequest}/>
    ))
}
      </List>
    </Stack>
  </Dialog>  
  
}

export default Search
