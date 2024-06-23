import React, { useState } from 'react';


export default function TextForm(props) {
  const [text, setText] = useState(' ');
 const [isBold,setIsBold] = useState(false);
 const [isItalic,setIsItalic] = useState(false);
 const [alignment,setalignment] = useState('left');
 
 

  const handleUpperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const handleClear = () => {
    let clear = " ";
    setText(clear);
  };

  const handleChanges = (event) => {
    setText(event.target.value); // to set a new value which is equal to our text
  };

  const handelBold = () => {
    setIsBold(!isBold)
  }

const handelItalic = () => {
  setIsItalic(!isItalic);
};

const changeAlignment = (align) => {
  setalignment(align); // Update alignment state
};

  

  const getTextStyle = () => {
    let style = {};
    if (isBold) style.fontWeight = 'bold';
    if (isItalic) style.fontStyle = 'italic';
    style.textAlign = alignment;
    return style;
  };

  return (
    <>
      <div>
        <div className="flex">
          <div className=" items-center justify-between">
            <h1 className=" mb-3 text-sm mt-3  sm:text-xl md:text-2xl lg-3xl text-black font-serif "><b>{props.heading}</b></h1>
            {/* Toolbar */}
            <div className="toolbar mb-2  ">
              <button onClick={handelBold} className="btn hover:bg-green-800 hover:text-white">
              <i className={`fas fa-bold ${isBold ? '' : ''} text-sm`}></i>
              </button>
              <button onClick={handelItalic} className="btn hover:bg-green-800  hover:text-white">
                <i className={`fas fa-italic ${isItalic ? '' : ''} text-sm`}></i>
              </button>
              <button onClick={() => changeAlignment('left')} className={`btn  ${alignment === 'left' ? '' : ''}text-sm  hover:bg-green-800  hover:text-white`}>
                <i className="fas fa-align-left"></i>
              </button>
              <button onClick={() => changeAlignment('center')} className={`btn  ${alignment === 'center' ? '' : ''}text-sm  hover:bg-green-800  hover:text-white`}>
                <i className="fas fa-align-center"></i>
              </button>
              <button onClick={() => changeAlignment('right')} className={`btn  ${alignment === 'right' ? '' : ''}text-sm  hover:bg-green-800  hover:text-white`}>
                <i className="fas fa-align-right"></i>
              </button>
            </div>
            {/* Container */}
            <textarea className="form-control flex w-[250px] border-y-2 border-x-2 border-black sm:w-[400px]  md:w-[600px] lg:w-[700px] xl:w-[800px]  " value={text} onChange={handleChanges}id="TextBox" rows="10" style={getTextStyle()}></textarea>
          </div>
        </div>
        <div className="flex my-3 text-sm">
          <button className="btn text-sm bg-green-800 text-white hover:bg-blue-700" onClick={handleUpperCase}>Convert to UpperCase</button>
          <button className="btn text-sm mx-2 bg-green-800 text-white hover:bg-blue-700" onClick={handleLowerCase}>Convert to LowerCase</button>
          <button className="btn text-sm bg-green-800 text-white hover:bg-blue-700" onClick={handleClear}>Clear</button>
        </div>
      </div>
      <div>
        <h1 className=' my-0 text-sm text-black xs:my-0 font-serif sm:text-lg md:text-xl'><b>Your Text Summary</b></h1>
        <h2>Words: {text.split(' ').filter((word => word)).length} Characters: {text.length}</h2>
      </div>
    </>
  );
}
