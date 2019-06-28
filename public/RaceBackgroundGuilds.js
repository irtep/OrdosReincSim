
 // Kilta leveli muuttujat
 var AelenaLvls = 0;
 var AelenaPosition = 0;
 var AlchemistsLvls = 0;
 var AlchemistsPosition = 0;
 var AnimistLvls = 0;
 var AnimistPosition = 0;
 var ArchersLvls = 0;
 var ArchersPosition = 0;
 var BarbarianLvls = 0;
 var BarbarianPosition = 0;
 var BardLvls = 0;
 var BardPosition = 0;
 var BeastmasterLvls = 0;
 var BeastmasterPosition = 0;
 var ChannelersLvls = 0;
 var ChannelersPosition = 0;
 var CavalierLvls = 0;
 var CavalierPosition = 0;
 var Civilized_fightersLvls = 0;
 var Civilized_fightersPosition = 0;
 var CivmageLvls = 0;
 var CivmagePosition = 0;
 var CrimsonLvls = 0;
 var CrimsonPosition = 0;
 var DiscipleLvls = 0;
 var DisciplePosition = 0;
 var DruidsLvls = 0;
 var DruidsPosition = 0;
 var ExplorerLvls = 0;
 var ExplorerPosition = 0;
 var FolkloristLvls = 0;
 var FolkloristPosition = 0;
 var Inner_circleLvls = 0;
 var Inner_circlePosition = 0;
 var KharimLvls = 0;
 var KharimPosition = 0;
 var KnightLvls = 0;
 var KnightPosition = 0;
 var LiberatorLvls = 0;
 var LiberatorPosition = 0;
 var MageLvls = 0;
 var MagePosition = 0;
 var Mage_acidLvls = 0;
 var Mage_acidPosition = 0;
 var Mage_asphLvls = 0;
 var Mage_asphPosition = 0;
 var Mage_coldLvls = 0;
 var Mage_coldPosition = 0;
 var Mage_elecLvls = 0;
 var Mage_elecPosition = 0;
 var Mage_fireLvls = 0;
 var Mage_firePosition = 0;
 var Mage_manaLvls = 0;
 var Mage_manaPosition = 0;
 var Mage_poisonLvls = 0;
 var Mage_poisonPosition = 0;
 var MerchantLvls = 0;
 var MerchantPosition = 0;
 var MonkLvls = 0;
 var MonkPosition = 0;
 var NavigatorLvls = 0;
 var NavigatorPosition = 0;
 var NergalLvls = 0;
 var NergalPosition = 0;
 var NunLvls = 0;
 var NunPosition = 0;
 var PriestsLvls = 0;
 var PriestsPosition = 0;
 var PsionicistLvls = 0;
 var PsionicistPosition = 0;
 var RangerLvls = 0;
 var RangerPosition = 0;
 var ReaverLvls = 0;
 var ReaverPosition = 0;
 var RiftwalkerLvls = 0;
 var RiftwalkerPosition = 0;
 var RunemagesLvls = 0;
 var RunemagesPosition = 0;
 var SabresLvls = 0;
 var SabresPosition = 0;
 var SpiderLvls = 0;
 var SpiderPosition = 0;
 var SquireLvls = 0;
 var SquirePosition = 0;
 var TarmalenLvls = 0;
 var TarmalenPosition = 0;
 var TemplarLvls = 0;
 var TemplarPosition = 0;
 var TigerLvls = 0;
 var TigerPosition = 0;
 var TreenavLvls = 0;
 var TreenavPosition = 0;
 var TzarakkLvls = 0;
 var TzarakkPosition = 0;
 
 function Update_Raceguild()
 {
  // Mortal on valittu
  if ( document.getElementById('Rebirth_Selection')[document.getElementById('Rebirth_Selection').selectedIndex].value == "Mortal" )
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
  if ( document.getElementById('Rebirth_Selection')[document.getElementById('Rebirth_Selection').selectedIndex].value == "Elder" )
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
  if ( document.getElementById('Rebirth_Selection')[document.getElementById('Rebirth_Selection').selectedIndex].value == "Ancient" )
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
  if ( document.getElementById('Rebirth_Selection')[document.getElementById('Rebirth_Selection').selectedIndex].value == "Eternal" )
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
 }

 function Check_Requiments(kilta, kohta)
 {
  // #########################################
  // # Tilojen tarkistus LOOP & CASE (alkaa) #
  // #########################################
  var CheckLoop1 = 1;
  var Temppi1 = "";
  var AelenaStatus = "no";
  var AlchemistsStatus = "no";
  var AnimistStatus = "no";
  var ArchersStatus = "no";
  var BarbarianStatus = "no";
  var BardStatus = "no";
  var BeastmasterStatus = "no";
  var ChannelersStatus = "no";
  var CavalierStatus = "no";
  var Civilized_fightersStatus = "no";
  var CivmageStatus = "no";
  var CrimsonStatus = "no";
  var DiscipleStatus = "no";
  var DruidsStatus = "no";
  var ExplorerStatus = "no";
  var FolkloristStatus = "no";
  var Inner_circleStatus = "no";
  var KharimStatus = "no";
  var KnightStatus = "no";
  var LiberatorStatus = "no";
  var MageStatus = "no";
  var Mage_acidStatus = "no";
  var Mage_asphStatus = "no";
  var Mage_coldStatus = "no";
  var Mage_elecStatus = "no";
  var Mage_fireStatus = "no";
  var Mage_manaStatus = "no";
  var Mage_poisonStatus = "no";
  var MerchantStatus = "no";
  var MonkStatus = "no";
  var NavigatorStatus = "no";
  var NergalStatus = "no";
  var NunStatus = "no";
  var PriestsStatus = "no";
  var PsionicistStatus = "no";
  var RangerStatus = "no";
  var ReaverStatus = "no";
  var RiftwalkerStatus = "no";
  var RunemagesStatus = "no";
  var SabresStatus = "no";
  var SpiderStatus = "no";
  var SquireStatus = "no";
  var TarmalenStatus = "no";
  var TemplarStatus = "no";
  var TigerStatus = "no";
  var TreenavStatus = "no";
  var TzarakkStatus = "no";
  // Tarkistetaan 14 eri valintaboxia
  while ( CheckLoop1 < 15 )
  {
   Temppi1 = document.getElementById('Guild' + CheckLoop1 + '_Selection')[document.getElementById('Guild' + CheckLoop1 + '_Selection').selectedIndex].value;
   switch (Temppi1)
   {
	case 'Aelena':
     AelenaStatus = "yes";
     break;
	case 'Alchemists':
     AlchemistsStatus = "yes";
     break;
	case 'Animist':
     AnimistStatus = "yes";
     break;
	case 'Archers':
     ArchersStatus = "yes";
     break;
	case 'Barbarian':
     BarbarianStatus = "yes";
     break;
	case 'Bard':
     BardStatus = "yes";
     break;
	case 'Beastmaster':
     BeastmasterStatus = "yes";
     break;
	case 'Cavalier':
     CavalierStatus = "yes";
     break;
	case 'Channelers':
     ChannelersStatus = "yes";
     break;
	case 'Civilized fighters':
     Civilized_fightersStatus = "yes";
     break;
	case 'Civmage':
     CivmageStatus = "yes";
     break;
	case 'Crimson':
     CrimsonStatus = "yes";
     break;
	case 'Disciple':
     DiscipleStatus = "yes";
     break;
	case 'Druids':
     DruidsStatus = "yes";
     break;
	case 'Explorer':
     ExplorerStatus = "yes";
     break;
	case 'Folklorist':
     FolkloristStatus = "yes";
     break;
	case 'Inner circle':
     Inner_circleStatus = "yes";
     break;
	case 'Kharim':
     KharimStatus = "yes";
     break;
	case 'Knight':
     KnightStatus = "yes";
     break;
	case 'Liberator':
     LiberatorStatus = "yes";
     break;
	case 'Mage':
     MageStatus = "yes";
     break;
	case 'Mage acid':
     Mage_acidStatus = "yes";
     break;
	case 'Mage asphyxiation':
     Mage_asphStatus = "yes";
     break;
	case 'Mage cold':
     Mage_coldStatus = "yes";
     break;
	case 'Mage electricity':
     Mage_elecStatus = "yes";
     break;
	case 'Mage fire':
     Mage_fireStatus = "yes";
     break;
	case 'Mage magical':
     Mage_manaStatus = "yes";
     break;
	case 'Mage poison':
     Mage_poisonStatus = "yes";
     break;
	case 'Merchant':
     MerchantStatus = "yes";
     break;
	case 'Monk':
     MonkStatus = "yes";
     break;
	case 'Navigator':
     NavigatorStatus = "yes";
     break;
	case 'Nergal':
     NergalStatus = "yes";
     break;
	case 'Nun':
     NunStatus = "yes";
     break;
	case 'Priests':
     PriestsStatus = "yes";
     break;
	case 'Psionicist':
     PsionicistStatus = "yes";
     break;
	case 'Ranger':
     RangerStatus = "yes";
     break;
	case 'Reaver':
     ReaverStatus = "yes";
     break;
	case 'Riftwalker':
     RiftwalkerStatus = "yes";
     break;
	case 'Runemages':
     RunemagesStatus = "yes";
     break;
    case 'Sabres':
     SabresStatus = "yes";
     break;
    case 'Spider':
     SpiderStatus = "yes";
     break;
    case 'Squire':
     SquireStatus = "yes";
     break;
    case 'Tarmalen':
     TarmalenStatus = "yes";
     break;
    case 'Templar':
     TemplarStatus = "yes";
     break;
    case 'Tiger':
     TigerStatus = "yes";
     break;
    case 'Treenav':
     TreenavStatus = "yes";
     break;
    case 'Tzarakk':
     TzarakkStatus = "yes";
     break;
   }
   CheckLoop1++; 
  }
  // ##########################################
  // # Tilojen tarkistus LOOP & CASE (loppuu) #
  // ##########################################

  // ########################
  // # NONE VALINTA (alkaa) #
  // ########################
  if ( kilta == "None" )
  {
	document.getElementById('Guild' + kohta + '_lvls_Selection').options.length = 0;
	document.getElementById('Guild' + kohta + '_lvls_Selection').options[0] = new Option('0','0');
  }
  // #########################
  // # NONE VALINTA (loppuu) #
  // #########################
  
  // #########################
  // # KILTA: AELENA (alkaa) #
  // #########################
  // Alku vaatimus: Joko Civilized tai Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( ( kilta == "Aelena" && DiscipleStatus == "no" ) || ( kilta == "Aelena" && DiscipleStatus == "yes" && ( KharimStatus == "yes" || KnightStatus == "yes" || NergalStatus == "yes" || TzarakkStatus == "yes" ) ) )
   {
    alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Aelena
    if ( kilta == "Aelena" )
    {
	 AelenaPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Aelena' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + AelenaPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 20; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + AelenaPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  AelenaLvls = 20;
	 }
    }
    // Palautetaan muihin listoihin Aelena
    if ( kilta != "Aelena" && AelenaStatus == "no" )
    {
	  AelenaLvls = 0;
	  pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Aelena') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Aelena";
       option1.text = "Aelena";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: AELENA (loppuu) #
  // ##########################
  
  // #############################
  // # KILTA: ALCHEMISTS (alkaa) #
  // #############################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Alchemists
    if ( kilta == "Alchemists" )
    {
	 AlchemistsPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Alchemists' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + AlchemistsPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + AlchemistsPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  AlchemistsLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Alchemists
    if ( kilta != "Alchemists" && AlchemistsStatus == "no" )
    {
	  AlchemistsLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Alchemists') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Alchemists";
       option1.text = "Alchemists";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##############################
  // # KILTA: ALCHEMISTS (loppuu) #
  // ##############################

  // ##########################
  // # KILTA: ANIMIST (alkaa) #
  // ##########################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Animist" && ( LiberatorStatus == "no" || MonkStatus == "no" || TemplarStatus == "no" ) )
   {
    alert('Invalid requiments for ' + kilta + '!');
   }

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Animist
    if ( kilta == "Animist" )
    {
	 AnimistPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Animist' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + AnimistPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 20; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + AnimistPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  AnimistLvls = 20;
	 }
    }
    // Palautetaan muihin listoihin Animist
    if ( kilta != "Animist" && AnimistStatus == "no" )
    {
	  AnimistLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Animist') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Animist";
       option1.text = "Animist";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: ANIMIST (loppuu) #
  // ###########################

  // ##########################
  // # KILTA: ARCHERS (alkaa) #
  // ##########################
  // Alku vaatimus: Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Archers
    if ( kilta == "Archers" )
    {
     ArchersPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Archers' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + ArchersPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + ArchersPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  ArchersLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Archers
    if ( kilta != "Archers" && ArchersStatus == "no" )
    {
	  ArchersLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Archers') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Archers";
       option1.text = "Archers";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: ARCHERS (loppuu) #
  // ###########################

  // ############################
  // # KILTA: BARBARIAN (alkaa) #
  // ############################
  // Alku vaatimus: Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Barbarian
    if ( kilta == "Barbarian" )
    {
	 BarbarianPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Barbarian' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + BarbarianPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 35; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + BarbarianPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  BarbarianLvls = 35;
	 }
    }
    // Palautetaan muihin listoihin Barbarian
    if ( kilta != "Barbarian" && BarbarianStatus == "no" )
    {
      BarbarianLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Barbarian') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Barbarian";
       option1.text = "Barbarian";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: BARBARIAN (loppuu) #
  // #############################

  // #######################
  // # KILTA: BARD (alkaa) #
  // #######################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Bard
    if ( kilta == "Bard" )
    {
	 BardPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Bard' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + BardPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + BardPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  BardLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Bard
    if ( kilta != "Bard" && BardStatus == "no" )
    {
	  BardLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Bard') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Bard";
       option1.text = "Bard";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ########################
  // # KILTA: BARD (loppuu) #
  // ########################

  // ##############################
  // # KILTA: BEASTMASTER (alkaa) #
  // ##############################
  // Alku vaatimus: Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Beastmaster" && SquireStatus == "no" )
   {
    alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Beastmaster
    if ( kilta == "Beastmaster" )
    {
	 BeastmasterPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Beastmaster' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + BeastmasterPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 15; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + BeastmasterPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  BeastmasterLvls = 15;
	 }
    }
    // Palautetaan muihin listoihin Beastmaster
    if ( kilta != "Beastmaster" && BeastmasterStatus == "no" )
    {
	  BeastmasterLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Beastmaster') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Beastmaster";
       option1.text = "Beastmaster";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###############################
  // # KILTA: BEASTMASTER (loppuu) #
  // ###############################

  // #############################
  // # KILTA: CHANNELERS (alkaa) #
  // #############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Channelers
    if ( kilta == "Channelers" )
    {
	 ChannelersPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Channelers' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + ChannelersPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + ChannelersPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  ChannelersLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Channelers
    if ( kilta != "Channelers" && ChannelersStatus == "no" )
    {
	  ChannelersLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Channelers') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Channelers";
       option1.text = "Channelers";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##############################
  // # KILTA: CHANNELERS (loppuu) #
  // ##############################

  // ###########################
  // # KILTA: CAVALIER (alkaa) #
  // ###########################
  // Alku vaatimus: Civilized TAI Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Cavalier" && SquireStatus == "no" )
   {
    alert('Invalid requiments for ' + kilta + '!');
   }

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Cavalier
    if ( kilta == "Cavalier" )
    {
	 CavalierPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Cavalier' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + CavalierPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 15; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + CavalierPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  CavalierLvls = 15;
	 }
    }
    // Palautetaan muihin listoihin Cavalier
    if ( kilta != "Cavalier" && CavalierStatus == "no" )
    {
	  CavalierLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Cavalier') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Cavalier";
       option1.text = "Cavalier";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ############################
  // # KILTA: CAVALIER (loppuu) #
  // ############################

  // #####################################
  // # KILTA: CIVILIZED FIGHTERS (alkaa) #
  // #####################################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Civilized fighters
    if ( kilta == "Civilized fighters" )
    {
	 Civilized_fightersPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Civilized fighters' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Civilized_fightersPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 25; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Civilized_fightersPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Civilized_fightersLvls = 25;
	 }
    }
    // Palautetaan muihin listoihin Civilized fighters
    if ( kilta != "Civilized fighters" && Civilized_fightersStatus == "no" )
    {
	  Civilized_fightersLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Civilized fighters') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Civilized fighters";
       option1.text = "Civilized fighters";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ######################################
  // # KILTA: CIVILIZED FIGHTERS (loppuu) #
  // ######################################

  // ##########################
  // # KILTA: CIVMAGE (alkaa) #
  // ##########################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Civilized fighters
    if ( kilta == "Civmage" )
    {
	 CivmagePosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Civmage' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + CivmagePosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 25; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + CivmagePosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  CivmageLvls = 25;
	 }
    }
    // Palautetaan muihin listoihin Civilized fighters
    if ( kilta != "Civmage" && CivmageStatus == "no" )
    {
	  CivmageLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Civmage') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Civmage";
       option1.text = "Civmage";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: CIVMAGE (loppuu) #
  // ###########################

  // ##########################
  // # KILTA: CRIMSON (alkaa) #
  // ##########################
  // Alku vaatimus: Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Crimson
    if ( kilta == "Crimson" )
    {
	 CrimsonPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Crimson' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + CrimsonPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 35; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + CrimsonPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  CrimsonLvls = 35;
	 }
    }
    // Palautetaan muihin listoihin Civilized fighters
    if ( kilta != "Crimson" && CrimsonStatus == "no" )
    {
	  CrimsonLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Crimson') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Crimson";
       option1.text = "Crimson";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: CRIMSON (loppuu) #
  // ###########################

  // ###########################
  // # KILTA: DISCIPLE (alkaa) #
  // ###########################
  // Alku vaatimus: Joko Civilized tai Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Disciple  
    if ( kilta == "Disciple" )
    {
	 DisciplePosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].innerHTML == 'Disciple' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + DisciplePosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + DisciplePosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  DiscipleLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Disciple
    if ( kilta != "Disciple" && DiscipleStatus == "no" )
    {
	  DiscipleLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Disciple') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Disciple";
       option1.text = "Disciple";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ############################
  // # KILTA: DISCIPLE (loppuu) #
  // ############################

  // #########################
  // # KILTA: DRUIDS (alkaa) #
  // #########################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Druids
    if ( kilta == "Druids" )
    {
	 DruidsPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Druids' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + DruidsPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + DruidsPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  DruidsLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Druids
    if ( kilta != "Druids" && DruidsStatus == "no" )
    {
	  DruidsLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Druids') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Druids";
       option1.text = "Druids";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: DRUIDS (loppuu) #
  // ##########################

  // ###########################
  // # KILTA: EXPLORER (alkaa) #
  // ###########################
  // Alku vaatimus: Kaikki background käy
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  {
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Explorer
    if ( kilta == "Explorer" )
    {
	 ExplorerPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Explorer' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + ExplorerPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 5; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + ExplorerPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  ExplorerLvls = 5;
	 }
    }
    // Palautetaan muihin listoihin Explorer
    if ( kilta != "Explorer" && ExplorerStatus == "no" )
    {
	  ExplorerLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Explorer') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Explorer";
       option1.text = "Explorer";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  }
  // ############################
  // # KILTA: EXPLORER (loppuu) #
  // ############################

  // #############################
  // # KILTA: FOLKLORIST (alkaa) #
  // #############################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Folklorist
    if ( kilta == "Folklorist" )
    {
	 FolkloristPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Folklorist' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + FolkloristPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 25; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + FolkloristPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  FolkloristLvls = 25;
	 }
    }
    // Palautetaan muihin listoihin Folklorist
    if ( kilta != "Folklorist" && FolkloristStatus == "no" )
    {
	  FolkloristLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Folklorist') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Folklorist";
       option1.text = "Folklorist";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##############################
  // # KILTA: FOLKLORIST (loppuu) #
  // ##############################

  // ###############################
  // # KILTA: INNER CIRCLE (alkaa) #
  // ###############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( ( MageStatus == "no" && ChannelersStatus == "no" && PsionicistStatus == "no" && kilta == "Inner circle" ) || ( MageStatus == "yes" && kilta == "Inner circle" && Mage_acidStatus == "no" && Mage_asphStatus == "no" && Mage_coldStatus == "no" && Mage_elecStatus == "no" && Mage_fireStatus == "no" && Mage_manaStatus == "no" && Mage_poisonStatus == "no" ) )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Inner circle
    if ( kilta == "Inner circle" )
    {
	 Inner_circlePosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Inner circle' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Inner_circlePosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Inner_circlePosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Inner_circleLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Inner circle
    if ( kilta != "Inner circle" && Inner_circleStatus == "no" )
    {
	  Inner_circleLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Inner circle') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Inner circle";
       option1.text = "Inner circle";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ################################
  // # KILTA: INNER CIRCLE (loppuu) #
  // ################################

  // #########################
  // # KILTA: KHARIM (alkaa) #
  // #########################
  // Alku vaatimus: Nomad TAI Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( ( DiscipleStatus == "no" && kilta == "Kharim" ) || ( kilta == "Kharim" && ( AelenaStatus == "yes" || NergalStatus == "yes" || RangerStatus == "yes" || TzarakkStatus == "yes" ) ) )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Kharim
    if ( kilta == "Kharim" )
    {
	 KharimPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Kharim' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + KharimPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 20; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + KharimPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  KharimLvls = 20;
	 }
    }
    // Palautetaan muihin listoihin Kharim
    if ( kilta != "Kharim" && KharimStatus == "no" )
    {
	  KharimLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Kharim') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Kharim";
       option1.text = "Kharim";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: KHARIM (loppuu) #
  // ##########################

  // #########################
  // # KILTA: KNIGHT (alkaa) #
  // #########################
  // Alku vaatimus: Civilized (Good religious)
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" || 
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Knight" && SquireStatus == "no" && LiberatorStatus == "no" &&  TemplarStatus == "no" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Knight
    if ( kilta == "Knight" )
    {
	 KnightPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Knight' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + KnightPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 15; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + KnightPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  KnightLvls = 15;
	 }
    }
    // Palautetaan muihin listoihin Knight
    if ( kilta != "Knight" && KnightStatus == "no" )
    {
	  KnightLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Knight') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Knight";
       option1.text = "Knight";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: KNIGHT (loppuu) #
  // ##########################

  // ############################
  // # KILTA: LIBERATOR (alkaa) #
  // ############################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Liberator
    if ( kilta == "Liberator" )
    {
	 LiberatorPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Liberator' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + LiberatorPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + LiberatorPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  LiberatorLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Liberator
    if ( kilta != "Liberator" && LiberatorStatus == "no" )
    {
	  LiberatorLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Liberator') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Liberator";
       option1.text = "Liberator";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: LIBERATOR (loppuu) #
  // #############################

  // #######################
  // # KILTA: MAGE (alkaa) #
  // #######################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage
    if ( kilta == "Mage" )
    {
	 MagePosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + MagePosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + MagePosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  MageLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage
    if ( kilta != "Mage" && MageStatus == "no" )
    {
	  MageLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage";
       option1.text = "Mage";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ########################
  // # KILTA: MAGE (loppuu) #
  // ########################

  // ############################
  // # KILTA: MAGE_ACID (alkaa) #
  // ############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage acid" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage_acid
    if ( kilta == "Mage acid" )
    {
	 Mage_acidPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage acid' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_acidPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_acidPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_acidLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage_acid
    if ( kilta != "Mage acid" && Mage_acidStatus == "no" )
    {
	  Mage_acidLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage acid') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage acid";
       option1.text = "Mage acid";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: MAGE_ACID (loppuu) #
  // #############################

  // ############################
  // # KILTA: MAGE_ASPH (alkaa) #
  // ############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage asphyxiation" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage_asph
    if ( kilta == "Mage asphyxiation" )
    {
	 Mage_asphPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage asphyxiation' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_asphPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_asphPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_asphLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage asph
    if ( kilta != "Mage asphyxiation" && Mage_asphStatus == "no" )
    {
	  Mage_asphLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage asphyxiation') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage asphyxiation";
       option1.text = "Mage asphyxiation";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: MAGE_ASPH (loppuu) #
  // #############################

  // ############################
  // # KILTA: MAGE_COLD (alkaa) #
  // ############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage cold" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage cold
    if ( kilta == "Mage cold" )
    {
	 Mage_coldPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage cold' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_coldPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_asphPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_asphLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage cold
    if ( kilta != "Mage cold" && Mage_coldStatus == "no" )
    {
	  Mage_coldLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage cold') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage cold";
       option1.text = "Mage cold";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: MAGE_COLD (loppuu) #
  // #############################

  // ############################
  // # KILTA: MAGE_ELEC (alkaa) #
  // ############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage electricity" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage elec
    if ( kilta == "Mage electricity" )
    {
	 Mage_elecPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage electricity' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_elecPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_elecPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_elecLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage elec
    if ( kilta != "Mage electricity" && Mage_elecStatus == "no" )
    {
	  Mage_elecLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage electricity') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage electricity";
       option1.text = "Mage electricity";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: MAGE_ELEC (loppuu) #
  // #############################

  // ############################
  // # KILTA: MAGE_FIRE (alkaa) #
  // ############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage fire" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage fire
    if ( kilta == "Mage fire" )
    {
	 Mage_firePosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage fire' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_firePosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_firePosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_fireLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage fire
    if ( kilta != "Mage fire" && Mage_fireStatus == "no" )
    {
	  Mage_fireLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage fire') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage fire";
       option1.text = "Mage fire";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: MAGE_FIRE (loppuu) #
  // #############################

  // ############################
  // # KILTA: MAGE_MANA (alkaa) #
  // ############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage magical" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage mana
    if ( kilta == "Mage magical" )
    {
	 Mage_manaPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage magical' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_manaPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_manaPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_manaLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage mana
    if ( kilta != "Mage magical" && Mage_manaStatus == "no" )
    {
	  Mage_manaLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage magical') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage magical";
       option1.text = "Mage magical";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: MAGE_MANA (loppuu) #
  // #############################

  // ##############################
  // # KILTA: MAGE_POISON (alkaa) #
  // ##############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( MageStatus == "no" && kilta == "Mage poison" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Mage poison
    if ( kilta == "Mage poison" )
    {
	 Mage_poisonPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Mage poison' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + Mage_poisonPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 10; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + Mage_poisonPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  Mage_poisonLvls = 10;
	 }
    }
    // Palautetaan muihin listoihin Mage poison
    if ( kilta != "Mage poison" && Mage_poisonStatus == "no" )
    {
	  Mage_poisonLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Mage poison') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Mage poison";
       option1.text = "Mage poison";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###############################
  // # KILTA: MAGE_POISON (loppuu) #
  // ###############################

  // ###########################
  // # KILTA: MERCHANT (alkaa) #
  // ###########################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Merchant
    if ( kilta == "Merchant" )
    {
	 MerchantPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Merchant' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + MerchantPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 25; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + MerchantPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  MerchantLvls = 25;
	 }
    }
    // Palautetaan muihin listoihin Merchant
    if ( kilta != "Merchant" && MerchantStatus == "no" )
    {
	  MerchantLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Merchant') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Merchant";
       option1.text = "Merchant";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ############################
  // # KILTA: MERCHANT (loppuu) #
  // ############################

  // #######################
  // # KILTA: MONK (alkaa) #
  // #######################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Monk
    if ( kilta == "Monk" )
    {
	 MonkPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Monk' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + MonkPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + MonkPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  MonkLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Monk
    if ( kilta != "Monk" && MonkStatus == "no" )
    {
	  MonkLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Monk') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Monk";
       option1.text = "Monk";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ########################
  // # KILTA: MONK (loppuu) #
  // ########################

  // ############################
  // # KILTA: NAVIGATOR (alkaa) #
  // ############################
  // Alku vaatimus: Muut background käy paitsi Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" || 
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical")
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Navigator
    if ( kilta == "Navigator" )
    {
	 NavigatorPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Navigator' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + NavigatorPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 5; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + NavigatorPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  NavigatorLvls = 5;
	 }
    }
    // Palautetaan muihin listoihin Navigator
    if ( kilta != "Navigator" && NavigatorStatus == "no" )
    {
	  NavigatorLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Navigator') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Navigator";
       option1.text = "Navigator";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: NAVIGATOR (loppuu) #
  // #############################

  // #########################
  // # KILTA: NERGAL (alkaa) #
  // #########################
  // Alku vaatimus: Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( ( DiscipleStatus == "no" && kilta == "Nergal" ) || ( kilta == "Nergal" && DiscipleStatus == "yes" && ( AelenaStatus == "yes" || KharimStatus == "yes" || TzarakkStatus == "yes" ) ) )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Nergal
    if ( kilta == "Nergal" )
    {
	 NergalPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Nergal' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + NergalPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 20; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + NergalPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  NergalLvls = 20;
	 }
    }
    // Palautetaan muihin listoihin Nergal
    if ( kilta != "Nergal" && NergalStatus == "no" )
    {
	  NergalLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Nergal') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Nergal";
       option1.text = "Nergal";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: NERGAL (loppuu) #
  // ##########################

  // ######################
  // # KILTA: NUN (alkaa) #
  // ######################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Nun
    if ( kilta == "Nun" )
    {
	 NunPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Nun' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + NunPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 35; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + NunPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  NunLvls = 35;
	 }
    }
    // Palautetaan muihin listoihin Nun
    if ( kilta != "Nun" && NunStatus == "no" )
    {
	  NunLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Nun') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Nun";
       option1.text = "Nun";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #######################
  // # KILTA: NUN (loppuu) #
  // #######################

  // ##########################
  // # KILTA: PRIESTS (alkaa) #
  // ##########################
  // Alku vaatimus: Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Priests
    if ( kilta == "Priests" )
    {
	 PriestsPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Priests' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + PriestsPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 35; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + PriestsPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  PriestsLvls = 35;
	 }
    }
    // Palautetaan muihin listoihin Priests
    if ( kilta != "Priests" && PriestsStatus == "no" )
    {
	  PriestsLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Priests') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Priests";
       option1.text = "Priests";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: PRIESTS (loppuu) #
  // ###########################

  // #############################
  // # KILTA: PSIONICIST (alkaa) #
  // #############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Psionicist
    if ( kilta == "Psionicist" )
    {
	 PsionicistPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Psionicist' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + PsionicistPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 35; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + PsionicistPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  PsionicistLvls = 35;
	 }
    }
    // Palautetaan muihin listoihin Psionicist
    if ( kilta != "Psionicist" && PsionicistStatus == "no" )
    {
	  PsionicistLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Psionicist') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Psionicist";
       option1.text = "Psionicist";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##############################
  // # KILTA: PSIONICIST (loppuu) #
  // ##############################

  // #########################
  // # KILTA: RANGER (alkaa) #
  // #########################
  // Alku vaatimus: Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Ranger" && KharimStatus == "yes" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Ranger
    if ( kilta == "Ranger" )
    {
	 RangerPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Ranger' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + RangerPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 35; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + RangerPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  RangerLvls = 35;
	 }
    }
    // Palautetaan muihin listoihin Ranger
    if ( kilta != "Ranger" && RangerStatus == "no" )
    {
	  RangerLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Ranger') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Ranger";
       option1.text = "Ranger";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: RANGER (loppuu) #
  // ##########################

  // #########################
  // # KILTA: REAVER (alkaa) #
  // #########################
  // Alku vaatimus: Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Reaver
    if ( kilta == "Reaver" )
    {
	 ReaverPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Reaver' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + ReaverPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + ReaverPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  ReaverLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Reaver
    if ( kilta != "Reaver" && ReaverStatus == "no" )
    {
	  ReaverLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Reaver') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Reaver";
       option1.text = "Reaver";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: REAVER (loppuu) #
  // ##########################

  // #############################
  // # KILTA: RIFTWALKER (alkaa) #
  // #############################
  // Alku vaatimus: Magical
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Riftwalker
    if ( kilta == "Riftwalker" )
    {
	 RiftwalkerPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Riftwalker' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + RiftwalkerPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 15; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + RiftwalkerPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  RiftwalkerLvls = 15;
	 }
    }
    // Palautetaan muihin listoihin Riftwalker
    if ( kilta != "Riftwalker" && RiftwalkerStatus == "no" )
    {
	  RiftwalkerLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Riftwalker') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Riftwalker";
       option1.text = "Riftwalker";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##############################
  // # KILTA: RIFTWALKER (loppuu) #
  // ##############################

  // ############################
  // # KILTA: RUNEMAGES (alkaa) #
  // ############################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Runemages
    if ( kilta == "Runemages" )
    {
	 RunemagesPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Runemages' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + RunemagesPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + RunemagesPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  RunemagesLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Runemages
    if ( kilta != "Runemages" && RunemagesStatus == "no" )
    {
	  RunemagesLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Runemages') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Runemages";
       option1.text = "Runemages";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #############################
  // # KILTA: RUNEMAGES (loppuu) #
  // #############################

  // #########################
  // # KILTA: SABRES (alkaa) #
  // #########################
  // Alku vaatimus: Civilized
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Sabres
    if ( kilta == "Sabres" )
    {
	 SabresPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Sabres' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + SabresPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + SabresPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  SabresLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Sabres
    if ( kilta != "Sabres" && SabresStatus == "no" )
    {
	  SabresLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Sabres') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Sabres";
       option1.text = "Sabres";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: SABRES (loppuu) #
  // ##########################

  // #########################
  // # KILTA: SPIDER (alkaa) #
  // #########################
  // Alku vaatimus: Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Spider
    if ( kilta == "Spider" )
    {
	 SpiderPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Spider' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + SpiderPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + SpiderPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  SpiderLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Spider
    if ( kilta != "Spider" && SpiderStatus == "no" )
    {
	  SpiderLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Spider') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Spider";
       option1.text = "Spider";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: SPIDER (loppuu) #
  // ##########################

  // #########################
  // # KILTA: SQUIRE (alkaa) #
  // #########################
  // Alku vaatimus: Civilized TAI Nomad
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Squire" && LiberatorStatus == "no" && TemplarStatus == "no" && document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }
   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Squire
    if ( kilta == "Squire" )
    {
	 SquirePosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Squire' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + SquirePosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 15; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + SquirePosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  SquireLvls = 15;
	 }
    }
    // Palautetaan muihin listoihin Squire
    if ( kilta != "Squire" && SquireStatus == "no" )
    {
	  SquireLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Squire') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Squire";
       option1.text = "Squire";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ##########################
  // # KILTA: SQUIRE (loppuu) #
  // ##########################

  // ###########################
  // # KILTA: TARMALEN (alkaa) #
  // ###########################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Tarmalen
    if ( kilta == "Tarmalen" )
    {
	 TarmalenPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Tarmalen' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + TarmalenPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + TarmalenPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  TarmalenLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Tarmalen
    if ( kilta != "Tarmalen" && TarmalenStatus == "no" )
    {
	  TarmalenLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Tarmalen') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Tarmalen";
       option1.text = "Tarmalen";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ############################
  // # KILTA: TARMALEN (loppuu) #
  // ############################

  // ##########################
  // # KILTA: TEMPLAR (alkaa) #
  // ##########################
  // Alku vaatimus: Good religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Templar
    if ( kilta == "Templar" )
    {
	 TemplarPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Templar' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + TemplarPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + TemplarPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  TemplarLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Templar
    if ( kilta != "Templar" && TemplarStatus == "no" )
    {
	  TemplarLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Templar') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Templar";
       option1.text = "Templar";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: TEMPLAR (loppuu) #
  // ###########################

  // ########################
  // # KILTA: TIGER (alkaa) #
  // ########################
  // Alku vaatimus: Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Tiger
    if ( kilta == "Tiger" )
    {
	 TigerPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Tiger' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + TigerPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 30; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + TigerPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  TigerLvls = 30;
	 }
    }
    // Palautetaan muihin listoihin Tiger
    if ( kilta != "Tiger" && TigerStatus == "no" )
    {
	  TigerLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Tiger') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Tiger";
       option1.text = "Tiger";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // #########################
  // # KILTA: TIGER (loppuu) #
  // #########################

  // ##########################
  // # KILTA: TREENAV (alkaa) #
  // ##########################
  // Alku vaatimus: Kaikki background käy
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Civilized" ||
       document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Good religious" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Magical" ||
	   document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Nomad" )
  {
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Treenav
    if ( kilta == "Treenav" )
    {
	 TreenavPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Treenav' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + TreenavPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 3; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + TreenavPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  TreenavLvls = 3;
	 }
    }
    // Palautetaan muihin listoihin Treenav
    if ( kilta != "Treenav" && TreenavStatus == "no" )
    {
	  TreenavLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Treenav') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Treenav";
       option1.text = "Treenav";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: TREENAV (loppuu) #
  // ###########################

  // ##########################
  // # KILTA: TZARAKK (alkaa) #
  // ##########################
  // Alku vaatimus: Evil religious
  if ( document.getElementById('Background_Selection')[document.getElementById('Background_Selection').selectedIndex].value == "Evil religious" )
  { 
   // Variablet asetetaan tässä
   var looppi1 = 1;
   var looppi2 = 1;
   var looppi3 = 1;
   var kiltalista1 = [];
   var kiltalista2 = [];
   var pituus1 = 0;
   var pituus2 = 0;
   var apu1 = "";
   var apu2 = "";
   var apu3 = "";
   // Annetaan viesti väärästä valinnasta
   if ( kilta == "Tzarakk" && DiscipleStatus == "no" || ( kilta == "Tzarakk" && DiscipleStatus == "yes" && ( AelenaStatus == "yes" || KharimStatus == "yes" || NergalStatus == "yes" || SquireStatus == "yes" ) ) )
   {
	alert('Invalid requiments for ' + kilta + '!');
   }

   // Looppi 1 alkaa
   while ( looppi1 < 15 )
   {
    // Poistetaan muista listoista Tzarakk
    if ( kilta == "Tzarakk" )
    {
	 TzarakkPosition = kohta;
     if ( looppi1 != kohta )
     {
      var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
      var options1 = select1.getElementsByTagName('option');
      for ( var x1=1; x1<options1.length; x1++ ) 
      {
       if ( options1[x1].value == 'Tzarakk' ) 
       {
        select1.removeChild(options1[x1]);
       }
      }
     }
	 else
	 {
	  document.getElementById('Guild' + TzarakkPosition + '_lvls_Selection').options.length = 0;
	  for ( var x3 = 20; x3 > 0; x3-- )
      {
       var select3 = document.getElementById('Guild' + TzarakkPosition + '_lvls_Selection');
       var option3 = document.createElement('option');
       option3.value = x3;
       option3.text = x3;
       select3.add(option3);       
      }
	  TzarakkLvls = 20;
	 }
    }
    // Palautetaan muihin listoihin Tzarakk
    if ( kilta != "Tzarakk" && TzarakkStatus == "no" )
    {
	  TzarakkLvls = 0;
      pituus1 = document.getElementById('Guild' + looppi1 + '_Selection').options.length;
      for ( var x2=1; x2<pituus1; x2++ )
      {
       apu1 = document.getElementById('Guild' + looppi1 + '_Selection').options[x2].value;
       kiltalista1.push(apu1);
      }
      if ( kiltalista1.includes('Tzarakk') == false )
      {
       var select1 = document.getElementById('Guild' + looppi1 + '_Selection');
       var option1 = document.createElement('option');
       option1.value = "Tzarakk";
       option1.text = "Tzarakk";
       select1.add(option1);
       kiltalista1 = [];
      }
      else
      {
       kiltalista1 = [];
      }
    }
    looppi1++;
   } // Looppi 1 loppuu
  } 
  // ###########################
  // # KILTA: TZARAKK (loppuu) #
  // ###########################

  // Kutsutaan funktiota Calculate_levels()
  Calculate_levels();
  // #########################################
  // # Alert message näyttää listan jos      #
  // # kilta on valittuna lista laatikossa.  #
  // # Tätä voidaan hyväksikäyttää koodissa  #
  // # ja tilojen seurannassa.               #
  // #########################################
  /* alert('Aelena = ' + AelenaStatus + ' | Alchemists = ' + AlchemistsStatus + ' | Animist = ' + AnimistStatus + ' | Archers = ' + ArchersStatus + 
        '\nBarbarian = ' + BarbarianStatus + ' | Bard = ' + BardStatus + ' | Beastmaster = ' + BeastmasterStatus + ' | Channelers = ' + ChannelersStatus + 
        '\nCavalier = ' + CavalierStatus + ' | Civilized fighters = ' + Civilized_fightersStatus + ' | Civmage = ' + CivmageStatus + ' | Crimson = ' + CrimsonStatus + 
        '\nDisciple = ' + DiscipleStatus + ' | Druids = ' + DruidsStatus + ' | Explorer = ' + ExplorerStatus + ' | Folklorist = ' + FolkloristStatus +
        '\nInner circle = ' + Inner_circleStatus + ' | Kharim = ' + KharimStatus + ' | Knight = ' + KnightStatus+ ' | Liberator = ' + LiberatorStatus +
        '\nMage = ' + MageStatus + ' | Mage acid = ' + Mage_acidStatus + ' | Mage asph = ' + Mage_asphStatus+ ' | Mage cold = ' + Mage_coldStatus +
        '\nMage elec = ' + Mage_elecStatus + ' | Mage fire = ' + Mage_fireStatus + ' | Mage mana = ' + Mage_manaStatus + ' | Mage poison = ' + Mage_poisonStatus + 
        '\nMerchant = ' + MerchantStatus + ' | Monk = ' + MonkStatus + ' | Navigator = ' + NavigatorStatus + ' | Nergal = ' + NergalStatus +
        '\nNun = ' + NunStatus + ' | Priests = ' + PriestsStatus + ' | Psionicist = ' + PsionicistStatus + ' | Ranger = ' + RangerStatus + ' | Reaver = ' + ReaverStatus +
        '\nRiftwalker = ' + RiftwalkerStatus + ' | Runemages = ' + RunemagesStatus + ' | Sabres = ' + SabresStatus + ' | Spider = ' + SpiderStatus +
        '\nSquire = ' + SquireStatus + ' | Tarmalen = ' + TarmalenStatus + ' | Templar = ' + TemplarStatus + ' | Tiger = ' + TigerStatus +
        '\nTreenav = ' + TreenavStatus + ' | Tzarakk = ' + TzarakkStatus); */
 
 // lisää spellit ja skillit näkyville:
 // functio löytyy guildFunctions.js tiedostosta:
 showSkillsAndSpells(kilta, kohta);
 }
 
 function Update_Guilds(background)
 {
  // Nollataan kilta levelit
  AelenaLvls = 0;
  AlchemistsLvls = 0;
  AnimistLvls = 0;
  ArchersLvls = 0;
  BarbarianLvls = 0;
  BardLvls = 0;
  BeastmasterLvls = 0;
  ChannelersLvls = 0;
  CavalierLvls = 0;
  Civilized_fightersLvls = 0;
  CivmageLvls = 0;
  CrimsonLvls = 0;
  DiscipleLvls = 0;
  DruidsLvls = 0;
  ExplorerLvls = 0;
  FolkloristLvls = 0;
  Inner_circleLvls = 0;
  KharimLvls = 0;
  KnightLvls = 0;
  LiberatorLvls = 0;
  MageLvls = 0;
  Mage_acidLvls = 0;
  Mage_asphLvls = 0;
  Mage_coldLvls = 0;
  Mage_elecLvls = 0;
  Mage_fireLvls = 0;
  Mage_manaLvls = 0;
  Mage_poisonLvls = 0;
  MerchantLvls = 0;
  MonkLvls = 0;
  NavigatorLvls = 0;
  NergalLvls = 0;
  NunLvls = 0;
  PriestsLvls = 0;
  PsionicistLvls = 0;
  RangerLvls = 0;
  ReaverLvls = 0;
  RiftwalkerLvls = 0;
  RunemagesLvls = 0;
  SabresLvls = 0;
  SpiderLvls = 0;
  SquireLvls = 0;
  TarmalenLvls = 0;
  TemplarLvls = 0;
  TigerLvls = 0;
  TreenavLvls = 0;
  TzarakkLvls = 0;
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
  if ( background == "Evil religious" )
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
  if ( background == "Good religious" )
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
  Calculate_levels();
 }
 
 function Update_Levels(leveli, kohde)
 {
  var TempGuild = "";
  var TempLevel = "";
  // Katsotaan valinan kilta leveli ja sen hetkinen kilta
  switch (kohde)
  {
	  case 1:
	   TempGuild = document.getElementById('Guild1_Selection')[document.getElementById('Guild1_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild1_lvls_Selection')[document.getElementById('Guild1_lvls_Selection').selectedIndex].value;
	   break;
	  case 2:
	   TempGuild = document.getElementById('Guild2_Selection')[document.getElementById('Guild2_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild2_lvls_Selection')[document.getElementById('Guild2_lvls_Selection').selectedIndex].value;
	   break;
	  case 3:
	   TempGuild = document.getElementById('Guild3_Selection')[document.getElementById('Guild3_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild3_lvls_Selection')[document.getElementById('Guild3_lvls_Selection').selectedIndex].value;
	   break;
	  case 4:
	   TempGuild = document.getElementById('Guild4_Selection')[document.getElementById('Guild4_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild4_lvls_Selection')[document.getElementById('Guild4_lvls_Selection').selectedIndex].value;
	   break;
	  case 5:
	   TempGuild = document.getElementById('Guild5_Selection')[document.getElementById('Guild5_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild5_lvls_Selection')[document.getElementById('Guild5_lvls_Selection').selectedIndex].value;
	   break;
	  case 6:
	   TempGuild = document.getElementById('Guild6_Selection')[document.getElementById('Guild6_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild6_lvls_Selection')[document.getElementById('Guild6_lvls_Selection').selectedIndex].value;
	   break;
	  case 7:
	   TempGuild = document.getElementById('Guild7_Selection')[document.getElementById('Guild7_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild7_lvls_Selection')[document.getElementById('Guild7_lvls_Selection').selectedIndex].value;
	   break;
	  case 8:
	   TempGuild = document.getElementById('Guild8_Selection')[document.getElementById('Guild8_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild8_lvls_Selection')[document.getElementById('Guild8_lvls_Selection').selectedIndex].value;
	   break;
	  case 9:
	   TempGuild = document.getElementById('Guild9_Selection')[document.getElementById('Guild9_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild9_lvls_Selection')[document.getElementById('Guild9_lvls_Selection').selectedIndex].value;
	   break;
	  case 10:
	   TempGuild = document.getElementById('Guild10_Selection')[document.getElementById('Guild10_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild10_lvls_Selection')[document.getElementById('Guild10_lvls_Selection').selectedIndex].value;
	   break;
	  case 11:
	   TempGuild = document.getElementById('Guild11_Selection')[document.getElementById('Guild11_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild11_lvls_Selection')[document.getElementById('Guild11_lvls_Selection').selectedIndex].value;
	   break;
	  case 12:
	   TempGuild = document.getElementById('Guild12_Selection')[document.getElementById('Guild12_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild12_lvls_Selection')[document.getElementById('Guild12_lvls_Selection').selectedIndex].value;
	   break;
	  case 13:
	   TempGuild = document.getElementById('Guild13_Selection')[document.getElementById('Guild13_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild3_lvls_Selection')[document.getElementById('Guild3_lvls_Selection').selectedIndex].value;
	   break;
	  case 14:
	   TempGuild = document.getElementById('Guild14_Selection')[document.getElementById('Guild14_Selection').selectedIndex].value;
	   TempLevel = document.getElementById('Guild14_lvls_Selection')[document.getElementById('Guild14_lvls_Selection').selectedIndex].value;
	   break;
  }
  // Katsotaan jokainen kilta läpi ja asetetaan valittu leveli
  switch (TempGuild)
  {
   case 'Aelena':
    AelenaLvls = Number(TempLevel);
	break;
   case 'Alchemists':
    AlchemistsLvls = Number(TempLevel);
	break;
   case 'Animist':
    AnimistLvls = Number(TempLevel);
	break;
   case 'Archers':
    ArchersLvls = Number(TempLevel);
	break;
   case 'Barbarian':
    BarbarianLvls = Number(TempLevel);
	break;
   case 'Bard':
    BardLvls = Number(TempLevel);
	break;
   case 'Beastmaster':
    BeastmasterLvls = Number(TempLevel);
	break;
   case 'Cavalier':
    CavalierLvls = Number(TempLevel);
	break;
   case 'Channelers':
    ChannelersLvls = Number(TempLevel);
	break;
   case 'Civilized fighters':
    Civilized_fightersLvls = Number(TempLevel);
	break;
   case 'Civmage':
    CivmageLvls = Number(TempLevel);
	break;
   case 'Crimson':
    CrimsonLvls = Number(TempLevel);
	break;
   case 'Disciple':
    DiscipleLvls = Number(TempLevel);
	break;
   case 'Druids':
    DruidsLvls = Number(TempLevel);
	break;
   case 'Explorer':
    ExplorerLvls = Number(TempLevel);
	break;
   case 'Folklorist':
    FolkloristLvls = Number(TempLevel);
	break;
   case 'Inner circle':
    Inner_circleLvls = Number(TempLevel);
	break;
   case 'Kharim':
    KharimLvls = Number(TempLevel);
	break;
   case 'Knight':
    KnightLvls = Number(TempLevel);
	break;
   case 'Liberator':
    LiberatorLvls = Number(TempLevel);
	break;
   case 'Mage':
    MageLvls = Number(TempLevel);
	break;
   case 'Mage acid':
    Mage_acidLvls = Number(TempLevel);
	break;
   case 'Mage asphyxiation':
    Mage_asphLvls = Number(TempLevel);
	break;
   case 'Mage cold':
    Mage_coldLvls = Number(TempLevel);
	break;
   case 'Mage electricity':
    Mage_elecLvls = Number(TempLevel);
	break;
   case 'Mage fire':
    Mage_fireLvls = Number(TempLevel);
	break;
   case 'Mage magical':
    Mage_manaLvls = Number(TempLevel);
	break;
   case 'Mage poison':
    Mage_poisonLvls = Number(TempLevel);
	break;
   case 'Merchant':
    MerchantLvls = Number(TempLevel);
	break;
   case 'Monk':
    MonkLvls = Number(TempLevel);
	break;
   case 'Navigator':
    NavigatorLvls = Number(TempLevel);
	break;
   case 'Nergal':
    NergalLvls = Number(TempLevel);
	break;
   case 'Nun':
    NunLvls = Number(TempLevel);
	break;
   case 'Priests':
    PriestsLvls = Number(TempLevel);
	break;
   case 'Psionicist':
    PsionicistLvls = Number(TempLevel);
	break;
   case 'Ranger':
    RangerLvls = Number(TempLevel);
	break;
   case 'Reaver':
    ReaverLvls = Number(TempLevel);
	break;
   case 'Riftwalker':
    RiftwalkerLvls = Number(TempLevel);
	break;
   case 'Runemages':
    RunemagesLvls = Number(TempLevel);
	break;
   case 'Sabres':
    SabresLvls = Number(TempLevel);
	break;
   case 'Spider':
    SpiderLvls = Number(TempLevel);
	break;
   case 'Squire':
    SquireLvls = Number(TempLevel);
	break;
   case 'Tarmalen':
    TarmalenLvls = Number(TempLevel);
	break;
   case 'Templar':
    TemplarLvls = Number(TempLevel);
	break;
   case 'Tiger':
    TigerLvls = Number(TempLevel);
	break;
   case 'Treenav':
    TreenavLvls = Number(TempLevel);
	break;
   case 'Tzarakk':
    TzarakkLvls = Number(TempLevel);
	break;
  }
  // Kutsutaan funktiota
  Calculate_levels();
 }
 
 function Calculate_levels()
 {
  // Alku muuttujat
  var Race_lvls = 0;
  var Total_lvls = 0;
  // Haetaan Race_guild leveli määrä
  Race_lvls = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
  // Lasketaan yhteen ja muunnetaan string -> number
  Total_lvls = Number(Race_lvls) + 10 + AelenaLvls + AlchemistsLvls + AnimistLvls + ArchersLvls + BarbarianLvls + BardLvls + BeastmasterLvls + ChannelersLvls + CavalierLvls + Civilized_fightersLvls + CivmageLvls + CrimsonLvls + DiscipleLvls + DruidsLvls + ExplorerLvls + FolkloristLvls + Inner_circleLvls + KharimLvls + KnightLvls + LiberatorLvls + MageLvls + Mage_acidLvls + Mage_asphLvls + Mage_coldLvls + Mage_elecLvls + Mage_fireLvls + Mage_manaLvls + Mage_poisonLvls + MerchantLvls + MonkLvls + NavigatorLvls + NergalLvls + NunLvls + PriestsLvls + PsionicistLvls + RangerLvls + ReaverLvls + RiftwalkerLvls + RunemagesLvls + SabresLvls + SpiderLvls + SquireLvls + TarmalenLvls + TemplarLvls + TigerLvls + TreenavLvls + TzarakkLvls;
  // Tulostetaan Total_lvls
  document.getElementById('TotalLevelsBox').innerHTML = "<b>Levels:</b> " + Total_lvls;
 }