# Backend de leitura de imagens (Cloudflare Worker)

A chave da Anthropic fica só no Worker. O app envia a imagem (já reduzida) e o contexto (nomes de categorias, contas e cartões, sem saldos).

1. `npm i -g wrangler` e `wrangler login`
2. Edite `wrangler.toml`: `ALLOWED_ORIGIN = "https://SEU-USUARIO.github.io"` (só a origem, sem caminho).
3. `wrangler secret put ANTHROPIC_API_KEY` (chave de console.anthropic.com)
4. `wrangler secret put APP_TOKEN` (qualquer texto longo; é o "Token de acesso" digitado no app)
5. `wrangler deploy` → anote a URL `https://midnight-finance-ia.<conta>.workers.dev`
6. No app: Lançamentos → **Importar por imagem** → abra "Servidor de leitura" e informe URL e token (ficam só neste aparelho).

Modelo padrão: `claude-sonnet-5-5` (troque com a variável `MODEL`). Teste: `GET /health` deve retornar `{"ok":true}`.
Limites: origem restrita, token, 6,5 MB por imagem, 30 req/min por IP (por instância). Para mais proteção, use as regras de rate limit do Cloudflare.

## Publicar no GitHub Pages
Substitua `index.html` e `sw.js` na raiz do repositório (mantenha manifest e ícones). A cada nova publicação, altere `VER` em `sw.js`.
