 import React,{lazy,Suspense} from 'react';
 import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';
 
//  import Login from './pages/Login';
//  import Chat from './pages/Chat';
//  import Home from './pages/Home';
//  import Group from './pages/Group'
 
const Home = lazy(
                    ()=> import("./pages/Home"));
const Login = lazy(
()=> import("./pages/Login"));
const Chat = lazy(
                  ()=> import("./pages/Chat"));
const Group = lazy(
                ()=> import("./pages/Group"));    
const NotFound = lazy(()=> import("./pages/NotFound"));  

const AdminLogin=lazy(()=>import("./pages/admin/AdminLogin"))
const Dashboard=lazy(()=>import("./pages/admin/Dashboard"))

const UserManagement=lazy(()=>import("./pages/admin/UserManagement"))
const ChatManagement=lazy(()=>import("./pages/admin/ChatManagement"))
const MessageManagement=lazy(()=>import("./pages/admin/MessageManagement"))
                let user = true;                 
 
 const App = () => {
   return (
      <Router>
        <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/chat/:chatId" element={<Chat/>}/>
          <Route path="/groups" element={<Group />}/>
          </Route>
        
        <Route path= "/login" element={<ProtectRoute user ={!user} redirect="/">
          <Login/>
          </ProtectRoute>
        }
        />
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path= "/admin/dashboard" element={<Dashboard/>}/>

        <Route path="/admin/users" element={<UserManagement/>}/>
        <Route path="/admin/chats" element={<ChatManagement/>}/>
        <Route path="/admin/messages" element={<MessageManagement/>}/>
        
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
        </Router>
         
   );
 };

 
 export default App;
 