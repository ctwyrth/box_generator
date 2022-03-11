import React, { useState } from 'react'

const boxes = [];

const Boxes = (props) => {
   console.log(props);
   if (props.newBoxes !== '') {
      boxes.push(props.newBoxes);
   }
   console.log(boxes);
   return (
      <div className="d-flex justify-content-start align-items-center">
         { boxes.map( (item, i) => <div style={{width: 200 + 'px', height: 200 + 'px', backgroundColor: item, margin: 20 + 'px'}} key={ i }></div> )}
      </div>
   )
}

export default Boxes