import { useState } from "react";
import Contact from "../Contact/Contact";
import Modal from "../Modal/Modal";
import MyName from "../MyName/MyName";
import Presentation from "../Presentation/Presentation";
import Quote from "../Quote/Quote";

import "./App.scss";
import FunFact from "../FunFact/FunFact";
import IdCard from "../IdCard/IdCard";
import ProjectsContainer from "../ProjectsContainer/ProjetsContainers";

function App() {
  const [modalIsHidden, setModalIsHidden] = useState(true);
  return (
    <>
      <Modal isHidden={modalIsHidden} setIsHidden={setModalIsHidden} />
      <MyName setModalIsHidden={setModalIsHidden} />

      <nav>
        <Presentation />

        <FunFact />
        <IdCard />
        <Contact />
      </nav>
      <ProjectsContainer />

      <Quote />
    </>
  );
}

export default App;
