  // ###################################
  // # Ladataan alku variablet (alkaa) #
  // ###################################
  var Booni1 = "none";
  var Booni2 = "none";
  var Booni3 = "none";
  var Booni4 = "none";
  var Booni5 = "none";
  var Booni6 = "none";
  var Booni7 = "none";
  var Booni8 = "none";
  var Booni9 = "none";
  var Booni10 = "none";
  var Booni11 = "none";
  var Booni12 = "none";
  var Booni13 = "none";
  var Booni14 = "none";
  var Booni15 = "none";
  var Booni16 = "none";
  var Booni17 = "none";
  var Booni18 = "none";
  var Booni19 = "none";
  var Booni20 = "none";
  var Booni21 = "none";
  var Booni22 = "none";
  var Booni23 = "none";
  var Booni24 = "none";
  var Booni25 = "none";
  var Booni26 = "none";
  var Booni27 = "none";
  var Booni28 = "none";
  var Booni29 = "none";
  var Booni30 = "none";
  var Booni31 = "none";
  var Booni32 = "none";
  var Booni33 = "none";
  var Booni34 = "none";
  var Booni35 = "none";
  var Booni36 = "none";
  var Booni37 = "none";
  var Booni38 = "none";
  var Booni39 = "none";
  var Booni40 = "none";
  var Booni41 = "none";
  var Booni42 = "none";
  var Booni43 = "none";
  var Booni44 = "none";
  var Booni45 = "none";
  var Booni46 = "none";
  var Booni47 = "none";
  var Booni48 = "none";
  var Booni49 = "none";
  var Booni50 = "none";
  var Booni51 = "none";
  var Booni52 = "none";
  var Booni53 = "none";
  var Booni54 = "none";
  var Booni55 = "none";
  var Booni56 = "none";
  var Booni57 = "none";
  var Booni58 = "none";
  var TotalLvlCosti = 0;
  // ####################################
  // # Ladataan alku variablet (loppuu) #
  // ####################################

  // #############################
  // # Ascension levelit (alkaa) #
  // #############################
  function Ascension_Levels()
  {
    var Hyppy = 0;
    var ApuArray = [];
    for ( var HyppyLooppi = 0; HyppyLooppi < 101; HyppyLooppi++ )
    {
      for ( var ApuLooppi = 0; ApuLooppi < 5; ApuLooppi++ )
      {
        ApuArray.push(Hyppy);
      }
      Hyppy = Hyppy + 1;
    }
    for ( var Looppi = 1; Looppi < 101; Looppi++ )
    {
      var select1 = document.getElementById('Ascension_Selection');
      var option1 = document.createElement("option");
      option1.value = ApuArray[Looppi];
      option1.text = Looppi;
      select1.add(option1);
    }
  }
  // ##############################
  // # Ascension levelit (loppuu) #
  // ##############################

  // ##############################
  // # Ascension tulostus (alkaa) #
  // ##############################
  function Update_Ascension()
  {
    var Ascension_lvls = document.getElementById('Ascension_Selection')[document.getElementById('Ascension_Selection').selectedIndex].value;
    document.getElementById('Ascension_Text').innerHTML = '<b class="bold_heading">Ascension:</b> (+' + Ascension_lvls + ')';
  }
  // ###############################
  // # Ascension tulostus (loppuu) #
  // ###############################

  // ##############################
  // # Levelien limitteri (alkaa) #
  // ##############################
  function Limitteri(kohta)
  {
    var Summa = 0;
    var Apu = 0;
    var Rotulvls = 0;
    var Erotus = 0;
    var Kilta = "";
    var Levelit = 0;
    var Ascension_lvls = document.getElementById('Ascension_Selection')[document.getElementById('Ascension_Selection').selectedIndex].value;
    
    if (kohta === undefined) {  // jos kutsutaan ilman numeroa niin annetaan 1.
      kohta = 1;
    }
    // Lasketaan levelit yhteensä
    for ( var Laskuri = 1; Laskuri < 15; Laskuri++ )
    {
      Apu = document.getElementById('Guild' + Laskuri +'_lvls_Selection')[document.getElementById('Guild' + Laskuri +'_lvls_Selection').selectedIndex].value;
      Summa = Summa + Number(Apu); 
    }
    Rotulvls = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
    Summa = Summa + Number(Rotulvls) + 10;
    Erotus = Summa - 100 - Number(Ascension_lvls);
    Kilta = document.getElementById('Guild' + kohta +'_Selection')[document.getElementById('Guild' + kohta +'_Selection').selectedIndex].value;
    Levelit = document.getElementById('Guild' + kohta +'_lvls_Selection')[document.getElementById('Guild' + kohta +'_lvls_Selection').selectedIndex].value;
    if ( Erotus > 0 && Kilta != "None" )
    {
      for ( var Poisto = 0; Poisto < Erotus; Poisto++ )
      {
        var select1 = document.getElementById('Guild' + kohta + '_lvls_Selection');
        select1.remove(0);
        Summa = 100 + Number(Ascension_lvls);
        document.getElementById('TotalLevelsBox').innerHTML = "<b>Levels:</b> " + Summa;
      }
      // Tarkistetaan onko tyhjä      
      if ( document.getElementById('Guild' + kohta + '_lvls_Selection').length == 0 )
      {
        document.getElementById('Guild' + kohta +'_Selection').selectedIndex = 0;
        var select2 = document.getElementById('Guild' + kohta + '_lvls_Selection');
        var option2 = document.createElement("option");
        option2.value = "0";
        option2.text = "0";
        select2.add(option2, select2[0]);
        Summa = 100 + Number(Ascension_lvls);
        document.getElementById('TotalLevelsBox').innerHTML = "<b>Levels:</b> " + Summa;
      }
    }
  }
  // ###############################
  // # Levelien limitteri (loppuu) #
  // ###############################

  // ###################################
  // # Levelien yhteenlaskenta (alkaa) #
  // ###################################
  function Calculate_Levels(valittu_lvl, kohta)
  {
    var Summa = 0;
    var Rotulvls = 0;
    var Apu = 0;
    var ApuSumma = 0;
	  TotalLvlCosti = 0;
    for ( var SummaLooppi = 1; SummaLooppi < 15; SummaLooppi++ )
    {
      Apu = document.getElementById('Guild' + SummaLooppi +'_lvls_Selection')[document.getElementById('Guild' + SummaLooppi +'_lvls_Selection').selectedIndex].value;
      ApuSumma = ApuSumma + Number(Apu);
    }
    // Lasketaan levelit
	Rotulvls = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
    Summa = ApuSumma + Number(Rotulvls) + 10;
    document.getElementById('TotalLevelsBox').innerHTML = "<b>Levels:</b> " + Summa;
    // Lasketaan leveli costit
	for ( var CostiLooppi = 0; CostiLooppi < (Summa-1); CostiLooppi++ )
	{
     TotalLvlCosti = TotalLvlCosti + LevelCost[CostiLooppi];
	}
	document.getElementById('TotalsExp').innerHTML = TotalLvlCosti;
	
    // Kutsutaa Limitteri() funktiota
    Limitteri(kohta);
    
   // Kiltojen skillien ja spellien näytön kutsuminen:
   changeInGuildLvls(valittu_lvl, kohta);

  }
  // ####################################
  // # Levelien yhteenlaskenta (loppuu) #
  // ####################################

  // ############################  
  // # Boonien tulostus (alkaa) #
  // ############################
  function Update_Boons()
  {
    var CheckStatus = document.getElementById('Boons_Checkboxi').checked;
    if ( CheckStatus == true )
    {
      var aloitus = '<table border="0" cellpadding="3"><tr>';
      var lopetus = '</tr></table>';
      
      // Boonien tilat käydään läpi (testi...)
      // Arch enemy boon
      if (Booni1 == "none")
      {
        var Booni1_Option = '<td><select id="booni1_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni1 == "tiny")
      {
        var Booni1_Option = '<td><select id="booni1_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni1 == "small")
      {
        var Booni1_Option = '<td><select id="booni1_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni1 == "medium")
      {
        var Booni1_Option = '<td><select id="booni1_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni1 == "full")
      {
        var Booni1_Option = '<td><select id="booni1_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Art of war boon
      if (Booni2 == "none")
      {
        var Booni2_Option = '<td><select id="booni2_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';
      }
      if (Booni2 == "tiny")
      {
        var Booni2_Option = '<td><select id="booni2_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';
      }
      if (Booni2 == "small")
      {
        var Booni2_Option = '<td><select id="booni2_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';
      }
      if (Booni2 == "medium")
      {
        var Booni2_Option = '<td><select id="booni2_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';
      }
      if (Booni2 == "full")
      {
        var Booni2_Option = '<td><select id="booni2_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';
      }
      // Avada kedavra boon
      if (Booni3 == "none")
      {
        var Booni3_Option = '<td><select id="booni3_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni3 == "tiny")
      {
        var Booni3_Option = '<td><select id="booni3_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni3 == "small")
      {
        var Booni3_Option = '<td><select id="booni3_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni3 == "medium")
      {
        var Booni3_Option = '<td><select id="booni3_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni3 == "full")
      {
        var Booni3_Option = '<td><select id="booni3_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Beefcake! BEEFCAKE! boon
      if (Booni4 == "none")
      {
        var Booni4_Option = '<td><select id="booni4_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni4 == "tiny")
      {
        var Booni4_Option = '<td><select id="booni4_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni4 == "small")
      {
        var Booni4_Option = '<td><select id="booni4_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni4 == "medium")
      {
        var Booni4_Option = '<td><select id="booni4_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni4 == "full")
      {
        var Booni4_Option = '<td><select id="booni4_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Biceps of steel boon
      if (Booni5 == "none")
      {
        var Booni5_Option = '<td><select id="booni5_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni5 == "tiny")
      {
        var Booni5_Option = '<td><select id="booni5_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni5 == "small")
      {
        var Booni5_Option = '<td><select id="booni5_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni5 == "medium")
      {
        var Booni5_Option = '<td><select id="booni5_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni5 == "full")
      {
        var Booni5_Option = '<td><select id="booni5_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Caster101 - how to get more mana boon
      if (Booni6 == "none")
      {
        var Booni6_Option = '<td><select id="booni6_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni6 == "tiny")
      {
        var Booni6_Option = '<td><select id="booni6_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni6 == "small")
      {
        var Booni6_Option = '<td><select id="booni6_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni6 == "medium")
      {
        var Booni6_Option = '<td><select id="booni6_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni6 == "full")
      {
        var Booni6_Option = '<td><select id="booni6_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Durandium skull boon
      if (Booni7 == "none")
      {
        var Booni7_Option = '<td><select id="booni7_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni7 == "tiny")
      {
        var Booni7_Option = '<td><select id="booni7_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni7 == "small")
      {
        var Booni7_Option = '<td><select id="booni7_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni7 == "medium")
      {
        var Booni7_Option = '<td><select id="booni7_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni7 == "full")
      {
        var Booni7_Option = '<td><select id="booni7_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Economic conjuration boon
      if (Booni8 == "none")
      {
        var Booni8_Option = '<td><select id="booni8_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni8 == "tiny")
      {
        var Booni8_Option = '<td><select id="booni8_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni8 == "small")
      {
        var Booni8_Option = '<td><select id="booni8_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni8 == "medium")
      {
        var Booni8_Option = '<td><select id="booni8_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni8 == "full")
      {
        var Booni8_Option = '<td><select id="booni8_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Economic exertion boon
      if (Booni9 == "none")
      {
        var Booni9_Option = '<td><select id="booni9_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni9 == "tiny")
      {
        var Booni9_Option = '<td><select id="booni9_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni9 == "small")
      {
        var Booni9_Option = '<td><select id="booni9_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni9 == "medium")
      {
        var Booni9_Option = '<td><select id="booni9_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni9 == "full")
      {
        var Booni9_Option = '<td><select id="booni9_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Enhanced damage boon
      if (Booni10 == "none")
      {
        var Booni10_Option = '<td><select id="booni10_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni10 == "tiny")
      {
        var Booni10_Option = '<td><select id="booni10_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni10 == "small")
      {
        var Booni10_Option = '<td><select id="booni10_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni10 == "medium")
      {
        var Booni10_Option = '<td><select id="booni10_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni10 == "full")
      {
        var Booni10_Option = '<td><select id="booni10_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Evil drift boon
      if (Booni11 == "none")
      {
        var Booni11_Option = '<td><select id="booni11_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni11 == "tiny")
      {
        var Booni11_Option = '<td><select id="booni11_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni11 == "small")
      {
        var Booni11_Option = '<td><select id="booni11_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni11 == "medium")
      {
        var Booni11_Option = '<td><select id="booni11_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni11 == "full")
      {
        var Booni11_Option = '<td><select id="booni11_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Fast metabolism boon
      if (Booni12 == "none")
      {
        var Booni12_Option = '<td><select id="booni12_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni12 == "tiny")
      {
        var Booni12_Option = '<td><select id="booni12_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni12 == "small")
      {
        var Booni12_Option = '<td><select id="booni12_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni12 == "medium")
      {
        var Booni12_Option = '<td><select id="booni12_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni12 == "full")
      {
        var Booni12_Option = '<td><select id="booni12_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Gigantism boon
      if (Booni13 == "none")
      {
        var Booni13_Option = '<td><select id="booni13_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni13 == "tiny")
      {
        var Booni13_Option = '<td><select id="booni13_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni13 == "small")
      {
        var Booni13_Option = '<td><select id="booni13_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni13 == "medium")
      {
        var Booni13_Option = '<td><select id="booni13_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni13 == "full")
      {
        var Booni13_Option = '<td><select id="booni13_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Good drift boon
      if (Booni14 == "none")
      {
        var Booni14_Option = '<td><select id="booni14_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni14 == "tiny")
      {
        var Booni14_Option = '<td><select id="booni14_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni14 == "small")
      {
        var Booni14_Option = '<td><select id="booni14_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni14 == "medium")
      {
        var Booni14_Option = '<td><select id="booni14_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni14 == "full")
      {
        var Booni14_Option = '<td><select id="booni14_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Grand sorcerer boon
      if (Booni15 == "none")
      {
        var Booni15_Option = '<td><select id="booni15_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni15 == "tiny")
      {
        var Booni15_Option = '<td><select id="booni15_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni15 == "small")
      {
        var Booni15_Option = '<td><select id="booni15_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni15 == "medium")
      {
        var Booni15_Option = '<td><select id="booni15_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni15 == "full")
      {
        var Booni15_Option = '<td><select id="booni15_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Hyperspecialist boon
      if (Booni16 == "none")
      {
        var Booni16_Option = '<td><select id="booni16_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni16 == "tiny")
      {
        var Booni16_Option = '<td><select id="booni16_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni16 == "small")
      {
        var Booni16_Option = '<td><select id="booni16_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni16 == "medium")
      {
        var Booni16_Option = '<td><select id="booni16_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni16 == "full")
      {
        var Booni16_Option = '<td><select id="booni16_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved avoidance boon
      if (Booni17 == "none")
      {
        var Booni17_Option = '<td><select id="booni17_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni17 == "tiny")
      {
        var Booni17_Option = '<td><select id="booni17_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni17 == "small")
      {
        var Booni17_Option = '<td><select id="booni17_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni17 == "medium")
      {
        var Booni17_Option = '<td><select id="booni17_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni17 == "full")
      {
        var Booni17_Option = '<td><select id="booni17_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved combat speed boon
      if (Booni18 == "none")
      {
        var Booni18_Option = '<td><select id="booni18_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni18 == "tiny")
      {
        var Booni18_Option = '<td><select id="booni18_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni18 == "small")
      {
        var Booni18_Option = '<td><select id="booni18_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni18 == "medium")
      {
        var Booni18_Option = '<td><select id="booni18_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni18 == "full")
      {
        var Booni18_Option = '<td><select id="booni18_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved mental regeneration boon
      if (Booni19 == "none")
      {
        var Booni19_Option = '<td><select id="booni19_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni19 == "tiny")
      {
        var Booni19_Option = '<td><select id="booni19_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni19 == "small")
      {
        var Booni19_Option = '<td><select id="booni19_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni19 == "medium")
      {
        var Booni19_Option = '<td><select id="booni19_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni19 == "full")
      {
        var Booni19_Option = '<td><select id="booni19_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved physical regeneration boon
      if (Booni20 == "none")
      {
        var Booni20_Option = '<td><select id="booni20_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni20 == "tiny")
      {
        var Booni20_Option = '<td><select id="booni20_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni20 == "small")
      {
        var Booni20_Option = '<td><select id="booni20_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni20 == "medium")
      {
        var Booni20_Option = '<td><select id="booni20_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni20 == "full")
      {
        var Booni20_Option = '<td><select id="booni20_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved skills boon
      if (Booni21 == "none")
      {
        var Booni21_Option = '<td><select id="booni21_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni21 == "tiny")
      {
        var Booni21_Option = '<td><select id="booni21_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni21 == "small")
      {
        var Booni21_Option = '<td><select id="booni21_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni21 == "medium")
      {
        var Booni21_Option = '<td><select id="booni21_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni21 == "full")
      {
        var Booni21_Option = '<td><select id="booni21_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved spells boon
      if (Booni22 == "none")
      {
        var Booni22_Option = '<td><select id="booni22_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni22 == "tiny")
      {
        var Booni22_Option = '<td><select id="booni22_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni22 == "small")
      {
        var Booni22_Option = '<td><select id="booni22_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni22 == "medium")
      {
        var Booni22_Option = '<td><select id="booni22_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni22 == "full")
      {
        var Booni22_Option = '<td><select id="booni22_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Improved stamina regeneration boon
      if (Booni23 == "none")
      {
        var Booni23_Option = '<td><select id="booni23_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni23 == "tiny")
      {
        var Booni23_Option = '<td><select id="booni23_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni23 == "small")
      {
        var Booni23_Option = '<td><select id="booni23_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni23 == "medium")
      {
        var Booni23_Option = '<td><select id="booni23_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni23 == "full")
      {
        var Booni23_Option = '<td><select id="booni23_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Intensified experience boon
      if (Booni24 == "none")
      {
        var Booni24_Option = '<td><select id="booni24_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni24 == "tiny")
      {
        var Booni24_Option = '<td><select id="booni24_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni24 == "small")
      {
        var Booni24_Option = '<td><select id="booni24_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni24 == "medium")
      {
        var Booni24_Option = '<td><select id="booni24_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni24 == "full")
      {
        var Booni24_Option = '<td><select id="booni24_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Leecher boon
      if (Booni25 == "none")
      {
        var Booni25_Option = '<td><select id="booni25_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni25 == "tiny")
      {
        var Booni25_Option = '<td><select id="booni25_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni25 == "small")
      {
        var Booni25_Option = '<td><select id="booni25_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni25 == "medium")
      {
        var Booni25_Option = '<td><select id="booni25_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni25 == "full")
      {
        var Booni25_Option = '<td><select id="booni25_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Life insurance boon
      if (Booni26 == "none")
      {
        var Booni26_Option = '<td><select id="booni26_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni26 == "tiny")
      {
        var Booni26_Option = '<td><select id="booni26_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni26 == "small")
      {
        var Booni26_Option = '<td><select id="booni26_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni26 == "medium")
      {
        var Booni26_Option = '<td><select id="booni26_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni26 == "full")
      {
        var Booni26_Option = '<td><select id="booni26_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Long distance runner boon
      if (Booni27 == "none")
      {
        var Booni27_Option = '<td><select id="booni27_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni27 == "tiny")
      {
        var Booni27_Option = '<td><select id="booni27_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni27 == "small")
      {
        var Booni27_Option = '<td><select id="booni27_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni27 == "medium")
      {
        var Booni27_Option = '<td><select id="booni27_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni27 == "full")
      {
        var Booni27_Option = '<td><select id="booni27_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Lucky horseshoe boon
      if (Booni28 == "none")
      {
        var Booni28_Option = '<td><select id="booni28_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni28 == "tiny")
      {
        var Booni28_Option = '<td><select id="booni28_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni28 == "small")
      {
        var Booni28_Option = '<td><select id="booni28_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni28 == "medium")
      {
        var Booni28_Option = '<td><select id="booni28_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni28 == "full")
      {
        var Booni28_Option = '<td><select id="booni28_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Master healer boon
      if (Booni29 == "none")
      {
        var Booni29_Option = '<td><select id="booni29_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni29 == "tiny")
      {
        var Booni29_Option = '<td><select id="booni29_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni29 == "small")
      {
        var Booni29_Option = '<td><select id="booni29_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni29 == "medium")
      {
        var Booni29_Option = '<td><select id="booni29_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni29 == "full")
      {
        var Booni29_Option = '<td><select id="booni29_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Midas touch boon
      if (Booni30 == "none")
      {
        var Booni30_Option = '<td><select id="booni30_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni30 == "tiny")
      {
        var Booni30_Option = '<td><select id="booni30_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni30 == "small")
      {
        var Booni30_Option = '<td><select id="booni30_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni30 == "medium")
      {
        var Booni30_Option = '<td><select id="booni30_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni30 == "full")
      {
        var Booni30_Option = '<td><select id="booni30_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Moon improvement boon
      if (Booni31 == "none")
      {
        var Booni31_Option = '<td><select id="booni31_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni31 == "tiny")
      {
        var Booni31_Option = '<td><select id="booni31_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni31 == "small")
      {
        var Booni31_Option = '<td><select id="booni31_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni31 == "medium")
      {
        var Booni31_Option = '<td><select id="booni31_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni31 == "full")
      {
        var Booni31_Option = '<td><select id="booni31_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // More constitution boon
      if (Booni32 == "none")
      {
        var Booni32_Option = '<td><select id="booni32_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni32 == "tiny")
      {
        var Booni32_Option = '<td><select id="booni32_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni32 == "small")
      {
        var Booni32_Option = '<td><select id="booni32_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni32 == "medium")
      {
        var Booni32_Option = '<td><select id="booni32_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni32 == "full")
      {
        var Booni32_Option = '<td><select id="booni32_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // More dexterity boon
      if (Booni33 == "none")
      {
        var Booni33_Option = '<td><select id="booni33_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni33 == "tiny")
      {
        var Booni33_Option = '<td><select id="booni33_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni33 == "small")
      {
        var Booni33_Option = '<td><select id="booni33_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni33 == "medium")
      {
        var Booni33_Option = '<td><select id="booni33_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni33 == "full")
      {
        var Booni33_Option = '<td><select id="booni33_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // More intelligence boon
      if (Booni34 == "none")
      {
        var Booni34_Option = '<td><select id="booni34_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni34 == "tiny")
      {
        var Booni34_Option = '<td><select id="booni34_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni34 == "small")
      {
        var Booni34_Option = '<td><select id="booni34_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni34 == "medium")
      {
        var Booni34_Option = '<td><select id="booni34_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni34 == "full")
      {
        var Booni34_Option = '<td><select id="booni34_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // More strength boon
      if (Booni35 == "none")
      {
        var Booni35_Option = '<td><select id="booni35_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni35 == "tiny")
      {
        var Booni35_Option = '<td><select id="booni35_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni35 == "small")
      {
        var Booni35_Option = '<td><select id="booni35_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni35 == "medium")
      {
        var Booni35_Option = '<td><select id="booni35_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni35 == "full")
      {
        var Booni35_Option = '<td><select id="booni35_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // More wisdom boon
      if (Booni36 == "none")
      {
        var Booni36_Option = '<td><select id="booni36_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni36 == "tiny")
      {
        var Booni36_Option = '<td><select id="booni36_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni36 == "small")
      {
        var Booni36_Option = '<td><select id="booni36_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni36 == "medium")
      {
        var Booni36_Option = '<td><select id="booni36_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni36 == "full")
      {
        var Booni36_Option = '<td><select id="booni36_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // No drift boon
      if (Booni37 == "none")
      {
        var Booni37_Option = '<td><select id="booni37_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni37 == "tiny")
      {
        var Booni37_Option = '<td><select id="booni37_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni37 == "small")
      {
        var Booni37_Option = '<td><select id="booni37_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni37 == "medium")
      {
        var Booni37_Option = '<td><select id="booni37_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni37 == "full")
      {
        var Booni37_Option = '<td><select id="booni37_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Omni slash boon
      if (Booni38 == "none")
      {
        var Booni38_Option = '<td><select id="booni38_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni38 == "tiny")
      {
        var Booni38_Option = '<td><select id="booni38_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni38 == "small")
      {
        var Booni38_Option = '<td><select id="booni38_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni38 == "medium")
      {
        var Booni38_Option = '<td><select id="booni38_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni38 == "full")
      {
        var Booni38_Option = '<td><select id="booni38_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Pack mule boon
      if (Booni39 == "none")
      {
        var Booni39_Option = '<td><select id="booni39_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni39 == "tiny")
      {
        var Booni39_Option = '<td><select id="booni39_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni39 == "small")
      {
        var Booni39_Option = '<td><select id="booni39_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni39 == "medium")
      {
        var Booni39_Option = '<td><select id="booni39_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni39 == "full")
      {
        var Booni39_Option = '<td><select id="booni39_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Prudent adventurer boon
      if (Booni40 == "none")
      {
        var Booni40_Option = '<td><select id="booni40_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni40 == "tiny")
      {
        var Booni40_Option = '<td><select id="booni40_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni40 == "small")
      {
        var Booni40_Option = '<td><select id="booni40_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni40 == "medium")
      {
        var Booni40_Option = '<td><select id="booni40_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni40 == "full")
      {
        var Booni40_Option = '<td><select id="booni40_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Quick lips boon
      if (Booni41 == "none")
      {
        var Booni41_Option = '<td><select id="booni41_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni41 == "tiny")
      {
        var Booni41_Option = '<td><select id="booni41_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni41 == "small")
      {
        var Booni41_Option = '<td><select id="booni41_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni41 == "medium")
      {
        var Booni41_Option = '<td><select id="booni41_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni41 == "full")
      {
        var Booni41_Option = '<td><select id="booni41_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Reckless warrior boon
      if (Booni42 == "none")
      {
        var Booni42_Option = '<td><select id="booni42_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni42 == "tiny")
      {
        var Booni42_Option = '<td><select id="booni42_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni42 == "small")
      {
        var Booni42_Option = '<td><select id="booni42_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni42 == "medium")
      {
        var Booni42_Option = '<td><select id="booni42_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni42 == "full")
      {
        var Booni42_Option = '<td><select id="booni42_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Reduced tiredness boon
      if (Booni43 == "none")
      {
        var Booni43_Option = '<td><select id="booni43_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni43 == "tiny")
      {
        var Booni43_Option = '<td><select id="booni43_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni43 == "small")
      {
        var Booni43_Option = '<td><select id="booni43_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni43 == "medium")
      {
        var Booni43_Option = '<td><select id="booni43_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni43 == "full")
      {
        var Booni43_Option = '<td><select id="booni43_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist acid damage boon
      if (Booni44 == "none")
      {
        var Booni44_Option = '<td><select id="booni44_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni44 == "tiny")
      {
        var Booni44_Option = '<td><select id="booni44_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni44 == "small")
      {
        var Booni44_Option = '<td><select id="booni44_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni44 == "medium")
      {
        var Booni44_Option = '<td><select id="booni44_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni44 == "full")
      {
        var Booni44_Option = '<td><select id="booni44_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist any damage boon
      if (Booni45 == "none")
      {
        var Booni45_Option = '<td><select id="booni45_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni45 == "tiny")
      {
        var Booni45_Option = '<td><select id="booni45_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni45 == "small")
      {
        var Booni45_Option = '<td><select id="booni45_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni45 == "medium")
      {
        var Booni45_Option = '<td><select id="booni45_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni45 == "full")
      {
        var Booni45_Option = '<td><select id="booni45_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist asphyxiation damage boon
      if (Booni46 == "none")
      {
        var Booni46_Option = '<td><select id="booni46_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni46 == "tiny")
      {
        var Booni46_Option = '<td><select id="booni46_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni46 == "small")
      {
        var Booni46_Option = '<td><select id="booni46_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni46 == "medium")
      {
        var Booni46_Option = '<td><select id="booni46_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni46 == "full")
      {
        var Booni46_Option = '<td><select id="booni46_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist cold damage boon
      if (Booni47 == "none")
      {
        var Booni47_Option = '<td><select id="booni47_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni47 == "tiny")
      {
        var Booni47_Option = '<td><select id="booni47_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni47 == "small")
      {
        var Booni47_Option = '<td><select id="booni47_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni47 == "medium")
      {
        var Booni47_Option = '<td><select id="booni47_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni47 == "full")
      {
        var Booni47_Option = '<td><select id="booni47_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist electricity damage boon
      if (Booni48 == "none")
      {
        var Booni48_Option = '<td><select id="booni48_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni48 == "tiny")
      {
        var Booni48_Option = '<td><select id="booni48_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni48 == "small")
      {
        var Booni48_Option = '<td><select id="booni48_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni48 == "medium")
      {
        var Booni48_Option = '<td><select id="booni48_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni48 == "full")
      {
        var Booni48_Option = '<td><select id="booni48_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist fire damage boon
      if (Booni49 == "none")
      {
        var Booni49_Option = '<td><select id="booni49_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni49 == "tiny")
      {
        var Booni49_Option = '<td><select id="booni49_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni49 == "small")
      {
        var Booni49_Option = '<td><select id="booni49_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni49 == "medium")
      {
        var Booni49_Option = '<td><select id="booni49_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni49 == "full")
      {
        var Booni49_Option = '<td><select id="booni49_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist magical damage boon
      if (Booni50 == "none")
      {
        var Booni50_Option = '<td><select id="booni50_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni50 == "tiny")
      {
        var Booni50_Option = '<td><select id="booni50_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni50 == "small")
      {
        var Booni50_Option = '<td><select id="booni50_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni50 == "medium")
      {
        var Booni50_Option = '<td><select id="booni50_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni50 == "full")
      {
        var Booni50_Option = '<td><select id="booni50_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist poison damage boon
      if (Booni51 == "none")
      {
        var Booni51_Option = '<td><select id="booni51_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni51 == "tiny")
      {
        var Booni51_Option = '<td><select id="booni51_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni51 == "small")
      {
        var Booni51_Option = '<td><select id="booni51_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni51 == "medium")
      {
        var Booni51_Option = '<td><select id="booni51_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni51 == "full")
      {
        var Booni51_Option = '<td><select id="booni51_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Resist psionic damage boon
      if (Booni52 == "none")
      {
        var Booni52_Option = '<td><select id="booni52_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni52 == "tiny")
      {
        var Booni52_Option = '<td><select id="booni52_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni52 == "small")
      {
        var Booni52_Option = '<td><select id="booni52_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni52 == "medium")
      {
        var Booni52_Option = '<td><select id="booni52_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni52 == "full")
      {
        var Booni52_Option = '<td><select id="booni52_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Rigid skin boon
      if (Booni53 == "none")
      {
        var Booni53_Option = '<td><select id="booni53_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni53 == "tiny")
      {
        var Booni53_Option = '<td><select id="booni53_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni53 == "small")
      {
        var Booni53_Option = '<td><select id="booni53_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni53 == "medium")
      {
        var Booni53_Option = '<td><select id="booni53_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni53 == "full")
      {
        var Booni53_Option = '<td><select id="booni53_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Semantic augmentation boon
      if (Booni54 == "none")
      {
        var Booni54_Option = '<td><select id="booni54_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni54 == "tiny")
      {
        var Booni54_Option = '<td><select id="booni54_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni54 == "small")
      {
        var Booni54_Option = '<td><select id="booni54_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni54 == "medium")
      {
        var Booni54_Option = '<td><select id="booni54_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni54 == "full")
      {
        var Booni54_Option = '<td><select id="booni54_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Steady hand boon
      if (Booni55 == "none")
      {
        var Booni55_Option = '<td><select id="booni55_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni55 == "tiny")
      {
        var Booni55_Option = '<td><select id="booni55_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni55 == "small")
      {
        var Booni55_Option = '<td><select id="booni55_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni55 == "medium")
      {
        var Booni55_Option = '<td><select id="booni55_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni55 == "full")
      {
        var Booni55_Option = '<td><select id="booni55_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Super characteristics boon
      if (Booni56 == "none")
      {
        var Booni56_Option = '<td><select id="booni56_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni56 == "tiny")
      {
        var Booni56_Option = '<td><select id="booni56_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni56 == "small")
      {
        var Booni56_Option = '<td><select id="booni56_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni56 == "medium")
      {
        var Booni56_Option = '<td><select id="booni56_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni56 == "full")
      {
        var Booni56_Option = '<td><select id="booni56_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Thaumaturgic accuracy boon
      if (Booni57 == "none")
      {
        var Booni57_Option = '<td><select id="booni57_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni57 == "tiny")
      {
        var Booni57_Option = '<td><select id="booni57_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni57 == "small")
      {
        var Booni57_Option = '<td><select id="booni57_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni57 == "medium")
      {
        var Booni57_Option = '<td><select id="booni57_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni57 == "full")
      {
        var Booni57_Option = '<td><select id="booni57_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Third eye boon
      if (Booni58 == "none")
      {
        var Booni58_Option = '<td><select id="booni58_selection" class="select_boon_box"><option value="none" selected>None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni58 == "tiny")
      {
        var Booni58_Option = '<td><select id="booni58_selection" class="select_boon_box"><option value="none">None</option><option value="tiny" selected>Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni58 == "small")
      {
        var Booni58_Option = '<td><select id="booni58_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small" selected>Small</option><option value="medium">Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni58 == "medium")
      {
        var Booni58_Option = '<td><select id="booni58_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium" selected>Medium</option><option value="full">Full</option></select></td>';    
      }
      if (Booni58 == "full")
      {
        var Booni58_Option = '<td><select id="booni58_selection" class="select_boon_box"><option value="none">None</option><option value="tiny">Tiny</option><option value="small">Small</option><option value="medium">Medium</option><option value="full" selected>Full</option></select></td>';    
      }
      // Tulostaa boonit
      document.getElementById('Boons_Box').innerHTML = aloitus+
        '<td><div class="boon_text" title="Your damage and resistance against your mortal enemy race is increased. Use syntax: arch enemy <race>. This boon can be taken multiple times.">Arch enemy</div></td>'+
        Booni1_Option+
        '<td><div class="boon_text" title="Your enemy\'s defence against all your physical and magical attacks is lower.">Art of war</div></td>'+
        Booni2_Option+
        '<td><div class="boon_text" title="Your magical critical strikes are stronger.">Avada kedavra</div></td>'+
        Booni3_Option+
        '<td><div class="boon_text" title="Increases your maximum health.">Beefcake! BEEFCAKE!</div></td>'+
        Booni4_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your ability to wield heavy weaponry is increased.">Biceps of steel</div></td>'+
        Booni5_Option+
        '<td><div class="boon_text" title="Increases the size of your manapool.">Caster101 - how to get more mana</div></td>'+
        Booni6_Option+
        '<td><div class="boon_text" title="Your thick durandium skull prevents you from getting stunned so easily.">Durandium skull</div></td>'+
        Booni7_Option+
        '<td><div class="boon_text" title="Your spells cost fewer spell points to cast.">Economic conjuration</div></td>'+
        Booni8_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your skills cost fewer endurance points to use.">Economic exertion</div></td>'+
        Booni9_Option+
        '<td><div class="boon_text" title="Enhances melee damage dealt by character.">Enhanced damage</div></td>'+
        Booni10_Option+
        '<td><div class="boon_text" title="Helps your character stay evil.">Evil drift</div></td>'+
        Booni11_Option+
        '<td><div class="boon_text" title="Makes your heart work faster.">Fast metabolism</div></td>'+
        Booni12_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="You mutate and grow in size.">Gigantism</div></td>'+
        Booni13_Option+
        '<td><div class="boon_text" title="Helps your character stay good.">Good drift</div></td>'+
        Booni14_Option+
        '<td><div class="boon_text" title="Your damage spells are more effective.">Grand sorcerer</div></td>'+
        Booni15_Option+
        '<td><div class="boon_text" title="Increases your knowledge of one spell or skill. Use syntax: hyperspecialist <sk/sp>. This boon can be taken multiple times.">Hyperspecialist</div></td>'+
        Booni16_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Improves your ability to avoid attacks.">Improved avoidance</div></td>'+
        Booni17_Option+
        '<td><div class="boon_text" title="Improves how quickly you attack during combat.">Improved combat speed</div></td>'+
        Booni18_Option+
        '<td><div class="boon_text" title="Makes your character regen spellpoints faster.">Improved mental regeneration</div></td>'+
        Booni19_Option+
        '<td><div class="boon_text" title="Makes your character gain health faster.">Improved physical regeneration</div></td>'+
        Booni20_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Raises the maximum percentile in every skill that you may have.">Improved skills</div></td>'+
        Booni21_Option+
        '<td><div class="boon_text" title="Raises the maximum percentile in every spell that you may have.">Improved spells</div></td>'+
        Booni22_Option+
        '<td><div class="boon_text" title="Makes your character gain stamina faster.">Improved stamina regeneration</div></td>'+
        Booni23_Option+
        '<td><div class="boon_text" title="Improves character\'s rate of gaining experience.">Intensified experience</div></td>'+
        Booni24_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Regenerate your health, mana and stamina when killing monsters.">Leecher</div></td>'+
        Booni25_Option+
        '<td><div class="boon_text" title="You lose less experience in death. You suffer shorter penalties from death and when resurrected, you start with more health, mana and endurance.">Life insurance</div></td>'+
        Booni26_Option+
        '<td><div class="boon_text" title="Increases your maximum endurance.">Long distance runner</div></td>'+
        Booni27_Option+
        '<td><div class="boon_text" title="Lady luck is on your side.">Lucky horseshoe</div></td>'+
        Booni28_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your healing spells are more effective.">Master healer</div></td>'+
        Booni29_Option+
        '<td><div class="boon_text" title="Monsters that you slay drop more coins and the type of coin is more valuable.">Midas touch</div></td>'+
        Booni30_Option+
        '<td><div class="boon_text" title="Improves the moon state so that spell point costs are biased more towards good moon.">Moon improvement</div></td>'+
        Booni31_Option+
        '<td><div class="boon_text" title="Raises your natural constitution.">More constitution</div></td>'+
        Booni32_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Raises your natural dexterity.">More dexterity</div></td>'+
        Booni33_Option+
        '<td><div class="boon_text" title="Raises your natural intelligence.">More intelligence</div></td>'+
        Booni34_Option+
        '<td><div class="boon_text" title="Raises your natural strength.">More strength</div></td>'+
        Booni35_Option+
        '<td><div class="boon_text" title="Raises your natural wisdom.">More wisdom</div></td>'+
        Booni36_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Helps your character stay neutral.">No drift</div></td>'+
        Booni37_Option+
        '<td><div class="boon_text" title="Your melee critical strikes are stronger.">Omni slash</div></td>'+
        Booni38_Option+
        '<td><div class="boon_text" title="You can carry more stuff without feeling fatigue.">Pack mule</div></td>'+
        Booni39_Option+
        '<td><div class="boon_text" title="Your items take less damage and are less likely to be disintegrated by any means.">Prudent adventurer</div></td>'+
        Booni40_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Makes your spells go off faster.">Quick lips</div></td>'+
        Booni41_Option+
        '<td><div class="boon_text" title="Your chance to gain a critical melee attack is improved.">Reckless warrior</div></td>'+
        Booni42_Option+
        '<td><div class="boon_text" title="Reduces endurance cost of moving around.">Reduced tiredness</div></td>'+
        Booni43_Option+
        '<td><div class="boon_text" title="Resist acid type damage.">Resist acid damage</div></td>'+
        Booni44_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Resist any type damage.">Resist any damage</div></td>'+
        Booni45_Option+
        '<td><div class="boon_text" title="Resist asphyxiation type damage.">Resist asphyxiation damage</div></td>'+
        Booni46_Option+
        '<td><div class="boon_text" title="Resist cold type damage.">Resist cold damage</div></td>'+
        Booni47_Option+
        '<td><div class="boon_text" title="Resist electricity type damage.">Resist electricity damage</div></td>'+
        Booni48_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Resist fire type damage.">Resist fire damage</div></td>'+
        Booni49_Option+
        '<td><div class="boon_text" title="Resist magical type damage.">Resist magical damage</div></td>'+
        Booni50_Option+
        '<td><div class="boon_text" title="Resist poison type damage.">Resist poison damage</div></td>'+
        Booni51_Option+
        '<td><div class="boon_text" title="Resist psionic type damage.">Resist psionic damage</div></td>'+
        Booni52_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Makes your skin harder thus improving protection.">Rigid skin</div></td>'+
        Booni53_Option+
        '<td><div class="boon_text" title="Lessens your chance of fumbling a spell.">Semantic augmentation</div></td>'+
        Booni54_Option+
        '<td><div class="boon_text" title="Improves your chance to hit. Decreases opponent\'s defensive percentile.">Steady hand</div></td>'+
        Booni55_Option+
        '<td><div class="boon_text" title="Raises all stats, except charisma and size.">Super characteristics</div></td>'+
        Booni56_Option+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your chance to gain a critical spell is improved.">Thaumaturgic accuracy</div></td>'+
        Booni57_Option+
        '<td><div class="boon_text" title="Your chance to avoid ambush is greatly increased.">Third eye</div></td>'+
        Booni58_Option+
        lopetus;
    
    }
    else
    {
      // Viedään boonien valinnat muuttujiin
      Booni1 = document.getElementById('booni1_selection')[document.getElementById('booni1_selection').selectedIndex].value;
      Booni2 = document.getElementById('booni2_selection')[document.getElementById('booni2_selection').selectedIndex].value;
      Booni3 = document.getElementById('booni3_selection')[document.getElementById('booni3_selection').selectedIndex].value;
      Booni4 = document.getElementById('booni4_selection')[document.getElementById('booni4_selection').selectedIndex].value;
      Booni5 = document.getElementById('booni5_selection')[document.getElementById('booni5_selection').selectedIndex].value;
      Booni6 = document.getElementById('booni6_selection')[document.getElementById('booni6_selection').selectedIndex].value;
      Booni7 = document.getElementById('booni7_selection')[document.getElementById('booni7_selection').selectedIndex].value;
      Booni8 = document.getElementById('booni8_selection')[document.getElementById('booni8_selection').selectedIndex].value;
      Booni9 = document.getElementById('booni9_selection')[document.getElementById('booni9_selection').selectedIndex].value;
      Booni10 = document.getElementById('booni10_selection')[document.getElementById('booni10_selection').selectedIndex].value;
      Booni11 = document.getElementById('booni11_selection')[document.getElementById('booni11_selection').selectedIndex].value;
      Booni12 = document.getElementById('booni12_selection')[document.getElementById('booni12_selection').selectedIndex].value;
      Booni13 = document.getElementById('booni13_selection')[document.getElementById('booni13_selection').selectedIndex].value;
      Booni14 = document.getElementById('booni14_selection')[document.getElementById('booni14_selection').selectedIndex].value;
      Booni15 = document.getElementById('booni15_selection')[document.getElementById('booni15_selection').selectedIndex].value;
      Booni16 = document.getElementById('booni16_selection')[document.getElementById('booni16_selection').selectedIndex].value;
      Booni17 = document.getElementById('booni17_selection')[document.getElementById('booni17_selection').selectedIndex].value;
      Booni18 = document.getElementById('booni18_selection')[document.getElementById('booni18_selection').selectedIndex].value;
      Booni19 = document.getElementById('booni19_selection')[document.getElementById('booni19_selection').selectedIndex].value;
      Booni20 = document.getElementById('booni20_selection')[document.getElementById('booni20_selection').selectedIndex].value;
      Booni21 = document.getElementById('booni21_selection')[document.getElementById('booni21_selection').selectedIndex].value;
      Booni22 = document.getElementById('booni22_selection')[document.getElementById('booni22_selection').selectedIndex].value;
      Booni23 = document.getElementById('booni23_selection')[document.getElementById('booni23_selection').selectedIndex].value;
      Booni24 = document.getElementById('booni24_selection')[document.getElementById('booni24_selection').selectedIndex].value;
      Booni25 = document.getElementById('booni25_selection')[document.getElementById('booni25_selection').selectedIndex].value;
      Booni26 = document.getElementById('booni26_selection')[document.getElementById('booni26_selection').selectedIndex].value;
      Booni27 = document.getElementById('booni27_selection')[document.getElementById('booni27_selection').selectedIndex].value;
      Booni28 = document.getElementById('booni28_selection')[document.getElementById('booni28_selection').selectedIndex].value;
      Booni29 = document.getElementById('booni29_selection')[document.getElementById('booni29_selection').selectedIndex].value;
      Booni30 = document.getElementById('booni30_selection')[document.getElementById('booni30_selection').selectedIndex].value;
      Booni31 = document.getElementById('booni31_selection')[document.getElementById('booni31_selection').selectedIndex].value;
      Booni32 = document.getElementById('booni32_selection')[document.getElementById('booni32_selection').selectedIndex].value;
      Booni33 = document.getElementById('booni33_selection')[document.getElementById('booni33_selection').selectedIndex].value;
      Booni34 = document.getElementById('booni34_selection')[document.getElementById('booni34_selection').selectedIndex].value;
      Booni35 = document.getElementById('booni35_selection')[document.getElementById('booni35_selection').selectedIndex].value;
      Booni36 = document.getElementById('booni36_selection')[document.getElementById('booni36_selection').selectedIndex].value;
      Booni37 = document.getElementById('booni37_selection')[document.getElementById('booni37_selection').selectedIndex].value;
      Booni38 = document.getElementById('booni38_selection')[document.getElementById('booni38_selection').selectedIndex].value;
      Booni39 = document.getElementById('booni39_selection')[document.getElementById('booni39_selection').selectedIndex].value;
      Booni40 = document.getElementById('booni40_selection')[document.getElementById('booni40_selection').selectedIndex].value;
      Booni41 = document.getElementById('booni41_selection')[document.getElementById('booni41_selection').selectedIndex].value;
      Booni42 = document.getElementById('booni42_selection')[document.getElementById('booni42_selection').selectedIndex].value;
      Booni43 = document.getElementById('booni43_selection')[document.getElementById('booni43_selection').selectedIndex].value;
      Booni44 = document.getElementById('booni44_selection')[document.getElementById('booni44_selection').selectedIndex].value;
      Booni45 = document.getElementById('booni45_selection')[document.getElementById('booni45_selection').selectedIndex].value;
      Booni46 = document.getElementById('booni46_selection')[document.getElementById('booni46_selection').selectedIndex].value;
      Booni47 = document.getElementById('booni47_selection')[document.getElementById('booni47_selection').selectedIndex].value;
      Booni48 = document.getElementById('booni48_selection')[document.getElementById('booni48_selection').selectedIndex].value;
      Booni49 = document.getElementById('booni49_selection')[document.getElementById('booni49_selection').selectedIndex].value;
      Booni50 = document.getElementById('booni50_selection')[document.getElementById('booni50_selection').selectedIndex].value;
      Booni51 = document.getElementById('booni51_selection')[document.getElementById('booni51_selection').selectedIndex].value;
      Booni52 = document.getElementById('booni52_selection')[document.getElementById('booni52_selection').selectedIndex].value;
      Booni53 = document.getElementById('booni53_selection')[document.getElementById('booni53_selection').selectedIndex].value;
      Booni54 = document.getElementById('booni54_selection')[document.getElementById('booni54_selection').selectedIndex].value;
      Booni55 = document.getElementById('booni55_selection')[document.getElementById('booni55_selection').selectedIndex].value;
      Booni56 = document.getElementById('booni56_selection')[document.getElementById('booni56_selection').selectedIndex].value;
      Booni57 = document.getElementById('booni57_selection')[document.getElementById('booni57_selection').selectedIndex].value;
      Booni58 = document.getElementById('booni58_selection')[document.getElementById('booni58_selection').selectedIndex].value;
      // Piiloitetaan booni lista
      document.getElementById('Boons_Box').innerHTML = "";
      
    }
    // #############################  
    // # Boonien tulostus (loppuu) #
    // #############################
  }
  
  // Sivun ladattua kutsutaan Ascension_Levels() funktiota joka tulostaa 1-100 levelit valinta laatikkoon
  Ascension_Levels();