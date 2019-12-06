/*
  1 joulukuuta, klo 12:38. Leveli exp costi laskuri valmis. Vielä yhdistää skill&spell exp costit jotenkin koodiin. / ordos
                klo 16:50. Html tiedosto päivitetty. Lisätty Hps Sps Eps Rotu infoon. / ordos
                klo 18:17. Funktio Calculate_RaceGuild_ExpCost() päivitetty, id tagit uupuivat div elementeistä ja
                           nyt rotu killan skill&spell exp costit myös ynnäytyy TotalExp boxiin. / ordos
*/
/*
  30 marraskuuta, klo 10:26. Hirveä noin 5000 rivi syöppö koodi supistui reiluun 100 riviin! Toimii toistaiseksi
                             Civilized !!! Data vielä muokata oikeanlaiseksi ! / ordos
                  klo 14:33. Killan poitso/lisäys näyttäisi alustavasti toimivan OK ja data päivitetty myös. / ordos
                  klo 19:12. Korjasin pari kirjoitus virhettä (data.js) ja testaus jatkuu... / ordos
*/
/*
  29 marraskuuta, klo 10.12. Rotukillan valinnat heittivät error viestiä. Kahdessa paikassa Update_RaceGuild_Skills_Spells()
                             funktiossa puuttui ID viittaus, tämä on nyt korjattu. / ordos
*/
/*
  28 marraskuuta, klo 11:04. Treenaus piste data uusittu ja sen luenta koodi. Toimivuus OK! / ordos
                  klo 15:23. Funktio Calculate_TP() lisätty, laskee treeni pisteet yhteensä. / ordos
*/
/*
  27 marraskuuta, klo 16:11. Treenaus pisteet tulostuvat dropdown boxeihin rotu info elementissä (toistaiseksi vain Duck) / ordos
                  klo 19:44. Treenipisteiden hakeminen datasta ja laittaminen dropdown boxeihin valmis. / ordos
*/
/*
  26 marraskuuta, klo 12:55. Rotujen stattien treenauspiste pohjan hahmottelu valmis. Myös alustavasti Duck treeni pisteet
                             valmiina datassa (50 kpl) ja osittain Lich (vajaa). Tarkoitus hieman muokata dropdown boxit
                             html sivulla sopiviksi datan kanssa... / ordos
                  klo 13:18. Html sivun rotu info asettelu valmis. Näyttää ihan ok (toistaiseksi) / ordos
                  klo 20:10. Satyr stattien treenipisteet valmiina datassa. / ordos
*/
/*
  23 marraskuuta, klo 15:34. Rotujen statti elementin muokkaus aloitettu (Current | Max) / ordos
                  klo 16:18. Jokseenkin asettelu OK, vaatii vielä toimivuuden koodaus! / ordos
                  klo 19:00. Hieman Rotu stattien dataa muokkaan että saisi haluamalla tavalla tulostukset / ordos
*/
/*
  23 marraskuuta, klo 14:13. Boonit "muistavat" valintansa valmis! / ordos
*/
/*
  19 marraskuuta, klo 13:40. Aloitin taas koodaamaan. ALustavasti tarkoitus saada Boonien tilat (BoonsLevelsCost.js) muuttujiin jotta 
                             tila säilyisi vaikka listan piilottaisi/näkyviin (toggle) / ordos
*/

/*
  21 heinäkuuta, kello 14:39. Sain laitettua guildFunctions.js laskurit kuntoon.. pitää vaan lisätä kiltoja ja skillejä data.js:n / caped
*/
/*
  19 heinäkuuta, klo 22:53. Bugien korjausta guildFunctions.js... hiukan ehkä edistyin, mutta hommaa piisaa / caped
*/

/*
  19 heinäkuuta, klo 16:50. Siirsin Calculate_Levels() funktion BoonsLevelsCost.js tiedostoon ja uudelleen nimesin vanhan Limitteri() / ordos
*/
/*
   17 heinäkuuta, klo 12:00. Aloitin Boons tulostus koodin teon joka tulostaa boonit kun checked=true ja tyhjää kun checked=false / ordos
*/
/*
   14 heinäkuuta, klo 15:15. Lisäsin KiltaMaxLvls taulukon data.js tiedostoon ja hahmottelen snoopperia uudestaa joka taulukon avulla
                             osaisi tehdä lisays/poiston Lvls boxeissa ja alustavasti taikalooppi toiminnassa. / ordos
*/
/*
   13 heinäkuuta, klo 18:17. Aikani takutessa koodin kanssa nurinpäin tulostus osoittaitui huonoksi, joten muutan nyt killan 
                             valinnan yhteydessä oleva Lvls laatikko 1,2,3, jne järjestykseen ja koitan saada oletus levelin 
                             killan maksimiin valituksi...
                  klo 22:29. Vihdoin löysin hyvän esimerkin netistä ja palautin tulostuksen 3,2,1...myös leveli snoopperi lisäys
                             valmis mutta toimii ainoastaan ekassa laatikossa ja valintana Aelenan lvls... / ordos
*/
/* 13 heinäkuuta, klo 12:37. Lisäsin kampetta guildFunctions.js... Lisäsin myös niin, että voi valita disciplinen
                            .... mutta pitää tutkia... vielä jotain bugeja nyt kun disciplinen laitoin.../ 
                            / caped
*/
/*
  12 heinäkuuta, klo 9:13. Nimesin reincsim.js tiedoston BoonsLevelsCost.js, johon vaikka booneille, levelcost, training points,
                           level limitti ym jutuille koodia...
                klo 15:37. Taisin saaja level limitterin toimintaan, vielä ascensions ynnätä siihen kylkeen.
                klo 22:34. Poistin turhaa koodia ja yksi Update_Levels() funktio lähti sen myötä pois.
                           Muutin killan lvls boxien onchange="Calculate_Levels()" / ordos
*/
/*
  11 heinäkuuta, klo 12:40. Styletin total_text_box ja total_text_box2, asetin width 100px jos se olis sopiva leveys.
                 klo 13:15. Styletin skill_name_text_box ja spell_name_text_box 170px leveys (Rotukillan tulostuksessa).
                 klo 14:21. Rebirth, Racelevel, Race, Guildlist, Guilds, Lvls, Raceinfo, Raceguild, Boons ja Raceguild 
                            taulukot on nyt asetettu cellpadding=3 ja näyttää paremmalta kun liian harva välitys oli aluksi. / ordos 
*/
/*
  10 heinäkuuta, klo 10:20. Hahmottelin Total cost osaa ja Boons osaa hieman.
                 klo 18:17. Noin puolet booneista listattu ja styletty... 
                 klo 20:03. Vihdoin kaikki boonit listattu, vielä jotain pientä säätöä vaatinee kai... / ordos
*/
/*
  9 heinäkuuta, klo 17:45. Korjasin puutoksen Check_Requiments() funktiossa, Disciple ei toiminut Nomad taustalla mutta nyt taas
                           pitäisi toimia.
                klo 17:55. Poistin joku Default tekstin css tiedostosta jonka aluksi kommentoin pois käytöstä, saa myöhemmin lisätä 
                           jotain jos tarvetta.
                klo 21:24. Hahmottelen Exp & Gold totals osaa, mutta mitäs kaikkea sinne nyt laittaisi...hmm. / ordos
*/
/*
  9 heinäkuuta, klo 10:03. Viilasin hiukan valmiimmaksi kiltojen skill ja spell taulukoita... pikkuhiljaa valmistumassa / caped 
*/
/*
  8 heinäkuuta, klo 12:22. Lisäsin dataan navigator skillejä ja spellejä. (Jos täytettäisiin näin päin niin ekana näkyisi 
                           heti uusin muutos?) / ordos
*/
/*
  7 heinäkuuta, klo 14:33. Lisäsin Human dataan pari navigator taikaa.
                klo 16:38. Nyt on toiminnassa rotu killan exp costit ilman nappi kutsua. 
                           Tosin kaikkia skill tai spell ole vielä datassa, pieni osa on.
                klo 19:57. Löysin virheen joka laski spell costeja väärin Calculate_RaceGuild_ExpCost() funktiossa, nyt on oikein. / ordos
*/
