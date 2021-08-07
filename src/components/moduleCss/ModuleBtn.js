import styles from './moduleBtn.module.css'

const ModuleBtn = ({btnClass, btnName}) => {
    console.log(btnClass)
    return (
        <div className={styles.main}>
            <button className={styles[btnClass]}> {btnName} </button>
        </div>
    )
}

export default ModuleBtn;