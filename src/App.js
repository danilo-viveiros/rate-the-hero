import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./screens/Details";
import { NotFound } from "./screens/NotFound";
import { Search } from "./screens/Search";

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/detalhes/:id" element={<Details/>}/>
     <Route path="/" element={<Search/>}/>
     <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
