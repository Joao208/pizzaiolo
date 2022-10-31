# Contribuindo com o projeto!

## Sumário

- [Contribuindo com o projeto!](#contribuindo-com-o-projeto)
  - [Sumário](#sumário)
  - [Pré-requisitos](#pré-requisitos)
  - [Começando](#começando)
    - [Testando o desenvolvimento local](#testando-o-desenvolvimento-local)
  - [Escrevendo as mensagens do commit](#escrevendo-as-mensagens-do-commit)
  - [Criando um _Merge Request_](#criando-um-merge-request)
    - [Se adicionar um novo recurso](#se-adicionar-um-novo-recurso)
  - [Colaboradores ✨](#colaboradores-)

## Pré-requisitos

- Node: v14.15.1 ou superior.
- [yarn](https://yarnpkg.com/): 1.22.5 ou superior.

## Começando

Clone o repositório do Gitlab:

```bash
$ git clone https://git.meifacil.com/meifacil-nodejs/libs/meifacil-common.git
```

Instale as dependências:

```bash
$ yarn
```

### Testando o desenvolvimento local

Durante o desenvolvimento, é possível utilizar o pacote local nos projetos, através do comando `yarn link`.

Isso é extremamente útil para testar uma nova funcionalidade em um projeto já existente.

Para vincular a biblioteca à um projeto, siga os seguintes passos:

> NOTA: Antes de iniciar o processo de vincular a biblioteca, tenha certeza que você executou o comando `yarn build` para gerar uma nova distribuição.

1. Crie o link simbólico em `meifacil-common/<ROOT>`:

```bash
$ yarn link
```

<div align="center">
  <img src="docs/assets/yarn-link.gif" alt="docs/assets/yarn-link.gif">
</div>

2. Faça o link no projeto que deseja experimentar os recursos desenvolvidos:

```bash
$ yarn link meifacil-common
```

<div align="center">
  <img src="docs/assets/yarn-link-meifacil-common.gif" alt="docs/assets/yarn-link-meifacil-common.gif">
</div>

> Veja mais em: https://classic.yarnpkg.com/en/docs/cli/link/

## Escrevendo as mensagens do commit

As mensagens de confirmação devem seguir a especificação [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), portanto, o [CHANGELOG.md](CHANGELOG.md) pode ser gerado automaticamente por ela. Se você não está familiarizado com a convenção de mensagem de commits, você pode usar `yarn commit` em vez de `git commit`, que fornece uma CLI interativa para gerar mensagens de commit adequadas.

Certifique-se de que os commits sejam escritos em inglês (não tem problema usar o Google Translate!), isso é apenas por conta da padronização utilizada.

## Criando um _Merge Request_

Por aqui nada novo, porém (apenas para conhecimento), utilizamos [_feature branchs_](https://martinfowler.com/bliki/FeatureBranch.html) como convenção.

### Se adicionar um novo recurso

Forneça um motivo convincente para adicionar esse recurso. Idealmente, você deve abrir uma [_issue_](https://git.meifacil.com/meifacil-nodejs/libs/meifacil-common/issues) de sugestão primeiro e então receber um "sinal verde" antes de trabalhar nela.

## Colaboradores ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://git.meifacil.com/william.queiroz"><img src="https://git.meifacil.com/uploads/-/system/user/avatar/43/avatar.png?s=100" width="100px;" alt=""/><br /><sub><b>William Queiroz</b></sub></a><br /><a href="https://git.meifacil.com/william.queiroz/meifacil-common/commits/master" title="Code">💻</a> <a href="https://git.meifacil.com/william.queiroz/meifacil-common/commits/master" title="Documentation">📖</a></td>
    <td align="center"><a href="https://git.meifacil.com/diogo.batista"><img src="https://secure.gravatar.com/avatar/9a506f330e8d0ebd398ef97ea26128e1?s=80&d=identicon?s=100" width="100px;" alt=""/><br /><sub><b>Diogo Cezar Teixeira Batista</b></sub></a><br /><a href="https://git.meifacil.com/william.queiroz/meifacil-common/commits/master" title="Code">💻</a></td>
    <td align="center"><a href="https://git.meifacil.com/renan.costa"><img src="https://git.meifacil.com/uploads/-/system/user/avatar/26/avatar.png?s=100" width="100px;" alt=""/><br /><sub><b>Renan Braga Costa</b></sub></a><br /><a href="https://git.meifacil.com/william.queiroz/meifacil-common/commits/master" title="Code">💻</a></td>
    <td align="center"><a href="https://git.meifacil.com/lincon.santos"><img src="https://git.meifacil.com/uploads/-/system/user/avatar/71/avatar.png?s=100" width="100px;" alt=""/><br /><sub><b>Lincon Santos</b></sub></a><br /><a href="https://git.meifacil.com/william.queiroz/meifacil-common/commits/master" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Esse projeto segue a especificação [all-contributors](https://github.com/all-contributors/all-contributors). Colabs de todos são bem-vindos!