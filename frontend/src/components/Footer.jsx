import { useState } from "react";
import "../styles/footerStyles.css";

const Footer = (props) => {
    return (
        <footer>
            <div className="footer">
                <button onClick={props.onClick}>Login</button>
                <p className="signature">
                    by: Marc Damon Oliver ©{new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
