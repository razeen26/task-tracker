// import PropTypes from 'prop-types'

function Button({ color, text ,onClickH}) {
    return (
        <button onClick={onClickH}  className='btn' style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color : "steelblue"
}

// Button.PropTypes = {
//     text : PropTypes.string,
//     color : PropTypes.string,
// }

export default Button


// parents
// query parents
// id
// params
// routings in reactjs
