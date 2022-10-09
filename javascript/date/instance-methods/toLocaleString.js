/**
 * O método toLocaleTimeString converte a data para uma string com formatação
 * especificada.
 * 
 * O método suporta os seguintes parâmetros:
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
 *     - hc: hour cycle (ciclo de horas)
 *
 *   As subtags se relacionam da seguinte forma:
 * 
 *   [código de idioma]-[código de script]-[código de região]-[código de variável]-u-nu-[valor]-ca-[valor]-hc-[valor]
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
 * -----------------------------------------------------------------------------
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
 *     hour:
 *       "numeric" (ex.: 2)
 *       "2-digit" (ex.: 02)
 *
 *     minute:
 *       "numeric" (ex.: 2)
 *       "2-digit" (ex.: 02)
 *
 *     second:
 *       "numeric" (ex.: 2)
 *       "2-digit" (ex.: 02)
 * 
 *     dayPeriod: (funciona apenas no padrão hour12)
 *       "long" (ex.: noon)
 *       "short" (ex.: am)
 *       "narrow" (ex.: n)
 * 
 *     fractionalSecondDigits: formata as frações do segundo
 *       0: sem frações
 *       1: frações arredondadas para uma casa decimal
 *       2: frações arredondadas para duas casas decimais
 *       3: frações arredondadas para três casas decimais (milissegundos)
 *
 * -----------------------------------------------------------------------------
 *
 *     hour12:
 *       "true" (ciclo de horas de 12 [h11 ou h12])
 *       "false" (ciclo de horas de 24 [h23 ou h24])
 *
 *     hourCycle: 
 *       "h11", "h12", "h23", "h24"
 * 
 *       - caso o atriburo hour12 tenha sido usado, ele terá precedência
 *       - caso no parâmatro locale tenha sido definido um hour cycle, o
 *         atributo hourCycle do parâmetro options terá precedência
 * 
 * -----------------------------------------------------------------------------
 *
 *     timeZone: um jeito rápido de formatar a data a através das timezones.
 *     consulte https://www.iana.org/time-zones
 *
 *     timeZoneName:
 *       "long" (ex.: Horário Padrão de Brasília)
 *       "longOffset" (ex.: GMT-03:00)
 *       "longGeneric" (ex.: Horário de Brasília)
 *       "short" (ex.: BRT)
 *       "shortOffset" (ex.: GMT-3)
 *       "shortGeneric" (ex.: BRT)
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
 *     timeStyle:
 *       "full" (ex.: 12:30:30 Horário Padrão de Brasília)
 *       "long" (ex.: 12:30:30 BRT)
 *       "medium" (ex.: 12:30:30)
 *       "short" (ex.: 12:30)
 * 
 *       - timeStyle é um jeito mais rápido de formatar a data sem a necessidade
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

const date = new Date(2000, 6 - 1, 15, 12, 30, 30, 500);

/* ------------------- método sem utilização de parâmetros ------------------ */

// o método vai exibir a data na formatação padrão do navegador
console.log(date.toLocaleString());

console.log("\n");

/* --------------------- exemplos com o parâmetro locale -------------------- */

console.log(
  "Códigos de idioma alterados: ",
  date.toLocaleString("en-emodeng")
);

console.log(
  "Sitema numérico alterado: ",
  date.toLocaleString("pt-BR-u-nu-arab")
);

console.log(
  "Calendário alterado: ",
  date.toLocaleString("pt-BR-u-ca-islamic")
);

console.log(
  "Ciclos de hora alterado: ",
  date.toLocaleString("pt-BR-u-hc-h11")
);

// implementando sistema de fallback
console.log(
  date.toLocaleString(["WRONG", "en-US"])
);

console.log('\n');

/* -------------------- exemplos com o parâmetro options -------------------- */

// alterando o sistema numérico
console.log(date.toLocaleString("pt-BR", { numberingSystem: "arab" }));

// alterando o calendário
console.log(date.toLocaleString("pt-BR", { calendar: "islamic" }));

// formatando de forma detalhada com hour12
console.log(
  date.toLocaleString(
    "pt-BR",
    {
      era: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      dayPeriod: "long",
      fractionalSecondDigits: 3,
      timeZoneName: "long"
    }
  )
);

// formatando de forma detalhada com hourCycle
console.log(
  date.toLocaleString(
    "pt-BR",
    {
      era: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h12",
      dayPeriod: "long",
      fractionalSecondDigits: 3,
      timeZoneName: "long"
    }
  )
);

// formatando com dateStyle e timeStyle
console.log(
  date.toLocaleString(
    "pt-BR",
    {
      dateStyle: "full",
      timeStyle: "full"
    }
  )
);

// formatando com timeZone
console.log(
  date.toLocaleString(
    "pt-BR",
    {
      timeZone: "America/Manaus",
      dateStyle: "full",
      timeStyle: "full"
    }
  )
);

// formatando com timeZone
console.log(
  date.toLocaleString(
    "pt-BR",
    {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "full"
    }
  )
);

// formatando com o padrão universal
console.log(
  date.toLocaleString(
    "pt-BR",
    {
      timeZone: "UTC", // ou GMT
      dateStyle: "full",
      timeStyle: "full"
    }
  )
);
