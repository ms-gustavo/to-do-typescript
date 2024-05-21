<h1>To Do List App</h1>
        <p>Este é um projeto simples de lista de tarefas (To Do List) desenvolvido usando TypeScript, Vite e React. O objetivo deste projeto é proporcionar um primeiro contato com TypeScript e aprimorar habilidades com Cypress e Husky.</p>
        
  <h2>Índice</h2>
       <ul>
            <li><a href="#instalacao">Instalação</a></li>
            <li><a href="#uso">Uso</a></li>
            <li><a href="#scripts-disponiveis">Scripts Disponíveis</a></li>
            <li><a href="#testes">Testes</a></li>
            <li><a href="#husky">Husky</a></li>
            <li><a href="#estrutura-do-projeto">Estrutura do Projeto</a></li>
            <li><a href="#contribuicao">Contribuição</a></li>
            <li><a href="#licenca">Licença</a></li>
        </ul>

   <h2 id="instalacao">Instalação</h2>
        <p>Para clonar e instalar as dependências do projeto, siga os passos abaixo:</p>
        <pre>
<code>git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install</code>
        </pre>

  <h2 id="uso">Uso</h2>
        <p>Para rodar o projeto em modo de desenvolvimento, utilize o comando:</p>
        <pre><code>npm run dev</code></pre>
        <p>Isso iniciará o Vite no modo de desenvolvimento. Abra <a href="http://localhost:5173" target="_blank">http://localhost:5173</a> no seu navegador para visualizar o projeto.</p>

  <h2 id="scripts-disponiveis">Scripts Disponíveis</h2>
        <p>No diretório do projeto, você pode rodar os seguintes scripts:</p>
        <ul>
            <li><code>npm run dev</code>: Inicia o aplicativo no modo de desenvolvimento.</li>
            <li><code>npm run build</code>: Cria a versão de produção do aplicativo.</li>
            <li><code>npm run preview</code>: Visualiza a versão de produção do aplicativo.</li>
            <li><code>npm test</code>: Executa os testes do Cypress.</li>
        </ul>

   <h2 id="testes">Testes</h2>
        <p>Este projeto utiliza Cypress para testes end-to-end. Para rodar os testes, utilize o comando:</p>
        <pre><code>npm test</code></pre>
        <p>Os testes são automaticamente executados antes de cada commit, garantindo que o código comitado esteja funcionando conforme esperado.</p>

   <h2 id="husky">Husky</h2>
        <p>Husky é utilizado para gerenciar ganchos de pré-commit. Ele é configurado para rodar os testes do Cypress antes de cada commit. A configuração do Husky pode ser encontrada na pasta <code>.husky</code> do projeto.</p>

<h2 id="estrutura-do-projeto">Estrutura do Projeto</h2>
        <pre>
<code>
.project-root
├── .husky
│   ├── _/
│   ├── commit-msg
│   └── pre-commit
├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── integration
│   ├── plugins
│   └── support
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Modal
│   │   ├── TaskForm
│   │   └── TaskList
│   ├── interfaces
│   │   └── Task.ts
│   ├── App.module.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
|   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── commitlint.config.ts
├── cypress.config.ts
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── tsconfig.node.json        
</code>
        </pre>
