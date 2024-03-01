import { ButtonFor } from "../../Molecules/ButtonsFor/ButtonFor";
import { BotonIsland } from "../../Molecules/ButtonsIsland/BotonIslands";
import { LogoBusqueda } from "../../Molecules/LogoBusqueda/LogoBusqueda";
import Styles from "./HeaderFc.module.css"

export function HeaderFc(){
    return(
        <header className={Styles.Fc_Header}>
            <LogoBusqueda/>
            <BotonIsland/>
            <ButtonFor/>
        </header>
    )
}