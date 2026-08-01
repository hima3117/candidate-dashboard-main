export function calculatePriority(c:any){

  const score =
    c.assignment * 0.30 +
    c.video * 0.25 +
    c.ats * 0.20 +
    c.github * 0.15 +
    c.communication * 0.10;


  if(score >= 90)
    return "P0";

  if(score >= 75)
    return "P1";

  if(score >= 50)
    return "P2";

  return "P3";
}


export function calculateScore(c:any){

 return Math.round(
    c.assignment * 0.30 +
    c.video * 0.25 +
    c.ats * 0.20 +
    c.github * 0.15 +
    c.communication * 0.10
 );

}


export function getColor(priority:string){

 switch(priority){

 case "P0":
   return "#22c55e";

 case "P1":
   return "#eab308";

 case "P2":
   return "#f97316";

 default:
   return "#ef4444";

 }

}