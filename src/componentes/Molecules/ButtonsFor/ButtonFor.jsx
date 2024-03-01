import { Fragment } from "react";
import BotonFc from "../../atom/Button/BotonFc";
import { FriendButton } from "../../atom/FriendButton/FriendButton";
import Styles from "./ButtonFor.module.css"

export function ButtonFor(){
    return(
        <Fragment>
            <section className={Styles.Fc_ButtonFor} >
            <FriendButton/>
            <BotonFc Icon="Menu.Svg"/>
            <BotonFc Icon="Message.svg"/>
            <BotonFc Icon="Notificate.svg"/>
            <BotonFc Icon="Perfil.Svg"/>
            </section>
        </Fragment>
    )
}