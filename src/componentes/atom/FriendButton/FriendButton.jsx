import { Fragment } from "react";
import Styles from './FriendBUtton.module.css'
export function FriendButton(){
    return(
        <Fragment>
            <button className={Styles.Fc_FriendButton} >
                Buscar Amigos
            </button>
        </Fragment>
    )
}