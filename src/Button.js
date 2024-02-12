function Button(props) {
    return (
        <button style={props.color === 'red' ? {backgroundColor: "red"} : {backgroundColor:'blue'}}>
            {props.text}

        </button>
    )
}
export default Button;