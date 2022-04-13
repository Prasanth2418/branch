import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewAllRequirements from "./pages/ViewAllRequirements";
import AddRequirement from "./pages/AddRequirement";
import EditRequirement from "./pages/EditRequirement/EditRequirement";
import SiderBar from "./pages/SiderBar";
import CandidateDetails from "./pages/EditRequirement/CandidateDetails";
import AdditionalDetails from "./pages/EditRequirement/AdditionalDetails";

function App() {
  return (
    <div className="App">
      <SiderBar />
      <Routes>
        <Route exact path="/" element />
        <Route exact path="/Requirements" element={<ViewAllRequirements />} />
        <Route exact path="/addrequirement" element={<AddRequirement />} />
        <Route
          exact
          path="/editrequirement/:id"
          element={<EditRequirement />}
        />
        <Route
          exact
          path="/CandidateDetails/:id"
          element={<CandidateDetails />}
        />
        <Route
          exact
          path="/AdditionalDetails/:id"
          element={<AdditionalDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
