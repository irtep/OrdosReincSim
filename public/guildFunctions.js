// tämä selvittää onko kyseessä skilli vai spelli
function checkIfSkillOrSpell(target) {
  const skillit = document.getElementsByClassName('totalSkillz');
  const spellit = document.getElementsByClassName('totalSpellz');
  let foundIn = null;
  
  for (let i = 0; i < skillit.length; i++) {
    const etsitaan = skillit[i].id.replace(/total/gi,'');
    
    if (target === etsitaan) { foundIn = 'skills'}
  }
  
  for (let i = 0; i < spellit.length; i++) {
    const etsitaan = spellit[i].id.replace(/total/gi,'');
    
    if (target === etsitaan) { foundIn = 'spells'}
  }
  
  return foundIn;
}


function calcTotalExpsSpent() {
  const skillit = document.getElementsByClassName('totalSkillz');
  const spellit = document.getElementsByClassName('totalSpellz');
  const totalSkills = document.getElementById('totalSkillsCost');
  const totalSpells = document.getElementById('totalSpellsCost');
  let calculatedSkills = 0; let calculatedSpells = 0;
  
  // skillit
  for (let i = 0; i < skillit.length; i++) { calculatedSkills += parseInt(skillit[i].innerHTML); }
  // spellit
  for (let i = 0; i < spellit.length; i++) { calculatedSpells += parseInt(spellit[i].innerHTML); }
  
  totalSkills.innerHTML = calculatedSkills;
  totalSpells.innerHTML = calculatedSpells;
}
// tällä voi laskea exp..
function calcSpentExpGuilds(ide, val) {
  // valittu race
  const selectedRace = ExpKerroin.filter( rotu => rotu.name === document.getElementById('Race_Selection').value);
  // taiat ja taiot lista boxeista johon tulee expCosti
  const skillsSpells = document.getElementsByClassName('totalSS');
  let price = null;
  const costApuTaulukko = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
  //const kaikki = taiat.concat(taidot);
  // poistaa sanat spell, skill ja percent eli jää vaan skillin/spellin nimi ilman spacea
  const toSearch = ide.replace(/skill|spell|Percent/gi, ''); // (/\s/g, '');
  // etsitään skilli costineen
  for (let ix = 0; ix < Human.length; ix++) { 
  //const skillTaiSpell = Human.filter( (taito) => {
    const spacetPois = Human[ix][0].replace(/\s/g, '');
    
    if (spacetPois === toSearch) {
      let hitti = null; // monesko sarake oikeassa paikassa
      let oikeaLokero = null;
      let sarake = ix;
      
      for (let i = 0; i < costApuTaulukko.length; i++) {
        
        if (costApuTaulukko[i] == val) { hitti = i; }
      }
      
      // jos ei ole tasaluku
      if (hitti === null) {
          /*
  var TempApuJako1 = TempApuNro1 / 5;
tosta tulee desimaali luku ja sit toinen joka luuraa sen desimaalit erikseen
var TempApuDesimaali1 = TempApuJako1 - Math.round(TempApuJako1);
if ( TempApuDesimaali1 > 0 )
					{
						TempApuSkilli2 = TempApuSkilli2 * (TempApuDesimaali1 + 1);
0					}
  */
        
      } 
      
      // etsitään oikea lokero
      for (let ii = 0; ii < skillsSpells.length; ii++) {
        const etsittava = skillsSpells[ii].id.replace(/total/gi, '');
        
        if (etsittava === toSearch) { 
          
          oikeaLokero = skillsSpells[ii];
          const skillOrSpell = checkIfSkillOrSpell(toSearch);
          let tulostettavaNumero = null;
          
          // jos taulukon tasanumeroita
          if (hitti !== null) {
            // onko numero?
            const onkoNumero = Number.isInteger(Human[sarake][hitti]);
            // jos numero, niin kerrotaan racen kertoimilla
            if (onkoNumero){

              if (skillOrSpell === 'skills') {

                tulostettavaNumero = Math.round(Human[sarake][hitti] * selectedRace[0].skill);
              } else {

                tulostettavaNumero = Math.round(Human[sarake][hitti] * selectedRace[0].spell);
              }
            }
            // jos numero, niin lokeroon, jos ei niin 0
            onkoNumero ? oikeaLokero.innerHTML = tulostettavaNumero : oikeaLokero.innerHTML = 0;

            // lasketaan kaikki
            calcTotalExpsSpent();
            return;            
          } else {
            const jalkimmainenNumero = val[1];
            const pyoristetty = parseInt(val[0] + '0');
            
            // selvitetään lähimmät taulukossa olevat costit
            for (let i = 0; i < costApuTaulukko.length; i++) {
              
              if (costApuTaulukko[i] == pyoristetty) { hitti = i; }
           }
           const erotus = Human[sarake][hitti+1] - Human[sarake][hitti];
           const jaettu = erotus / 5;
           const arvio = Human[sarake][hitti] + (jaettu * jalkimmainenNumero);
           
           if (skillOrSpell === 'skills') {

             tulostettavaNumero = Math.round(arvio * selectedRace[0].skill);
           } else {

             tulostettavaNumero = Math.round(arvio * selectedRace[0].spell);
           }
           oikeaLokero.innerHTML = tulostettavaNumero; 
           // lasketaan kaikki
           calcTotalExpsSpent();
         }
        }
      } 
    } 
  } 
}

// jos vaihtuu guild levelien määrä ni tää aktivoituu.. kutsutaan update_levels() raceBackgroundGuild.js kohdasta,
// samoin check_requirements kutsuu tän
// eli tästä alkaa kaikki functiot täällä:
function changeInGuildLvls(leveli, kohde) {
  // etsii kaikki jotka on class "guildSelector:"
  const kiltat = document.getElementsByClassName('guildSelector');
  const selectedGuild = document.getElementById('Guild'+kohde+'_Selection').value;
  // paikka mihin laitetaan tieto:
  const guildInfo = document.getElementById('Kiltat');
  
  // tyhjäksi vanha:
  guildInfo.innerHTML = '';
  
  // tee jokaiselle valitulle boxi:
  for (let i = 0; i < kiltat.length; i++) {
    
    if (kiltat[i].value !== 'None') {
      showSkillsAndSpells(kiltat[i].value, i+1, i);
    }
  }
}

// näyttää skillit ja spellit mitä voi treenata
// kutsutaan racebackgroundguilds.js kohdasta, update_jotain tms kohdasta, heti alusta
function showSkillsAndSpells(kilta, kohta, mones) {
  // paikka mihin laitetaan tieto:
  const guildInfo = document.getElementById('Kiltat');
  const findRightSelection = 'Guild'+kohta+'_lvls_Selection';
  const selectedLevelsPlace = document.getElementById(findRightSelection);
  const selectedLevels = selectedLevelsPlace.value;
  const skills = [];
  const spells = [];
  // haetaan kilta:
  const selectedGuild = allGuilds.filter(guild => kilta === guild.shortName);
  const skillsAndSpells = selectedGuild[0].mayTrain[0].skillsAndSpells;
  let firstRow = null; // ensimmäiset rivit
  let lastRow = null;  // päättävät rivit
  // if sille tuleeko vaakaviiva vai ei:
  if (mones === 0) {
    // ensimmäinen
    firstRow = '<table class= "guildTable">'+ 
    '<tr><td><span class= "bold_heading strongFont">'+ selectedGuild[0].longName + '</span></td></tr>'+
  '<tr><td>'+ 
    '<table><tr><td class= "strongFont">Skills</td><td></td><td class= "strongFont">Exp</td><td class= "strongFont">'+
    'Spells</td><td></td><td class= "strongFont">Exp</td></tr>'; 
    
    lastRow = '<tr><td></td><td class = "strongFont">Total cost</td>'+
        '<td><div id= "totalSkillsCost" class= "total_text_box">0</div></td><td></td><td class = "strongFont">Total cost</td>'+
        '<td><div id= "totalSpellsCost" class= "total_text_box">0</div></td></tr>'+
        '</td></tr></table></td></tr></table><br>'; 
  } else {
    // loput
    firstRow = '<table class= "guildTable vaakaviiva">'+ 
    '<tr><td><span class= "bold_heading strongFont">'+ selectedGuild[0].longName + '</span></td></tr>'+
  '<tr><td>'+ 
    '<table><tr><td class= "strongFont">Skills</td><td></td><td class= "strongFont">Exp</td><td class= "strongFont">'+
    'Spells</td><td></td><td class= "strongFont">Exp</td></tr>'; 
    
    lastRow = '</td></tr></table></td></tr></table><br>'; 
  }
  
  // montako riviä tarvitaan:
  let rowNumber = null;  
  let readyRow = null;
    
  // etsi skillit ja spellit: 
  for (let ii = 0; ii < skillsAndSpells.length; ii++) {
      
    // jos skilli, niin skilleihin, jos ei niin spelleihin
    skillsAndSpells[ii].skill ? skills.push(skillsAndSpells[ii]) : spells.push(skillsAndSpells[ii]);
  }
  
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
 
      // skillin nimi:
      const nameOfSelectOpt = 'skillPercent'+withoutSpaces;
      skillOnTurn = nameOfSelectOpt;
                  
      skillRow = '<tr><td class = "skill_name_text_box" id= "nameOfSkill'+withoutSpaces+'">' + skills[i].name + '</td><td>'+ 
        // skillin prosenttivalikko:
        '<select id= "'+nameOfSelectOpt+'" onchange= "calcSpentExpGuilds(this.id, this.value)" class= "select_number_box skill_percents"><option>0</option></select></td>'+
        // expCost box
        '<td><div id= "total'+withoutSpaces+'" class= "total_text_box totalSS totalSkillz">0</div></td>';
    } else {
      
      skillRow = '<tr><td></td><td></td><td></td>';
    }
    
    // tee spellirivi:  
    if (spells.length > i) { 
    
      // poistaa spacet nimestä
      const withoutSpacesSpell = spells[i].name.replace(/\s/g, '');
  
      // spellin nimi:
      const nameOfSelectOpt = 'spellPercent'+withoutSpacesSpell;
      spellOnTurn = nameOfSelectOpt;
      
      spellRow = '<td class= "skill_name_text_box" id= "nameOfSkill'+withoutSpacesSpell+'">' + spells[i].name + '</td><td>'+ 
        // spellin prosenttivalikko:
        '<select id= "'+nameOfSelectOpt+'" onchange= "calcSpentExpGuilds(this.id, this.value)" class= "select_number_box spell_percents"><option>0</option></select></td>'+
        // expCost box
        '<td><div id= "total'+withoutSpacesSpell+'" class= "total_text_box totalSS totalSpellz">0</div></td></tr>';
    } else { 
      
      spellRow = '</tr>';
    }
    
    // eka rivi ekassa loopissa
    if (i === 0) {
      
      readyRow = firstRow + skillRow + spellRow;
    } else {
      
      // lisätään rivi:
      readyRow += skillRow + spellRow;
    }  

    // i < rowNumber
    // jos viimenen niin laitetaan vielä viimenen rivi:
    if (i + 1 === rowNumber) {
        
        readyRow += lastRow;
    }
  }
  // lisätään vielä viimenen rivi: 
  guildInfo.innerHTML += readyRow;
  
  // lisätään rullavalikoihin numerot:
  const skillPercs = document.getElementsByClassName('skill_percents');
  const spellPercs = document.getElementsByClassName('spell_percents');
  
  // skillit:
  for (let i = 0; i < skills.length; i++) {
    
    // poista isommat kuin mikä maximi mitä saa treenata    
    filteredSkillNumbers = numbers.filter( numero => numero <= skills[i].levels[selectedLevels-1]);
    // lisää max prosentti, jos ei ole jo.
    if (filteredSkillNumbers[filteredSkillNumbers.length-1] !== skills[i].levels[selectedLevels-1]) {filteredSkillNumbers.push(skills[i].levels[selectedLevels-1]);}  
    
    // numero optionit skilleihin:
    filteredSkillNumbers.forEach( (numbero) => {
      const o = document.createElement('option');
          
      o.text = numbero;
      o.value = numbero;
      document.getElementById(skillPercs[i].id).appendChild(o);
    });      
  }
  // spellit:
  for (let i = 0; i < spells.length; i++) {
    
    // poista isommat kuin mikä maximi mitä saa treenata    
    filteredSpellNumbers = numbers.filter( numero => numero <= spells[i].levels[selectedLevels-1]);
    // lisää max prosentti, jos ei ole jo.
    if (filteredSpellNumbers[filteredSpellNumbers.length-1] !== spells[i].levels[selectedLevels-1]) {filteredSpellNumbers.push(spells[i].levels[selectedLevels-1]);}  
    
    // numero optionit spelleihin:
    filteredSpellNumbers.forEach( (numbero) => {
      const o = document.createElement('option');
          
      o.text = numbero;
      o.value = numbero;
      document.getElementById(spellPercs[i].id).appendChild(o);
    });      
  }  
}

  