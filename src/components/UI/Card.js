import './Card.css';
// Import Card from './Card 
// props.classname is the className from the props using the card compnent.
// props.children are one level nested in the props using the

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
            </div>
    )
}

export default Card;