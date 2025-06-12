# Documento FrontEnd - Projeto MAPA(FPB)

O frontend utiliza React com vite e Typescript. Toda formatação e estilização é feita em Tailwindcss. E toda estrutura é dividida em componentes com funcionalidades específicas no sistema.

## Estrutura de Pastas - Frontend

```
src/
│
├── components/
│ ├── layout/
│ │ ├── Card.tsx
│ │ └── ScreenBase.tsx
│ └── ui/
│ ├── Button.tsx
│ ├── Header.tsx
│ └── Input.tsx
│
├── assets/
│ └── (imagens, ícones, logos, etc.)
│
├── pages/
│ ├── Main.tsx
│ ├── Tutorial.tsx
│ ├── QRcode.tsx
│ ├── Search.tsx
│ └── Map.tsx
│
```

# Componentes:

Aqui está explicação por trás dos componentes referentes ao frontend do projeto.

## Layout:

Pasta onde fica tudo referente a layout e formas de organização de elementos na tela.

### Card

Componente reutilizável do tipo "cartão", possuindo duas variantes:

- tutorial: usado para instruções iniciais.
- location_card: usado para mostrar ambientes procurados pelo usuário.
  Detalhe importante voce pode customizar e alterar as formatações utilizando o atributo className ao declarar o componente.

### Screen

Componente base do layout da tela responsiva para dispositivos móveis seguindo o padrão mobile first. Ele está aplicado em todas as páginas do projeto, ou seja onde há tela do webapp o screen está sendo chamado. Propriedades personalizáveis: className, width e height (ambos já são responsivos).

## UI:

Cada component individual como botões, inputs, headers e todos elementos visuais na tela.

### Button

Componente botão reutilizável, possuindo duas variantes:

- continue: botão usado para avançar.
- back: botão usado para voltar.
- other: botão genérico podendo ser usado para multiplas funções.

### Header

Cabeçalho da página com a logo da FPB, elemento semântico para SEO.

### Input

Campo de entrada de texto, utilizado para o usuário buscar informações no sistema referente aos ambientes.

## Pages

Todas as páginas prontas do sistema, onde chamam componentes realizando tarefas específicas. Basicamente os páginas onde o usuário irá navegar para realizar as atividades propostas pelo sistema.

### Main

Página inicial do site

### Tutorial

Página mostrando um guia de instruções passo a passo para o usuário.

### QRCode

Página que acessa a câmera do dispositivo para leitura do QRCode referente ao pavimento do ponto de partida.

### Search

Após a leitura do QRcode, o usuário será guiado para a página de pesquisa. Onde ele poderá buscar o ambiente (ponto de chegada) que ele deseja ir.

### Map

Após a pesquisa o sistema retorna a rota do ponte de partida ao de chegada, nesta página o usuário pode movimentar o map, dar zoom In e zoom out.

                     |

# Colaboradores do Projeto:

- Matheus Alves Rufino Souza (desenvolvedor)

- Luan da Silva Belarmino (desenvolvedor)

- Lucas Matheus Felix da Rocha (desenvolvedor líder)

- Jonny da Silva Gomes (desenvolvedor)

- Gabriel Santos de Medeiros Costa (designer)

- Caio Alex Donato Leitão (designer)

- Itallo Edward Silva Santos (designer)

- Jose Gilderlan Santana da Silva (designer)

- Mauricio de França Lima (designer)

- José Plácido de Andrade Neto (designer)

- Miqueias Oliveira Ferreira (designer líder)

- Weverton André Buril dos Santos (produtor líder)

- Vinicius Medeiros (produtor)

- João Victor Pereira Alves da Costa (produtor)

- Victor Maximino de Souza (produtor)

- Vamiele Paulo (autora das documentações)

- Jose Heverton (autor das documentações)
