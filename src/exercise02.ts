export function transcribeDNA(dna: string): string {
  let rna = "";
  for(let i = 0; i < dna.length; i++){
    if(dna[i] === 'A'){
      rna += 'U';
    }
    if (dna[i] === 'T'){
      rna += 'A';
    }
    if (dna[i] === 'C'){
      rna += 'G';
    }
    if (dna[i] === 'G'){
      rna += 'C';
    }

  }
  return rna ;
}
