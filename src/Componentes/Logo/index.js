
import "./estilo.css"
import logo from "../../imagens/logo_grupo_impacta_azul-01.png"

function Logo(){
return (

    <div className="logo">
    <img src={logo} width={250} alt='logo' className="logo-img"></img>
    <p> MaxPix </p>
     </div>
)
}
export default Logo