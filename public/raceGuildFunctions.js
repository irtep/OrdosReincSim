// jos vaihtuu valitut race guild levelit
function changeInRaceGuildLvls() {
  
  const selectedRaceIs = document.getElementById('Race_Selection').value;
  // race valinta aktivoituu (taitaa olla defaulttina barso):
  raceSelected(selectedRaceIs);
}

// täällä lasketaan raceguildiin tuhlatut expat
function calcSpentExpRaceGuilds() {
  
  
}

// kun race on valittu:
function raceSelected(selectedRace) {
  const raceGuildLevels = document.getElementById('Race_guild_levels_Selection');
  const selectedLevels = raceGuildLevels.value;
  // paikka mihin laitetaan tää tieto
  const raceInfo = document.getElementById('raceInfo');
  // haetaan oikea racekilta
  const raceGuild = allRaceGuilds.filter(race => selectedRace === race.race);
  
  // laitetaan tiedot:
  raceInfo.innerHTML = 'Race guild: ' + raceGuild[0].name + '<br><br>';
  
    const skills = [];
    const spells = [];
    const skillsAndSpells = raceGuild[0].mayTrain[0].skillsAndSpells;
    
    // etsi skillit ja spellit: 
    for (let ii = 0; ii < skillsAndSpells.length; ii++) {
      
      // jos skilli, niin skilleihin, jos ei niin spelleihin
      skillsAndSpells[ii].skill ? skills.push(skillsAndSpells[ii]) : spells.push(skillsAndSpells[ii]);
    }
    
    // jos löytyi skillejä, niin kirjoita ne
    if (skills.length > 0) {
      
      raceInfo.innerHTML = raceInfo.innerHTML + 'Skills available from race guild: <br>';
      
      skills.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        raceInfo.innerHTML = raceInfo.innerHTML + '<form name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
          '<select id= "skillPercent'+skill.name+'" onchange= "calcSpentExpRaceGuilds()">'+ 
            '<option>0</option>'+
          '</select>'+
          '</form>';
        
        // lisää numerovaihtoehdot:
        filteredNumbers.forEach( (numbero) => {
          const nameOfSelectOpt = 'skillPercent'+skill.name;
          const o = document.createElement('option');
          
          o.text = numbero;
          o.value = numbero;
          document.getElementById(nameOfSelectOpt).appendChild(o);
        });
      }); 
    } else { 
      
      raceInfo.innerHTML = raceInfo.innerHTML + 'No skills available from race guild. <br>';
    }
    
    // ja sama spelleille:
    // jos löytyi skillejä, niin kirjoita ne
    if (spells.length > 0) {
      
      raceInfo.innerHTML = raceInfo.innerHTML + 'Spells available from race guild: <br>';
      
      spells.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        console.log('filtNums: ', filteredNumbers);
        raceInfo.innerHTML = raceInfo.innerHTML + '<form class= "skills" name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
          '<select id= "skillPercent'+skill.name+'" onchange= "calcSpentExpRaceGuilds()">'+ 
            '<option>0</option>'+
          '</select>'+
          '</form>';
        
        // lisää numerovaihtoehdot:
        filteredNumbers.forEach( (numbero) => {
          const nameOfSelectOpt = 'skillPercent'+skill.name;
          const o = document.createElement('option');
          
          o.text = numbero;
          o.value = numbero;
          document.getElementById(nameOfSelectOpt).appendChild(o);
        });
      }); 
    } else { 
      
      raceInfo.innerHTML = raceInfo.innerHTML + 'No spells available from race guild. <br>';
    }  
  
}

// kun sivu latautunut niin:
window.onload = (()=> { 

  // tämä niin tulee raceguild levelien määrä oikein
  changeInRaceGuildLvls();  
});