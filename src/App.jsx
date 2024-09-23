import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Rootcomponent from "./Components/Rootcomponent";
import Homepage from "./Pages/Home";
import About from "./Pages/About"
import Academics from "./Pages/Academics";
import StudentLife from "./Pages/StudentLife";
import Admission from "./Pages/Admission";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Rootcomponent />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/Academics" element={<Academics/>}/>
        <Route path="/Admission" element={<Admission/>}/>
        <Route path="/studentlife" element={<StudentLife/>}/>
      </Route>,
    ])
  );
  return <RouterProvider router={router}/>;
};

export default App;
