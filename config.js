/* ============================================================
   CONFIGURAÇÃO DO PAINEL — Brasa Church
   Edite APENAS a linha CSV_URL abaixo (entre aspas).
   ============================================================

   Como obter o link CSV da planilha:
   1. Abra a planilha "BC Contagem 2026" no Google Sheets.
   2. Clique na aba GERAL (a que consolida os totais por domingo).
   3. Menu: Arquivo > Compartilhar > Publicar na Web.
   4. Em "Vincular": escolha a aba GERAL  e o formato  "Valores separados por vírgula (.csv)".
   5. Clique em Publicar e copie o link gerado (termina em output=csv).
   6. Cole esse link aqui embaixo, no lugar de COLE_AQUI.
*/
window.CONFIG = {
  CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT31pzMgfJDna2jc1pdsf3cK0uYVpYUwZ-PI1IQPPM4UtZEX_Uzw7p5wf7TKZl7XsazDmZRUVzbYRZ6/pub?gid=92560796&single=true&output=csv",          // <-- cole aqui o link CSV da aba GERAL
  ANO: 2026,                      // ano a exibir
  LAT: -30.0331,                  // Porto Alegre (para buscar o clima)
  LON: -51.23
};
