import "../styles/headerStyles.css";
import DecoratorImage from "./DecoratorImage.jsx";

const Header = () => {
    return (
        <header>
            <div className="header ballet">
                <DecoratorImage />
                <h1>My Family Calender</h1>
                <DecoratorImage />
            </div>
        </header>
    );
};

export default Header;
