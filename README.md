# 🔥 Painel de Contagem — Brasa Church

Dashboard web que mostra o público dos cultos e cruza com **clima por horário**, **feriados** e **Copa do Mundo**. Fica num link fixo e gratuito (GitHub Pages) e **atualiza sozinho**: quando a contagem do domingo é lançada na planilha, é só recarregar a página.

Não precisa de servidor nem de computador ligado. A página lê a planilha do Google publicada como CSV e busca o clima automaticamente.

---

## Como colocar no ar (uma vez, ~15 minutos)

### 1. Publicar a planilha como CSV
1. Abra a planilha **BC Contagem 2026** no Google Sheets.
2. Vá na aba **GERAL** (a que consolida os totais por domingo: DATA, 9H, 11H, 16H, 18H, 20H, TOTAL).
3. Menu **Arquivo → Compartilhar → Publicar na Web**.
4. Na aba *Vincular*: escolha **GERAL** e o formato **Valores separados por vírgula (.csv)**.
5. Clique em **Publicar** e **copie o link** (termina em `output=csv`).

### 2. Colar o link no painel
1. Abra o arquivo `docs/config.js` (Bloco de Notas serve).
2. Na linha `CSV_URL:`, troque `COLE_AQUI` pelo link que você copiou. Salve.

### 3. Subir para o GitHub
1. Crie uma conta em https://github.com (grátis).
2. **New repository** → nome ex.: `brasa-contagem` → marque **Public** → *Create*.
3. *uploading an existing file* → arraste **todo** o conteúdo desta pasta (as pastas `docs` etc.) → *Commit changes*.
   - Alternativa fácil: use o [GitHub Desktop](https://desktop.github.com).

### 4. Ativar o painel (GitHub Pages)
1. No repositório: **Settings → Pages**.
2. Em *Branch* escolha `main` e a pasta **/docs** → *Save*.
3. Em ~2 minutos o painel estará em `https://SEU-USUARIO.github.io/brasa-contagem/`.
4. Salve o link nos favoritos e compartilhe com a equipe.

Pronto. A cada novo domingo lançado na planilha (aba GERAL), o painel se atualiza ao recarregar.

---

## Como manter (rápido)

- **Novo domingo**: basta lançar os totais na aba **GERAL** da planilha. O painel pega sozinho.
- **Feriado / jogo / local (Teatro ou Centro de Eventos)**: edite o arquivo `docs/fatores.js`
  (é bem simples, tem comentários) e suba a alteração. Você faz isso poucas vezes por ano.
- O **clima** é buscado automaticamente — não precisa mexer.

---

## Estrutura dos arquivos

```
brasa-contagem/
├─ docs/
│  ├─ index.html     ← o painel (não precisa editar)
│  ├─ config.js      ← cole aqui o link CSV da planilha
│  ├─ fatores.js     ← feriados, jogos da Copa e dias no Centro de Eventos
│  └─ chart.umd.js   ← biblioteca de gráficos (offline)
└─ README.md         ← este guia
```

## Observações
- A aba **GERAL** precisa ter uma linha por domingo com as colunas de horário (9H, 11H, 16H, 18H, 20H) e, de preferência, a coluna **TOTAL**.
- O clima vem do serviço gratuito Open-Meteo (reanálise ERA5) — são dados de modelo, não de estação; ótimos para tendência.
- Repositório público é exigência do GitHub Pages gratuito. A planilha continua sua; só os **números de contagem** ficam visíveis no painel (sem dados pessoais).
