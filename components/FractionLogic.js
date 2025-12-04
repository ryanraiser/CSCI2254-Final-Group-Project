export function fractionLogic(i, multiplier) {
  const scaled = i.qty * multiplier;
  const formatted = formatFrac(scaled);
  return formatted;
}

function formatFraction(decimal) {
  // dictionary for decimal to fraction formatting for basic cooking quantities
  const fractions = [
    { decimal: 0.13, symbol: "\u215B" }, // escape sequences: 1/8
    { decimal: 0.25, symbol: "\u00BC" }, // escape sequences: 1/4
    { decimal: 0.33, symbol: "\u2153" }, // escape sequences: 1/3
    { decimal: 0.5, symbol: "\u00BD" }, // escape sequences: 1/2
    { decimal: 0.67, symbol: "\u2154" }, // escape sequences: 2/3
    { decimal: 0.75, symbol: "\u00BE" }, // escape sequences: 3/4
    { decimal: 0.88, symbol: "\u215E" }, // escape sequences: 7/8
  ];

  // match provided decimal to nearest measurement within a given tolerance
  for (const f of fractions) {
    if (Math.abs(decimal - f.decimal) < 0.05) return f.symbol;
  }
}

function formatFrac(value) {
  const whole = Math.floor(value);
  const fractional = value - whole;

  const fractionSymbol = formatFraction(fractional);

  if (fractional == 0) {
    // just whole number
    const roundedWhole = Math.round(whole);
    return roundedWhole.toString();
  }

  if (whole == 0 && fractionSymbol) {
    // just fractional number
    return fractionSymbol;
  }

  if (fractionSymbol) {
    // mixed number
    return `${whole} ${fractionSymbol}`;
  }
}
