import fs from "fs";
export type Gradebook = {
  [student: string]:{
    [subject: string]: number;
  };
};
  


export function calculateSubjectAverage(subject: string): number {
  const data = fs.readFileSync("data/gradebook.json","utf-8");
  const gradebook: Gradebook = JSON.parse(data);
  let total =0;
  let count = 0;
  for(const student in gradebook){
    if(gradebook[student][subject]!== undefined){
      total += gradebook[student][subject];
      count++;
    }
  }
  if(count==0){
    return 0;

  }
  return total / count;
}
