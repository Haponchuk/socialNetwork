import s from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <div className={s.item}>
                <a href="/profile"> My Profile </a>
            </div>
            <div className={s.item}>
                <a href="first-project/src/components/NavBar/NavBar#s"> Friends </a>
            </div>
            <div className={s.item}>
                <a href="/messages"> Messages </a>
            </div>
            <div className={s.item}>
                <a href="first-project/src/components/NavBar/NavBar#s"> Feed </a>
            </div>
            <div className={s.item}>
                <a href="first-project/src/components/NavBar/NavBar#s"> Community </a>
            </div>
            <div className={`${s.item} ${s.settings}`}>
                <a href="first-project/src/components/NavBar/NavBar#s"> Settings </a>
            </div>
        </nav>
    );
}
export default NavBar;