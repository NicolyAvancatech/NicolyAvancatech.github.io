import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="portfolio">

      {/* MENU */}
      <header className="header">
        <a href="#home" className="logo">
          Nicoly<span>.</span>
        </a>

        <nav>
          <a href="#home">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* APRESENTAÇÃO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">

            <span className="tag">
              ✨ Estudante de Programação
            </span>

            <h1>
              Olá, eu sou a
              <span> Nicoly!</span>
            </h1>

            <h2>
              Transformando ideias em experiências digitais.
            </h2>

            <p>
              Estou iniciando minha jornada no mundo da programação,
              aprendendo novas tecnologias e desenvolvendo projetos
              para transformar conhecimento em experiências reais.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="btn-primary">
                Ver meus projetos
              </a>

              <a
                href="https://github.com/NicolyAvancatech"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Meu GitHub ↗
              </a>
            </div>

          </div>

          <div className="hero-decoration">
            <div className="code-card">
              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
                <code>
                  <span className="code-purple">const</span> desenvolvedora = {'{'}
                  {'\n'}  nome: <span className="code-green">'Nicoly'</span>,
                  {'\n'}  aprendendo: [
                  {'\n'}    <span className="code-green">'HTML'</span>,
                  {'\n'}    <span className="code-green">'CSS'</span>,
                  {'\n'}    <span className="code-green">'JavaScript'</span>,
                  {'\n'}    <span className="code-green">'React'</span>
                  {'\n'}  ]
                  {'\n'}{'}'}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* SOBRE MIM */}
        <section className="section" id="sobre">
          <span className="section-label">CONHEÇA MINHA HISTÓRIA</span>
          <h2>Sobre mim</h2>

          <p>
            Sou uma estudante de programação apaixonada por tecnologia,
            criatividade e inovação. Estou construindo minha jornada
            no desenvolvimento web e buscando aprender algo novo
            todos os dias.
          </p>
        </section>

        {/* HABILIDADES */}
        <section className="section" id="habilidades">
          <span className="section-label">O QUE ESTOU APRENDENDO</span>
          <h2>Minhas habilidades</h2>

          <div className="skills">
            <div className="skill">HTML5</div>
            <div className="skill">CSS3</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Git</div>
            <div className="skill">GitHub</div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section" id="projetos">
          <span className="section-label">MEU TRABALHO</span>
          <h2>Meus projetos</h2>

          <div className="project-card">
            <span className="project-icon">💻</span>
            <h3>Meu Portfólio</h3>
            <p>
              Meu primeiro projeto desenvolvido com React,
              utilizando HTML, CSS e JavaScript.
            </p>
            <span className="project-status">
              Em desenvolvimento
            </span>
          </div>
        </section>

        {/* CONTATO */}
        <section className="section contact" id="contato">
          <span className="section-label">VAMOS CONVERSAR?</span>
          <h2>Entre em contato!</h2>

          <p>
            Estou sempre aberta a aprender, compartilhar
            conhecimentos e conhecer novas oportunidades.
          </p>

          <a
            href="https://github.com/NicolyAvancatech"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Acesse meu GitHub ↗
          </a>
        </section>
      </main>

      <footer>
        <p>Desenvolvido com 💜 por Nicoly | 2026</p>
      </footer>

    </div>
  )
}

export default App