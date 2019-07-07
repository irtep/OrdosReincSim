
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
/*
  30 kesäkuuta 2019, klo 12:27: Lisäsin data.js tiedoston johon laitoin rotu statit datan / ordos
*/
/*
  30 kesäkuuta 2019, klo 13:48: Lisäsin Update_Raceinfo() funktion joka päivittää rotu statit, eli seuraavia tiedostoja on muokattu
  (reincsim.html) (RaceBackgroundGuilds.js) (data.js) / ordos
*/
/*
  30 kesäkuuta 2019, klo 20:25: Lisäsin reincsim.html tiedostoon esimerkki pohjan rotukillan skills & spells.
  Lisäsin myös alemmas Kiltojen skills & spells osion... / ordos
*/
/*
  30 kesäkuuta 2019, klo 23:17: Muotoilin hieman esimerkki pohjaa joka näyttää paremmalta, jos siihen saa yhdistettyä koodin jotenkin / ordos
*/
/*
  1 heinäkuuta 2019, klo 19:28. Lisäsin Testi() funktion ja html tiedostoon kohde taulukon josta voi myöhemmin ruveta kehittämään
  rotu kiltojen skills & spells taulukkoa / ordos
*/
/*
  2 heinäkuuta 2019, klo 9:33. Päivitin Testi() funktion ja html sivun. Napin painalluksella rotu killan tiedot vaihtuvat ja toistaiseksi
                               Barsoomian ja Brownie on data.js tiedostossa ja toiminta rajoittuu niihin, default antaa tyhjän tulostuksen.
                    klo 10:26. Catfolk ja Centaur lisätty data.js ja Testi() funktioon.
                    klo 11:49. Muokkasin uusiksi rotu killan datan ja toistaiseksi barsoomian ainoastaan toiminnassa.
                    klo 12:26. Centaur asti toiminnassa. 
                    klo 14:08. Draconian asti toiminnassa.
                    klo 17:36. Giant asti toiminnassa.
                    klo 18:44. Leprechaun asti toiminnassa. 
                    klo 21:47. Kaikki rotu killan data valmis ja Testi() funktion päivitetty. / ordos
*/
/*
  3 heinäkuuta 2019, klo 10:41. Rotu killat päivitetty data.js tiedostoon ja seuraavia myös on muokattu RaceBackgroundGuilds.js
                                ja reincsim.html. Mahdollista lisäystä ("Barsoomian", "title", "The Monkey") rotu killan 
                                dataan suunnitelmissa. 
                     klo 11:00. Barsoomian rotu killan nimi (päivittyy napista) ainoastaa toiminassa.
                     klo 12:36. Rotu killan nimet toiminnassa.
                     klo 13:06. Taas string ja numero ei sovi yhteen ja tominta lakkasi mutta Number() tekee taikojaan ja taas toimii.
                     klo 15:35. Sain kun sainkin toimimaan sivun lautauksen yhteydessä tulee oletus rodun kilta ja rotua
                                vaihdettaessa kilta päivittuu omalle paikallensa.
                     klo 17:01. Nimesin funktioita (RaceBackgroundGuilds.js) tiedostossa paremmin ja lisäsin funktioille toiminta
                                selosteet. Myös päivitin funktio kutsut html tiedostoon.
                     klo 17:59. Aikani stylen kanssa takutessani sain valinta boxit muutettua rotu killan skills & spells osioon.
                     klo 19:38. Tein skilleille ja spelleille hyppyloopit 5 välein, joka tulostaa numeroboxeihin luvut. / ordos
*/
/*
  4 heinäkuuta 2019, klo 11:18. Lisäsin rotukillan skills & spells osioon exp laatikot tulostukseen.
                     klo 12:11. Muokkasin rotukiltojen taulukko tulostusta että TD elementit on TR elementtien sisällä.
                                Tämä siksi että toisissa selaimissa näkyisi oikein asettelut.
                     klo 16:48. Laitoin total cost laatikot ja stylesin niitä hieman. 
                     klo 18:05. Lisäsin Humanille skill & spell costi listan data tiedostoon joka on testi vaiheessa. 
                                Kaikkia muita rotuja voi verrata kertoimella koska human skill & spell costi on 100%.
                                Esimerkiksi Barsoomian skill=118%	ja spell=165% costit...
                     klo 18:58. Lisäsin Testi() funktion ja painikkeen sille. Toistaiseksi kehitys vaiheessa (ideoita otetaan vastaan)
                                ja toimii "Attack" ja "5" arvoilla, aika kehnolla koodilla.
                     klo 19:51. Taikalooppi teki sen taas! Toiminta alustavasti napin painalluksella. 
                     klo 22:44. Nyt Attack, Bargain ja Ceremony exp costit datassa.
                     klo 23:13. Nyt Attack, Bargain, Ceremony, Fire building ja First aid exp costit datassa. / ordos
*/
/*
  5 heinäkuuta 2019, klo 6:25. Human rotu killan skillit & spellit toiminassa. Taikaloopista uupuu vielä rotuerotin joka näyttäisi
                               oikean rodun skill & spell tiedot mikä on valittuna.
                    klo 10:45. Nyt pitäisi rotu killan skillit & spellit exp määrä tulla oikein.
                    klo 12:40. Lisäsin ExpKerroin taulukon data tiedostoon ja pävitin Testi() funktion. Nyt eri roduilla on
                               eri exp kertoimet ja tulostuvat ok. Seuraava vaihe ynnätä funktio eri nimellä html tiedostoon.
                    klo 15:48. Treenav killan 1x skill & spell datassa.
                    klo 17:08. Muokkasin html tiedostoa ja lisäsin force haun serveriltä reset napista painaessa, kun jossakin
                               selain & käyttöjärjestelmissä ei reset nappi palauttanut oletuksia.
                    klo 20:33. Päivitin Races taulukon data.js tiedostossa, exprate,skillmax ja spellmax lisätty.
                    klo 20:51. Päivitin html ja Update_RaceInfo() funktion, exprate,skillmax ja spellmax tulostuvat ok. / ordos

 6 heinäkuuta 2019, kello 15:09: Siivoilin pois noita jota ei tarvinnut (mun vanhoissa koodeissa) ja tein kiltoille 
   toimivan function (pitää vielä viilata ulkonäköä yhdenmukaiseksi racekiltojen kanssa kun nyt vähän hassun näkönen.)
   treenav ja navigator toimii jo valintoina, muut ei vielä. (navigatoriin ei oo kaikkia skillejä laitettu vielä)
   Kiltoja voi lisätä data kohtaan tähän tapaan miten rupesin navigator kiltaa laittaa data.js kohtaan: / caped
*/
/*
  6 heinäkuuta 2019, klo 19:41. Lisäsin muutaman Human taulukkoon ja pitäisi kai tuumia miten toteuttaisi muiden rotujen eri
                                Racial skill&spell max ylitykset, löytyisikö jokin toistuva kaava tai jotain? Alustavasti
                                ExpKerroin taulukossa on rotujen eri skill&spell kertoimet mutta piisaako se ainoastaan? / ordos
*/
/*
  7 heinäkuuta 2019, klo 12:08. Tein esimerkkitaulukon html tiedostoon että jotenkin noin tekis killoille omansa. Seuraavaksi alan
                                muokkaamaan data.js tiedostossa Human taulukkoa ja oletuksena human spell costi ois myös 100% joten
                                costit ois sen mukasia ja myöhemmin keksiä kaava raciaalin skill&spell ylitykseen jokaiselle rodulle
                                omansa ja miten sen toteuttais... / ordos
*/