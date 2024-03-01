import Styles from "./ButtonIsland.module.css"
export function ButtonIsland({Icon}) {
  const Img= `../src/assets/Buttons/${Icon}`
  return (
    <button className={Styles.Fc_ButtonIsland} >
        <img className={Styles.Fc_ButtonIsland_Img} src={Img} alt="" />
    </button>
  )
}

export default ButtonIsland