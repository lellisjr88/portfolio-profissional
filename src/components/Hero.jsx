import './Hero.css'

function Hero() {
    return (
        <section id="hero">
            <div className="hero-content">
                <p>Olá, eu sou </p>
                <h1>Lellis Júnior</h1>
                <h2>Desenvolvedor Front-End</h2>
                <p className='hero-description'>Crio interfaces web modernas, responsivas e funcionais, unindo tecnologia,
                    organização e criatividade para entregar soluções de alta qualidade.
                </p>
                <div className="hero-actions">
                    <a href="#projetos">Ver projetos</a>
                    <a href="#contato">Entrar em contato</a>
                </div>
            </div>
        </section>
    )
}

export default Hero