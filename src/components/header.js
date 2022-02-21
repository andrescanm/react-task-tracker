import PropTypes from "prop-types"
import Button from "./button"

const Header = ( {title} ) => {

    const onClickButtonAddTask = (e) => {
        console.log("Click", e);
    }
  
    return (
      <div className="header">
          <h5> {title} </h5>
          <Button color='green' text='Add Task' onClick={onClickButtonAddTask} />
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