import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { persons } from "./DateApi";
import { DatesToday } from "./components/DatesToday";
import { Rectangle } from "./components/Rectangle";
import { ButtonsData } from "./components/ButtonsData";


function App() {
 
  // <DateApi/> you can't do this cause it's not a component

  const [date, setDate] = useState(persons);

  const deleteAll = () => {
    setDate([]);
  };

  const viewAll = () => {

    setDate(persons);
  }


  // =============== find no (ZERO) dates when I first open ==============


 useEffect ( () => {

setDate([])
 } , [])

//  =============== find my dates when I first open =================
// useEffect(() => {

  // ===== This code will run when the component mounts and whenever the `persons` state variable changes
  // setDate(date);
// }, []); //======== The `persons` state variable is included in the dependency array


  return (
    <div className="body">

      <Container>
       
      <DatesToday date={date}/>

        <Rectangle date={date}/>


        <ButtonsData viewAll={viewAll} deleteAll={deleteAll} />


       
      </Container>
    </div>
  );
}

export default App;