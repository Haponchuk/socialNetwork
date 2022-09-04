import s from './ErrorPage.module.css'

const ErrorPage = (props) => {
    return (
        <div className={s.error}>
            <h1>ERROR! PAGE NOT FOUND</h1>
        </div>
    );
}

export default ErrorPage;