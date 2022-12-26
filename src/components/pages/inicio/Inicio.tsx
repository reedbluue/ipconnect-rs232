import './Inicio.scss';

export const Inicio = () => {
  return (
    <main className="main inicio">
      <h1 className="inicio__title">Bem-Vindo(a)</h1>
      <p className="inicio__desc">
        Este é o ipConnect, uma aplicação desenvolvida em JS para leitura e
        escrita de dados em dispositivos com comunicação Serial RS-232.
        <br />
        <br />
        Para mais informações, acerca da aplicação, acesse o GitHub do projeto
        no menu de navegação.
      </p>
      <h2 className="inicio__subtitle">Como utilizar:</h2>
      <section className="inicio__tutorial">
        <article className="tutorial-field">
          <img src='assets/img/tutorial/1.jpg' alt='Tutorial 1'/>
          <div>
            <h3>Monitor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut interdum velit, sit amet sollicitudin ante. In dictum purus
              condimentum ex sagittis ullamcorper. Curabitur aliquet lacinia
              enim id mattis. Proin augue nulla, molestie a tellus ut, facilisis
              pharetra urna.
            </p>
          </div>
        </article>
        <article className="tutorial-field">
          <img src='assets/img/tutorial/2.jpg' alt='Tutorial 2'/>
          <div>
            <h3>Monitor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut interdum velit, sit amet sollicitudin ante. In dictum purus
              condimentum ex sagittis ullamcorper. Curabitur aliquet lacinia
              enim id mattis. Proin augue nulla, molestie a tellus ut, facilisis
              pharetra urna.
            </p>
          </div>
        </article>
        <article className="tutorial-field">
          <img src='assets/img/tutorial/3.jpg' alt='Tutorial 3'/>
          <div>
            <h3>Monitor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut interdum velit, sit amet sollicitudin ante. In dictum purus
              condimentum ex sagittis ullamcorper. Curabitur aliquet lacinia
              enim id mattis. Proin augue nulla, molestie a tellus ut, facilisis
              pharetra urna.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
