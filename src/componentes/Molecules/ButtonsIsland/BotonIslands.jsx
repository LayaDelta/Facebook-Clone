import { Fragment } from "react";
import ButtonIsland from "../../atom/ButtonIslands/ButtonIsland";
import Styles from "./BotonIsland.module.css"



export function BotonIsland() {
    return(
        <Fragment>
            <section className={Styles.Fc_Section}>
                <ButtonIsland Icon="house.svg"/>
                <ButtonIsland Icon="AddFriends.svg"/>
                <ButtonIsland Icon="Friends.svg"/>
            </section>
        </Fragment>
    )
}