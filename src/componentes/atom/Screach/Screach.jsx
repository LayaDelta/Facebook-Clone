import { Fragment } from "react";
import Styles from "./Screach.module.css"
export function Screach() {

return(
    <Fragment>
        <nav className={Styles.Fc_Nav}>
        <button className={Styles.Fc_Button}>
            <img className={Styles.Fc_Button_Img} src="./src/assets/Buttons/Screach.svg" alt="" />
        </button>
        <input className={Styles.Fc_Input} type="text" placeholder="Buscar en Facebook..." />
        </nav>
    </Fragment>

)
}