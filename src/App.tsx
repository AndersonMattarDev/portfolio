function App() {
  return (
    <>
      <header className="bg-dark text-white">
        <nav className="navbar navbar-expand-lg container">
          <a className="navbar-brand text-white fw-bold" href="#home">Portfolio Dev</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#projects">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section text-center text-white d-flex align-items-center">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Olá, eu sou um desenvolvedor Front-end</h1>
            <p className="lead mt-3 mb-4">
              Crio interfaces modernas usando React, TypeScript e Bootstrap.
            </p>
            <a className="btn btn-primary btn-lg" href="#projects">Ver projetos</a>
          </div>
        </section>

        <section id="about" className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Sobre mim</h2>
              <p>
                Sou desenvolvedor com foco em aplicações web responsivas e de alto desempenho. Gosto de trabalhar
                com TypeScript, componentes reutilizáveis e boas práticas de UI/UX.
              </p>
              <p>
                Meu objetivo é entregar produtos simples e escaláveis que ajudem empresas e projetos pessoais a crescer.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Tecnologias</h5>
                  <p className="card-text mb-1">React</p>
                  <p className="card-text mb-1">TypeScript</p>
                  <p className="card-text mb-1">Bootstrap</p>
                  <p className="card-text mb-1">Vite</p>
                  <p className="card-text">Git e boas práticas de desenvolvimento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-light py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2>Projetos</h2>
                <p className="text-muted">Alguns exemplos de trabalho com front-end moderno.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-xl-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Landing page de produto</h5>
                    <p className="card-text">Design responsivo com Bootstrap e animações sutis para conversão.</p>
                    <span className="badge bg-primary">React</span> <span className="badge bg-secondary">Bootstrap</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Dashboard de métricas</h5>
                    <p className="card-text">Interface clara e interativa para dados em tempo real.</p>
                    <span className="badge bg-primary">TypeScript</span> <span className="badge bg-secondary">Vite</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Blog pessoal</h5>
                    <p className="card-text">Implementação de layout moderno e responsivo para conteúdo.</p>
                    <span className="badge bg-primary">React</span> <span className="badge bg-secondary">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h2>Skills</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Desenvolvimento React</li>
                <li className="list-group-item">TypeScript e tipagem forte</li>
                <li className="list-group-item">Bootstrap e layout responsivo</li>
                <li className="list-group-item">Vite e build otimizado</li>
                <li className="list-group-item">Versionamento com Git</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
                <div className="d-flex h-100 justify-content-center align-items-center bg-primary text-white">
                  <div>
                    <h3 className="mb-2">Estou pronto para novos desafios</h3>
                    <p className="mb-0">Vamos construir algo moderno e escalável juntos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-dark text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2>Contato</h2>
                <p>Envie uma mensagem para conversar sobre seu próximo projeto.</p>
              </div>
              <div className="col-md-4 text-md-end">
                <a href="mailto:contato@portfolio.dev" className="btn btn-outline-light">contato@portfolio.dev</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-3 text-center text-muted">
        <small>© 2026 Portfolio Dev. Construído com React, TypeScript e Bootstrap.</small>
      </footer>
    </>
  );
}

export default App;
