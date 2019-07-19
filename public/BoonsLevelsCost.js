  // ##############################
  // # Ascension tulostus (alkaa) #
  // ##############################
  function Ascension_Levels()
  {
    // koodia..
  }
  // ###############################
  // # Ascension tulostus (loppuu) #
  // ###############################

  // ##############################
  // # Levelien limitteri (alkaa) #
  // ##############################
  function Limitteri(kohta)
  {
    // Tähän koodia...
    //console.log('Hiiri havaittu!');
    var Summa = 0;
    var Apu = 0;
    var Rotulvls = 0;
    var Erotus = 0;
    var Kilta = "";
    var Levelit = 0;
    // Lasketaan levelit yhteensä
    for ( var Laskuri = 1; Laskuri < 15; Laskuri++ )
    {
      Apu = document.getElementById('Guild' + Laskuri +'_lvls_Selection')[document.getElementById('Guild' + Laskuri +'_lvls_Selection').selectedIndex].value;
      Summa = Summa + Number(Apu); 
    }
    Rotulvls = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
    Summa = Summa + Number(Rotulvls) + 10;
    //console.log('Summa='+Summa);
    Erotus = Summa - 100;
    Kilta = document.getElementById('Guild' + kohta +'_Selection')[document.getElementById('Guild' + kohta +'_Selection').selectedIndex].value;
    Levelit = document.getElementById('Guild' + kohta +'_lvls_Selection')[document.getElementById('Guild' + kohta +'_lvls_Selection').selectedIndex].value;
    if ( Erotus > 0 && Kilta != "None" )
    {
      //console.log('Kilta='+Kilta+' ja Levels='+Levelit+' ja Summa='+Summa+' ja Erotus='+Erotus);
      for ( var Poisto = 0; Poisto < Erotus; Poisto++ )
      {
        var select1 = document.getElementById('Guild' + kohta + '_lvls_Selection');
        select1.remove(0);
        Summa = 100;
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
        Summa = 100;
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
    for ( var SummaLooppi = 1; SummaLooppi < 15; SummaLooppi++ )
    {
      Apu = document.getElementById('Guild' + SummaLooppi +'_lvls_Selection')[document.getElementById('Guild' + SummaLooppi +'_lvls_Selection').selectedIndex].value;
      ApuSumma = ApuSumma + Number(Apu);
    }
    Rotulvls = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
    Summa = ApuSumma + Number(Rotulvls) + 10;
    document.getElementById('TotalLevelsBox').innerHTML = "<b>Levels:</b> " + Summa;
    
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

      document.getElementById('Boons_Box').innerHTML = aloitus+
        '<td><div class="boon_text" title="Your damage and resistance against your mortal enemy race is increased. Use syntax: arch enemy <race>. This boon can be taken multiple times.">Arch enemy</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your enemy\'s defence against all your physical and magical attacks is lower.">Art of war</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your magical critical strikes are stronger.">Avada kedavra</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Increases your maximum health.">Beefcake! BEEFCAKE!</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your ability to wield heavy weaponry is increased.">Biceps of steel</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Increases the size of your manapool.">Caster101 - how to get more mana</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your thick durandium skull prevents you from getting stunned so easily.">Durandium skull</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your spells cost fewer spell points to cast.">Economic conjuration</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your skills cost fewer endurance points to use.">Economic exertion</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Enhances melee damage dealt by character.">Enhanced damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Helps your character stay evil.">Evil drift</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Makes your heart work faster.">Fast metabolism</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="You mutate and grow in size.">Gigantism</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Helps your character stay good.">Good drift</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your damage spells are more effective.">Grand sorcerer</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Increases your knowledge of one spell or skill. Use syntax: hyperspecialist <sk/sp>. This boon can be taken multiple times.">Hyperspecialist</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Improves your ability to avoid attacks.">Improved avoidance</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Improves how quickly you attack during combat.">Improved combat speed</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Makes your character regen spellpoints faster.">Improved mental regeneration</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Makes your character gain health faster.">Improved physical regeneration</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Raises the maximum percentile in every skill that you may have.">Improved skills</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Raises the maximum percentile in every spell that you may have.">Improved spells</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Makes your character gain stamina faster.">Improved stamina regeneration</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Improves character\'s rate of gaining experience.">Intensified experience</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Regenerate your health, mana and stamina when killing monsters.">Leecher</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="You lose less experience in death. You suffer shorter penalties from death and when resurrected, you start with more health, mana and endurance.">Life insurance</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Increases your maximum endurance.">Long distance runner</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Lady luck is on your side.">Lucky horseshoe</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your healing spells are more effective.">Master healer</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Monsters that you slay drop more coins and the type of coin is more valuable.">Midas touch</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Improves the moon state so that spell point costs are biased more towards good moon.">Moon improvement</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Raises your natural constitution.">More constitution</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Raises your natural dexterity.">More dexterity</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Raises your natural intelligence.">More intelligence</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Raises your natural strength.">More strength</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Raises your natural wisdom.">More wisdom</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Helps your character stay neutral.">No drift</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your melee critical strikes are stronger.">Omni slash</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="You can carry more stuff without feeling fatigue.">Pack mule</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your items take less damage and are less likely to be disintegrated by any means.">Prudent adventurer</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Makes your spells go off faster.">Quick lips</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your chance to gain a critical melee attack is improved.">Reckless warrior</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Reduces endurance cost of moving around.">Reduced tiredness</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist acid type damage.">Resist acid damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Resist any type damage.">Resist any damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist asphyxiation type damage.">Resist asphyxiation damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist cold type damage.">Resist cold damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist electricity type damage.">Resist electricity damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Resist fire type damage.">Resist fire damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist magical type damage.">Resist magical damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist poison type damage.">Resist poison damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Resist psionic type damage.">Resist psionic damage</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Makes your skin harder thus improving protection.">Rigid skin</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Lessens your chance of fumbling a spell.">Semantic augmentation</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Improves your chance to hit. Decreases opponent\'s defensive percentile.">Steady hand</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Raises all stats, except charisma and size.">Super characteristics</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '</tr><tr>'+
        '<td><div class="boon_text" title="Your chance to gain a critical spell is improved.">Thaumaturgic accuracy</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        '<td><div class="boon_text" title="Your chance to avoid ambush is greatly increased.">Third eye</div></td>'+
        '<td><select class="select_boon_box"><option>None</option><option>Tiny</option><option>Small</option><option>Medium</option><option>Full</option></select></td>'+
        lopetus;
    
    }
    else
    {
      document.getElementById('Boons_Box').innerHTML = "";
    }
    // #############################  
    // # Boonien tulostus (loppuu) #
    // #############################
  }