import { projects } from './data/projects';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1>Nome do Desenvolvedor</h1>
        <p>Estudante de Desenvolvimento | Buscando Estágio</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="seu-linkedin">LinkedIn</a>
          <a href="seu-github">GitHub</a>
        </div>
      </header>

      <section>
        <h2>Projetos em Destaque</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {projects.map((project) => (
            <div key={project.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px' }} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ marginBottom: '10px' }}>
                {project.techs.map(tech => (
                  <span key={tech} style={{ background: '#eee', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', marginRight: '5px' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer">Código</a> | 
              <a href={project.demo} target="_blank" rel="noreferrer" style={{ marginLeft: '5px' }}> Demo</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;