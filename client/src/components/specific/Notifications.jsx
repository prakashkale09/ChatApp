import React, { memo } from 'react'
import { Dialog, DialogTitle, InputAdornment, TextField,Stack,Input, List, ListItem, ListItemText, Typography, Button,Avatar } from '@mui/material'
import  {sampleNotifications}  from '../../constants/sampleData';

const Notifications = () => {
  const friendRequestHadler=({_id,accept})=>
  {

  };
  return (
   <Dialog open>
    <Stack p={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
      <DialogTitle>Notifications</DialogTitle>
      {
        sampleNotifications.length>0 ?(sampleNotifications.map((i)=><NotificationItem sender={i.sender} _id={i._id} handler={friendRequestHadler} key={i._id}/>)):(<Typography textAlign={"center"}>No Notifications</Typography>
      )}
    </Stack>
  </Dialog>  
  )
}

const NotificationItem= memo(({sender,_id,handler})=>
{

  const {name,avatar} = sender;
  return(
    <ListItem>
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar src={avatar}/>
        <Typography
        variant="body1"
        sx={{
            flexGlow:1,
            display:"-webkit-box",
            WebkitLineClamp:1,
            WebKitBoxOrient:"vertical",
            overflow:"hidden",
            textOverflow:"ellipsis",
            width:"100%",
        }}>
          {`${name} sent you a friend request.`}
        </Typography>
         <Stack direction={{
          xs:"column",
         }}>
          <Button onClick={()=>handler({_id,accept:true})}>
            Accept
          </Button>
        
        <Button color='error' onClick={()=>handler({_id,accept:false})}>Reject</Button>
         </Stack>
    </Stack>
 </ListItem>
)
  
})

export default Notifications
