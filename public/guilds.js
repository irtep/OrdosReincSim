/*
  guildit
*/

// Class kaikille guildeille:
class Guild {
  constructor(shortName, longName, requirements, mayTrain) {
    this.shortName = shortName;
    this.longName = longName;
    this.requirements = requirements;
    this.mayTrain = mayTrain;
  }
}

// Class skilleille ja spelleille
class SkillSpell {
  constructor(name, skill, spell, levels, cost) {
    this.name = name;
    this.skill = skill;
    this.spell = spell;
    this.levels = levels;
    this.cost = cost; // how much first % cost for this race
  }
}

// tänne kaikki guildit. Treenav vasta lisätty.
const allGuilds = [
  new Guild('Treenav', 'The Navigators of the Tree',
  // requirements:                                     
    [],                                      
  // skills and spells:
    [{
      skillsAndSpells: [  // nimi, skilli, spelli
        new SkillSpell('Tree herding', true, false, 
          [33, 66, 100] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 398),  // skillcost ekalle 5% tälle racelle
        new SkillSpell('Travel', false, true, 
          [33, 66, 100] 
          , 417)
      ]
    }]                                   
  )
];