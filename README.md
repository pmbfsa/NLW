# Introdução

Esse projeto se trata de uma aplicação de estudos desenvolvida do zero na semana de desenvolvimento da RocketSet, a Next Level Week. A ideia do projeto é introduzir uma pessoa leiga que não saiba nada de programação ao mundo do desenvolvimento web. As linguagens utilizadas são:

- HTML
- CSS
- JavaScript

Durante o curso também é apresentada a ferramenta Visual Studio Code (VSCode), então é aconselhável a utilização dela para manuseio dos arquivos.

O banco de dados utilizado foi o SQLite3.

# Projeto - Ecoleta

O projeto web desenvolvido se trata de uma site de cadastro e busca para pontos de coleta e reciclagem. O site possui as seguintes páginas:

## Inicial

Esta é a página de entrada que direciona para a página de cadstro das entidades e possuí o botão de busca, por cidade, das entidades já cadastradas anteriormente. 

## Cadastro da Entidade

Responsável por coletar as informações e inseri-las no banco de dados. A seguir a lista das informações que serão coletadas:

    - Nome
    - Imagem
    - Endereço 
    - Número/Complemento
    - Estado
    - Cidade
    - Itens de Coleta
        - Lâmpadas
        - Pilhas e Baterias
        - Papéis e Papelão
        - Resíduos Eletrônicos
        - Resíduos Orgânicos
        - Óleo de Cozinha

Os campos são todos obrigatórios, exceto o campo de itens de coleta.

## Resultado da Busca

Esta página mostra as entidades cadastradas anteriormente, com base nas informações e imagem fornecida para o banco de dados.

# Agradecimento

Agradeço ao Mayk Brito por todos os ensinamentos e a Rocketseat por realizar a NLW - Next Level Week e proporcionar essa possibilidade de aprendizado com qualidade.