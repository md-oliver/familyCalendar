import { useState } from "react";
import "../styles/modalStyles.css";

const Modal = (props) => {
    // const [active, setActive] = useState(false);

    return (
        <>
            <div onClick={props.onClick} className="overlay"></div>
            <div className="modal">
                <h4>{props.title}</h4>
                {props.children}
            </div>
        </>
    );
};

export default Modal;
