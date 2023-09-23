import PropTypes from 'prop-types';
import "./buttonStyle.css"

function MyButton(props) {
    console.log(props);
    return <button className={props.class}>{props.title}</button>
}

MyButton.propTypes = {
    class: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default MyButton;