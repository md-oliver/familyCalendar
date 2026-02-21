import star from "../assets/star.png";
import "../styles/decoratorStyles.css";

const DecoratorImage = () => {
    return (
        <div className="decorator-image">
            <img src={star} alt="decorator image" />
        </div>
    );
};

export default DecoratorImage;
