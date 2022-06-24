import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDom from 'react-dom';

const BackDrop = (props) => {return <div className={classes.backdrop}/>} ;
const Overlay = (props) => {return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children
        }</div>
    </div>
)}
const Modal = (props) => {
const portalElement = document.getElementById("overlays");
    return(
        <Fragment>
            {ReactDom.createPortal(<BackDrop/>, portalElement)}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </Fragment>
    )

}
export default Modal;