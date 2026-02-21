import "../styles/cardStyles.css";

const Card = (props) => {
    return (
        <div className="card">
            <h3 className="card-heading">{props.title}</h3>
            {props.children}
        </div>
    );
};

export default Card;
