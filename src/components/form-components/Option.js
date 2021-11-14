import PropTypes from "prop-types"
const Option = (props) => {
    const clickHandle = () => {
        props.onClick(props.value)
    }
    return (
        <span onClick={clickHandle}>
            {props.children}
        </span>
    )
}

Option.propTypes={
    value: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}
export default Option