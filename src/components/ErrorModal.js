import React from 'react'
import ReactDOM from 'react-dom'
import classes from './ErrorModal.module.css'

function Backdrop() {
    return <div className={classes.backdrop} />
}
function ModalOverlay(props) {
    return <div className={classes.error_container}>
        <header className={classes.title_container}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            {props.message}
        </div>
        <footer className={classes.actions}>
            <button onClick={props.onOkayClick}>Okay</button>
        </footer>
    </div>
}

function ErrorModal(props) {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop />, document.querySelector('body'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onOkayClick={props.onOkayClick} />, document.querySelector('body'))}
    </React.Fragment>

}

export default ErrorModal