function AddInfo(props) {
    return (
        <div>
            <span>Add {props.info}</span>
            <button id={props.category} onClick={props.whenClicked}>+</button>
        </div>
    )
}

export { AddInfo }