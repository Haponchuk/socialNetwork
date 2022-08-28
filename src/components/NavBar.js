import classes from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={classes.navBar}>
            <div className={classes.item}>
                <a href="#s"> My Profile </a>
            </div>
            <div className={classes.item}>
                <a href="#s"> Friends </a>
            </div>
            <div className={classes.item}>
                <a href="#s">  Messages </a>
            </div>
            <div className={classes.item}>
                <a href="#s"> Feed </a>
            </div>
            <div className={classes.item}>
                <a href="#s"> Community </a>
            </div>
            <div className={classes.item}>
                <a href="#s"> Settings </a>
            </div>
        </nav>
    );
}
export default NavBar;