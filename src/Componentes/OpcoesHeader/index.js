import './estilo.css' 

const TOpcao = ['Home', 'Eletronicos', 'Cafeteira', 'Carro']

function OpcoesHeader(){
       return(
  
        <ul className='opcao'>
        { TOpcao.map( (texto) => (
          <li className='opcoes'> <p>{texto}</p> </li>
        ) ) }
       </ul>

       )
}

export default OpcoesHeader