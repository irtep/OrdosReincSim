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
