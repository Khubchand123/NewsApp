import './App.css';
import { Navbar } from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './component/Sidebar';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <div style={{display:"flex"}}>
          <Sidebar />
          
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general" topic="General"/>}></Route> 
          <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" topic="Business"/>}></Route> 
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" topic="EntertainMent"/>}></Route> 
          <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general" topic="General"/>}></Route> 
          <Route exact path="/health" element={<News key="health"  pageSize={9} country="in" category="health" topic="Health"/>}></Route> 
          <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" topic="Science"/>}></Route> 
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" topic="Sports"/>}></Route> 
          <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" topic="Technology"/>}></Route> 
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
