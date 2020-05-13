function economicalBowlerEachYear(matches,deliveries){
    const economy = {};
    for(let year of matches){
        if(economy.hasOwnProperty(year.season)==false){
    let overs={};
    let runs={};
    for(let match of matches){
for(let deliverie of deliveries)
{    
    if(match.id===deliverie.match_id && match.season===year.season){
      if(runs[deliverie.bowler])
        {
        runs[deliverie.bowler]+=parseInt(deliverie.total_runs);
        if(deliverie.ball=='1'){
            overs[deliverie.bowler]+=1;
        }
    }
     else{
        runs[deliverie.bowler]=parseInt(deliverie.total_runs);
        overs[deliverie.bowler]=1;
         }
     }
}
    }
var result={};
for(let run in runs){
result[run]=parseFloat((runs[run]/overs[run]).toFixed(2));
}
    let arrEco=Object.values(result);
arrEco.sort(function(a,b){ return a-b });       
 var last={};
 for(let i=0;i<10;i++){
 for(let j in result){
     if(result[j]==arrEco[i]){
     last[j]=arrEco[i];
 }
}
}
economy[year.season]=last;
        }
    }
return economy;
}

module.exports = economicalBowlerEachYear;