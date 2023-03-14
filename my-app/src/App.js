import logo from './logo.svg';
import './App.css';
import React from 'react'
import Blogs from './Components/Blogs.js';

import {Routes,Route} from 'react-router-dom';
import Blog1 from './Pages/blog1.js';
import Blog2 from './Pages/blog2.js';
import Blog3 from './Pages/blog3.js';
import Blog4 from './Pages/blog4.js';
import Blog5 from './Pages/blog5.js';
import Blog6 from './Pages/blog6.js';

function App() {
  return (
    <>    
    <React.Fragment>
    <Routes>
    
      
      <Route path="/" element={<Blogs/>}/>
      <Route path="/blog1" element={<Blog1/>}/>
      <Route path="/blog2" element={<Blog2/>}/>
      <Route path="/blog3" element={<Blog3/>}/>
      <Route path="/blog4" element={<Blog4/>}/>
      <Route path="/blog5" element={<Blog5/>}/>
      <Route path="/blog6" element={<Blog6/>}/>
    
     
     </Routes>
     </React.Fragment>
     </>

  );
}

export default App;
