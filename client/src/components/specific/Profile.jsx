import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react'
import {Face as FaceIcon,AlternateEmail as UserNameIcon} from "@mui/icons-material"
import moment from 'moment';
import {DateRangeIcon as DateIcon} from '@mui/icons-material/DateRange';

const Profile = () => {
  return (
    <div>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
        sx={{
          width:200,
          height:200,
          objectFit:"contain",
          marginBottom:"1rem",
          border:"5px solid white",
        }} />
        <ProfileCard heading={"Bio"} text={"This is my profile"}/>

        <ProfileCard heading={"Username"} text={"prakash09"}  />

        <ProfileCard heading={"Name"} text={"Prakash Martand Kale"} />

        <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} />
        </Stack>
     
    </div>
  );
};

const ProfileCard=({text,Icon,heading})=>(
  <Stack 
  direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  color={"white"}
  textAlign={"center"}>
    {Icon && Icon}
    <Stack>
      <Typography variant = "body1">{text}</Typography>
      <Typography variant = "caption" color={"gray"}>{heading}</Typography>
    </Stack>
  </Stack>
)

 


export default Profile
