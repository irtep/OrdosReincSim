  // ###############################
  // # Rotujen statit DATA (alkaa) #
  // ###############################
  const Races = [
  {name:"Barsoomian", strength:63, dexterity:101, constitution:77, intelligence:52, wisdom:42, size:50, exprate:80, skillmax:74, spellmax:60},
  {name:"Brownie", strength:37, dexterity:82, constitution:39, intelligence:79, wisdom:93, size:35, exprate:82, skillmax:80, spellmax:95},
  {name:"Catfolk", strength:77, dexterity:96, constitution:68, intelligence:62, wisdom:65, size:57, exprate:86, skillmax:92, spellmax:86},
  {name:"Centaur", strength:97, dexterity:55, constitution:102, intelligence:47, wisdom:72, size:87, exprate:73, skillmax:82, spellmax:78},
  {name:"Cromagnon", strength:79, dexterity:67, constitution:89, intelligence:42, wisdom:42, size:72, exprate:100, skillmax:88, spellmax:50},
  {name:"Cyclops", strength:112, dexterity:55, constitution:110, intelligence:27, wisdom:27, size:95, exprate:78, skillmax:78, spellmax:40},
  {name:"Demon", strength:87, dexterity:66, constitution:74, intelligence:70, wisdom:60, size:85, exprate:75, skillmax:88, spellmax:88},
  {name:"Doppelganger", strength:0, dexterity:0, constitution:0, intelligence:0, wisdom:0, size:0, exprate:0, skillmax:0, spellmax:0}, // HUOM! Päivitä Doppelganger statit ja poista tämä kommentti !
  {name:"Draconian", strength:94, dexterity:57, constitution:100, intelligence:42, wisdom:42, size:85, exprate:80, skillmax:80, spellmax:50},
  {name:"Drow", strength:62, dexterity:87, constitution:62, intelligence:77, wisdom:102, size:49, exprate:75, skillmax:83, spellmax:97},
  {name:"Duck", strength:50, dexterity:75, constitution:57, intelligence:98, wisdom:80, size:39, exprate:84, skillmax:81, spellmax:98},
  {name:"Duergar", strength:87, dexterity:72, constitution:92, intelligence:53, wisdom:64, size:55, exprate:84, skillmax:93, spellmax:80},
  {name:"Dwarf", strength:84, dexterity:68, constitution:86, intelligence:57, wisdom:63, size:54, exprate:85, skillmax:100, spellmax:70},
  {name:"Elf", strength:60, dexterity:77, constitution:59, intelligence:86, wisdom:92, size:52, exprate:78, skillmax:95, spellmax:100},
  {name:"Ent", strength:92, dexterity:17, constitution:65, intelligence:57, wisdom:112, size:92, exprate:86, skillmax:90, spellmax:92},
  {name:"Gargoyle", strength:88, dexterity:64, constitution:106, intelligence:32, wisdom:32, size:90, exprate:78, skillmax:80, spellmax:51},
  {name:"Giant", strength:112, dexterity:55, constitution:105, intelligence:27, wisdom:27, size:100, exprate:81, skillmax:84, spellmax:45},
  {name:"Gnoll", strength:77, dexterity:70, constitution:69, intelligence:59, wisdom:67, size:61, exprate:117, skillmax:80, spellmax:66},
  {name:"Gnome", strength:52, dexterity:72, constitution:54, intelligence:68, wisdom:100, size:46, exprate:90, skillmax:74, spellmax:93},
  {name:"Hobbit", strength:57, dexterity:102, constitution:79, intelligence:80, wisdom:67, size:38, exprate:100, skillmax:98, spellmax:76},
  {name:"Human", strength:71, dexterity:71, constitution:71, intelligence:71, wisdom:71, size:59, exprate:93, skillmax:100, spellmax:95},
  {name:"Kobold", strength:57, dexterity:64, constitution:56, intelligence:70, wisdom:57, size:42, exprate:114, skillmax:74, spellmax:85},
  {name:"Leech", strength:48, dexterity:107, constitution:47, intelligence:82, wisdom:62, size:25, exprate:100, skillmax:70, spellmax:92},
  {name:"Leprechaun", strength:42, dexterity:98, constitution:44, intelligence:98, wisdom:84, size:37, exprate:77, skillmax:85, spellmax:96},
  {name:"Lich", strength:65, dexterity:65, constitution:65, intelligence:65, wisdom:65, size:59, exprate:85, skillmax:95, spellmax:100},
  {name:"Lizardman", strength:85, dexterity:82, constitution:93, intelligence:32, wisdom:32, size:72, exprate:90, skillmax:84, spellmax:68},
  {name:"Merfolk", strength:60, dexterity:55, constitution:69, intelligence:90, wisdom:90, size:52, exprate:88, skillmax:79, spellmax:93},
  {name:"Minotaur", strength:92, dexterity:67, constitution:101, intelligence:42, wisdom:42, size:87, exprate:80, skillmax:83, spellmax:64},
  {name:"Moomin", strength:60, dexterity:77, constitution:65, intelligence:87, wisdom:87, size:53, exprate:91, skillmax:84, spellmax:96},
  {name:"Ogre", strength:97, dexterity:54, constitution:104, intelligence:30, wisdom:30, size:88, exprate:77, skillmax:78, spellmax:68},
  {name:"Orc", strength:87, dexterity:79, constitution:95, intelligence:42, wisdom:52, size:72, exprate:100, skillmax:82, spellmax:62},
  {name:"Penguin", strength:47, dexterity:27, constitution:68, intelligence:77, wisdom:87, size:40, exprate:96, skillmax:70, spellmax:93},
  {name:"Satyr", strength:57, dexterity:87, constitution:75, intelligence:79, wisdom:82, size:47, exprate:100, skillmax:85, spellmax:85},
  {name:"Shadow", strength:50, dexterity:68, constitution:68, intelligence:82, wisdom:82, size:55, exprate:79, skillmax:95, spellmax:95},
  {name:"Skeleton", strength:77, dexterity:77, constitution:77, intelligence:57, wisdom:57, size:59, exprate:93, skillmax:95, spellmax:80},
  {name:"Sprite", strength:40, dexterity:112, constitution:42, intelligence:77, wisdom:82, size:37, exprate:96, skillmax:98, spellmax:100},
  {name:"Thrikhren", strength:42, dexterity:40, constitution:42, intelligence:112, wisdom:72, size:41, exprate:85, skillmax:81, spellmax:99},
  {name:"Tinmen", strength:76, dexterity:54, constitution:81, intelligence:82, wisdom:34, size:67, exprate:91, skillmax:87, spellmax:80},
  {name:"Titan", strength:102, dexterity:62, constitution:102, intelligence:42, wisdom:45, size:110, exprate:81, skillmax:85, spellmax:75},
  {name:"Troll", strength:97, dexterity:57, constitution:101, intelligence:42, wisdom:47, size:82, exprate:83, skillmax:85, spellmax:55},
  {name:"Valar", strength:92, dexterity:82, constitution:74, intelligence:72, wisdom:92, size:82, exprate:72, skillmax:90, spellmax:88},
  {name:"Vampire", strength:57, dexterity:77, constitution:65, intelligence:88, wisdom:87, size:59, exprate:75, skillmax:82, spellmax:98},
  {name:"Wolfman", strength:76, dexterity:72, constitution:89, intelligence:60, wisdom:60, size:65, exprate:100, skillmax:85, spellmax:78},
  {name:"Zombie", strength:54, dexterity:32, constitution:112, intelligence:52, wisdom:97, size:51, exprate:90, skillmax:70, spellmax:90}
  ];
  // ################################
  // # Rotujen statit DATA (loppuu) #
  // ################################

  // #############################################
  // # Rotu kilta skillit & spellit DATA (alkaa) #
  // #############################################
  const RaceGuilds = [
  ["Barsoomian", "title", "The Monkey Squad"],
  ["Barsoomian", "skill", "Attack", 20,27,35,42,50],
  ["Barsoomian", "skill", "Detect trap", 13,21,30,39,48],
  ["Barsoomian", "skill", "Negate offhand penalty", 15,22,30,37,45],
  ["Barsoomian", "skill", "Short blades", 0,10,18,26,35],
  ["Barsoomian", "skill", "Track", 10,16,23,30,37],
  ["Barsoomian", "skill", "Tumbling attack", 0,0,5,12,20],
  ["Barsoomian", "spell", "None", 0,0,0,0,0],
  ["Brownie", "title", "The Elusive Brownies"],    
  ["Brownie", "skill", "Camouflage", 10,17,25,32,40],
  ["Brownie", "skill", "Cast generic", 20,25,30,35,40],
  ["Brownie", "spell", "Create food", 10,17,25,32,40],
  ["Brownie", "spell", "Invisibility", 10,22,35,47,60],
  ["Brownie", "spell", "Minor party heal", 10,32,55,77,100],
  ["Catfolk", "title", "The Followers of Silvan the Vagabond"],    
  ["Catfolk", "skill", "Alertness", 10,20,30,40,50],
  ["Catfolk", "skill", "Attack", 10,20,30,40,50],
  ["Catfolk", "skill", "Dodge", 0,0,5,15,25],
  ["Catfolk", "skill", "Hunting", 20,40,60,80,100],
  ["Catfolk", "skill", "Naval tactics", 10,20,30,40,50],
  ["Catfolk", "skill", "Sneak", 10,20,30,40,50],  
  ["Catfolk", "spell", "Clairvoyance", 10,13,17,21,25],
  ["Catfolk", "spell", "See magic", 10,20,30,40,50],
  ["Centaur", "title", "The Riders of the Storm"],    
  ["Centaur", "skill", "Attack", 5,11,17,23,30],
  ["Centaur", "skill", "Fishing", 20,40,60,60,60],
  ["Centaur", "skill", "Hunting", 20,40,60,60,60],
  ["Centaur", "skill", "Polearms", 5,8,12,16,20],
  ["Centaur", "skill", "Swim", 20,40,60,60,60],
  ["Centaur", "skill", "Warhorse philosophy", 0,0,0,0,5],  
  ["Centaur", "spell", "None", 0,0,0,0,0],
  ["Cromagnon", "title", "The Club Club"],    
  ["Cromagnon", "skill", "Attack", 20,25,30,35,40],
  ["Cromagnon", "skill", "Bludgeons", 0,0,5,25,45],
  ["Cromagnon", "skill", "Fire building", 5,15,25,25,25],
  ["Cromagnon", "skill", "Hunting", 10,22,35,47,60],
  ["Cromagnon", "skill", "Throw weight", 15,21,27,33,40],
  ["Cromagnon", "spell", "None", 0,0,0,0,0],
  ["Cyclops", "title", "School of Survival for one-eyes"],
  ["Cyclops", "skill", "Attack", 5,11,17,23,30],
  ["Cyclops", "skill", "Bludgeons", 5,11,17,23,30],
  ["Cyclops", "skill", "Camping", 5,8,12,16,20],
  ["Cyclops", "skill", "Fishing", 5,20,35,50,65],
  ["Cyclops", "skill", "Hunting", 10,20,30,30,30],
  ["Cyclops", "skill", "Negate offhand penalty", 20,40,60,80,100],  
  ["Cyclops", "spell", "None", 0,0,0,0,0],
  ["Demon", "title", "The Angels of Despair"],    
  ["Demon", "skill", "Evil intent", 10,22,35,47,60],
  ["Demon", "spell", "Demonic gate", 0,0,60,60,60],
  ["Demon", "spell", "Dimension door", 10,22,35,47,60],
  ["Demon", "spell", "Pestilence", 0,0,0,5,10],
  ["Doppelganger", "title", "The Defrauders"],
  ["Doppelganger", "skill", "Camouflage", 10,20,30,40,50],
  ["Doppelganger", "skill", "Hiding", 10,20,30,40,50],
  ["Doppelganger", "skill", "Sleight", 10,20,30,40,50],
  ["Doppelganger", "skill", "Sneak", 10,20,30,40,50],
  ["Doppelganger", "spell", "None", 0,0,0,0,0],
  ["Draconian", "title", "The Dark Alliance"],    
  ["Draconian", "skill", "Cast generic", 10,20,30,40,50],
  ["Draconian", "skill", "Draconic tail", 0,0,0,0,5],
  ["Draconian", "skill", "Leadership", 5,16,27,38,50],
  ["Draconian", "spell", "Darkness", 15,26,37,48,60],
  ["Draconian", "spell", "Field of fear", 15,26,37,48,60],
  ["Draconian", "spell", "Teleport with error", 5,16,27,38,50],
  ["Drow", "title", "Denizens of the Underdark"],
  ["Drow", "skill", "Alertness", 10,16,22,28,35],
  ["Drow", "skill", "Cast generic", 10,13,17,21,25],
  ["Drow", "skill", "Short blades", 10,16,22,28,35],
  ["Drow", "spell", "Darkness", 20,40,60,60,60],
  ["Drow", "spell", "Spider walk", 10,20,30,40,50],
  ["Drow", "spell", "Thorn spray", 10,20,30,40,50],
  ["Duck", "title", "Citizens of the Pond"],    
  ["Duck", "skill", "Alertness", 5,16,28,40,40],
  ["Duck", "skill", "Fishing", 5,28,52,76,100],
  ["Duck", "skill", "Hiding", 5,16,27,38,50],
  ["Duck", "spell", "Call pigeon", 5,16,27,38,50],
  ["Duergar", "title", "The Profaners of Earth"],    
  ["Duergar", "skill", "Alcohol tolerance", 0,35,40,45,50],
  ["Duergar", "skill", "Appraise", 0,0,0,10,50],
  ["Duergar", "skill", "Axes", 10,17,25,32,40],
  ["Duergar", "skill", "Blacksmithing", 0,0,10,25,40],
  ["Duergar", "skill", "Compare", 10,20,30,40,50],
  ["Duergar", "skill", "Frenzy", 10,20,30,40,50],
  ["Duergar", "spell", "Darkness", 30,50,70,70,70],
  ["Dwarf", "title", "The Crafters of Rock"],    
  ["Dwarf", "skill", "Alcohol tolerance", 0,0,0,35,45],
  ["Dwarf", "skill", "Appraise", 0,0,0,10,50],
  ["Dwarf", "skill", "Axes", 10,17,25,32,40],
  ["Dwarf", "skill", "Blacksmithing", 0,0,10,25,40],
  ["Dwarf", "skill", "Compare", 10,17,25,32,40],
  ["Dwarf", "skill", "Mining", 10,15,20,25,30],
  ["Dwarf", "skill", "Mountaineering", 20,40,60,80,100],
  ["Dwarf", "spell", "None", 0,0,0,0,0],
  ["Elf", "title", "The Forester Guild"],    
  ["Elf", "skill", "Alertness", 5,17,30,30,30],
  ["Elf", "skill", "Hiking", 5,16,27,38,50],
  ["Elf", "skill", "Plant lore", 5,18,32,46,60],
  ["Elf", "skill", "Sneak", 5,18,32,46,60],
  ["Elf", "spell", "See invisible", 5,16,27,38,50],
  ["Elf", "spell", "See magic", 5,16,27,38,50],
  ["Ent", "title", "The Treeherders"],    
  ["Ent", "skill", "Alertness", 5,13,22,31,40],
  ["Ent", "skill", "Camouflage", 5,16,27,38,50],
  ["Ent", "skill", "Know thy roots", 0,0,0,0,5],
  ["Ent", "skill", "Plant lore", 5,23,42,61,80],
  ["Ent", "skill", "Track", 5,11,17,23,30],
  ["Ent", "skill", "Woodland stealth", 5,16,27,38,50],
  ["Ent", "spell", "Light", 5,11,17,23,30],
  ["Gargoyle", "title", "Eternal Guardians"],    
  ["Gargoyle", "skill", "Discipline", 10,20,30,40,50],
  ["Gargoyle", "skill", "Endurance", 10,20,30,40,50],
  ["Gargoyle", "skill", "Grapple", 10,20,30,40,50],
  ["Gargoyle", "skill", "Parry", 0,0,0,10,20],
  ["Gargoyle", "skill", "Stunned maneuvers", 0,10,23,36,50],
  ["Gargoyle", "spell", "None", 0,0,0,0,0],
  ["Giant", "title", "The Tribal Grounds of Giants"],    
  ["Giant", "skill", "Attack", 10,17,25,32,40],
  ["Giant", "skill", "Bash", 5,13,22,31,40],
  ["Giant", "skill", "Bludgeons", 0,0,5,17,30],
  ["Giant", "skill", "Giant step", 0,10,30,60,100],
  ["Giant", "skill", "Scouting", 0,20,35,50,50],
  ["Giant", "skill", "Throw weight", 0,10,16,23,30],
  ["Giant", "skill", "Torch creation", 0,20,26,33,40],
  ["Giant", "spell", "None", 0,0,0,0,0],
  ["Gnoll", "title", "The Outcasts"],    
  ["Gnoll", "skill", "Attack", 10,15,20,25,30],
  ["Gnoll", "skill", "Combat sense", 0,0,5,12,20],
  ["Gnoll", "skill", "Detect trap", 10,20,20,20,20],
  ["Gnoll", "skill", "Hiking", 10,20,30,30,30],
  ["Gnoll", "skill", "Hunting", 15,23,32,41,50],
  ["Gnoll", "skill", "Track", 10,18,26,35,35],
  ["Gnoll", "spell", "None", 0,0,0,0,0],
  ["Gnome", "title", "The Collegium of Inventors"],    
  ["Gnome", "skill", "Appraise", 10,17,25,32,40],
  ["Gnome", "skill", "Cast generic", 10,13,16,20,20],
  ["Gnome", "skill", "Tinkering", 20,40,60,80,100],
  ["Gnome", "spell", "Create money", 10,13,17,21,25],
  ["Gnome", "spell", "Floting letters", 0,0,10,27,45],
  ["Gnome", "spell", "Identify", 0,0,10,25,40],
  ["Gnome", "spell", "See magic", 0,0,0,35,45],
  ["Hobbit", "title", "Shirrifs of Shire"],    
  ["Hobbit", "skill", "Appraise", 5,15,25,35,45],
  ["Hobbit", "skill", "Attack", 4,10,17,23,30],
  ["Hobbit", "skill", "Burrowing", 20,40,60,80,100],
  ["Hobbit", "skill", "Hiding", 5,11,17,23,30],
  ["Hobbit", "skill", "Sewing", 5,15,25,35,45],
  ["Hobbit", "skill", "Short blades", 4,8,12,16,20],
  ["Hobbit", "skill", "Sneak", 0,10,20,30,30],
  ["Hobbit", "skill", "Track", 0,0,10,20,30],
  ["Hobbit", "spell", "Create food", 10,20,30,40,50],
  ["Human", "title", "School of Hard Knox"],    
  ["Human", "skill", "Attack", 5,8,12,16,20],
  ["Human", "skill", "Bargain", 10,15,20,25,30],
  ["Human", "skill", "Ceremony", 10,15,20,25,30],
  ["Human", "skill", "Fire building", 5,8,12,16,20],
  ["Human", "skill", "First aid", 10,15,20,25,30],
  ["Human", "spell", "Moon sense", 10,15,20,25,30],
  ["Kobold", "title", "The Kobold Tunnel Rats"],    
  ["Kobold", "skill", "Alertness", 0,20,30,30,30],
  ["Kobold", "skill", "Detect trap", 0,10,25,25,25],
  ["Kobold", "skill", "Dodge", 0,0,0,10,20],
  ["Kobold", "skill", "Enhanced peer", 0,25,35,35,35],
  ["Kobold", "skill", "Short blades", 0,0,10,20,30],
  ["Kobold", "skill", "Sleight", 0,15,25,35,45],
  ["Kobold", "spell", "None", 0,0,0,0,0],
  ["Leech", "title", "Blood Brothers with Attitude"],
  ["Leech", "skill", "None", 0,0,0,0,0],
  ["Leech", "spell", "Cure light wounds", 5,12,20,27,35],
  ["Leech", "spell", "Energy drain", 10,20,30,40,50],
  ["Leech", "spell", "Life leech", 15,23,32,41,50],
  ["Leech", "spell", "Life link", 0,10,26,43,60],
  ["Leech", "spell", "Mind blast", 0,0,5,32,60],
  ["Leprechaun", "title", "The Order of the Shamrock"],
  ["Leprechaun", "skill", "Ventriloquism", 40,55,70,85,100],
  ["Leprechaun", "spell", "Anti magic field", 20,32,45,57,70],
  ["Leprechaun", "spell", "Create money", 5,11,17,23,30],
  ["Leprechaun", "spell", "Electric field", 20,32,45,57,70],
  ["Leprechaun", "spell", "Field of fear", 20,32,45,57,70],
  ["Leprechaun", "spell", "Field of light", 15,26,37,48,60],
  ["Leprechaun", "spell", "Invisibility", 15,26,37,48,60],
  ["Leprechaun", "spell", "Shelter", 20,32,45,57,70],
  ["Leprechaun", "spell", "Teleport with error", 5,16,27,38,50],
  ["Lich", "title", "The Shadows of Maosoleum"],
  ["Lich", "skill", "Cast cold", 5,13,22,31,40],
  ["Lich", "skill", "Cast generic", 5,13,22,31,40],
  ["Lich", "spell", "Chill touch", 30,35,40,45,50],
  ["Lich", "spell", "Energy drain", 0,0,30,45,60],
  ["Lich", "spell", "Flame arrow", 30,45,60,75,90],
  ["Lich", "spell", "Neutralize field", 30,30,30,30,30],
  ["Lich", "spell", "Preserve corpse", 30,45,60,75,90],
  ["Lizardman", "title", "The Hall of the Slithering Horde"],
  ["Lizardman", "skill", "Attack", 10,16,22,28,35],
  ["Lizardman", "skill", "Camouflage", 0,0,10,30,50],
  ["Lizardman", "skill", "Controlled panic", 0,0,10,17,25],
  ["Lizardman", "skill", "Locate water", 0,0,5,20,35],
  ["Lizardman", "skill", "Scaly tail", 0,0,0,0,5],
  ["Lizardman", "skill", "Swim", 0,0,10,40,70],
  ["Lizardman", "skill", "Wilderness survival", 5,16,27,38,50],
  ["Lizardman", "spell", "None", 0,0,0,0,0],
  ["Merfolk", "title", "The Seven Sea Chorus"],
  ["Merfolk", "skill", "Fishing", 10,22,35,47,60],
  ["Merfolk", "skill", "Locate water", 10,20,30,40,50],
  ["Merfolk", "skill", "Polearms", 10,17,25,32,40],
  ["Merfolk", "spell", "Light", 10,20,30,40,50],
  ["Merfolk", "spell", "Rain", 10,17,25,32,40],
  ["Minotaur", "title", "The Order of the Raging Bull"],
  ["Minotaur", "skill", "Attack", 20,25,30,35,40],
  ["Minotaur", "skill", "Bash", 0,0,5,25,45],
  ["Minotaur", "skill", "Bloody horns", 0,0,0,0,5],
  ["Minotaur", "skill", "Bludgeons", 0,0,5,22,40],
  ["Minotaur", "skill", "Frenzy", 0,0,10,20,30],
  ["Minotaur", "skill", "Stargazing", 0,20,30,40,40],
  ["Minotaur", "skill", "Throw weight", 10,12,15,17,20],
  ["Minotaur", "spell", "None", 0,0,0,0,0],
  ["Moomin", "title", "The Groke Defense"],
  ["Moomin", "skill", "Attack", 10,20,30,40,50],
  ["Moomin", "skill", "Dodge", 0,0,0,5,10],
  ["Moomin", "skill", "Parry", 0,0,10,15,20],
  ["Moomin", "skill", "Swim", 25,31,37,43,50],
  ["Moomin", "skill", "Throw weight", 5,8,12,16,20],
  ["Moomin", "spell", "None", 0,0,0,0,0],
  ["Ogre", "title", "The Galfang's School of Mercenaries"],
  ["Ogre", "skill", "Attack", 20,23,27,31,35],
  ["Ogre", "skill", "Bash", 0,0,5,22,40],
  ["Ogre", "skill", "Bludgeons", 0,0,5,20,35],
  ["Ogre", "skill", "Camping", 0,20,25,30,30],
  ["Ogre", "skill", "Hunting", 10,15,20,25,30],
  ["Ogre", "skill", "Throw weight", 15,16,17,18,20],
  ["Ogre", "spell", "None", 0,0,0,0,0],
  ["Orc", "title", "The Orcish Raiders"],
  ["Orc", "skill", "Attack", 10,13,17,21,25],
  ["Orc", "skill", "Bludgeons", 10,13,16,20,20],
  ["Orc", "skill", "Looting and burning", 0,0,10,12,15],
  ["Orc", "skill", "Mining", 0,0,10,12,15],
  ["Orc", "skill", "Short blades", 10,12,15,17,20],
  ["Orc", "skill", "Torch creation", 0,0,10,20,30],
  ["Orc", "spell", "None", 0,0,0,0,0],
  ["Penguin", "title", "The Arctic Law, The Polar Police"],
  ["Penguin", "skill", "Alcohol tolerance", 5,15,15,15,15],
  ["Penguin", "skill", "Attack", 20,23,27,31,35],
  ["Penguin", "skill", "Fishing", 10,27,45,62,80],
  ["Penguin", "spell", "Chill touch", 5,18,32,46,60],
  ["Penguin", "spell", "Cure light wounds", 0,0,5,12,20],
  ["Satyr", "title", "The Revelers of the Night"],
  ["Satyr", "skill", "Alcohol tolerance", 10,26,42,58,74],
  ["Satyr", "skill", "Brawling", 10,17,25,32,40],
  ["Satyr", "skill", "Hiking", 10,17,25,32,40],
  ["Satyr", "spell", "Create food", 5,8,12,16,20],
  ["Satyr", "spell", "Hallucination", 0,20,30,40,50],
  ["Satyr", "spell", "Uncontrollable hideous laughter", 20,27,35,42,50],
  ["Shadow", "title", "Soldiers of Oblivion"],
  ["Shadow", "skill", "Conceal spellcasting", 0,0,10,20,30],
  ["Shadow", "skill", "Enhanced peer", 10,17,25,32,40],
  ["Shadow", "skill", "Essence eye", 10,17,25,32,40],
  ["Shadow", "skill", "Mana control", 0,0,0,10,40],
  ["Shadow", "spell", "Darkness", 80,85,90,95,100],
  ["Shadow", "spell", "Enhance vision", 10,15,20,25,30],
  ["Shadow", "spell", "Greater darkness", 80,85,90,95,100],
  ["Shadow", "spell", "Mana drain", 0,10,16,23,30],
  ["Skeleton", "title", "The Maosoleum Defense Corps"],
  ["Skeleton", "skill", "Attack", 10,13,17,21,25],
  ["Skeleton", "skill", "Kick", 10,12,15,17,20],
  ["Skeleton", "skill", "Long blades", 10,10,10,10,10],
  ["Skeleton", "skill", "Parry", 10,12,15,17,20],
  ["Skeleton", "skill", "Short blades", 10,17,25,32,40],
  ["Skeleton", "skill", "Throw weight", 10,12,15,17,20],
  ["Skeleton", "spell", "Preserve corpse", 10,22,35,47,60],
  ["Skeleton", "spell", "See magic", 10,17,25,32,40],
  ["Sprite", "title", "The Wisps of the Forest"],
  ["Sprite", "skill", "Cast generic", 20,27,35,42,50],
  ["Sprite", "skill", "Cast teleportation", 10,15,20,25,30],
  ["Sprite", "skill", "Enhanced wings", 0,0,0,0,5],
  ["Sprite", "spell", "Quicksilver", 5,10,15,20,25],
  ["Sprite", "spell", "Teleport with error", 10,15,20,25,30],
  ["Sprite", "spell", "Wizard eye", 10,20,30,40,50],
  ["Thrikhren", "title", "The Mantis Warriors"],
  ["Thrikhren", "skill", "Impale", 5,6,7,8,10],
  ["Thrikhren", "skill", "Polearms", 5,11,17,23,30],
  ["Thrikhren", "skill", "Praying mantis", 0,0,0,0,5],
  ["Thrikhren", "spell", "Invisibility", 5,6,7,8,10],
  ["Thrikhren", "spell", "Magic missile", 10,17,25,32,40],  
  ["Thrikhren", "spell", "Mental glance", 5,7,10,12,15],
  ["Thrikhren", "spell", "Psibolt", 30,37,45,52,60],
  ["Thrikhren", "spell", "Psychic sanctuary", 10,20,30,40,50],
  ["Thrikhren", "spell", "See invisible", 5,10,15,20,25],
  ["Tinmen", "title", "The Tinmen Collective"],
  ["Tinmen", "skill", "Alcohol tolerance", 20,40,60,80,100],
  ["Tinmen", "skill", "Cold tolerance", 10,15,20,25,30],
  ["Tinmen", "skill", "Endurance", 10,20,30,40,50],
  ["Tinmen", "skill", "Mind over body", 5,10,15,20,25],
  ["Tinmen", "skill", "Tinning", 10,22,35,47,60],
  ["Tinmen", "spell", "Heat reduction", 10,13,17,21,25],
  ["Titan", "title", "The Royal Warriors"],
  ["Titan", "skill", "Alcohol tolerance", 0,35,40,45,50],
  ["Titan", "skill", "Discipline", 10,20,30,40,50],
  ["Titan", "skill", "Grapple", 10,20,30,40,50],
  ["Titan", "skill", "Hiking", 0,0,10,25,40],
  ["Titan", "skill", "Long blades", 0,0,0,10,50],
  ["Titan", "skill", "Stun", 10,15,20,25,30],
  ["Titan", "spell", "None", 0,0,0,0,0],
  ["Troll", "title", "The Bridge Trolls Union"],
  ["Troll", "skill", "Alertness", 0,5,11,18,25],
  ["Troll", "skill", "Attack", 10,16,22,28,35],
  ["Troll", "skill", "Fishing", 10,20,30,40,50],
  ["Troll", "skill", "Frenzy", 0,0,10,15,20],
  ["Troll", "skill", "Grapple", 0,0,5,12,20],
  ["Troll", "skill", "Plant lore", 10,13,17,21,25],
  ["Troll", "skill", "Throw weight", 5,6,7,8,10],
  ["Troll", "spell", "None", 0,0,0,0,0],
  ["Valar", "title", "The Celestial Warriors"],
  ["Valar", "skill", "Bless", 10,22,35,47,60],
  ["Valar", "skill", "Cast magical", 5,11,17,23,30],
  ["Valar", "skill", "Ceremony", 10,17,25,32,40],
  ["Valar", "spell", "Banish demons", 0,0,0,10,20],
  ["Valar", "spell", "Protection from evil", 0,0,5,15,25],
  ["Vampire", "title", "The Princes of Darkness"],
  ["Vampire", "skill", "Conceal spellcasting", 10,15,20,25,30],
  ["Vampire", "skill", "Sneak", 10,15,20,25,30],
  ["Vampire", "spell", "Darkness", 30,37,45,52,60],
  ["Vampire", "spell", "Energy drain", 10,22,35,47,60],
  ["Vampire", "spell", "Invisibility", 10,22,35,47,60],
  ["Vampire", "spell", "Vampiric charm", 0,0,10,35,60],
  ["Wolfman", "title", "The Wolfbane Elite Commando"],
  ["Wolfman", "skill", "Alertness", 10,15,20,25,30],
  ["Wolfman", "skill", "Attack", 10,15,20,25,30],
  ["Wolfman", "skill", "Axes", 10,15,20,25,30],
  ["Wolfman", "skill", "Battlecry", 10,15,20,25,30],
  ["Wolfman", "skill", "Camping", 10,15,20,25,30],
  ["Wolfman", "skill", "Hunting", 10,17,25,32,40],
  ["Wolfman", "skill", "Scouting", 10,17,25,32,40],
  ["Wolfman", "skill", "Swim", 10,17,25,32,40],
  ["Wolfman", "spell", "None", 0,0,0,0,0],
  ["Zombie", "title", "The Children of the Zombies"],
  ["Zombie", "skill", "Cast teleportation", 5,11,17,23,30],
  ["Zombie", "skill", "Essence eye", 10,22,35,47,60],
  ["Zombie", "spell", "Dimension door", 5,8,12,16,20],
  ["Zombie", "spell", "Teleport with error", 5,13,22,31,40]
  ];
  // ##############################################
  // # Rotu kilta skillit & spellit DATA (loppuu) #
  // ##############################################

  // ######################################################
  // # Rotu Human skillit & spellit exp cost DATA (alkaa) #
  // ######################################################
  // Kun lisäät jotain lisää SKILL tai SPELL listan loppuun
  // Human skill spell max oletuksena 100% "Human-taulukossa" kun data on kerätty
  // JA huomaa hyppäykset alkaa 5% ja 5 välein eli 5,10,15,20,25, jne !
  
  const Human = [
  // Human skill costit LISTA
  ["Alertness", 156,439,1001,2018,3715,6380,10386,16219,24502,36040,51871,73324,102097,140362,190886,257189,343746,456229,657279,1076563],
  ["Attack", 338,879,1918,3862,7255,12831,21591,34880,54506,82888,123244,179846,258339,366166,513109,712004,979649,1337995,1963596,3281040],
  ["Bargain", 303,799,1759,3544,6642,11709,19623,31562,49106,74357,110095,159997,228900,323154,451079,623538,854702,1163012,1702898,2838412],
  ["Battlecry", 156,439,1001,2018,3715,6380,10386,16219,24502,36040,51871,73324,102097,140362,190886,257189,343746,456229,657279,1076563],
  ["Cast cold", 288,760,1675,3378,6325,11126,18602,29850,46331,69986,103378,149886,213945,301368,419744,578973,791930,1075337,1572471,2617327],
  ["Cast generic", 288,760,1675,3378,6325,11126,18602,29850,46331,69986,103378,149886,213945,301368,419744,578973,791930,1075337,1572471,2617327],
  ["Cast teleportation", 288,760,1675,3378,6325,11126,18602,29850,46331,69986,103378,149886,213945,301368,419744,578973,791930,1075337,1572471,2617327],
  ["Cast teleportation", 288,760,1675,3378,6325,11126,18602,29850,46331,69986,103378,149886,213945,301368,419744,578973,791930,1075337,1572471,2617327],
  ["Ceremony", 417,1060,2286,4590,8656,15421,26164,42640,67223,103119,154641,227553,329547,470847,665004,929933,1289273,1774148,2615466,4391679],
  ["Essence eye", 82,255,595,1190,2141,3579,5661,8586,12606,18034,25261,34775,47184,63244,83896,110306,143916,186516,264176,424809],
  ["Fire building", 215,586,1314,2655,4936,8593,14195,22495,34482,51451,75093,107606,151843,211494,291330,397500,537913,722731,1049754,1734614],
  ["First aid", 132,383,880,1772,3246,5541,8959,13892,20841,30450,43536,61144,84600,115589,156242,209258,278042,366888,526452,858557],
  ["Location memmory", 890,2138,4381,8642,16424,29895,52156,87618,142479,225413,348465,528277,787733,1158177,1682387,2418564,3445677,4870608,7289582,12442622],
  ["Mastery of locating", 601,1485,3124,6229,11806,21264,36586,60521,96870,150854,229600,342794,503550,729552,1044578,1480508,2079975,2899880,4307439,7292161],
  ["Stargazing", 156,439,1001,2018,3715,6380,10386,16219,24502,36040,51871,73324,102097,140362,190886,257189,343746,456229,657279,1076563],
  ["Swim", 156,439,1001,2018,3715,6380,10386,16219,24502,36040,51871,73324,102097,140362,190886,257189,343746,456229,657279,1076563],
  ["Tree herding", 832,2004,4125,8153,15489,28143,48981,82058,133066,209936,323645,489321,727712,1067151,1546206,2217216,3151013,4443229,6641254,11319820],
  // Human spell costit LISTA
  ["Banish", 491,1212,2553,5091,9643,17355,29832,49300,78834,122650,186499,278191,408289,591023,845509,1197360,1680795,2341443,3476350,5882261],
  ["Dimension door", 253,666,1464,2950,5529,9748,16335,26274,40878,61899,91649,133190,190548,269010,375501,519065,711498,968151,1417580,2362841],
  ["Go", 692,1669,3434,6787,12894,23428,40775,68309,110771,174761,269418,407336,605785,888351,1287142,1845725,2623065,3698773,5528522,9423201],
  ["Goto ship", 523,1288,2701,5378,10194,18383,31676,52489,84162,131292,200170,299359,440473,639202,916675,1301268,1830989,2556641,3800848,6440532],
  ["Heavy weight", 444,1106,2346,4690,8876,15931,27285,44915,71536,110852,167898,249484,364777,526087,749885,1058156,1480168,2054809,3044766,5140958],
  ["Mobile cannon", 731,1756,3603,7113,13520,24603,42907,72045,117098,185164,286100,433513,646109,949493,1378596,1980916,2820869,3985604,5963596,10176594],
  ["Moon sense", 253,666,1464,2950,5529,9748,16335,26274,40878,61899,91649,133190,190548,269010,375501,519065,711498,968151,1417580,2362841],
  ["Relocate", 523,1288,2701,5378,10194,18383,31676,52489,84162,131292,200170,299359,440473,639202,916675,1301268,1830989,2556641,3800848,6440532],
  ["Summon", 282,732,1597,3215,6039,10681,17974,29036,45373,69000,102595,149713,215055,304815,427138,592708,815511,1113816,1634598,2731307],
  ["Teleport with error", 282,732,1597,3215,6039,10681,17974,29036,45373,69000,102595,149713,215055,304815,427138,592708,815511,1113816,1634598,2731307],
  ["Teleport without error", 347,883,1903,3821,7206,12837,21780,35496,55960,85842,128731,189427,274332,391957,553584,774124,1073257,1476892,2177249,3655859],
  ["Travel", 692,1669,3434,6787,12894,23428,40775,68309,110771,174761,269418,407336,605785,888351,1287142,1845725,2623065,3698773,5528522,9423201],
  ["Wizard eye", 347,883,1903,3821,7206,12837,21780,35496,55960,85842,128731,189427,274332,391957,553584,774124,1073257,1476892,2177249,3655859],
  ["Word of recall", 110,319,732,1475,2702,4612,7458,11564,17349,25348,36242,50900,70426,96222,130064,174197,231456,305416,438246,714707]
  ];

  // #######################################################
  // # Rotu Human skillit & spellit exp cost DATA (loppuu) #
  // #######################################################

  // #############################################
  // # Rotu kohtaiset exp kertoimet DATA (alkaa) #
  // #############################################

  const ExpKerroin = [
  {name:"Barsoomian", skill:1.18, spell:1.65},
  {name:"Brownie", skill:1.29, spell:0.94},
  {name:"Catfolk", skill:1.06, spell:1.06},
  {name:"Centaur", skill:1, spell:1},
  {name:"Cromagnon", skill:1.41, spell:2},
  {name:"Cyclops", skill:1.35, spell:2.12},
  {name:"Demon", skill:1.41, spell:1.53},
  {name:"Doppelganger", skill:1, spell:1}, // HUOM! Päivitä Doppelganger kertoimet ja poista tämä kommentti !
  {name:"Draconian", skill:1.41, spell:1.65},
  {name:"Drow", skill:1.06, spell:1.18},
  {name:"Duck", skill:1.41, spell:0.95},
  {name:"Duergar", skill:1, spell:1.88},
  {name:"Dwarf", skill:0.9, spell:1.53},
  {name:"Elf", skill:1.18, spell:1.06},
  {name:"Ent", skill:1.53, spell:0.82},
  {name:"Gargoyle", skill:1.41, spell:1.98},
  {name:"Giant", skill:1.18, spell:2.12},
  {name:"Gnoll", skill:1.41, spell:1.41},
  {name:"Gnome", skill:0.94, spell:1.06},
  {name:"Hobbit", skill:0.94, spell:1.65},
  {name:"Human", skill:1, spell:1},
  {name:"Kobold", skill:1.18, spell:0.94},
  {name:"Leech", skill:1.18, spell:0.71},
  {name:"Leprechaun", skill:1.41, spell:1.18},
  {name:"Lich", skill:1.41, spell:1.29},
  {name:"Lizardman", skill:1.18, spell:1.41},
  {name:"Merfolk", skill:1.23, spell:1.18},
  {name:"Minotaur", skill:1.06, spell:1.76},
  {name:"Moomin", skill:1.18, spell:1.24},
  {name:"Ogre", skill:0.94, spell:2.12},
  {name:"Orc", skill:1.06, spell:1.65},
  {name:"Penguin", skill:1.18, spell:0.82},
  {name:"Satyr", skill:1.06, spell:1.06},
  {name:"Shadow", skill:1.05, spell:1.09},
  {name:"Skeleton", skill:1.06, spell:1.18},
  {name:"Sprite", skill:1.53, spell:0.94},
  {name:"Thrikhren", skill:1.53, spell:1},
  {name:"Tinmen", skill:1.06, spell:0.94},
  {name:"Titan", skill:1.41, spell:1.65},
  {name:"Troll", skill:1.06, spell:1.65},
  {name:"Valar", skill:0.82, spell:1.41},
  {name:"Vampire", skill:1.06, spell:1.06},
  {name:"Wolfman", skill:1.29, spell:1.29},
  {name:"Zombie", skill:1.77, spell:0.59}
  ];

  // ##############################################
  // # Rotu kohtaiset exp kertoimet DATA (loppuu) #
  // ##############################################

/*
hakuesimerkki:

// esimerkki 1:
// barson etsintä:
const etsin = 'barsoomian';
const valittuRace = Races.filter(race => race.name === etsin);

document.getElementById('str_mesta').innerHTML = valittuRace.name +':n str on: '+valittuRace.str;


// esimerkki 2, vähän pitempi mutta jos mieluisempi:

const etsin = 'barsoomian';

for (let i = 0; i < Races.length; i++) {

  if (etsin === Races[i].name) {
  
    document.getElementById('str_mesta').innerHTML = Races[i].name +':n str on: '+Races[i].str;
  }
}
*/
/* #######################################
       KILTOJEN DATA
   ###################################### */

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
          , 398),  // skillcost ekalle 5% tälle... voi jäädä tyhjäksi.. tämä tulee muualta
        new SkillSpell('Travel', false, true, 
          [33, 66, 100] 
          , 417)
      ]
    }]                                   
  ),
  new Guild('Navigator', 'The Association of Mystical Navigators',
  // requirements:                                     
    [],                                      
  // skills and spells:
    [{
      skillsAndSpells: [  // nimi, skilli, spelli
        // Skills:
        new SkillSpell('Cast generic', true, false, 
          [20, 40, 60, 80, 100] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 288),  // skillcost ekalle 5% tälle...
        new SkillSpell('Cast teleportation', true, false, 
          [20, 40, 60, 80, 100] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 288),
        new SkillSpell('Location memory', true, false, 
          [20, 40, 60, 80, 100] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 288),
        new SkillSpell('Mastery of locating', true, false, 
          [20, 40, 60, 80, 100] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 288),
        new SkillSpell('Stargazing', true, false, 
          [20, 40, 60, 80, 100] // paljon saa per leveli, 1, 2 , 3, 4, 5
          , 288),
        // Spells
        new SkillSpell('Banish', false, true, 
          [20, 40, 60, 80, 100] 
          , 491),
        new SkillSpell('Dimension door', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Go', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Goto ship', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Heavy weight', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Mobile cannon', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Relocate', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Summon', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Teleport with error', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Wizard eye', false, true, 
          [20, 40, 60, 80, 100] 
          , 253),
        new SkillSpell('Word of recall', false, true, 
          [20, 40, 60, 80, 100] 
          , 253)
      ]
    }]                                   
  )
];