import classes from './ErrorModal.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button';

const ErrorModal =(props)=>{
    return(
        <>
            <div className={classes.backdrop}></div>
            <Card extraClass={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onModalDismiss}>OK</Button>
                </footer>
            </Card>
        </>
    );
}

export default ErrorModal;