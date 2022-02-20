import PropTypes from 'prop-types'

const Button = ({ color, text }) => {

    const onClickFunction = (e) => {
        console.log("Button clicked!");
        console.log(e);
    }

    return <button className="btn"
                onClick={onClickFunction}
                style={{ backgroundColor: color }}>
                {text}
            </button>
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button