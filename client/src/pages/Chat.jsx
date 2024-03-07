import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
 
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { grayColor, orange } from '../constants/color';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
    const user={
      _id:"123",
      name:"Prakash Kale"
    }
     const Chat = ()=>
     {
      const containerRef=useRef(null);
      
        return (
         <>
         <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"}
         bgcolor={grayColor} height={"90%"}
         sx={{
            overflowX:"hidden",
            overflowY:"auto",
         }}>
            {
                sampleMessage.map((i)=>(
                  <MessageComponent key={i._id}message={i} user={user}/>
                ))
            }
         </Stack>

         <form 
               style={{
                  height:"10.5%"
               }}>
                  <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"Center"} position={"relative"}>
                     <IconButton sx={{
                        position:"absolute",
                        left:"1.5rem",
                        rotate:"30deg",
                     }}
                    
                     >
                        <AttachFileIcon/>
                     </IconButton>

                     <InputBox placeholder='Type Message Here'/>

                     <IconButton type="submit"
                     sx={{
                        
                        bgvcolor:orange,
                        color:"white",
                        marginLeft:"1rem",
                        padding:"0.5rem",
                        "&:hover":{
                           bgcolor:"error.dark"
                        }
                     }}>
                        <SendIcon/>
                     </IconButton>
                  </Stack>
               </form>
               <FileMenu />
         </>
        )
     };
     export default AppLayout()(Chat);
