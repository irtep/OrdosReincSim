// jos vaihtuu valitut guild levelit
function changeInGuildLvls(leveli, kohde) {
  const selectedGuild = document.getElementById('Guild'+kohde+'_Selection').value;
  
  showSkillsAndSpells(selectedGuild, kohde);
}

// näyttää skillit ja spellit mitä voi treenata

function showSkillsAndSpells(kilta, kohta) {
  // paikka mihin laitetaan tieto:
  const guildInfo = document.getElementById('guildInfot');
  const findRightSelection = 'Guild'+kohta+'_lvls_Selection';
  const selectedLevelsPlace = document.getElementById(findRightSelection);
  const selectedLevels = selectedLevelsPlace.value;
  
  // haetaan kilta:
  const selectedGuild = allGuilds.filter(guild => kilta === guild.shortName);
  
  // laitetaan tiedot:
  guildInfo.innerHTML = '<br>Guild: '+ selectedGuild[0].longName+ '<br><br>';
  
    const skills = [];
    const spells = [];
    const skillsAndSpells = selectedGuild[0].mayTrain[0].skillsAndSpells;
    
    // etsi skillit ja spellit: 
    for (let ii = 0; ii < skillsAndSpells.length; ii++) {
      
      // jos skilli, niin skilleihin, jos ei niin spelleihin
      skillsAndSpells[ii].skill ? skills.push(skillsAndSpells[ii]) : spells.push(skillsAndSpells[ii]);
    }
    
    // jos löytyi skillejä, niin kirjoita ne
    if (skills.length > 0) {
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'Skills available from race guild: <br>';
      
      skills.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        guildInfo.innerHTML = guildInfo.innerHTML + '<form class= "skills" name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'No skills available from race guild. <br>';
    }
    
    // ja sama spelleille:
    // jos löytyi skillejä, niin kirjoita ne
    if (spells.length > 0) {
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'Spells available from race guild: <br>';
      
      spells.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        guildInfo.innerHTML = guildInfo.innerHTML + '<form class= "skills" name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'No spells available from race guild. <br>';
    }  
}

/*


    const skills = [];
    const spells = [];
    const skillsAndSpells = selectedGuild[0].mayTrain[0].skillsAndSpells;
    
    // etsi skillit ja spellit: 
    for (let ii = 0; ii < skillsAndSpells.length; ii++) {
      
      // jos skilli, niin skilleihin, jos ei niin spelleihin
      skillsAndSpells[ii].skill ? skills.push(skillsAndSpells[ii]) : spells.push(skillsAndSpells[ii]);
    }
    
    // jos löytyi skillejä, niin kirjoita ne
    if (skills.length > 0) {
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'Skills available from race guild: <br>';
      
      skills.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        guildInfo.innerHTML = guildInfo.innerHTML + '<form name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'No skills available from race guild. <br>';
    }
    
    // ja sama spelleille:
    // jos löytyi skillejä, niin kirjoita ne
    if (spells.length > 0) {
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'Spells available from race guild: <br>';
      
      spells.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        console.log('filtNums: ', filteredNumbers);
        guildInfo.innerHTML = guildInfo.innerHTML + '<form class= "skills" name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + 'No spells available from race guild. <br>';
    }  
  
}


*/