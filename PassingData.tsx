// Passing Data to Parent Component
// Review following code snippet and answer questions:
import React, { FC, useReducer } from "react";
export const Parent: FC = () => {
  return (
<div>
      <Child>
        {/* <!-- How to get `open` value here and work with it? --> */}
        {/* <!-- e.g. open ?? <SomeOtherComponent/> --> */}
      </Child>
    </div>
  );
};
const Child: FC = () => {
  const [open, toggleOpen] = useReducer((value) => !value, false);
  return (
    <div>
      <button onClick={toggleOpen}>Toggle</button>
    </div>
  );
// };

// 1) What options do we have to get `open` value in Parent component?
// :-  the solution to this problem can be solved in by the changes shown below

import React, { FC, useReducer,useState } from "react";

export const Parent: FC = () => { 
    
const[ value, setValue  ]=useState(null)

    const getValue = (opp) => {
        setValue(opp)
    };
    return (
      <div>
        <Child getValue={getValue}>
           {console.log(value)}
          {/* <!-- How to get `open` value here and work with it? --> */}
          {/* <!-- e.g. open ?? <SomeOtherComponent/> --> */}
        </Child>
      </div>
    );
  };
  
  const Child = ({ getValue }) => {
    const [open, toggleOpen] = useReducer((value) => !value, false);
    const runFunc = () => {
      toggleOpen();
      getValue(open);
    };
  
    return (
      <div>
        <button onClick={runFunc}>Toggle</button>
      </div>
    );
  };
  

// 2) What benefits and drawbacks of each method?
// :-  but the exact answer to this is by moving the state above
// :-  by means of using context api of react or by redux , mobx etc libraries
// :-  using state libraries adds an extra layer to your app that can be cumbersome for some people to understand sometimes 





