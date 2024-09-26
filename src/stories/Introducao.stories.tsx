import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// Definição do componente principal
export default {
    title: 'Introdução',
    parameters: {
        docs: {
            page: null, // Para desabilitar a página automática de docs
        },
    },
} as Meta;

// Componente JSX que renderiza o conteúdo da introdução
const IntroducaoComponent: React.FC = () => {
    return (
        <div>
            <h1>Introdução</h1>
            <h2>Sobre</h2>
            <p>
                Este projeto nasceu de uma necessidade pessoal: a falta de padronização nos meus projetos.
                Durante meus estudos, percebi que, em muitos cursos, não existe um padrão consistente. Cada
                curso tem suas próprias abordagens, e nem sempre há um foco no UX. Isso me levou a buscar
                uma solução para criar um padrão que pudesse aplicar em todos os meus projetos.
            </p>
            <p>
                Agora, com esse projeto, eu já terei uma biblioteca de componentes prontos, o que me
                permitirá focar apenas nas necessidades específicas de cada novo projeto ou desafio. Isso
                também será útil em futuras entrevistas, onde posso me concentrar nos desafios propostos,
                sem me preocupar em criar tudo do zero.
            </p>
            <p>
                Além de tornar meus projetos mais profissionais, essa padronização também contribuirá para
                minha evolução como desenvolvedor frontend. Com isso, espero não só melhorar meus próprios
                projetos e estudos, mas também ajudar outros desenvolvedores ao redor do mundo.
            </p>
            <p>
                E claro, esse projeto é uma homenagem à minha filha, minha pequena Alice. Por isso, todos os
                componentes começam com as letras "Ali". No entanto, essas três letras são apenas um
                prefixo, o verdadeiro significado do componente vem depois. Por exemplo, o <strong>AliHeader</strong> é
                simplesmente um cabeçalho que pode ser inserido em suas criações.
            </p>

            <hr />

            <h3>Objetivos</h3>
            <h4>Explicando melhor o propósito do projeto:</h4>
            <p>
                Este projeto é um <strong>Design System</strong> criado para me auxiliar nos estudos, padronizar e
                profissionalizar meus projetos pessoais e acadêmicos. Com ele, posso garantir consistência
                visual e técnica em todos os meus trabalhos, aumentando a eficiência no desenvolvimento.
            </p>

            <h4>Documentar as funcionalidades:</h4>
            <p>Estou trabalhando nisso continuamente.</p>

            <h4>Tecnologias usadas:</h4>
            <p>
                Estou criando um <strong>Design System</strong> para uso próprio, com o objetivo de proporcionar um ambiente mais
                profissional e aumentar a agilidade nos meus estudos.
            </p>

            <hr />

            <h3>Passo a passo para iniciar o projeto</h3>

            <h4>1. Criação do projeto:</h4>
            <pre>
                <code>
                    npx create-react-app alice-design-system
                    <br />
                    cd alice-design-system
                </code>
            </pre>

            <h4>2. Instalação do Storybook:</h4>
            <pre>
                <code>npx storybook@latest init</code>
            </pre>

            <h4>3. Execução do projeto:</h4>
            <pre>
                <code>npm run storybook</code>
            </pre>

            <h4>4. Instalação das dependências para TypeScript:</h4>
            <pre>
                <code>
                    npm install typescript @types/react @types/react-dom
                </code>
            </pre>

            <h4>5. Configuração do decorator no preview.tsx:</h4>
            <p>
                <img
                    src="../src/assets/codigoDSA.png"
                    alt="Arquivo preview"
                />
            </p>

            <h4>6. Resolução de conflitos de dependências:</h4>
            <pre>
                <code>
                    npm install styled-components --legacy-peer-deps
                    <br />
                    npm install --save-dev @types/styled-components --legacy-peer-deps
                </code>
            </pre>

            <h4>7. Fixação da versão do TypeScript e instalação do styled-components:</h4>
            <pre>
                <code>
                    npm install typescript@4.9.5 --save-dev
                    <br />
                    npm install styled-components
                    <br />
                    npm install --save-dev @types/styled-components
                </code>
            </pre>

            <h4>8. Instalação de ícones FontAwesome:</h4>
            <pre>
                <code>
                    npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
                    @fortawesome/react-fontawesome
                    <br />
                    npm install @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons
                </code>
            </pre>

            <h4>9. Documentação no Storybook:</h4>
            <pre>
                <code>
                    npm install @storybook/addon-docs --save-dev
                </code>
            </pre>

            <h3>Tecnologias Utilizadas</h3>
            <ul>
                <li>
                    <strong>React</strong>: Usado para a construção dos componentes da interface do usuário.
                </li>
                <li>
                    <strong>Storybook</strong>: Ferramenta utilizada para desenvolvimento isolado e
                    documentação dos componentes.
                </li>
                <li>
                    <strong>Styled-components</strong>: Biblioteca para estilização de componentes utilizando
                    CSS-in-JS.
                </li>
                <li>
                    <strong>[Outras tecnologias]</strong>: Insira aqui outras ferramentas relevantes que estão
                    sendo usadas no projeto.
                </li>
            </ul>
        </div>
    );
};

// Template para exportar a story
const Template: StoryFn = () => <IntroducaoComponent />;

export const Introducao = Template.bind({});
