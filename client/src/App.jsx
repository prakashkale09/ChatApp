 import React,{lazy} from 'react';
 import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
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
                let user = true;                  
 
 const App = () => {
   return (
      <Router>
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
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Router>
         
   );
 };

 
 export default App;
 