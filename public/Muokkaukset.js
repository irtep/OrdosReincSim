
/*
  22 kesäkuuta 2019, klo 19:00: Päivitin reincsim.html tiedoston kokonaisuudessaan, mitä olin muutoksia tehny omalla koneella
  (muutoksia lähinnä perus aloitus tilan ulkoasu + asettelu, joita myöhemmin voidaan halutessa muuttaa) / ordos
*/

/*
  22 kesäkuuta 2019, klo 23:29: Muutin koodi tagit lowercaseksi ja lisäsin Explorer killan aloitus listoihin
  (heh, hävisi punaiset pallerot vasemmasta reunasta tämän myötä koska jostain syystä ei tykänny isoista kirjaimista) / ordos
*/
/*
  23 kesäkuuta 2019, klo 11:56: Rupesin hiukan hahmottelemaan raceGuild.js kohtaan raceGuildisysteemiä, mutta en ehtinyt
  hirveesti... / caped
*/
/*
  23 kesäkuuta 2019, klo 13:59: Alustava hahmottelu rotu requiments reincsim.js ja reincsim.html
  (alustavasti toiminta Disciple + Aelena valinta alert messagella) / ordos
*/
/*
  24 kesäkuuta 2019, klo 9:51: Disciple killan valinta joka poistaa ja lisää muista listoista kuin valinnasta valmis (reincsim.js)
  (myöhemmin katsoa jos saisi pienellä vaivalla listat aakkosjärjestykseen ilman että sen hetkinen valinta ei häviä listoista) / ordos
*/
/*
  24 kesäkuuta 2019, klo 12:23: Valinta proseduuri Disciple + Aelena vaatimukset melkein valmis (reincsim.js) / ordos
*/
/*
  24 kesäkuuta 2019, klo 19:52: Disciple + Aelena vaatimukset koodi valmis! Jesh! Edes jotain valmiina, heh... (reincsim.js) / ordos
*/
/*
  25 kesäkuuta 2019, klo 17:21: Kiltojen tila loopit valmiit (sisältää alertbox jolla voi seurata tiloja [yes/no] jonka voi jatkossa
  poistaa) Valmiina olevat killat = Aelena, Alchemists, Disciple (reincsim.js) / ordos
*/
/*
  26 kesäkuuta 2019, klo 15:38: Check_Requiments fucktio päivitetty ja kaikki killat (poisto/lisäys listoista) valmiina!
  Toimivuus nyt toistaiseksi hyvä, alertboxilla voi seurata tilojen muutoksia joita voidaa hyödyntää myös muualla(?). 
  Voi vaatia vielä hienosäätöä? / ordos
*/
/*
  26 kesäkuuta 2019, klo 15:56: Reincsim.html selectboxien ulkoasu määritykset style:llä asetettu 125px ja 50px / ordos
*/
/*
  26 kesäkuuta 2019, klo 15:58... humanin ja barson racekiltavalinta alkaa olla kohtapuolin valmis. 
  ei näytä vielä spellejä tai expcosteja, mutta pikkuhiljaa... pitäisi olla nyt helppo lisätä muitakin racekiltoja..
  pistin scriptit .html tiedostossa varmuuden vuoksi viimeseksi, ilmeisesti niin parasta, että kaikki elementit siellä ennenku
  scriptit. 
  pistin raceguildfunctionit erilleen, ettei kasva liikaa reincsim.js ja ne löytää sieltä kätevästi. / caped
*/
/*
  26 kesäkuuta 2019, klo 17:45: Uudelleen nimesin reincsim.js RaceBackgroundGuilds.js
  ja muutin reincsim.html js viittauksen myös / ordos
*/
/*
  26 kesäkuuta 2019, klo 18:22: Päivitin ja lisäsin Update_Guilds() funktionin RaceBackgroundGuilds.js tiedostoon...
  Funktio päivittää killat valintoihin background valinnan perusteella, toimivuus OK / ordos
*/
/*
  26 kesäkuuta 2019, klo 18:58: Lisäsin reincsim.js tiedoston ja laitoin reincsim.html bodyyn onload="Start()"
  Jos jatkossa tuonne reincsim.js tiedostoon alku toimet ym pienet muualle viittaukset... ok?
  Seuraavaksi pitäisi alkaa hahmoittelemaan RaceBackgroundGuilds.js tiedostoon kiltalevelit omiin boxeihin... 
  ESIM: Kilta=Treenav => Kiltalvls=3,2,1   / ordos
*/
/*
  27 kesäkuuta 2019, klo 9:29: Muutin reincsim.html kiltalista boxien leveyden 125 -> 135 että pisin killan nimi mahtuu laatikkoon
  ilman että osa kirjaimista jäisi piiloon. Ja myös RaceBackgroundGuilds.js työstö vielä kesken, tiety vaatimukset jos esim
  Disciple=no ja Aelena=yes => alertboxi ilmoittaa että "Invalind requiments for Aelena!" / ordos
*/
/*
  27 kesäkuuta 2019, klo 11:35: Kiltojen poisto/lisäys listoihin (RaceBackgroundGuilds.js) pitäisi olla nyt valmis ja väärin
  valittu kilta joka vaatii toisen killan eka allensa ilmoitukset valmiit myöskin / ordos
*/
/*
  27 kesäkuuta 2019, klo 17:07: Päivitin RaceBackgroundGuilds.js tiedoston. Nyt Killan valinta laittaa viereiseen boxiin levelit ja
  laskee yhteensä ne. Pientä hienosäätöä kaipailee kai vielä... / ordos
*/
/*
  27 kesäkuuta 2019, klo 21:51: Lisäsin funktion Update_Levels() RaceBackgroundGuilds.js tiedostoon ja kutsut reincsim.html tiedostoon.
  Nyt kilta leveleitä muutettaessa TotalLevels lasketaan muutoksesta... / ordos
*/
/*
  28 kesäkuuta 2019, klo 16:36: Päivitin RaceBackgroundGuilds.js kiltojen Status asetus while loopit yhteen caseen ja 647 riviä
  vähemmän koodia ja sama toimivuus. WAU! / ordos
*/
/*
  28 kesäkuuta 2019, klo 22:23. tein kiltanvalintaa valmiimmaksi... pitäisi varmaan lisätä seuraavaksi joku toinen kilta, jossa requirementsejä
  ja tehä nekin toimimaan. Rupesin ottamaan kanssa backuppeja, ni jos tarviit jotain niistä, ni ilmottele. / caped
*/
/*
  29 kesäkuuta 2019, klo 12:36: Laitoin style asetuksen reincsim.html tiedostoon super hienoille "Reset all" nappulalle ja osasta select
  boxeille jotka ovat aika COOL! Jatkossa yritän saada loput valintaboxit myös mutta sovitaan eka jätetäänkö tylsän "Perus" asteelle sivut
  vai tehdäänkö heti kerralla "Tyylikkkäät" sivut. Ja myöskin style.css tiedostoa voisi hyödyntää ja laittaa sinne style asetukset
  myöskin... / ordos
*/
/*
  29 kesäkuuta 2019, klo 17:10: Laitoin style asetelmat style.css tiedostoon html koodin seasta joka varmaan parempi tapa ja
  päivitin reincsim.html tiedostoa / ordos
*/
/*
  29 kesäkuuta 2019, klo 21:18: Muokkasin hieman ulkoasua style asetuksilla / ordos
*/