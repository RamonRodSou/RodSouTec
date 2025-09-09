import { Project } from '@domain/Project'

const dashboardDescription: string = `
O Desafio:
Minha igreja enfrentava um desafio comum a muitas organizações: a gestão de informações era descentralizada, baseada em planilhas e anotações manuais. Isso dificultava o acompanhamento de membros, a organização de eventos, a gestão financeira e a criação de relatórios precisos.

A Solução: Um Ecossistema Integrado
Para resolver este problema, liderei o desenvolvimento do "IAF Gestor", uma plataforma web completa que serve como o centro nervoso para todas as operações da igreja. Este é o front-end da solução, projetado para ser poderoso, intuitivo e acessível.

Arquitetura e Tecnologias:

Front-end: A interface foi construída com React e TypeScript, utilizando Vite como build tool para máxima performance. A tipagem estática do TypeScript foi crucial para gerenciar a complexidade de um projeto deste porte, garantindo manutenibilidade e menos bugs.

Back-end e Integrações: A aplicação consome a API RESTful que desenvolvi em Java/Spring Boot, responsável pela lógica de negócio principal. Além disso, o sistema se integra com:

n8n: Para orquestrar automações poderosas, como o envio de mensagens de aniversário e comunicados em massa via WhatsApp, lendo dados diretamente do banco.

Firebase: Utilizado como um banco de dados de apoio para fluxos específicos de automação e integração em tempo real.

Funcionalidades em Destaque:

Sistema de Ingressos com Validação por QR Code: Uma das funcionalidades mais complexas, o módulo de eventos permite criar ingressos para membros e visitantes. Cada ingresso gerado possui um QR Code único (baseado no ID do registro) e pode ser exportado para PDF. A aplicação possui um leitor de QR Code integrado que, ao escanear um ingresso, valida sua autenticidade, exibe os dados do participante e invalida o código para prevenir o reuso, controlando o acesso de forma segura e eficiente.

Dashboard de Business Intelligence: A tela inicial apresenta um painel de controle com gráficos que mostram métricas vitais: total de membros vs. visitantes, fluxo financeiro mensal, frequência nos cultos e muito mais. Esses dados fornecem insights valiosos para a liderança da igreja.

Gestão 360° dos Membros: O CRM permite um cadastro completo, incluindo relacionamentos familiares (pais e filhos) e informações críticas, como dados médicos para as crianças, garantindo cuidado e segurança.

Impacto:
O IAF Gestor está em produção e transformou a administração da minha igreja. Processos que levavam horas agora são feitos em minutos. A centralização dos dados permitiu uma tomada de decisão mais estratégica e melhorou a comunicação e o engajamento com a comunidade.
`;

const doutorVisaoDescription: string = `
O projeto "Doutor Visão" foi concebido para modernizar a forma como os pacientes agendam seus exames oftalmológicos, combinando um design sofisticado com automação de ponta.

Front-end e Experiência do Usuário:
A interface foi desenvolvida em React com o framework Next.js, garantindo um site extremamente rápido, otimizado para SEO e com uma navegação intuitiva. Para a estilização, utilizei Sass, o que permitiu uma organização modular do CSS, facilitando a manutenção e a escalabilidade. A biblioteca de componentes Material-UI foi empregada para construir uma interface robusta e visualmente atraente, alinhada com as diretrizes de Material Design. Segui as melhores práticas de design responsivo, proporcionando uma experiência de usuário consistente e de alto padrão em qualquer dispositivo, seja desktop ou mobile.

Automação e Back-end:
O núcleo funcional do projeto reside em duas automações principais construídas na plataforma n8n:

Fluxo de Agendamento via Formulário: Ao preencher o formulário no site, um webhook é acionado no n8n. O fluxo de trabalho processa os dados, cadastra o lead em uma planilha do Google Sheets que funciona como um banco de dados para verificar a disponibilidade, e inicia o processo de comunicação para confirmar o agendamento.

Atendente Virtual com IA para WhatsApp: Para oferecer uma alternativa moderna ao formulário, criei um agente de IA que interage com os clientes via WhatsApp. Este bot é capaz de entender as solicitações, verificar horários disponíveis e realizar o agendamento de forma totalmente automatizada, 24 horas por dia.

Este projeto demonstra minha capacidade de desenvolver soluções web completas, desde o front-end de alta qualidade, utilizando Sass e Material-UI, até a implementação de automações complexas que otimizam processos de negócio e melhoram a experiência do cliente.
`;


const onlyCifraDescription: string = `
O Desafio: A equipe de louvor da minha igreja dependia de sites de cifras genéricos, o que resultava em problemas constantes: anúncios invasivos, formatação inconsistente que dificultava a leitura e a falta de um padrão para a escrita das músicas. Isso gerava insegurança e atrapalhava a fluidez das apresentações.

A Solução: Criei o OnlyCifra, um PWA (Progressive Web App) pensado do zero para atender a essas necessidades. O objetivo era criar um ambiente livre de distrações, onde o músico pudesse se concentrar apenas na música. A aplicação substitui o papel e as plataformas desorganizadas por uma solução digital, centralizada e eficiente.

Funcionalidades e Arquitetura:

Front-end Robusto e Tipado: Utilizei React com TypeScript para construir uma base de código segura, escalável e de fácil manutenção. A biblioteca Material-UI foi a escolha para desenvolver uma interface de usuário intuitiva e visualmente agradável, seguindo princípios de design consagrados.

Backend Real-time com Firebase: Para o armazenamento e gerenciamento das cifras, optei pelo Cloud Firestore (Firebase). Sua natureza NoSQL e sua capacidade de sincronização em tempo real permitem que qualquer alteração em uma cifra ou playlist seja instantaneamente refletida para todos os usuários.

Experiência de Uso (UX) Otimizada:

Cadastro Simplificado: Um formulário inteligente permite estruturar as músicas em seções (Intro, Verso, Refrão) e usar um padrão de compasso (|) para guiar o ritmo.

Leitura Clara: O "Modo Play" apresenta a cifra com fontes grandes e cores de alto contraste.

Navegação Fluida: Em uma playlist, o músico pode passar para a próxima música ou voltar para a anterior apenas arrastando o dedo na tela, um recurso essencial para quem está com um instrumento nas mãos.

Este projeto é um exemplo perfeito de como a tecnologia pode ser aplicada para resolver problemas práticos e específicos de uma comunidade, melhorando a colaboração e a performance da equipe.
`;

const apiJavaGestorDescription: string = `
O "API Gestor" é um backend de nível empresarial construído para dar suporte a uma aplicação de CRM para igrejas. A solução foi desenvolvida do zero com Java 17 e Spring Boot 3, focando em performance, escalabilidade e, acima de tudo, na aderência às melhores práticas de engenharia de software.

Arquitetura e Design de Software:
A aplicação segue uma arquitetura em camadas bem definida (Apresentação, Lógica de Negócio, Acesso a Dados) para garantir baixo acoplamento e alta coesão.

Controllers: Responsáveis por expor os endpoints REST e lidar com as requisições/respostas HTTP.

Services: Onde reside a lógica de negócio central da aplicação.

Repositories (Spring Data JPA): Camada de abstração para a persistência de dados em um banco relacional MySQL.

DTOs e Mappers: Utilizei o padrão Data Transfer Object para desacoplar a representação da API do modelo de domínio, garantindo que a API não exponha detalhes internos da implementação.

Qualidade, Testes e Confiabilidade:
A robustez do sistema é um pilar fundamental, sustentada por:

Testes de Unidade: Utilizando JUnit 5 e Mockito, isolei e testei cada componente da camada de serviço, garantindo que a lógica de negócio funcione como esperado.

Testes de Integração: Criei testes que validam os fluxos completos, desde a requisição no controller até a persistência no banco de dados, assegurando que todas as camadas se integrem corretamente.

Gerenciamento de Banco de Dados: Implementei Flyway para gerenciar as migrations do banco de dados, permitindo um controle de versão do schema que facilita o deploy e o desenvolvimento em equipe.

API RESTful e Documentação:
A API foi desenhada para ser verdadeiramente RESTful. O diferencial está na implementação de Spring HATEOAS, que enriquece as respostas JSON com links para ações relacionadas, permitindo que as aplicações cliente descubram dinamicamente as funcionalidades da API. Toda a API é documentada de forma clara e interativa usando Swagger (OpenAPI 3.0), facilitando o consumo por desenvolvedores front-end ou outros serviços.

Este projeto solidifica minha expertise na construção de sistemas backend complexos, seguros e prontos para produção utilizando o ecossistema Java/Spring.
`;


const leitoPlacaDescription: string = `
O Problema do Cliente: O proprietário de um estacionamento precisava de um método eficiente e de baixo custo para registrar as placas dos carros na entrada, sem depender de anotações manuais ou sistemas caros de câmeras fixas. A solução ideal seria usar um dispositivo que ele já possuía: seu smartphone.

A Solução Proposta: Desenvolvi um aplicativo mobile completo usando o framework Flutter e a linguagem Dart. A aplicação funciona como um scanner de placas portátil, oferecendo uma solução "apontar e registrar".

Arquitetura e Funcionamento Técnico:

Captura e Processamento de Imagem: O núcleo do app utiliza uma biblioteca de câmera moderna do ecossistema Flutter para obter um feed de vídeo em tempo real. Sobre este feed, uma camada de Reconhecimento Óptico de Caracteres (OCR) é aplicada para identificar e extrair o texto alfanumérico das placas dos veículos.

Integração e Notificação: Uma vez que uma placa é validada, o aplicativo dispara uma requisição HTTP para a API do Telegram. Essa requisição envia a placa como uma mensagem de texto para um chat pré-configurado, servindo como um log de entradas em tempo real, com data e hora.

Resultado: O cliente recebeu uma ferramenta prática e robusta que está em uso atualmente, otimizando seu processo diário e eliminando o trabalho manual. Este projeto demonstra minha capacidade de criar soluções mobile completas, desde a interação com o hardware do dispositivo até a integração com serviços de terceiros para entregar uma solução de negócio funcional e eficiente.
`;

const formN8NDescription: string = `
Este projeto é um exemplo prático de como a tecnologia pode servir a causas sociais. A iniciativa "Natal Solidário" precisava de uma ferramenta eficiente para gerenciar as inscrições do seu principal evento de arrecadação, o "Café das Mulheres". Criei uma solução web completa para automatizar esse processo do início ao fim.

Arquitetura Leve e Eficiente:
A solução foi projetada para ser robusta, mas de baixo custo operacional, utilizando uma arquitetura moderna e "serverless".

Front-end com Next.js e Material-UI: Desenvolvi uma landing page com renderização no servidor (SSR) para otimizar o carregamento e o SEO. A interface, construída com componentes Material-UI, oferece um design limpo e uma experiência de usuário fluida em qualquer dispositivo, crucial para não perder nenhuma inscrição.

Gestão de Dados em Tempo Real com Firebase: Para controlar a venda de ingressos, que eram divididos em lotes com quantidades limitadas, utilizei o Firebase (Firestore). O front-end lê os dados em tempo real, garantindo que os usuários sempre vejam a quantidade exata de ingressos disponíveis, o que cria um senso de urgência e evita problemas de overbooking.

Automação do Back-end com n8n: Em vez de um backend tradicional, optei por uma solução mais ágil. Quando um usuário submete o formulário, os dados são enviados para um Webhook no n8n. O workflow é responsável por:

Receber e validar os dados da inscrição.

Formatar uma mensagem personalizada.

Enviar essa mensagem via HTTP Request (integrado a uma API de mensagens) para a pessoa responsável pelas vendas, que pode então prosseguir com o contato para o pagamento.

Resultados e Próximos Passos:
A plataforma automatizou com sucesso o processo de inscrição, liberando a equipe de voluntários de tarefas manuais repetitivas e permitindo um controle claro sobre as vendas. O sucesso desta implementação abriu caminho para a próxima fase: a integração com a API da InfinitePay, que transformará a página em uma solução de e-commerce completa, automatizando a cobrança e a confirmação do pagamento, para ser reutilizada em todos os futuros eventos da campanha.
`;

export const listPortifolio: Project[] = [
    new Project("IAF Gestor - A Solução Completa de CRM e ERP para Igrejas", dashboardDescription, 'gestor', "https://technosou.com.br/images/dashboard/perfil.png"),
    new Project("Doutor Visão - Landing Page, Agendamento Inteligente, N8N Agente", doutorVisaoDescription, 'doutorVisao', "https://technosou.com.br/images/doutorVisao/perfil.png"),
    new Project("API Java SpringBoot CRM", apiJavaGestorDescription, 'apiGestor', "https://technosou.com.br/images/api_java_gestor/1.0-swagger.png"),
    new Project("App OnlyCifra - Gerenciamento de Cifras Musicais", onlyCifraDescription, 'onlyCifra', "https://technosou.com.br/images/onlyCifra/1.0-only.png"),
    new Project("App Leitor Placas para Gestão de Estacionamento", leitoPlacaDescription, 'leitorPlaca', "https://technosou.com.br/images/leitorPlaca/1.0-placa.png"),
    new Project("Tecnologia com Propósito para o Natal Solidário", formN8NDescription, 'formN8N', "https://technosou.com.br/images/ingresso/1.0-form.png"),
]
