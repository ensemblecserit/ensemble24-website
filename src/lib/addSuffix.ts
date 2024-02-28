function addSuffix(num: any): string {
  if (typeof num !== "number" || isNaN(num)) {
    return "";
  }

  const suffixes = ["th", "st", "nd", "rd"];
  const suffix =
    num % 100 > 10 && num % 100 < 14
      ? suffixes[0]
      : suffixes[num % 10] || suffixes[0];

  return `${num}${suffix}`;
}

export default addSuffix;
