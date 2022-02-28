import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./button"

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();
    return (
        <div className="header">
            <h5> {title} </h5>
            {location.pathname === "/" && <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Cancel' : 'Add New Task'}
                onClick={onAdd} />}
        </div>
    )
}

Header.defaultProps = {
    title: `¡Hello! The Awesome Task Tracker Here!`,
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header