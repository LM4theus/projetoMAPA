# Documento BackEnd - Projeto MAPA(FPB)

O backend utiliza Typescript usando objetos, basicamente cada ambiente possuí um objeto e dentro dele há atributos que o sistema irá chamar quando o usuário interagir com o sistema. O principal intuito é oferecer uma lógica inteligente de recomendação e busca de ambientes com base na leitura do QR Code, facilitando a localização do aluno e garantindo uma navegação coerente entre andares e ambientes do campus.

## Estrutura de Pastas - Frontend

```
/src
│
├── services/
│ ├── actions/
│ │ ├── findroute.tsx
│ │ ├── scan.tsx
│ │ └── navigation.tsx
│ └── data/
│ ├── objects.tsx
│ └── model/
│ └── imports.tsx
│
```

# Problema que o Backend Resolve:

Os alunos podem buscar por ambientes fora do pavimento onde estão. O backend identifica essa situação e fornece rotas alternativas, guiando o usuário até escadas ou elevadores para leitura de novos QR Codes — garantindo que ele possa continuar a navegação correta de onde estiver.

# Como o sistema funciona:

1. O usuário escaneia um QR Code (define o pavimento atual).
2. Digita o nome ou descrição do ambiente na barra de busca.
3. O sistema realiza a busca por nome ou descrição nos dados locais.
4. O backend avalia:

- Se o ambiente está no mesmo pavimento: mostra a rota direta.
- Se está em outro pavimento: mostra uma rota até as escadas para o usuário subir ou descer e escanear um novo QR Code.

# Como foi desenvolvido (Tecnologias):

- Arquitetura de Sistema monolítico simples, sem servidor dedicado.
- Armazenamento de dados usando objetos javascript com a seguinte estrutura:

{
"name": "nome da sala",
"description": "descrição completa",
"route": "imagem da rota",
"paviment": "andar"
}

# Organização dos arquivos:

Dentro da pasta services onde está toda parte inteligente do web site.

## data

Onde os dados são armazenados localmente dentro os arquivos do projeto.

### imports

Dentro da pasta model, há o componente imports.tsx onde toda as importações das imagens é alocado dentro de uma váriavel que será chamada no atributo route de cada objeto javascript.

### objetcs

componente que armazena todos os objetos referentes a todos os ambientes acessíveis para os alunos da instituíção. Possuindo as rotas do terreo, primeiro e segundo andar.

## actions

Onde funcionalidades que são a inteligência de todo o site, como pesquisa e consulta de objetos e seus atributos.

### finroute

Componente de pesquisa que transforma o texto do input em letras minusculas e retira caracteres especiais para que o usuário pesquise sem dificuldades sem sofrer com problemas case sensitive na hora da busca. Os principais atributos utilizados como critério de busca são: name e description.

### navigation

Componente responsável por conduzir a navegação entre páginas conforme a interações do usuário.

### scan

Componente responsável por captar a informação lida no QRcode.

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
