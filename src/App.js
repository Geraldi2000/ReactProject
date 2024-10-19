
// import './App.css';
import Header from './Componentes/Header';
import styled from "styled-components"
import Content1 from '../Componentes/content1'

const AppConteiner = styled.div `
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #a192f3 35%, #2a07ee 90%);

  li{
  list-style: none;
  }
`

function App() {
  return (
    <AppConteiner>
      <Header />
      <Content1 />
    </AppConteiner>
  );
}

export default App;
