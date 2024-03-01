import { Fragment } from "react";
import ButtonIsland from "../../atom/ButtonIslands/ButtonIsland";



export function BotonIsland() {
    return(
        <Fragment>
            <section>
                <ButtonIsland Icon="house.svg"/>
                <ButtonIsland Icon="AddFriends.svg"/>
                <ButtonIsland Icon="Friends.svg"/>
            </section>
        </Fragment>
    )
}