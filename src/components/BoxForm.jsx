import React, { useState } from 'react'

const BoxForm = (props) => {
   const [boxColor, setBoxColor] = useState("");

   const createBox = (e) => {
      e.preventDefault();
      props.onNewBox( boxColor )
      console.log(boxColor);
      setBoxColor("");
   }

   return (
      <div className="container">
         <div className="col-4 mx-auto my-4">
            <form onSubmit={ createBox }>
               <div className="input-group mb-3">
                  <span className="input-group-text">Color:</span>
                  <input type="text" name="boxColor" id="boxColor" className="form-control" onChange={ (e) => setBoxColor(e.target.value) } value={ boxColor } />
                  <input type="submit" value="Add" className="btn btn-primary" />
               </div>
            </form>
         </div>
      </div>
   )
}

export default BoxForm