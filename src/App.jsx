import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const[colors, setColors]= useState(new Values('#6653c6').all(5));

  const addColor=(color)=>{
    try {
      const newColor= new Values(color).all(5);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return <main>
    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer position="top-right" />
  </main>;
};
export default App;
