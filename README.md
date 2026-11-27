# Midnight Finance

Aplicativo de finanças pessoais: contas, cartões e faturas, despesas fixas e parceladas, valores a receber, vale-refeição, gastos da moto, metas, reserva de emergência, investimentos com rendimento pelo CDI, saúde financeira, orçamento, calendário, relatórios, importação de extratos CSV e projeções.

É um **PWA** (Progressive Web App): instala na tela inicial do celular (Android e iPhone) e do computador, abre em tela cheia como um aplicativo e funciona sem internet.

Versão: **2.0.0**.

## Segurança: onde ficam os dados

- Os dados ficam **somente no aparelho** em que o app foi instalado (armazenamento local do navegador).
- **Nada é enviado ao GitHub nem a outro servidor.** O repositório guarda só o código.
- **Nunca envie o backup (.json) para o repositório.** O `.gitignore` bloqueia arquivos `.json` (exceto `package.json`).
- Se o repositório for público, qualquer pessoa vê o **código**, mas não os seus dados. Mesmo assim, prefira repositório **privado** com GitHub Pages (planos pagos) ou mantenha o público sabendo que ele não contém informação financeira.

## Arquivos

Todos ficam na raiz, sem subpastas, para permitir o envio também pelo celular.

| Arquivo | Para que serve |
|---|---|
| `index.html` | Código-fonte completo do app (HTML, CSS e JavaScript em um arquivo, com as fontes Inter e Manrope embutidas) |
| `manifest.webmanifest` | Nome, cores e ícones para a instalação |
| `sw.js` | Service worker: guarda o app no aparelho para abrir sem internet |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Ícones do app |
| `package.json` | Comando para rodar localmente no computador (opcional) |
| `.nojekyll` | Faz o GitHub Pages publicar os arquivos como estão |
| `.gitignore` | Impede o envio de backups e arquivos do sistema |
| `LICENSE-FONTS.txt` | Licença das fontes Inter e Manrope (SIL Open Font License 1.1) |

## Dependências

- Para **usar** o app: nenhuma. Ele não depende de bibliotecas externas nem de internet depois de instalado.
- Para **rodar localmente** (opcional): [Node.js](https://nodejs.org) 18 ou superior, ou Python 3.

## 1. Rodar localmente (opcional)

Na pasta dos arquivos, use um dos comandos:

```bash
npm start              # usa "npx serve" na porta 8080
# ou
python3 -m http.server 8080
```

Abra `http://localhost:8080`. O service worker e a instalação só funcionam via `http://localhost` ou `https://`, não abrindo o arquivo direto (`file://`).

## 2. Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `midnight-finance`).
2. Clique em **Add file → Upload files**, envie todos os arquivos desta pasta e clique em **Commit changes**.
   - Se já existia a versão anterior (Finanças Pessoais), substitua os arquivos. Os ícones antigos são trocados pelos novos com o mesmo nome.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, **Branch: main** e pasta **/ (root)**. Salve.
4. Aguarde 1 a 2 minutos. O endereço fica assim: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

Pelo terminal, o equivalente é:

```bash
git init && git add . && git commit -m "Midnight Finance 2.0.0"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/midnight-finance.git
git push -u origin main
```

## 3. Instalar

**Android (Chrome)**
1. Abra o endereço no Chrome. Se já tinha aberto antes, recarregue a página.
2. Toque em **Instalar app** no topo do app, ou em **⋮ → Instalar app**.
3. Abra pelo ícone da tela inicial.

**iPhone (Safari)**
1. Abra o endereço no **Safari**.
2. Toque em **Compartilhar → Adicionar à Tela de Início**.

**Computador (Chrome ou Edge)**: clique no ícone de instalação na barra de endereço.

## 4. Carregar seus dados

1. Abra o app. Na primeira vez, aparece a tela de boas-vindas.
2. Toque em **Importar backup** e escolha o arquivo `financas-pessoais-backup-AAAA-MM-DD.json`.
3. Confirme. Na primeira abertura, as cores antigas das categorias e contas são convertidas para a paleta Midnight.

Se você já usava a versão anterior no mesmo endereço, os dados continuam no aparelho: basta atualizar os arquivos.

## 5. Tema claro e escuro

O app abre no tema escuro. O botão de sol/lua no topo alterna para o claro; a escolha fica salva no aparelho.

## 6. Importar extratos CSV

Em **Lançamentos → Importar extrato** (ou **Mais → Importar extrato**): escolha a conta ou o cartão, selecione o CSV do banco, revise categorias, transferências e possíveis duplicados e confirme. A sugestão de categorias pelo Claude e a leitura de prints só funcionam no artefato dentro do Claude.

## 7. Backup

- Exporte com frequência em **Categorias e dados → Backup (JSON)**. O app avisa quando o último backup tem mais de 7 dias.
- Desinstalar o app ou limpar os dados do navegador **apaga os dados** do aparelho. Guarde os backups no Drive ou no e-mail.
- Para levar os dados entre o artefato e o celular, exporte o backup de um lado e importe do outro.

## 8. Atualizar o app

1. Substitua os arquivos no repositório.
2. No `sw.js`, aumente a versão em `const CACHE='fp-v2.0.0'` (por exemplo, para `fp-v2.0.1`).
3. No aparelho, feche e abra o app duas vezes. Os dados não são afetados.
