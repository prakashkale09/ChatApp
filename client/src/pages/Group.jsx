import { KeyboardBackspace as KeyboardBackspaceIcon,Menu as MenuIcon } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, Stack, Tooltip } from '@mui/material';
import React, { memo, useState } from 'react'
import { matBlack } from '../constants/color';
import {useNavigate} from "react-router-dom"
import {Link} from "../components/styles/StyledComponents"
import AvatarCard from '../components/shared/AvatarCard';
import {sampleChats} from '../constants/sampleData'

const Group=()=> {
     const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
     const navigate= useNavigate();
     const navigateBack=()=>{
          navigate("/");
     };

     const handleMobile=()=>{
          setIsMobileMenuOpen((prev)=>!prev);
     };

     const handleMobileClose=()=>setIsMobileMenuOpen(false);
     const IconBtns=(
     <>
     <Box  sx={{
          
               xs:"block",
               sm:"none",
               position:"fixed",
               right:"1rem",
               top:"1rem"
          
     }}
     >
     <IconButton onClick={handleMobile} >
          <MenuIcon/>
     </IconButton>
     </Box>




     <Tooltip title="back">
          <IconButton sx={{
               position:"absolute",
               top:"2rem",
               left:"2rem",
               bgcolor:matBlack,
               color:"white",
               ":hover":{
                    bgcolor:"rgba(0,0,0,0.7)",
               }

          }}
             onClick={navigateBack}
             >
               <KeyboardBackspaceIcon/>
          </IconButton>
          </Tooltip></>
     )
     return (
          <Grid container height ={"100vh"}>
               <Grid item
               sx={{
                    display:{
                         xs:"none",
                         sm:"block"
                    },
               }}
               sm={4}
               bgcolor={"bisque"}>
                     <GroupsList myGroups={sampleChats}/>

               </Grid>
               <Grid item xs={12} sm={8} sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    position:"relative",padding:"1rem 3rem",
               }}>
                    {IconBtns}
               </Grid>
               <Drawer sx={{
                    
                         xs:"block",
                         sm:"none",
                    
               }} open={isMobileMenuOpen} onClose={handleMobileClose}>
                   <GroupsList w={"50vw"}/> 
               </Drawer>
          </Grid>
     );
};

  const GroupsList = ({w="100%",myGroups=[],chatId})=>
  (
     <Stack>
          { myGroups.length>0?(myGroups.map((group)=><GroupListItem group={group} chatId={chatId} key={group._id}/>)

               ):( <typography textAlign={"center"}padding="1rem">No groups</typography>)}
     </Stack>
  );
    const GroupListItem = memo(({group,chatId})=>{
     const{name,avatar,_id}=group

     return <Link>
     <Stack>
          <AvatarCard avatar={avatar}/>
          <Typography>{name}</Typography>
          </Stack>
          </Link>

    })

export default Group;
