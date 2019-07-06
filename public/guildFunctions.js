// jos vaihtuu valitut guild levelit
/*
"Guild12_Selection"
"Guild12_lvls_Selection"

activities.addEventListener("change", function() {
*/

// tällä voi laskea exp..
function calcSpentExpGuilds() {
  
}

function changeInGuildLvls(leveli, kohde) {
  const selectedGuild = document.getElementById('Guild'+kohde+'_Selection').value;
  
  showSkillsAndSpells(selectedGuild, kohde);
  console.log('cIGL ', selectedGuild, kohde);
}

// näyttää skillit ja spellit mitä voi treenata
function showSkillsAndSpells(kilta, kohta) {
  // paikka mihin laitetaan tieto:
  const guildInfo = document.getElementById('guildInfot');
  const guildName = document.getElementById('guildName');
  const findRightSelection = 'Guild'+kohta+'_lvls_Selection';
  const selectedLevelsPlace = document.getElementById(findRightSelection);
  const selectedLevels = selectedLevelsPlace.value;
  
  // haetaan kilta:
  const selectedGuild = allGuilds.filter(guild => kilta === guild.shortName);
  
  // laitetaan tiedot:
  guildName.innerHTML = '<tr><td><b><span class= "bold_heading">'+ selectedGuild[0].longName+ '</span></b></td></tr>';
  
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + '<tr><td><b><span class= "first_column first_row">Skills: </b><br></span></td></tr>';
      
      skills.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        guildInfo.innerHTML = guildInfo.innerHTML + '<tr><td><form class= "skills first_column" name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
          '<select class="select_number_box" id= "skillPercent'+skill.name+'" onchange= "calcSpentExpGuilds()">'+ 
            '<option>0</option>'+
          '</select>'+
          '</form></td></tr>';
        
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + '<tr class= "first_column"><td>No skills available from guild. </td></tr>';
    }
    
    // ja sama spelleille:
    // jos löytyi skillejä, niin kirjoita ne
    if (spells.length > 0) {
      
      guildInfo.innerHTML = guildInfo.innerHTML + '<tr class= "fourth_column"><td><b>Spells: </b></tr></td>';
      
      spells.forEach( (skill) => {
        const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        
        // poista isommat kuin mikä maximi mitä saa treenata
        const filteredNumbers = numbers.filter( numero => numero <= skill.levels[selectedLevels-1]);
        
        // lisää max prosentti, jos ei ole jo.
        if (filteredNumbers[filteredNumbers.length-1] !== skill.levels[selectedLevels-1]) {filteredNumbers.push(skill.levels[selectedLevels-1]);}  
        
        guildInfo.innerHTML = guildInfo.innerHTML + '<tr><td><form class= "skills fourth_column" name= "rGs'+ skill.name + '" id= "rGs'+ skill.name + '">'+ skill.name+ ' '+
          '<select class="select_number_box" id= "skillPercent'+skill.name+'" onchange= "calcSpentExpGuilds()">'+ 
            '<option>0</option>'+
          '</select>'+
          '</form></td></tr>';
        
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
      
      guildInfo.innerHTML = guildInfo.innerHTML + '<span class= "fourth_column>"No spells available from guild. </span><br>';
    }  
}

