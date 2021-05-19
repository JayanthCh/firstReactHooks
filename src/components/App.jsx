// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import data from "../components/Card";
//
// function App() {
//
//   const [myname, setName] = useState(data)
//
//   function clicked() {
//
//     setName([]);
//   }
//
//   function remove(id) {
//
//     const newdata = myname.filter(function(currElement) {
//       return (currElement.id != id)
//     })
//
//     setName(newdata);
//   }
//
//
//
//
//   return (<div className="conatiner">
//     {
//
//       myname.map(function(currElem) {
//         return (<h1 className="first" key={currElem.id}>name:{currElem.name}
//           age:{currElem.age}
//
//           <button className="removebtn" type="submit" onClick={() => remove(currElem.id)}>Remove</button>
//         </h1>)
//       })
//     }
//
//
//     <button className="clcikbtn" type="submit" onClick={clicked}>Click</button>
//
//   </div>)
//
// }
//
// export default App;
//
//









import React,{useState} from "react" ;
import ReactDOM from "react-dom";
import data from "../components/Card";



function App() {

  const [name, setName] = useState(data)

  function clicked() {
    setName([]);
    console.log("clicked");
  }
  function remove(id){
    const newdata = name.filter(function(e){
      return(e.id!=id);  // filter creates a seperate array.. other than the condition. here it creates a new array with other than
                        // the clicked element.
    })
    setName(newdata);
  }


  return (<div className="conatiner">
    {
      name.map(function(currElem) {
        return (<h1 className="first" key={currElem.id}>name: {currElem.name}, age: {currElem.age}
          <button type="submit" className="removebtn" onClick={()=>remove(currElem.id)}>Click</button>

        </h1>)
      })
    }
    <button type="submit" className="clcikbtn" onClick={clicked}>Click</button>

  </div>)
}

export default App;
