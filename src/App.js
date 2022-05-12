import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Blog from "./Component/Pages/Blog";
import Home from "./Component/Pages/Home";
import Error from "./Component/Error";
import { Routes, Route } from "react-router-dom";
import Layout from "./Component";
import SinglePost from "./Component/SinglePost";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<SinglePost />} />
        <Route path="*"   element={<Error/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
