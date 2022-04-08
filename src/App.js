
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewAllRequirements from './pages/ViewAllRequirements';
import AddRequirement  from './pages/AddRequirement';
import EditRequirement from './pages/EditRequirement';
import SiderBar from './pages/SiderBar';

function App() {
  return (
    <div className="App">
      <SiderBar/>
      <Routes>
        <Route exact path="/Requirements" element ={<ViewAllRequirements/>} />
        <Route exact path="/addrequirement" element ={<AddRequirement/>} />
        <Route exact path="/editrequirement/:id" element ={<EditRequirement/>} />
      </Routes>
    </div>
  );
}

export default App;
