import PropTypes from "prop-types"
import Button from "./button"

const Header = ( {title} ) => {
  return (
      <div className="header">
          <h5> {title} </h5>
          <Button color='green' text='Add Task' />
      </div>
  )
}

Header.defaultProps = {
    title: `¡Hello! The Awesome Task Tracker Here!`,
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header