import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {

  const saveToClipboard= async()=>{
    if(navigator.clipboard){
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error(error.message);
      }
    }else{
      toast.error('Clipboard access not available');
    }

  }

  return (
    <article
      className={index > 15 ? "color color-light" : "color"}
      style={{ background: `rgb(${color.rgb})` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};

export default SingleColor;
