 // #######################
 // # Globaalit muuttujat #
 // ####################### 
 // Muutama valikoitu muuttuja
 var Valittu_Syntyma = "Mortal";
 var Valittu_Rotu_Leveli = 5; 
 var Valittu_Rotu = "Barsoomian";
 var Valittu_Tausta = "Civilized";
 var Valittu_Kilta = "None";
 var Valittu_Kilta_Leveli = 0;
 var Valittu_Kilta_Kohta = 1;
 var Levelien_Kokonaismaara = 0;
 
 // ###################################
 // # Funktio päivittää rotulistan    #
 // # kun Rebirth valintaa vaihdetaan #
 // ###################################
 function Update_RaceList()
 {
  Valittu_Syntyma = document.getElementById('Rebirth_Selection')[document.getElementById('Rebirth_Selection').selectedIndex].value;
  // Mortal on valittu
  if ( Valittu_Syntyma == "Mortal" )
  {
   var apu1 = 0;
   apu1 = document.getElementById('Race_Selection').options.length;
   document.getElementById('Race_guild_levels_Selection').options.length = 0; 
   document.getElementById('Race_guild_levels_Selection').options[0] = new Option('5','5');
   // Poistetaan rodut ja asetetaan perus rodut
   document.getElementById('Race_Selection').options.length = 0;
   document.getElementById('Race_Selection').options[0] = new Option('Barsoomian','Barsoomian');
   document.getElementById('Race_Selection').options[1] = new Option('Brownie','Brownie');
   document.getElementById('Race_Selection').options[2] = new Option('Catfolk','Catfolk');
   document.getElementById('Race_Selection').options[3] = new Option('Centaur','Centaur');
   document.getElementById('Race_Selection').options[4] = new Option('Cromagnon','Cromagnon');
   document.getElementById('Race_Selection').options[5] = new Option('Cyclops','Cyclops');
   document.getElementById('Race_Selection').options[6] = new Option('Drow','Drow');
   document.getElementById('Race_Selection').options[7] = new Option('Duck','Duck');
   document.getElementById('Race_Selection').options[8] = new Option('Dwarf','Dwarf');
   document.getElementById('Race_Selection').options[9] = new Option('Elf','Elf');
   document.getElementById('Race_Selection').options[10] = new Option('Ent','Ent');
   document.getElementById('Race_Selection').options[11] = new Option('Giant','Giant');
   document.getElementById('Race_Selection').options[12] = new Option('Gnoll','Gnoll');
   document.getElementById('Race_Selection').options[13] = new Option('Gnome','Gnome');
   document.getElementById('Race_Selection').options[14] = new Option('Hobbit','Hobbit');
   document.getElementById('Race_Selection').options[15] = new Option('Human','Human');
   document.getElementById('Race_Selection').options[16] = new Option('Kobold','Kobold');
   document.getElementById('Race_Selection').options[17] = new Option('Leech','Leech');
   document.getElementById('Race_Selection').options[18] = new Option('Lizardman','Lizardman');
   document.getElementById('Race_Selection').options[19] = new Option('Merfolk','Merfolk');
   document.getElementById('Race_Selection').options[20] = new Option('Minotaur','Minotaur');
   document.getElementById('Race_Selection').options[21] = new Option('Moomin','Moomin');
   document.getElementById('Race_Selection').options[22] = new Option('Ogre','Ogre');
   document.getElementById('Race_Selection').options[23] = new Option('Orc','Orc');
   document.getElementById('Race_Selection').options[24] = new Option('Penguin','Penguin');
   document.getElementById('Race_Selection').options[25] = new Option('Satyr','Satyr');
   document.getElementById('Race_Selection').options[26] = new Option('Skeleton','Skeleton');
   document.getElementById('Race_Selection').options[27] = new Option('Sprite','Sprite');
   document.getElementById('Race_Selection').options[28] = new Option('Thrikhren','Thrikhren');
   document.getElementById('Race_Selection').options[29] = new Option('Tinmen','Tinmen');
   document.getElementById('Race_Selection').options[30] = new Option('Troll','Troll');
   document.getElementById('Race_Selection').options[31] = new Option('Valar','Valar');
   document.getElementById('Race_Selection').options[32] = new Option('Wolfman','Wolfman');
   document.getElementById('Race_Selection').options[33] = new Option('Zombie','Zombie');
  }

  // Elder on valittu
  if ( Valittu_Syntyma == "Elder" )
  {
   document.getElementById('Race_guild_levels_Selection').options.length = 0; 
   document.getElementById('Race_guild_levels_Selection').options[0] = new Option('5','5');
   document.getElementById('Race_guild_levels_Selection').options[1] = new Option('4','4');
   // Poistetaan rodut ja asetetaan perus rodut + Elder rodut
   document.getElementById('Race_Selection').options.length = 0;
   document.getElementById('Race_Selection').options[0] = new Option('Barsoomian','Barsoomian');
   document.getElementById('Race_Selection').options[1] = new Option('Brownie','Brownie');
   document.getElementById('Race_Selection').options[2] = new Option('Catfolk','Catfolk');
   document.getElementById('Race_Selection').options[3] = new Option('Centaur','Centaur');
   document.getElementById('Race_Selection').options[4] = new Option('Cromagnon','Cromagnon');
   document.getElementById('Race_Selection').options[5] = new Option('Cyclops','Cyclops');
   document.getElementById('Race_Selection').options[6] = new Option('Drow','Drow');
   document.getElementById('Race_Selection').options[7] = new Option('Duck','Duck');
   document.getElementById('Race_Selection').options[8] = new Option('Duergar','Duergar');
   document.getElementById('Race_Selection').options[9] = new Option('Dwarf','Dwarf');
   document.getElementById('Race_Selection').options[10] = new Option('Elf','Elf');
   document.getElementById('Race_Selection').options[11] = new Option('Ent','Ent');
   document.getElementById('Race_Selection').options[12] = new Option('Gargoyle','Gargoyle');
   document.getElementById('Race_Selection').options[13] = new Option('Giant','Giant');
   document.getElementById('Race_Selection').options[14] = new Option('Gnoll','Gnoll');
   document.getElementById('Race_Selection').options[15] = new Option('Gnome','Gnome');
   document.getElementById('Race_Selection').options[16] = new Option('Hobbit','Hobbit');
   document.getElementById('Race_Selection').options[17] = new Option('Human','Human');
   document.getElementById('Race_Selection').options[18] = new Option('Kobold','Kobold');
   document.getElementById('Race_Selection').options[19] = new Option('Leech','Leech');
   document.getElementById('Race_Selection').options[20] = new Option('Leprechaun','Leprechaun');
   document.getElementById('Race_Selection').options[21] = new Option('Lich','Lich');
   document.getElementById('Race_Selection').options[22] = new Option('Lizardman','Lizardman');
   document.getElementById('Race_Selection').options[23] = new Option('Merfolk','Merfolk');
   document.getElementById('Race_Selection').options[24] = new Option('Minotaur','Minotaur');
   document.getElementById('Race_Selection').options[25] = new Option('Moomin','Moomin');
   document.getElementById('Race_Selection').options[26] = new Option('Ogre','Ogre');
   document.getElementById('Race_Selection').options[27] = new Option('Orc','Orc');
   document.getElementById('Race_Selection').options[28] = new Option('Penguin','Penguin');
   document.getElementById('Race_Selection').options[29] = new Option('Satyr','Satyr');
   document.getElementById('Race_Selection').options[30] = new Option('Skeleton','Skeleton');
   document.getElementById('Race_Selection').options[31] = new Option('Sprite','Sprite');
   document.getElementById('Race_Selection').options[32] = new Option('Thrikhren','Thrikhren');
   document.getElementById('Race_Selection').options[33] = new Option('Tinmen','Tinmen');
   document.getElementById('Race_Selection').options[34] = new Option('Troll','Troll');
   document.getElementById('Race_Selection').options[35] = new Option('Valar','Valar');
   document.getElementById('Race_Selection').options[36] = new Option('Wolfman','Wolfman');
   document.getElementById('Race_Selection').options[37] = new Option('Zombie','Zombie');
  }

  // Ancient on valittu
  if ( Valittu_Syntyma == "Ancient" )
  {
   document.getElementById('Race_guild_levels_Selection').options.length = 0; 
   document.getElementById('Race_guild_levels_Selection').options[0] = new Option('5','5');
   document.getElementById('Race_guild_levels_Selection').options[1] = new Option('4','4');
   document.getElementById('Race_guild_levels_Selection').options[2] = new Option('3','3');
   // Poistetaan rodut ja asetetaan perus rodut + Elder rodut + Ancient rodut
   document.getElementById('Race_Selection').options.length = 0;
   document.getElementById('Race_Selection').options[0] = new Option('Barsoomian','Barsoomian');
   document.getElementById('Race_Selection').options[1] = new Option('Brownie','Brownie');
   document.getElementById('Race_Selection').options[2] = new Option('Catfolk','Catfolk');
   document.getElementById('Race_Selection').options[3] = new Option('Centaur','Centaur');
   document.getElementById('Race_Selection').options[4] = new Option('Cromagnon','Cromagnon');
   document.getElementById('Race_Selection').options[5] = new Option('Cyclops','Cyclops');
   document.getElementById('Race_Selection').options[6] = new Option('Demon','Demon');
   document.getElementById('Race_Selection').options[7] = new Option('Draconian','Draconian');
   document.getElementById('Race_Selection').options[8] = new Option('Drow','Drow');
   document.getElementById('Race_Selection').options[9] = new Option('Duck','Duck');
   document.getElementById('Race_Selection').options[10] = new Option('Duergar','Duergar');
   document.getElementById('Race_Selection').options[11] = new Option('Dwarf','Dwarf');
   document.getElementById('Race_Selection').options[12] = new Option('Elf','Elf');
   document.getElementById('Race_Selection').options[13] = new Option('Ent','Ent');
   document.getElementById('Race_Selection').options[14] = new Option('Gargoyle','Gargoyle');
   document.getElementById('Race_Selection').options[15] = new Option('Giant','Giant');
   document.getElementById('Race_Selection').options[16] = new Option('Gnoll','Gnoll');
   document.getElementById('Race_Selection').options[17] = new Option('Gnome','Gnome');
   document.getElementById('Race_Selection').options[18] = new Option('Hobbit','Hobbit');
   document.getElementById('Race_Selection').options[19] = new Option('Human','Human');
   document.getElementById('Race_Selection').options[20] = new Option('Kobold','Kobold');
   document.getElementById('Race_Selection').options[21] = new Option('Leech','Leech');
   document.getElementById('Race_Selection').options[22] = new Option('Leprechaun','Leprechaun');
   document.getElementById('Race_Selection').options[23] = new Option('Lich','Lich');
   document.getElementById('Race_Selection').options[24] = new Option('Lizardman','Lizardman');
   document.getElementById('Race_Selection').options[25] = new Option('Merfolk','Merfolk');
   document.getElementById('Race_Selection').options[26] = new Option('Minotaur','Minotaur');
   document.getElementById('Race_Selection').options[27] = new Option('Moomin','Moomin');
   document.getElementById('Race_Selection').options[28] = new Option('Ogre','Ogre');
   document.getElementById('Race_Selection').options[29] = new Option('Orc','Orc');
   document.getElementById('Race_Selection').options[30] = new Option('Penguin','Penguin');
   document.getElementById('Race_Selection').options[31] = new Option('Satyr','Satyr');
   document.getElementById('Race_Selection').options[32] = new Option('Skeleton','Skeleton');
   document.getElementById('Race_Selection').options[33] = new Option('Sprite','Sprite');
   document.getElementById('Race_Selection').options[34] = new Option('Thrikhren','Thrikhren');
   document.getElementById('Race_Selection').options[35] = new Option('Tinmen','Tinmen');
   document.getElementById('Race_Selection').options[36] = new Option('Troll','Troll');
   document.getElementById('Race_Selection').options[37] = new Option('Valar','Valar');
   document.getElementById('Race_Selection').options[38] = new Option('Vampire','Vampire');
   document.getElementById('Race_Selection').options[39] = new Option('Wolfman','Wolfman');
   document.getElementById('Race_Selection').options[40] = new Option('Zombie','Zombie');
  }

  // Eternal on valittu
  if ( Valittu_Syntyma == "Eternal" )
  {
   document.getElementById('Race_guild_levels_Selection').options.length = 0; 
   document.getElementById('Race_guild_levels_Selection').options[0] = new Option('5','5');
   document.getElementById('Race_guild_levels_Selection').options[1] = new Option('4','4');
   document.getElementById('Race_guild_levels_Selection').options[2] = new Option('3','3');
   document.getElementById('Race_guild_levels_Selection').options[3] = new Option('2','2');
   // Poistetaan rodut ja asetetaan perus rodut + Elder rodut + Ancient rodut + Eternal rodut
   document.getElementById('Race_Selection').options.length = 0;
   document.getElementById('Race_Selection').options[0] = new Option('Barsoomian','Barsoomian');
   document.getElementById('Race_Selection').options[1] = new Option('Brownie','Brownie');
   document.getElementById('Race_Selection').options[2] = new Option('Catfolk','Catfolk');
   document.getElementById('Race_Selection').options[3] = new Option('Centaur','Centaur');
   document.getElementById('Race_Selection').options[4] = new Option('Cromagnon','Cromagnon');
   document.getElementById('Race_Selection').options[5] = new Option('Cyclops','Cyclops');
   document.getElementById('Race_Selection').options[6] = new Option('Demon','Demon');
   document.getElementById('Race_Selection').options[7] = new Option('Doppelganger','Doppelganger');
   document.getElementById('Race_Selection').options[8] = new Option('Draconian','Draconian');
   document.getElementById('Race_Selection').options[9] = new Option('Drow','Drow');
   document.getElementById('Race_Selection').options[10] = new Option('Duck','Duck');
   document.getElementById('Race_Selection').options[11] = new Option('Duergar','Duergar');
   document.getElementById('Race_Selection').options[12] = new Option('Dwarf','Dwarf');
   document.getElementById('Race_Selection').options[13] = new Option('Elf','Elf');
   document.getElementById('Race_Selection').options[14] = new Option('Ent','Ent');
   document.getElementById('Race_Selection').options[15] = new Option('Gargoyle','Gargoyle');
   document.getElementById('Race_Selection').options[16] = new Option('Giant','Giant');
   document.getElementById('Race_Selection').options[17] = new Option('Gnoll','Gnoll');
   document.getElementById('Race_Selection').options[18] = new Option('Gnome','Gnome');
   document.getElementById('Race_Selection').options[19] = new Option('Hobbit','Hobbit');
   document.getElementById('Race_Selection').options[20] = new Option('Human','Human');
   document.getElementById('Race_Selection').options[21] = new Option('Kobold','Kobold');
   document.getElementById('Race_Selection').options[22] = new Option('Leech','Leech');
   document.getElementById('Race_Selection').options[23] = new Option('Leprechaun','Leprechaun');
   document.getElementById('Race_Selection').options[24] = new Option('Lich','Lich');
   document.getElementById('Race_Selection').options[25] = new Option('Lizardman','Lizardman');
   document.getElementById('Race_Selection').options[26] = new Option('Merfolk','Merfolk');
   document.getElementById('Race_Selection').options[27] = new Option('Minotaur','Minotaur');
   document.getElementById('Race_Selection').options[28] = new Option('Moomin','Moomin');
   document.getElementById('Race_Selection').options[29] = new Option('Ogre','Ogre');
   document.getElementById('Race_Selection').options[30] = new Option('Orc','Orc');
   document.getElementById('Race_Selection').options[31] = new Option('Penguin','Penguin');
   document.getElementById('Race_Selection').options[32] = new Option('Satyr','Satyr');
   document.getElementById('Race_Selection').options[33] = new Option('Shadow','Shadow');
   document.getElementById('Race_Selection').options[34] = new Option('Skeleton','Skeleton');
   document.getElementById('Race_Selection').options[35] = new Option('Sprite','Sprite');
   document.getElementById('Race_Selection').options[36] = new Option('Thrikhren','Thrikhren');
   document.getElementById('Race_Selection').options[37] = new Option('Tinmen','Tinmen');
   document.getElementById('Race_Selection').options[38] = new Option('Titan','Titan');
   document.getElementById('Race_Selection').options[39] = new Option('Troll','Troll');
   document.getElementById('Race_Selection').options[40] = new Option('Valar','Valar');
   document.getElementById('Race_Selection').options[41] = new Option('Vampire','Vampire');
   document.getElementById('Race_Selection').options[42] = new Option('Wolfman','Wolfman');
   document.getElementById('Race_Selection').options[43] = new Option('Zombie','Zombie');
  }
  // Kutsutaan Update_RaceInfo() funktiota joka päivittää rodun statit
  Update_RaceInfo();
  // Kutsutaan Update_RaceGuild_Skills_Spells() funtiota joka päivittää rotukillan skills & spells
  Update_RaceGuild_Skills_Spells();
  // Kutsutaan Calculate_Levels() funktiota joka laskee kokonais levelit
  Calculate_Levels(0,1);
 }
 
 // ################################
 // # Funktio päivittää rotu infon #
 // # kun Race_Selection valintaa  #
 // # vaihdetaan (Races = data.js) #
 // ################################
 function Update_RaceInfo()
 {
  Valittu_Rotu = document.getElementById('Race_Selection')[document.getElementById('Race_Selection').selectedIndex].value;
  document.getElementById('TotalsTrainingPoints').innerHTML = 0;
  for (var TempLooppi = 0; TempLooppi < Races.length; TempLooppi++)
  {
   if (Valittu_Rotu === Races[TempLooppi].name)
   {
    document.getElementById('Race_Name').innerHTML = Races[TempLooppi].name;
    document.getElementById('Race_Con_Min').innerHTML = Races[TempLooppi].constitution_min;
    document.getElementById('Race_Con_Max').innerHTML = Races[TempLooppi].constitution_max;
    document.getElementById('Race_Str_Min').innerHTML = Races[TempLooppi].strength_min;
    document.getElementById('Race_Str_Max').innerHTML = Races[TempLooppi].strength_max;
	  document.getElementById('Race_Int_Min').innerHTML = Races[TempLooppi].intelligence_min;
    document.getElementById('Race_Int_Max').innerHTML = Races[TempLooppi].intelligence_max;
	  document.getElementById('Race_Wis_Min').innerHTML = Races[TempLooppi].wisdom_min;
    document.getElementById('Race_Wis_Max').innerHTML = Races[TempLooppi].wisdom_max;
    document.getElementById('Race_Dex_Min').innerHTML = Races[TempLooppi].dexterity_min;
    document.getElementById('Race_Dex_Max').innerHTML = Races[TempLooppi].dexterity_max;
    document.getElementById('Race_Size').innerHTML = Races[TempLooppi].size;
    document.getElementById('Race_Exprate').innerHTML = Races[TempLooppi].exprate;
	  document.getElementById('Race_Skillmax').innerHTML = Races[TempLooppi].skillmax;
	  document.getElementById('Race_Spellmax').innerHTML = Races[TempLooppi].spellmax;
   }
  }
  // Rodun mukaan haetaan tiedot (TrainingPoints)
  for (var TempTP = 0; TempTP < TP.length; TempTP++)
  {
   if (Valittu_Rotu === TP[TempTP].Name)
   {
	  document.getElementById('Con_TP').options.length = 0; 
    document.getElementById('Con_TP').options[0] = new Option('0 (0)','0');
	  document.getElementById('Str_TP').options.length = 0; 
    document.getElementById('Str_TP').options[0] = new Option('0 (0)','0');
	  document.getElementById('Int_TP').options.length = 0; 
    document.getElementById('Int_TP').options[0] = new Option('0 (0)','0');
	  document.getElementById('Wis_TP').options.length = 0; 
    document.getElementById('Wis_TP').options[0] = new Option('0 (0)','0');
	  document.getElementById('Dex_TP').options.length = 0; 
    document.getElementById('Dex_TP').options[0] = new Option('0 (0)','0');
	  for (var TempTP1 = 0; TempTP1 < TP[TempTP].Con.length; TempTP1++)
	  {
	   var select1 = document.getElementById('Con_TP');
     var option1 = document.createElement('option');
     option1.value = TP[TempTP].Con[TempTP1];
     option1.text = (TempTP1 + 1) + " (" + TP[TempTP].Con[TempTP1] + ")";
     select1.add(option1);
	  }
	  for (var TempTP2 = 0; TempTP2 < TP[TempTP].Str.length; TempTP2++)
	  {
	   var select2 = document.getElementById('Str_TP');
     var option2 = document.createElement('option');
     option2.value = TP[TempTP].Str[TempTP2];
     option2.text = (TempTP2 + 1) + " (" + TP[TempTP].Str[TempTP2] + ")";
     select2.add(option2);
	  }
	  for (var TempTP3 = 0; TempTP3 < TP[TempTP].Int.length; TempTP3++)
	  {
	   var select3 = document.getElementById('Int_TP');
     var option3 = document.createElement('option');
     option3.value = TP[TempTP].Int[TempTP3];
     option3.text = (TempTP3 + 1) + " (" + TP[TempTP].Int[TempTP3] + ")";
     select3.add(option3);
	  }
	  for (var TempTP4 = 0; TempTP4 < TP[TempTP].Wis.length; TempTP4++)
	  {
	   var select4 = document.getElementById('Wis_TP');
     var option4 = document.createElement('option');
     option4.value = TP[TempTP].Wis[TempTP4];
     option4.text = (TempTP4 + 1) + " (" + TP[TempTP].Wis[TempTP4] + ")";
     select4.add(option4);
	  }
	  for (var TempTP5 = 0; TempTP5 < TP[TempTP].Dex.length; TempTP5++)
	  {
	   var select5 = document.getElementById('Dex_TP');
     var option5 = document.createElement('option');
     option5.value = TP[TempTP].Dex[TempTP5];
     option5.text = (TempTP5 + 1) + " (" + TP[TempTP].Dex[TempTP5] + ")";
     select5.add(option5);
	  }
   }
  }
  // Kutsutaan Update_RaceGuild_Skills_Spells() funktiota joka päivittää Rotukillan skillit & spellit
  Update_RaceGuild_Skills_Spells();
 }
 
 // ##############################
 // # Funktio laskee TP yhteensä #
 // ##############################
 function Calculate_TP()
 {
  // Lasketaan Treeni pisteet yhteensä
  var TP_Calc1 = document.getElementById('Con_TP')[document.getElementById('Con_TP').selectedIndex].value;
  var TP_Calc2 = document.getElementById('Str_TP')[document.getElementById('Str_TP').selectedIndex].value;
  var TP_Calc3 = document.getElementById('Int_TP')[document.getElementById('Int_TP').selectedIndex].value;
  var TP_Calc4 = document.getElementById('Wis_TP')[document.getElementById('Wis_TP').selectedIndex].value;
  var TP_Calc5 = document.getElementById('Dex_TP')[document.getElementById('Dex_TP').selectedIndex].value;
  var TP_Total = Number(TP_Calc1) + Number(TP_Calc2) + Number(TP_Calc3) + Number(TP_Calc4) + Number(TP_Calc5);
  document.getElementById('TotalsTrainingPoints').innerHTML = TP_Total;
 }

 // ##################################
 // # Funktio tarkistaa eri kiltojen #
 // # vaatimukset ja lisää/poistaa   #
 // # valitun muihin listoihin       #
 // ##################################
  function Check_Requiments(kilta, kohta)
 {
  // ulkoiset muuttujat
  Valittu_Kilta = kilta;
  Valittu_Kilta_Kohta = kohta;
	// sisäiset muuttujat
	var TempKilta = kilta;
	var TempKohta = kohta;
	var TempLevels = 0;
	var TempBG = "";
	var ValittuBG = "";
  var looppi1 = 1;
	var looppi2 = 0;
	var kiltalista1 = [];
	var kiltalista2 = [];
	var kiltapos1 = [];
  var pituus1 = 0;
  var apu1 = "";
  //guildin skillien ja spellejen functio:
  // puolen sekunnin päästä, niin ehtii vaihtua tuo kiltanumero
  setTimeout( () => {changeInGuildLvls(kilta, kohta); }, 500);
   
  // # NONE VALINTA (alkaa) #
  if ( TempKilta == "None" )
  {
	document.getElementById('Guild' + TempKohta + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + TempKohta + '_lvls_Selection').options[0] = new Option('0','0');
  }
  // # NONE VALINTA (loppuu) #
  
     while ( looppi1 < 15 ) // looppi1 ALKAA
	 {
	  // Poistetaan muista listoista KILTA
	  if ( looppi1 != TempKohta )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var options1 = select1.getElementsByTagName('option');
       for ( var x1=1; x1<options1.length; x1++ ) 
       {
        if ( options1[x1].value == TempKilta ) 
        {
         select1.removeChild(options1[x1]);
        }
       }
      }
      TempTarkistus = document.getElementById('Guild' + looppi1 + '_Selection')[document.getElementById('Guild' + looppi1 + '_Selection').selectedIndex].value;
	  kiltalista2.push(TempTarkistus);
	  for ( var x = 0; x < KiltaMaxLvls.length; x++ )
	  {
	   if ( KiltaMaxLvls[x].Guild === TempKilta )
	   {
	    TempLevels = KiltaMaxLvls[x].Lvls;
		document.getElementById('Guild' + TempKohta + '_lvls_Selection').options.length = 0;
	    for ( var x2 = TempLevels; x2 > 0; x2-- )
        {
         var select2 = document.getElementById('Guild' + TempKohta + '_lvls_Selection');
         var option2 = document.createElement('option');
         option2.value = x2;
         option2.text = x2;
         select2.add(option2);       
        }
	    Valittu_Kilta_Leveli = TempLevels;
	   }
	  }
	  looppi1++;
	 } // looppi1 LOPPUU
     
     // Uusittu koodi alkaa
	 
	 ValittuBG = document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value;
	 
     while ( looppi2 < 14 ) // looppi2 ALKAA
	 {
	  // Kerätään muista kuin valinnasta KILTALISTA
	  if ( TempKohta != (looppi2+1))
	  {
	   pituus1 = document.getElementById('Guild' + (looppi2+1) + '_Selection').options.length;
       for ( var x3=1; x3<pituus1; x3++ )
       {
        apu1 = document.getElementById('Guild' + (looppi2+1) + '_Selection').options[x3].value;
        kiltalista1.push(apu1);
       }
	    for ( var x4 = 0; x4 < KiltaMaxLvls.length; x4++ )
		{
		 var TempBG2 = KiltaMaxLvls[x4].BG;
		 if ( ValittuBG == "Civilized" )
		 { var TempTulos = TempBG2.match(/Civilized/g); }
	     if ( ValittuBG == "Evil_religious" )
		 { var TempTulos = TempBG2.match(/Evil_religious/g); }
	     if ( ValittuBG == "Good_religious" )
		 { var TempTulos = TempBG2.match(/Good_religious/g); }
	     if ( ValittuBG == "Magical" )
		 { var TempTulos = TempBG2.match(/Magical/g); }
	     if ( ValittuBG == "Nomad" )
		 { var TempTulos = TempBG2.match(/Nomad/g); }
	 	 if ( KiltaMaxLvls[x4].Guild != TempKilta && TempTulos == ValittuBG && kiltalista1.includes(KiltaMaxLvls[x4].Guild) == false && kiltalista2.includes(KiltaMaxLvls[x4].Guild) == false )
	 	 {
	      var select2 = document.getElementById('Guild' + (looppi2+1) + '_Selection');
          var option2 = document.createElement('option');
          option2.value = KiltaMaxLvls[x4].Guild;
          option2.text = KiltaMaxLvls[x4].Guild;
          select2.add(option2);
         }
		} 
	  }
	  looppi2++;
	 } // looppi2 LOPPUU
	 
	 // Kutsutaan Calculate_Levels() funktiota joka laskee kokonais levelit
     Calculate_Levels(Valittu_Kilta_Leveli, Valittu_Kilta_Kohta);
 }

 // #####################################
 // # Funktio päivittää kiltalistat kun #
 // # Background valintaa vaihdetaan    #
 // #####################################
 function Update_Guilds(background)
 {
  // ##############################
  // # Asetetaan Civilized killat #
  // ##############################
  if ( background == "Civilized" )
  {
   var apu1 = 1;
   while ( apu1 < 15 )
   {
    document.getElementById('Guild' + apu1 + '_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_Selection').options[0] = new Option('None','None');
	document.getElementById('Guild' + apu1 + '_Selection').options[1] = new Option('Aelena','Aelena');
	document.getElementById('Guild' + apu1 + '_Selection').options[2] = new Option('Alchemists','Alchemists');
	document.getElementById('Guild' + apu1 + '_Selection').options[3] = new Option('Bard','Bard');
	document.getElementById('Guild' + apu1 + '_Selection').options[4] = new Option('Cavalier','Cavalier');
	document.getElementById('Guild' + apu1 + '_Selection').options[5] = new Option('Civilized fighters','Civilized fighters');
	document.getElementById('Guild' + apu1 + '_Selection').options[6] = new Option('Civmage','Civmage');
	document.getElementById('Guild' + apu1 + '_Selection').options[7] = new Option('Disciple','Disciple');
	document.getElementById('Guild' + apu1 + '_Selection').options[8] = new Option('Explorer','Explorer');
	document.getElementById('Guild' + apu1 + '_Selection').options[9] = new Option('Folklorist','Folklorist');
	document.getElementById('Guild' + apu1 + '_Selection').options[10] = new Option('Knight','Knight');
	document.getElementById('Guild' + apu1 + '_Selection').options[11] = new Option('Merchant','Merchant');
	document.getElementById('Guild' + apu1 + '_Selection').options[12] = new Option('Navigator','Navigator');
	document.getElementById('Guild' + apu1 + '_Selection').options[13] = new Option('Runemages','Runemages');
	document.getElementById('Guild' + apu1 + '_Selection').options[14] = new Option('Sabres','Sabres');
	document.getElementById('Guild' + apu1 + '_Selection').options[15] = new Option('Squire','Squire');
	document.getElementById('Guild' + apu1 + '_Selection').options[16] = new Option('Treenav','Treenav');
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options[0] = new Option('0','0');
	apu1++;
   }
  }
  // ###################################
  // # Asetetaan Evil religious killat #
  // ###################################
  if ( background == "Evil_religious" )
  {
   var apu1 = 1;
   while ( apu1 < 15 )
   {
    document.getElementById('Guild' + apu1 + '_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_Selection').options[0] = new Option('None','None');
	document.getElementById('Guild' + apu1 + '_Selection').options[1] = new Option('Aelena','Aelena');
	document.getElementById('Guild' + apu1 + '_Selection').options[2] = new Option('Disciple','Disciple');
	document.getElementById('Guild' + apu1 + '_Selection').options[3] = new Option('Explorer','Explorer');
	document.getElementById('Guild' + apu1 + '_Selection').options[4] = new Option('Kharim','Kharim');
	document.getElementById('Guild' + apu1 + '_Selection').options[5] = new Option('Navigator','Navigator');
	document.getElementById('Guild' + apu1 + '_Selection').options[6] = new Option('Nergal','Nergal');
	document.getElementById('Guild' + apu1 + '_Selection').options[7] = new Option('Priests','Priests');
	document.getElementById('Guild' + apu1 + '_Selection').options[8] = new Option('Reaver','Reaver');
	document.getElementById('Guild' + apu1 + '_Selection').options[9] = new Option('Spider','Spider');
	document.getElementById('Guild' + apu1 + '_Selection').options[10] = new Option('Tiger','Tiger');
	document.getElementById('Guild' + apu1 + '_Selection').options[11] = new Option('Treenav','Treenav');
	document.getElementById('Guild' + apu1 + '_Selection').options[12] = new Option('Tzarakk','Tzarakk');
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options[0] = new Option('0','0');
	apu1++;
   }
  }
  // ###################################
  // # Asetetaan Good religious killat #
  // ###################################
  if ( background == "Good_religious" )
  {
   var apu1 = 1;
   while ( apu1 < 15 )
   {
    document.getElementById('Guild' + apu1 + '_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_Selection').options[0] = new Option('None','None');
	document.getElementById('Guild' + apu1 + '_Selection').options[1] = new Option('Animist','Animist');
	document.getElementById('Guild' + apu1 + '_Selection').options[2] = new Option('Druids','Druids');
	document.getElementById('Guild' + apu1 + '_Selection').options[3] = new Option('Explorer','Explorer');
	document.getElementById('Guild' + apu1 + '_Selection').options[4] = new Option('Knight','Knight');
	document.getElementById('Guild' + apu1 + '_Selection').options[5] = new Option('Liberator','Liberator');
	document.getElementById('Guild' + apu1 + '_Selection').options[6] = new Option('Monk','Monk');
	document.getElementById('Guild' + apu1 + '_Selection').options[7] = new Option('Navigator','Navigator');
	document.getElementById('Guild' + apu1 + '_Selection').options[8] = new Option('Nun','Nun');
	document.getElementById('Guild' + apu1 + '_Selection').options[9] = new Option('Squire','Squire');
	document.getElementById('Guild' + apu1 + '_Selection').options[10] = new Option('Tarmalen','Tarmalen');
	document.getElementById('Guild' + apu1 + '_Selection').options[11] = new Option('Templar','Templar');
	document.getElementById('Guild' + apu1 + '_Selection').options[12] = new Option('Treenav','Treenav');
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options[0] = new Option('0','0');
	apu1++;
   }
  }
  // ############################
  // # Asetetaan Magical killat #
  // ############################
  if ( background == "Magical" )
  {
   var apu1 = 1;
   while ( apu1 < 15 )
   {
    document.getElementById('Guild' + apu1 + '_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_Selection').options[0] = new Option('None','None');
	document.getElementById('Guild' + apu1 + '_Selection').options[1] = new Option('Channelers','Channelers');
	document.getElementById('Guild' + apu1 + '_Selection').options[2] = new Option('Explorer','Explorer');
	document.getElementById('Guild' + apu1 + '_Selection').options[3] = new Option('Inner circle','Inner circle');
	document.getElementById('Guild' + apu1 + '_Selection').options[4] = new Option('Mage','Mage');
	document.getElementById('Guild' + apu1 + '_Selection').options[5] = new Option('Mage acid','Mage acid');
	document.getElementById('Guild' + apu1 + '_Selection').options[6] = new Option('Mage asphyxiation','Mage asphyxiation');
	document.getElementById('Guild' + apu1 + '_Selection').options[7] = new Option('Mage cold','Mage cold');
	document.getElementById('Guild' + apu1 + '_Selection').options[8] = new Option('Mage electricity','Mage electricity');
	document.getElementById('Guild' + apu1 + '_Selection').options[9] = new Option('Mage fire','Mage fire');
	document.getElementById('Guild' + apu1 + '_Selection').options[10] = new Option('Mage magical','Mage magical');
	document.getElementById('Guild' + apu1 + '_Selection').options[11] = new Option('Mage poison','Mage poison');
	document.getElementById('Guild' + apu1 + '_Selection').options[12] = new Option('Navigator','Navigator');
	document.getElementById('Guild' + apu1 + '_Selection').options[13] = new Option('Psionicist','Psionicist');
	document.getElementById('Guild' + apu1 + '_Selection').options[14] = new Option('Riftwalker','Riftwalker');
	document.getElementById('Guild' + apu1 + '_Selection').options[15] = new Option('Treenav','Treenav');
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options[0] = new Option('0','0');
	apu1++;
   }
  }
  // ##########################
  // # Asetetaan Nomad killat #
  // ##########################
  if ( background == "Nomad" )
  {
   var apu1 = 1;
   while ( apu1 < 15 )
   {
    document.getElementById('Guild' + apu1 + '_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_Selection').options[0] = new Option('None','None');
	document.getElementById('Guild' + apu1 + '_Selection').options[1] = new Option('Archers','Archers');
	document.getElementById('Guild' + apu1 + '_Selection').options[2] = new Option('Barbarian','Barbarian');
	document.getElementById('Guild' + apu1 + '_Selection').options[3] = new Option('Beastmaster','Beastmaster');
	document.getElementById('Guild' + apu1 + '_Selection').options[4] = new Option('Cavalier','Cavalier');
	document.getElementById('Guild' + apu1 + '_Selection').options[5] = new Option('Crimson','Crimson');
	document.getElementById('Guild' + apu1 + '_Selection').options[6] = new Option('Disciple','Disciple');
	document.getElementById('Guild' + apu1 + '_Selection').options[7] = new Option('Explorer','Explorer');
	document.getElementById('Guild' + apu1 + '_Selection').options[8] = new Option('Kharim','Kharim');
	document.getElementById('Guild' + apu1 + '_Selection').options[9] = new Option('Ranger','Ranger');
	document.getElementById('Guild' + apu1 + '_Selection').options[10] = new Option('Squire','Squire');
	document.getElementById('Guild' + apu1 + '_Selection').options[11] = new Option('Treenav','Treenav');
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + apu1 + '_lvls_Selection').options[0] = new Option('0','0');
	apu1++;
   }
  }
  // Kutsutaan Calculate_Levels() funktiota joka laskee kokonais levelit
  Calculate_Levels(Valittu_Kilta_Leveli, Valittu_Kilta_Kohta);
 }

  // ####################################
  // # Funktio hakee tiedot (data.js)   #
  // # tiedostosta valitun rodun        #
  // # perusteella ja tulostaa taulukon #
  // # jossa on rotukillan nimi, skills #
  // # ja spells (nolla -> max)         #
  // ####################################
    function Update_RaceGuild_Skills_Spells()
  {
   // Asetetaan muuttujat
   var TempSkills1 = [];
   var TempSkills2 = [];
   var TempSpells1 = [];
   var TempSpells2 = [];
   var Teksti1 = "";
   var Teksti2 = "";
   var Arvo1 = 0;
   var Arvo2 = 0;
   var Looppi1 = 0;
   // Haetaan Rotu ja Level laatikoista
   var ValittuRotu = document.getElementById('Race_Selection')[document.getElementById('Race_Selection').selectedIndex].value;
   var ValittuLevel = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
   // Tämä tyhjää sisällön valitusta kohteesta ja luo aloitus TR elementin
   document.getElementById('RaceGuild_Skills_Spells').innerHTML = "";
   var tr0 = document.createElement('tr');
   tr0.id = "RaceGuild_Skills_SpellsX";
   document.getElementById('RaceGuild_Skills_Spells').appendChild(tr0);
   // Taika looppi kerää tietoja taulukosta ja asettaa niitä apu taulukkoihin
   for (var TempLooppi = 0; TempLooppi < RaceGuilds.length; TempLooppi++)
   {
     if (ValittuRotu === RaceGuilds[TempLooppi][0])
     {
      if (RaceGuilds[TempLooppi][1] === "title")
	    {		
	     document.getElementById('RaceGuild_Title').innerHTML = RaceGuilds[TempLooppi][2];
	    } 
      if (RaceGuilds[TempLooppi][1] === "skill")
	    {		
	     TempSkills1.push(RaceGuilds[TempLooppi][2]);
	     TempSkills2.push(RaceGuilds[TempLooppi][Number(ValittuLevel) + 2]);
	    } 
      if (RaceGuilds[TempLooppi][1] === "spell")
	    {		
	     TempSpells1.push(RaceGuilds[TempLooppi][2]);
	     TempSpells2.push(RaceGuilds[TempLooppi][Number(ValittuLevel) + 2]);
	    }   	
     }
    }
   	// Verrataan kumpi on pitempi ja sen mukaan tehdään looppi
	  if ( TempSkills1.length < TempSpells1.length )
	  {
		  Looppi1 = TempSpells1.length;   
	  }
	  else
	  {
		  Looppi1 = TempSkills1.length;
	  }
    // Luodaan otsikot Skills ja Spells
    var td1 = document.createElement('td');
    td1.id = "otsikko1";
	document.getElementById('RaceGuild_Skills_SpellsX').appendChild(td1);
    document.getElementById('otsikko1').innerHTML = "<b>Skills</b>";   
    var td2 = document.createElement('td');
	document.getElementById('RaceGuild_Skills_SpellsX').appendChild(td2);
    var td3 = document.createElement('td');
	td3.id = "otsikko2";
	document.getElementById('RaceGuild_Skills_SpellsX').appendChild(td3);
	document.getElementById('otsikko2').innerHTML = "<b>Exp</b>";
	var td4 = document.createElement('td');
    td4.id = "otsikko3";
	document.getElementById('RaceGuild_Skills_SpellsX').appendChild(td4);
	document.getElementById('otsikko3').innerHTML = "<b>Spells</b>";
	var td5 = document.createElement('td');
	document.getElementById('RaceGuild_Skills_SpellsX').appendChild(td5);
	var td6 = document.createElement('td');
	td6.id = "otsikko4";
	document.getElementById('RaceGuild_Skills_SpellsX').appendChild(td6);
	document.getElementById('otsikko4').innerHTML = "<b>Exp</b>";
	var tr1 = document.createElement('tr');
	tr1.id = "RaceGuild_Skills_Spells0";
    document.getElementById('RaceGuild_Skills_Spells').appendChild(tr1);
	  // for lauseke joka tekee muutaman kerran taulukkoa
    for ( var x = 0; x < Looppi1; x++)
    {	   
      if ( TempSkills1.includes("None") == false && TempSkills1[x] != null)
	    {    
      // Tämä luo taulukkoon tekstiä ja valintaboxin (SKILLI)   
      // Luo TD elementin ja laittaa sille ID
      var td1 = document.createElement('td');
      td1.id = "skilli" + x + "text";
      td1.classList.add("skill_name_text_box");
      document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td1);
	    Teksti1 = TempSkills1[x];
      document.getElementById('skilli' + x + 'text').innerHTML = Teksti1;
	    // Luo TD elementin ja laittaa sille ID
      var td2 = document.createElement('td');
      td2.id = "skilli" + x + "nro";
      document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td2);
	    Arvo1 = TempSkills2[x];
	    // Luo SELECT elementin ja laittaa ID ja OPTION siihen
      var select1 = document.createElement('select');
      select1.id = "skilli" + x + "valinta";
      select1.setAttribute("onchange", "Calculate_RaceGuild_ExpCost()");
      select1.classList.add("select_number_box");
      document.getElementById('skilli' + x + 'nro').appendChild(select1);
      // Hyppyloopin 1 muuttujat
      var hyppylooppi1 = 0;
      var hyppaykset1 = 0;
      var kerrat1 = 0;
      // Jaetaan viidellä MAX arvo niin saadaan kerrat
	    kerrat1 = Arvo1 / 5;
	    while (hyppylooppi1 < kerrat1)
	    {
		    var optionX = document.createElement('option');
			optionX.text = hyppaykset1;
		    document.getElementById('skilli' + x + 'valinta').appendChild(optionX);
			hyppaykset1 = hyppaykset1 + 5;
		    hyppylooppi1++;
	    }
		var option1 = document.createElement('option');
		option1.text = Arvo1;
		document.getElementById('skilli' + x + 'valinta').appendChild(option1);
		// Luo TD elementin ja laittaa sille ID
	    var td3 = document.createElement('td');
        td3.id = "skillicost" + x + "text";
        document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td3);
		document.getElementById('skillicost' + x + 'text').innerHTML = '<div id="Skill_Cost_Box' + x + '" class="total_text_box">0</div>';
	    }
	    else // Jos ei löydy skillejä luodaa tyhjää taulukkoa
	    {
			var td1 = document.createElement('td');
      td1.classList.add("skill_name_text_box2");
			document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td1);
			var td2 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td2);
			var td3 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td3);
	    }
        if ( TempSpells1.includes("None") == false && TempSpells1[x] != null )
	    {
        // Tämä luo taulukkoon tekstiä ja valintaboxin (SPELLI)   
        // Luo TD elementin ja laittaa sille ID
        var td1 = document.createElement('td');
        td1.id = "spelli" + x + "text";
        td1.classList.add("spell_name_text_box");
        document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td1);
	    Teksti2 = TempSpells1[x];
	    document.getElementById('spelli' + x + 'text').innerHTML = Teksti2;
		// Luo TD elementin ja laittaa sille ID
        var td2 = document.createElement('td');
        td2.id = "spelli" + x + "nro";
        document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td2);
	    Arvo2 = TempSpells2[x];
        // Luo SELECT elementin ja laittaa ID ja OPTION siihen
        var select1 = document.createElement('select');
        select1.id = "spelli" + x + "valinta";
        select1.setAttribute("onchange", "Calculate_RaceGuild_ExpCost()");
        select1.classList.add("select_number_box");
        document.getElementById('spelli' + x + 'nro').appendChild(select1);
        // Hyppyloopin 2 muuttujat
        var hyppylooppi2 = 0;
	    var hyppaykset2 = 0;
	    var kerrat2 = 0;
        // Jaetaan viidellä MAX arvo niin saadaan kerrat
	    kerrat2 = Arvo2 / 5;
	    while (hyppylooppi2 < kerrat2)
	    {
			var optionX = document.createElement('option');
            optionX.text = hyppaykset2;
		    document.getElementById('spelli' + x + 'valinta').appendChild(optionX);
            hyppaykset2 = hyppaykset2 + 5;
		    hyppylooppi2++;
	    }
        var option1 = document.createElement('option');
        option1.text = Arvo2;
        document.getElementById('spelli' + x + 'valinta').appendChild(option1);
		// Luo TD elementin ja laittaa sille ID
	    var td3 = document.createElement('td');
        td3.id = "spellicost" + x + "text";
        document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td3);
		document.getElementById('spellicost' + x + 'text').innerHTML = '<div id="Spell_Cost_Box' + x + '" class="total_text_box">0</div>';
		}
	    else // Jos ei löydy spellejä luodaa tyhjää taulukkoa
	    {
			var td1 = document.createElement('td');
      td1.classList.add("spell_name_text_box2");
			document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td1);
			var td2 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td2);
			var td3 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + x).appendChild(td3);
	    }
		// Luodaan rivin vaihto elementti
		var apu = 0;
		apu = x + 1;
		var tr1 = document.createElement('tr');
		tr1.id = "RaceGuild_Skills_Spells" + apu;
		document.getElementById('RaceGuild_Skills_Spells').appendChild(tr1);
		if ( TempSkills1.length > TempSpells1.length && TempSkills1.length == x + 1)
		{
			var tr2 = document.createElement('tr');
			tr2.id = "RaceGuild_Skills_Spells" + apu;
			document.getElementById('RaceGuild_Skills_Spells').appendChild(tr2);
		    var td1 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td1);
			var td2 = document.createElement('td');
			td2.id = "textcost1";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td2);
			var td3 = document.createElement('td');
			td3.id = "totaltextbox1";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td3);
		    var td4 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td4);
			var td5 = document.createElement('td');
			td5.id = "textcost2";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td5);
			var td6 = document.createElement('td');
			td6.id = "totaltextbox2";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td6);
			document.getElementById('textcost1').innerHTML = "<b>Total cost</b>";
			document.getElementById('textcost2').innerHTML = "<b>Total cost</b>";
			document.getElementById('totaltextbox1').innerHTML = '<div id="racetotalbox1" class="total_text_box">0</div>';
			document.getElementById('totaltextbox2').innerHTML = '<div id="racetotalbox2" class="total_text_box">0</div>';
		}
		if ( TempSkills1.length < TempSpells1.length && TempSpells1.length == x + 1)
		{
			var tr2 = document.createElement('tr');
			tr2.id = "RaceGuild_Skills_Spells" + apu;
			document.getElementById('RaceGuild_Skills_Spells').appendChild(tr2);
		    var td1 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td1);
			var td2 = document.createElement('td');
			td2.id = "textcost1";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td2);
			var td3 = document.createElement('td');
			td3.id = "totaltextbox1";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td3);
		    var td4 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td4);
			var td5 = document.createElement('td');
			td5.id = "textcost2";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td5);
			var td6 = document.createElement('td');
			td6.id = "totaltextbox2";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td6);
			document.getElementById('textcost1').innerHTML = "<b>Total cost</b>";
			document.getElementById('textcost2').innerHTML = "<b>Total cost</b>";
			document.getElementById('totaltextbox1').innerHTML = '<div id="racetotalbox1" class="total_text_box">0</div>';
			document.getElementById('totaltextbox2').innerHTML = '<div id="racetotalbox2" class="total_text_box">0</div>';
		}
		if ( TempSkills1.length == TempSpells1.length && (TempSkills1.length == x + 1 || TempSpells1.length == x + 1) )
		{
			var tr2 = document.createElement('tr');
			tr2.id = "RaceGuild_Skills_Spells" + apu;
			document.getElementById('RaceGuild_Skills_Spells').appendChild(tr2);
		    var td1 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td1);
			var td2 = document.createElement('td');
			td2.id = "textcost1";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td2);
			var td3 = document.createElement('td');
			td3.id = "totaltextbox1";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td3);
		    var td4 = document.createElement('td');
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td4);
			var td5 = document.createElement('td');
			td5.id = "textcost2";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td5);
			var td6 = document.createElement('td');
			td6.id = "totaltextbox2";
			document.getElementById('RaceGuild_Skills_Spells' + apu).appendChild(td6);
			document.getElementById('textcost1').innerHTML = "<b>Total cost</b>";
			document.getElementById('textcost2').innerHTML = "<b>Total cost</b>";
			document.getElementById('totaltextbox1').innerHTML = '<div id="racetotalbox1" class="total_text_box">0</div>';
			document.getElementById('totaltextbox2').innerHTML = '<div id="racetotalbox2" class="total_text_box">0</div>';
		}
     }
     // Kutsutaan Calculate_Levels() funktiota joka laskee kokonais levelit
     Calculate_Levels(0,1);
  }

  // ########################################
  // # Funktio laskee exp costin (data.js)  #
  // # tiedostosta valitun skill ja spell   # 
  // # prosentin perusteella ja tulostaa    #
  // # taulukkoon valitun rodun perusteella #
  // # jolla on oma ExpKerroin ja laskee    #
  // # yhteensä alimmalle riville kaikki.   #
  // ########################################
  function Calculate_RaceGuild_ExpCost()
  {
	  var TempApuRotu = document.getElementById('Race_Selection')[document.getElementById('Race_Selection').selectedIndex].value;
	  var TempApuKerroin1 = 1;
	  var TempApuKerroin2 = 1;
    var TempApuSkilli2 = 0;
    var TempApuLasku1 = 0;
    var TempApuLasku2 = 0;
	  var RotuKiltaExp1 = 0;
	  var RotuKiltaExp2 = 0;
	  // Taika looppi (EXP) tekee taas ihmeitään!
	  for ( var Looppi = 0; Looppi < ExpKerroin.length; Looppi++ )
	  {
		  if ( TempApuRotu === ExpKerroin[Looppi].name )
		  {
			  TempApuKerroin1 = ExpKerroin[Looppi].skill;
			  TempApuKerroin2 = ExpKerroin[Looppi].spell;
		  }
	  }
	  var x1 = 0;
	  var TempApuLuku1 = 0;
	  // Tehdään kunnes ei löydy elementtejä enää
	  while ( !!document.getElementById('skilli' + x1 + 'text') == true )
	  {
		var TempApuSkilli = document.getElementById('skilli' + x1 + 'text').innerHTML;
		var TempApuNro1 = document.getElementById('skilli' + x1 + 'valinta')[document.getElementById('skilli' + x1 + 'valinta').selectedIndex].value;
		var TempApuJako1 = TempApuNro1 / 5;
		var TempApuDesimaali1 = TempApuJako1 - Math.round(TempApuJako1);
		// Taika looppi (SKILL) tekee taas ihmeitään !
		for (var TempLooppi1 = 0; TempLooppi1 < Human.length; TempLooppi1++)
		{
			// Katsotaan skilli kerrallaan ja haetaa data joka tulostetaan boxeihin
			if ( TempApuSkilli === Human[TempLooppi1][0])
			{
				if ( TempApuJako1 == 0 )
				{
					document.getElementById('skillicost' + x1 + 'text').innerHTML = '<div id="Skill_Cost_Box' + x1 + '" class="total_text_box">0</div>'
				}
				else
				{
					// Kerrotaan jakojäännöksellä jos semmoinen on olemassa
					TempApuSkilli2 = Human[TempLooppi1][Math.round(TempApuJako1)];
					if ( TempApuDesimaali1 > 0 )
					{
						TempApuSkilli2 = TempApuSkilli2 * (TempApuDesimaali1 + 1);
					}
					// Lasketaa rotu kohtaisella kertoimella
					TempApuSkilli2 = TempApuSkilli2 * TempApuKerroin1;
					document.getElementById('skillicost' + x1 + 'text').innerHTML = '<div id="Skill_Cost_Box' + x1 + '" class="total_text_box">' + Math.round(TempApuSkilli2) + '</div>';
					TempApuLuku1 = TempApuLuku1 + Math.round(TempApuSkilli2);
					document.getElementById('totaltextbox1').innerHTML = '<div id="racetotalbox1" class="total_text_box">' + TempApuLuku1 + '</div>';
				}
			}
		}
		
		// Lasketaan Skill costi loorat yhteensä ja jos nolla niin Totals on nolla
		TempApuLasku1 = TempApuLasku1 + document.getElementById('Skill_Cost_Box' + x1).innerHTML;
		if ( TempApuLasku1 == 0 )
		{
			document.getElementById('totaltextbox1').innerHTML = '<div id="racetotalbox1" class="total_text_box">0</div>';
		}
		
				
 		x1++;
	  }
	  var x2 = 0;
	  var TempApuLuku2 = 0;
	  // Tehdään kunnes ei löydy elementtejä enää
	  while ( !!document.getElementById('spelli' + x2 + 'text') == true )
	  {
		var TempApuSpelli = document.getElementById('spelli' + x2 + 'text').innerHTML;
		var TempApuNro2 = document.getElementById('spelli' + x2 + 'valinta')[document.getElementById('spelli' + x2 + 'valinta').selectedIndex].value;
		var TempApuJako2 = TempApuNro2 / 5;
		var TempApuDesimaali2 = TempApuJako2 - Math.round(TempApuJako2);
		// Taika looppi (SPELL) tekee taas ihmeitään !
		for (var TempLooppi2 = 0; TempLooppi2 < Human.length; TempLooppi2++)
		{
			// Katsotaan skilli kerrallaan ja haetaa data joka tulostetaan boxeihin
			if ( TempApuSpelli === Human[TempLooppi2][0])
			{
				if ( TempApuJako2 == 0 )
				{
					document.getElementById('spellicost' + x2 + 'text').innerHTML = '<div id="Spell_Cost_Box' + x2 + '" class="total_text_box">0</div>';
				}
				else
				{
					// Kerrotaan jakojäännöksellä jos semmoinen on olemassa
					var TempApuSpelli2 = Human[TempLooppi2][Math.round(TempApuJako2)];
					if ( TempApuDesimaali2 > 0 )
					{
						TempApuSpelli2 = TempApuSpelli2 * (TempApuDesimaali2 + 1);
					}
					// Lasketaa rotu kohtaisella kertoimella
					TempApuSpelli2 = TempApuSpelli2 * TempApuKerroin2;
					document.getElementById('spellicost' + x2 + 'text').innerHTML = '<div id="Spell_Cost_Box' + x2 + '" class="total_text_box">' + Math.round(TempApuSpelli2) + '</div>';
					TempApuLuku2 = TempApuLuku2 + Math.round(TempApuSpelli2);
					document.getElementById('totaltextbox2').innerHTML = '<div id="racetotalbox2" class="total_text_box">' + TempApuLuku2 + '</div>';
				}
			}
		}
      // Lasketaan Spell costi loorat yhteensä ja jos nolla niin Totals on nolla
      TempApuLasku2 = TempApuLasku2 + document.getElementById('Spell_Cost_Box' + x2).innerHTML;
      if ( TempApuLasku2 == 0 )
      {
        document.getElementById('totaltextbox2').innerHTML = '<div id="racetotalbox2" class="total_text_box">0</div>';
      }
      
 		x2++;  
	  }
	  // Haetaan rotu killan skill & spell costit
	    RotuKiltaExp1 = document.getElementById('racetotalbox1').innerHTML;
	    RotuKiltaExp2 = document.getElementById('racetotalbox2').innerHTML;
	    document.getElementById('TotalsExp').innerHTML = TotalLvlCosti + Number(RotuKiltaExp1) + Number(RotuKiltaExp2);
  }
  
  // Sivun ladattua kutsutaan Update_RaceGuild_Skills_Spells() funktiota joka päivittää Rotukillan skillit & spellit
  Update_RaceGuild_Skills_Spells();

