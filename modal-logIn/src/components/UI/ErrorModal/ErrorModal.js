import Card from '../Card';
import Button from '../Button';
import React from 'react';
import ReactDom from 'react-dom';
import classes from './ErrorModal.module.css';
const Backdrop = (props) => {
    return  (<div className={classes.backdrop} onClick={props.onClose}/>);
}
// using ReactDom and portal to overlay the modal on top of the html root and body
const Overlay = (props) => {
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onClose}>Okay</Button>
        </footer>
    </Card>);
}
const ErrorModal = (props) => {
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Overlay title={props.title} message={props.message} onClose={props.onClose}/>,
            document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export  default ErrorModal;
