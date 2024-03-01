import Styles from "./BotonFc.module.css"
export function BotonFc({Icon, Text}) {
  const Img= `../src/assets/Buttons/${Icon}`
  return (
    <button className={Styles.Fc_Buttons} >
        <img className={Styles.Fc_Buttons_Img} src={Img} alt="" />
    </button>
  )
}

export default BotonFc
