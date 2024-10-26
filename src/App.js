
// import './App.css';
import Header from './Componentes/Header';
import styled from "styled-components"
import Content1 from './Componentes/Content1'
import Content2 from './Componentes/Content2'
import Content3 from './Componentes/Content3';
import DarkVariantExample from './Componentes/carousel'

const AppConteiner = styled.div`
  width: 100%;
  height: auto;
  background-color: #ebe8e6;

  li{
  list-style: none;
  transition: all ease-in-out 0.2s;
  }
  li:hover {
  color: red;
  transition: all ease-in-out 0.2s;
  }
  img {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  }
  
  p {
  text-align: center;
  font-weight: bold;
  }
  .produto {
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 0px 0px 10px 10px;
  background-color: #d1cac5;
  }
  button {
  background-color: red;
  color: white;
  font-weight: bold;
  border: none;
  height: 50px;
  transition: all ease-in-out 0.2s;
  }
  button:hover {
  background-color: #690e17;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  }
  .wallpaper {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  }
  h2 {
  text-align: center;
  }
  footer {
  height: 300px;
  width: 100%;
  background-color: white;
  img {
    height: 100px;
  }
  }
  .span {
  text-align: center !important;
  font-weight: thin !important;
  }
  .elon {
  height: 200px;
  border-radius: 50%;
  width: 200px;
  }
  .star {
  height: 100px;
  width: auto;
  position: relative;
  top: -30px;
  }
  .footerMain {
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin:0 auto;
  }
  .Aval {
  font-weight: 100 !important;
  -webkit-box-shadow: 9px 7px 13px -6px rgba(0,0,0,0.75) !important;
  -moz-box-shadow: 9px 7px 13px -6px rgba(0,0,0,0.75)!important;
  box-shadow: 9px 7px 13px -6px rgba(0,0,0,0.75) !important;
  background-color: white;
  padding: 30px;
  width: 500px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10px;
  }
`

function App() {
  return (
    <AppConteiner>
      <Header />
      <DarkVariantExample></DarkVariantExample>
      <br></br><br></br>
      <h2>Destaques:</h2>
      <Content1 />
      <p className='produto'>Notebook Intel Gamer - 1800R$<button>Comprar!</button></p>
      <Content2></Content2>
      <p className='produto'>Celular Samsung S23 - 3000R$<button>Comprar!</button></p>
      <Content3></Content3>
      <p className='produto'>Air Fryer do seu madruga - 500R$<button>Comprar!</button></p>
      <br></br>
      <div>
        <h2>Clientes Satisfeitos:</h2><br></br>
        <img src='https://sampi.net.br/dir-arquivo-imagem/2016/08/20160802162600_83069133.jpg'></img><br></br>
        <p className='span'>Melhor loja do mundo! Comprarei para todos os meus filhos, netos, bisnetos, e conjugues.</p><br></br><br></br>
        <h2>Avaliações:</h2><br></br>
        <img className='elon' src='https://www.mcanhealth.com/wp-content/uploads/2023/07/Elon-musk-bald-before-hair-transplant-paypal.jpeg.webp'></img>
        <img className='star' src="https://png.pngtree.com/png-vector/20230103/ourmid/pngtree-luxury-5-star-icon-in-3d-effect-png-image_6549512.png"></img>
        <p className='Aval'>Comprei esse produto na Casas Paulista de Geleias e achei incrivel! O atendimento foi muito bom, o funcionario recepcionista Leitinho King,<br></br> me atendeu muito bem e até me deu deconto!</p>
      </div>
      <br></br><br></br>
      <footer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='footerMain'>

          <img src='https://londonwine.com.br/wp-content/uploads/2022/04/certificado-reclame-aqui.jpeg'></img>
          <img src='https://www.conjur.com.br/img/b/stf-lanca-marca-celebrar-130-anos.jpeg'></img>
          <img src='https://hotmart.s3.amazonaws.com/product_pictures/2bc484f3-b019-41aa-8257-28f25da0aec6/mec.png'></img>
          <img src='https://www.nestle.com.br/sites/g/files/pydnoa436/files/asset-library/publishingimages/releases/image002.jpg'></img>
          <img src='https://www.selosefilatelia.com.br/PastaLancamentos2018/Album/17-carimbo.jpg'></img>
          <img src='https://www.assessoriaagropecuaria.com.br/uploads/noticias/g/1557193395395.jpg'></img>
        </div>
      </footer>
    </AppConteiner>
  );
}

export default App;
