import Styles from "./Logo.module.css"

export function Logo() {
    return(
        <div className={Styles.Fc_Logo_div}>
        <img className={Styles.Fc_Logo} src="./src/assets/Buttons/Fc.png" alt="" />
        </div>
    )
}