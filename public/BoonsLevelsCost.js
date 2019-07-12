
// ###########################################################
// # Level limitti 100 leveliin + Ascension valinnat (alkaa) #
// ###########################################################
function Level_Limitter(kohta)
{
  var TempApu = 0;
  var TempArray = [];
  var TempKohta = document.getElementById('Guild' + kohta + '_lvls_Selection')[document.getElementById('Guild' + kohta + '_lvls_Selection').selectedIndex].value;
  var TempYhteensa = 0;
  var TempErotus = 0;
  var TempRotu = 0;
  var TempEdellinen = 0;
  var TempStatus = "no";
  for ( var x = 1; x < 15; x++ )
  {
    // Laitetaan muuttujaan jokaisesta kilta valinta leveli
    TempApu = document.getElementById('Guild' + x + '_lvls_Selection')[document.getElementById('Guild' + x + '_lvls_Selection').selectedIndex].value;
    TempRotu = document.getElementById('Race_guild_levels_Selection')[document.getElementById('Race_guild_levels_Selection').selectedIndex].value;
    // Laitetaan taulukkoon kiltojen levelit (tarviikohan lopuksi tätä???)
    TempArray.push(TempApu);
    // Lasketaan levelit yhteensä
    TempYhteensa = TempYhteensa + Number(TempApu);
    // Lasketaan erotus
    TempErotus = 100 - (TempYhteensa + Number(TempRotu) + 10);
    // Jos Killan valittu leveli > erotus
    
  }
  if ( TempKohta > TempErotus && TempStatus == "no" )
  {
    TempEdellinen = TempKohta;
    TempStatus = "yes";
  }
  console.log('Status='+TempStatus);
  console.log('Erotus='+TempErotus);
  console.log('Edellinen='+TempEdellinen);
  console.log('Yht='+TempYhteensa);
}


// haluatko testailla välis? voin pitää vaikka tupakki tauon...