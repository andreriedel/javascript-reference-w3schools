/**
 * O método toLocaleTimeString converte a data para uma string com formatação
 * especificada. A string contém apenas informações de hora, minutos e segundos
 * (também o fuso horário).
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

// o método vai exibir a data na formatação padrão do navegador.

console.log(date.toLocaleTimeString());

console.log("\n");

/* --------------------- exemplos com o parâmetro locale -------------------- */

console.log(
  "Códigos de idioma alterados: ",
  date.toLocaleTimeString("en-emodeng")
);

console.log(
  "Sitema numérico alterado: ",
  date.toLocaleTimeString("pt-BR-u-nu-arab")
);

console.log(
  "Calendário alterado: ",
  date.toLocaleTimeString("pt-BR-u-ca-islamic")
);

console.log(
  "Ciclos de hora alterado: ",
  date.toLocaleTimeString("pt-BR-u-hc-h11")
);

// implementando sistema de fallback
console.log(
  date.toLocaleTimeString(["WRONG", "en-US"])
);

console.log('\n');

/* -------------------- exemplos com o parâmetro options -------------------- */

// alterando o sistema numérico
console.log(date.toLocaleTimeString("pt-BR", { numberingSystem: "arab" }));

// alterando o calendário
console.log(date.toLocaleTimeString("pt-BR", { calendar: "islamic" }));

// formatando de forma detalhada com hour12
console.log(
  date.toLocaleTimeString(
    "pt-BR",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      dayPeriod: "long",
      fractionalSecondDigits: 3,
      timeZoneName: "long",
    }
  )
);

// formatando de forma detalhada com hourCycle
console.log(
  date.toLocaleTimeString(
    "pt-BR",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h11",
      dayPeriod: "long",
      fractionalSecondDigits: 3,
      timeZoneName: "long",
    }
  )
);

// formatando com timeStyle
console.log(
  date.toLocaleTimeString(
    "pt-BR",
    { timeStyle: "full" }
  )
);

// formatando com timeZone
console.log(
  date.toLocaleTimeString(
    "pt-BR",
    {
      timeZone: "America/Manaus",
      timeStyle: "full"
    }
  )
);

// formatando com timeZone
console.log(
  date.toLocaleTimeString(
    "pt-BR",
    {
      timeZone: "America/New_York",
      timeStyle: "full"
    }
  )
);

// formatando com o fuso horário universal
console.log(
  date.toLocaleTimeString(
    "pt-BR",
    {
      timeZone: "UTC", // ou GMT
      timeStyle: "full"
    }
  )
);
