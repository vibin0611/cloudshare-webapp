// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Dashboard from "./pages/Dashboard";
// import MyFiles from "./pages/MyFiles";
// import Transactions from "./pages/Transactions";
// import Subsrciption from "./pages/Subsrciption";
// import Upload from "./pages/Upload";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Landing />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/upload" element={<Upload />} />
//         <Route path="/myfiles" element={<MyFiles />} />
//         <Route path="/transactions" element={<Transactions />} />
//         <Route path="/subscription" element={<Subsrciption />} />

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import Landing from "./pages/Landing";

function App() {
  return <Landing />;
}

export default App;