import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Stpes.css";

const Stpes = ({ currentStep }) => {
  return (
    <div className="stpes">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação:</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação:</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio:</p>
      </div>
    </div>
  );
};

export default Stpes;
