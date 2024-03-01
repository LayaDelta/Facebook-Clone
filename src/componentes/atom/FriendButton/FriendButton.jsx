import { Fragment } from "react";
import Styles from './FriendButton.module.css'
export function FriendButton(){
    return(
        <Fragment>
            <button className={Styles.Fc_FriendButton} >
                Buscar Amigos
            </button>
        </Fragment>
    )
}