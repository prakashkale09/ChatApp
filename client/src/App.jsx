 import React,{lazy} from 'react';
 import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
 
 const App = () => {
   return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
       
        <Route path="/Chat" element={<Chat/>}/>
        
        <Route path="/group" element={<Group />}/>
        <Route path= "/login" element={<Login />}/>
        </Routes>
        </Router>
         
   );
 };

 
 export default App;
 