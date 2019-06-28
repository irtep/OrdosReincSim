/*
  Raceguildit
*/

// Class kaikille raceguildeille:
class RaceGuild {
  constructor(race, name, requirements, mayTrain) {
    this.race = race;
    this.name = name;
    this.requirements = requirements;
    this.mayTrain = mayTrain;
  }
}

// Class skilleille ja spelleille
/* otettu pois, kun käytetään samaa ku guilds.js
class SkillSpell {
  constructor(name, skill, spell, levels, cost) {
    this.name = name;
    this.skill = skill;
    this.spell = spell;
    this.levels = levels;
    this.cost = cost; // how much first % cost for this race
  }
}
*/
// tänne kaikki racekiltat. Barso ja Human lisätty vasta.
const allRaceGuilds = [
  new RaceGuild('Barsoomian', 'The Monkey Squad',
  // requirements:                                     
    [],                                      
  // skills and spells:
    [{
      skillsAndSpells: [  // nimi, skilli, spelli
        new SkillSpell('Attack', true, false, 
          [20, 27, 35, 42, 50] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 398),  // skillcost ekalle 5% tälle racelle
        new SkillSpell('Detect trap', true, false, 
          [13, 21, 30, 39, 48] 
          , 417),
        new SkillSpell('Negate offhand penalty', true, false, 
          [15, 22, 30, 37, 45] 
          , 627),
        new SkillSpell('Short blades', true, false, 
          [0, 10, 18, 26, 35] 
          , 490),
        new SkillSpell('Track', true, false, 
          [10, 16, 23, 30, 37] 
          , 253),
        new SkillSpell('Tumbling attack', true, false, 
          [0, 0, 5, 12, 20] 
          , 1196)
      ]
    }]                                   
  ),
  new RaceGuild('Human', 'School of Hard Knox',
  // requirements:                                     
    [],                                      
  // skills and spells:
    [{
      skillsAndSpells: [  // nimi, skilli, spelli
        new SkillSpell('Attack', true, false, 
          [5, 8, 12, 16, 20] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 338),  // skillcost ekalle 5%, kun skillcost 100%
        new SkillSpell('Bargain', true, false, 
          [10, 15, 20, 25, 30] 
          , 303),
        new SkillSpell('Ceremony', true, false, 
          [10, 15, 20, 25, 30] 
          , 417),
        new SkillSpell('Fire building', true, false, 
          [5,8, 12, 16, 20] 
          , 215),
        new SkillSpell('First aid', true, false, 
          [10, 15, 20, 25, 30] 
          , 132),
        new SkillSpell('Moon sense', false, true, 
          [10, 15, 20, 25, 30] 
          , 253)
      ]
    }]                                   
  )
];
