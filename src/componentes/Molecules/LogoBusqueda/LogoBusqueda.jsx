import { Fragment } from "react";
import { Logo } from "../../atom/Logo/Logo";
import { Screach } from "../../atom/Screach/Screach";
import Styles from "./LogoBusqueda.module.css"

export function LogoBusqueda() {
    return(
        <Fragment>
            <section className={Styles.Fc_BusquedaLogo}>
                <Logo/>
                <Screach/>
            </section>
        </Fragment>
    )
}