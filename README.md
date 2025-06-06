# Documento de Levantamento de Requisitos - Projeto MAPA(FPB)

A Estrutura inicial de todo o projeto, para servir como base a todo desenvolvimento.

## 1. Introdução

### Objetivo:

O projeto servirá como um guia para alunos novatos se locomoverem pelo campus da Faculdade, permitindo localizar ambientes e salas com facilidade.

### Escopo:

**Inclui:**

- Sistema de Filtragem;
- Sistema de Mapeamento;
- Andares e Ambientes modularizados;
- Sistema de Análise de Ambiente com base em perguntas;
- Sistema de Pesquisa;
- Descrição de cada ambiente.

**Exclui:**

- Sistema de Cadastro e Login;
- CRUD: o sistema será unicamente baseado em consulta;
- Computação em Nuvem;
- Localização em tempo real.

### Definições:

- **Usuário final**: Alunos da FPB seja calouros ou veteranos.

- **Banco de Dados**: Armazenamento local com Objetos JavaScript.

- **Layout do Projeto**: Foco em dispositivos móveis (mobile first)

## 2. Visão Geral do Sistema

**Descrição geral:** Muitos alunos ao chegarem na faculdade não fazem a menor ideia onde ficam a sala ou ambiente que precisam estar. O aplicativo veio para atender esta necessidade mostrando ao aluno como chegar no lugar certo, evitando possíveis atrasos ou confundir salas erradas.

**Stakeholders:**

- Alunos (usuários finais);
- Coordenação (fornece dados dos ambientes);
- Desenvolvedores (responsáveis pela implementação);

## 3. Requisitos Funcionais

| Código | Requisito                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------- |
| RF001  | O sistema deve permitir que o usuário pesquise por nome de ambientes (ex: "Laboratório - A110")           |
| RF002  | O sistema deve exibir um mapa do campus com indicação do ambientes.                                       |
| RF003  | O sistema deve permitir filtragem por tipo de ambiente (ex: salas de aula, laboratório, biblioteca, etc). |
| RF004  | O sistema deve mostrar a descrição do ambiente ao ser selecionado.                                        |
| RF005  | O sistema deve ser modularizado por andares, exibindo apenas ambientes daquele andar.                     |
|        |                                                                                                           |

## 4. Requisitos Não Funcionais

| Código | Requisito                                                                    |
| ------ | ---------------------------------------------------------------------------- |
| RNF001 | O sistema deve ser compatível com dispositivos móveis Android e iOS.         |
| RNF002 | O sistema deve ser leve e rápido, para tornar seu uso dinâmico.              |
| RNF003 | O sistema deve armazenar dados localmente utilizando SQLite.                 |
| RNF004 | A interface deve seguir padrões de usabilidade (layout simples e intuitivo). |
| RNF005 | O sistema será escrito em Python.                                            |
| RNF006 | O sistema utilizará biblioteca Flet para o FrontEnd.                         |
| RNF007 | O sistema será desenvolvimento dentro de ambiente virtual.                   |

## 5. Regras de Negócio

- RB001: Nenhum usuário poderá modificar os dados do sistema pelo aplicativo.
- RB002: Os dados dos ambientes devem ser inseridos manualmente pelo administrador na fase de desenvolvimento.

## 6. Casos de Uso / Histórias de Usuário

- Caso de uso 1: ...
- História: “Como usuário, quero ...”

## 7. Protótipos (se aplicável)

- [Incluir imagens ou links]

## 8. Requisitos Técnicos

- O sistema será desenvolvido utilizando a tecnologia Flet (Framework - Python) com foco em dispositivos móveis Android e IOS.

- O Banco de dados será local, utilizando SQLite, considerando que todas as informações já estão mapeadas e não haverá necessidade de atualização constante.

- A arquitetura seguirá o padrão mobile first para garantir responsividade em smartphones.

- O ambiente de execução deverá estar em um versão específica e estável para evitar conflitos de compatibilidade entre os sistemas operacionais.

## 9. Critérios de Aceitação

| Código | Critério                                                                         |
| ------ | -------------------------------------------------------------------------------- |
| CA001  | O sistema deve ser capaz de localizar corretamente qualquer ambiente cadastrado. |
| CA002  | O sistema deve apresentar o mapa com destaque no ambiente selecionado.           |
| CA003  | O sistema deve funcionar offline em dispositivos Android e iOS.                  |
| CA004  | O tempo de resposta para qualquer busca não deve exceder 3 segundos.             |
| CA005  | A navegação entre as telas deve ser intuitiva e clara para o usuário final.      |
