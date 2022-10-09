/**
 * O método toLocaleDateString converte a data para uma string com formatação
 * especificada. A string contém apenas informações de ano, mês e dia.
 * 
 * O métodos suporta os seguintes parâmetros:
 * 
 * * 1° - locale (obrigatório): parâmetro contendo a localidade usada na
 * * formatação
 *
 *   O parâmetro suporta as seguintes subtags:
 *
 *     - código de idioma
 *     - código de script
 *     - código de região
 *     - código de variável
 *     - nu: numbering system (sistema numérico)
 *     - ca: calendar (calendário)
 *
 *   As subtags se relacionam da seguinte forma:
 * 
 *   [código de idioma]-[código de script]-[código de região]-[código de variável]-u-nu-[valor]-ca-[valor]
 *
 *   -> para maiores conhecimentos sobre locale consulte o arquivo do Notion
 *   sobre a Intl API
 * 
 * # obs.: é possível implementar um sistema de fallback usando um array com
 * # múltiplos locale's.
 * 
 * -----------------------------------------------------------------------------
 *
 * * 2° - options (opcional): um objeto contendo diversos atributos que alteram
 * * o comportamento padrão do método
 * 
 *   opções de formatação:
 * 
 *     numberingSystem: sistema numérico (assim como na subtag "nu", o sistema
 *     numérico pode ser definido dentro do parâmetro options)
 * 
 *     calendar: calendário (assim como na subtag "ca", o calendário pode ser
 *     definido dentro do parâmetro options)
 * 
 *     -------------------------------------------------------------------------
 *
 *     era:
 *       "long" (ex.: depois de Cristo)
 *       "short" (ex.: d.C.)
 *       "narrow" (ex.: A [referência à Anno Domini, do inglês])
 * 
 *     year:
 *       "numeric" (ex.: 2020)
 *       "2-digit" (ex.: 20)
 * 
 *     month:
 *       "numeric" (ex.: 6)
 *       "2-digit" (ex.: 06)
 *       "long" (ex.: Junho)
 *       "short" (ex.: Jun.)
 *       "narrow" (ex.: J)
 * 
 *     day:
 *       "numeric" (ex.: 2)
 *       "2-digit" (ex.: 02)
 * 
 *     weekday:
 *       "long" (ex.: Terça)
 *       "short" (ex.: Ter)
 *       "narrow" (ex.: T)
 *
 * -----------------------------------------------------------------------------
 *
 *     dateStyle:
 *       "full" (ex.: quinta-feira, 15 de junho de 2000)
 *       "long" (ex.: 15 de junho de 2000)
 *       "medium" (ex.: 15 de jun. de 2000)
 *       "short" (ex.: 15/06/2000) [default]
 * 
 *       - dateStyle é um jeito mais rápido de formatar a data sem a necessidade
 *         de muitos parâmetros
 *
 * -----------------------------------------------------------------------------
 * 
 *     localeMatcher:
 *       "best fit" (default);
 *       "lookup"
 * 
 *     -> para maiores conhecimentos sobre localeMatcher consulte o arquivo do
 *     Notion sobre a Intl API
 */

const date = new Date(2000, 6 - 1, 15);

/* ------------------- método sem utilização de parâmetros ------------------ */

// o método vai exibir a data na formatação padrão do navegador

console.log(date.toLocaleDateString());

console.log('\n');

/* --------------------- exemplos com o parâmetro locale -------------------- */

console.log(
  "Códigos de idioma alterados: ",
  date.toLocaleDateString("en-emodeng")
);

console.log(
  "Sitema numérico alterado: ",
  date.toLocaleDateString("pt-BR-u-nu-arab")
);

console.log(
  "Calendário alterado: ",
  date.toLocaleDateString("pt-BR-u-ca-islamic")
);

// implementando sistema de fallback
console.log(
  date.toLocaleDateString(["WRONG", "en-US"])
);

console.log('\n');

/* -------------------- exemplos com o parâmetro options -------------------- */

// alterando o sistema numérico
console.log(date.toLocaleDateString("pt-BR", { numberingSystem: "arab" }));

// alterando o calendário
console.log(date.toLocaleDateString("pt-BR", { calendar: "islamic" }));

// formatando de forma detalhada
console.log(
  date.toLocaleDateString(
    "pt-BR", 
    {
      era: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "long",
    }
  )
);

// formatando com dateStyle
console.log(
  date.toLocaleDateString(
    "pt-BR",
    { dateStyle: "full" }
  )
);
