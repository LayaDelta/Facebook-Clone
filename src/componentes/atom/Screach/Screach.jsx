import { Fragment, useEffect, useRef } from "react";
import Styles from "./Screach.module.css"
import { useState } from "react";

export function Screach() {
    const [clase, setClase] = useState( Styles.Fc_Nav);
    const ref = useRef(null);
    const [claseBotton, setClaseBotton] = useState("Screach.svg");
    const refButton = useRef(null)
    const [claseLabel, setClaseLabel] = useState(Styles.Fc_label);
    const refLabel = useRef(null)
  

    const handleClick = () => {
        if (clase === Styles.Fc_Nav) {
            setClase(Styles.Fc_Nav_Clik);
            setClaseBotton("Arrow.svg");
           
          } else {
            setClase(Styles.Fc_Input);
            setClaseBotton("Screach.svg")
           
          }
    };


    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setClase(Styles.Fc_Nav);
          setClaseBotton("Screach.svg")
          
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
      const ImgButton = `../src/assets/Buttons/${claseBotton}`
      

return(
    <Fragment>
        <nav className={clase} ref={ref}>
        <button className={Styles.Fc_Button}>
            <img className={Styles.Fc_Button_Img} src={ImgButton} alt="" />
        </button>
        <input className={Styles.Fc_Input} onClick={handleClick} type="text" placeholder="Buscar en Facebook..." />
        </nav>
    </Fragment>

)
}