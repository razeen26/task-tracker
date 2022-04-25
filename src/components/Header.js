import PropTypes from 'prop-types'
import Button from './Button'

function Header({ title ,onAddToggleA,showAddA }) {
    

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddA ? "red" : "green"} text={showAddA ? "Close" : "Add"} onClickH={onAddToggleA}/>
        </header>
    )
}

Header.defaultProps = {
    title : "Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}


// CSS IN JS
// const headingStyle = {
//     color : "green",
//     backgroundColor : "black"
// }

export default Header