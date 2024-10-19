import './estilo.css' 

const TOpcao = ['Home', 'Filmes', 'Animes']

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