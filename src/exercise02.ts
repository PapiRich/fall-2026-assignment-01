export function transcribeDNA(dna: string): string {
  if (!/^[ATCG]*$/.test(dna)) {
    throw new Error("Invalid nucleotide");
  }

  const transcriptionMap: Record<string, string> = {
    A: "U",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((base) => transcriptionMap[base])
    .join("");
}