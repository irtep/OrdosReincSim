
// tällä voi laskea exp..
function calcSpentExpGuilds() {
  
}

// jos vaihtuu guild levelien määrä ni tää aktivoituu.. callattaa update_levels() raceBackgroundGuild.js kohdasta
function changeInGuildLvls(leveli, kohde) {
  const selectedGuild = document.getElementById('Guild'+kohde+'_Selection').value;
  
  showSkillsAndSpells(selectedGuild, kohde);
}

// näyttää skillit ja spellit mitä voi treenata
// kutsutaan racebackgroundguilds.js kohdasta, update_jotain tms kohdasta, heti alusta
function showSkillsAndSpells(kilta, kohta) {
  // paikka mihin laitetaan tieto:
  const guildInfo = document.getElementById('table1');
  const guildName = document.getElementById('guildName');
  const findRightSelection = 'Guild'+kohta+'_lvls_Selection';
  const selectedLevelsPlace = document.getElementById(findRightSelection);
  const selectedLevels = selectedLevelsPlace.value;
  
  // haetaan kilta:
  const selectedGuild = allGuilds.filter(guild => kilta === guild.shortName);
  
  //  uusi tablepohjanen: guildInfo taulukon sisaan
  const skills = [];
  const spells = [];
  const skillsAndSpells = selectedGuild[0].mayTrain[0].skillsAndSpells;
  
  // montako riviä tarvitaan:
  let rowNumber = null;    
    
  // etsi skillit ja spellit: 
  for (let ii = 0; ii < skillsAndSpells.length; ii++) {
      
    // jos skilli, niin skilleihin, jos ei niin spelleihin
    skillsAndSpells[ii].skill ? skills.push(skillsAndSpells[ii]) : spells.push(skillsAndSpells[ii]);
  }
  
  // ensiksi otsikot:
  guildInfo.innerHTML = '<tr><td><span class= "bold_heading">'+ selectedGuild[0].longName + '</span></td></tr>'+
  '<tr><td>Skills</td><td></td><td>Exp</td><td>Spells</td><td></td><td>Exp</td>';
  
  // katotaas monta riviä tarvitaan:
  if (skills.length >= spells.length) { rowNumber = skills.length; } else { rowNumber = spells.length; }  
  
  let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  let filteredSkillNumbers = null;
  let filteredSpellNumbers = null;
  let skillOnTurn = null;
  let spellOnTurn = null;
  
  // sitten kirjotetaan skillit
  for (let i = 0; i < rowNumber; i++) {
    
    // rivi kerrallaan:
    let skillRow = ''; let spellRow = '';
    
    // tee skillirivi: 
    if (skills.length > i) { 
      
      // poistaa spacet nimestä
      const withoutSpaces = skills[i].name.replace(/\s/g, '');
      
      // poista isommat kuin mikä maximi mitä saa treenata
      filteredSkillNumbers = numbers.filter( numero => numero <= skills[i].levels[selectedLevels-1]);
      
      // lisää max prosentti, jos ei ole jo.
      if (filteredSkillNumbers[filteredSkillNumbers.length-1] !== skills[i].levels[selectedLevels-1]) {filteredSkillNumbers.push(skills[i].levels[selectedLevels-1]);}  
      
      // skillin nimi:
      const nameOfSelectOpt = 'skillPercent'+withoutSpaces;
      skillOnTurn = nameOfSelectOpt;
      
      skillRow = '<tr><td>' + skills[i].name + '</td><td>'+ 
        // skillin prosenttivalikko:
        '<select id= "'+nameOfSelectOpt+'" onchange= "calcSpentExpGuilds()"><option>0</option></select></td><td></td>';
    }
    
    // tee spellirivi:  
    if (spells.length > i) { 
    
      // poistaa spacet nimestä
      const withoutSpacesSpell = spells[i].name.replace(/\s/g, '');
      
      // poista isommat kuin mikä maximi mitä saa treenata
      filteredSpellNumbers = numbers.filter( numero => numero <= spells[i].levels[selectedLevels-1]);
      
      // lisää max prosentti, jos ei ole jo.
      if (filteredSpellNumbers[filteredSpellNumbers.length-1] !== spells[i].levels[selectedLevels-1]) {filteredSpellNumbers.push(spells[i].levels[selectedLevels-1]);}  
      
      // spellin nimi:
      const nameOfSelectOpt = 'spellPercent'+withoutSpacesSpell;
      spellOnTurn = nameOfSelectOpt;
      
      spellRow = '<td>' + spells[i].name + '</td><td>'+ 
        // spellin prosenttivalikko:
        '<select id= "'+nameOfSelectOpt+'" onchange= "calcSpentExpGuilds()"><option>0</option></select></td><td></td></tr>';
    } else { 
      
      spellRow = '</tr>'
    }
    
    // lisätään rivi:
    guildInfo.innerHTML = guildInfo.innerHTML + skillRow + spellRow;
    
    // numero optionit skilleihin:
        filteredSkillNumbers.forEach( (numbero) => {
        const o = document.createElement('option');
          
        o.text = numbero;
        o.value = numbero;
        document.getElementById(skillOnTurn).appendChild(o);
      });
    // ja spelleihin
        filteredSkillNumbers.forEach( (numbero) => {
        const o = document.createElement('option');
          
        o.text = numbero;
        o.value = numbero;
        document.getElementById(spellOnTurn).appendChild(o);
      });
  }
}
  