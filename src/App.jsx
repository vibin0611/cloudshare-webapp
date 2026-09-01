import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Upload from "./pages/Upload";
import MyFiles from "./pages/MyFiles";
import Transactions from "./pages/Transactions";
import Subsrciption from "./pages/Subsrciption";

const App=()=>{
  return (
   <BrowserRouter>
       <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/myfiles" element={<MyFiles/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/subscription" element={<Subsrciption/>}/>
       </Routes>
   </BrowserRouter>
  )
}
export default App;