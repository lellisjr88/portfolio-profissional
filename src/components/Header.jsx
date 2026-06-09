import './Header.css'

function Header() {
   return( 
       <header>
        <div className="logo">
            <h2>Lellis Júnior</h2>
            <p>Front-End Developer</p>
        </div>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
                </ul>    
            </nav>
       </header>
    )
}

export default Header