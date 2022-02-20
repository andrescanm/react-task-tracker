import PropTypes from "prop-types"

const Header = ( {title} ) => {
  return (
      <div className="header">
          <h5> {title} </h5>
          <button className="btn">Add Task</button>
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