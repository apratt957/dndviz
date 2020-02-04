import React, { useEffect, useState, useRef, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_MONSTERS':
      return { ...state, monsters: action.monsters };
    case 'ADD_TO_COMPARISON':
      return { ...state, comparison: [...state.comparison, action.monster] };
  }
};

export const AppContext = React.createContext();

export default ContextProvider = props => {
  const contextState = {
    monsters: [],
    comparison: [
      {
        slug: 'ancient-titan',
        name: 'Ancient Titan',
        size: 'Gargantuan',
        type: 'celestial',
        subtype: 'titan',
        group: null,
        alignment: 'neutral good',
        armor_class: 15,
        armor_desc: 'breastplate',
        hit_points: 198,
        hit_dice: '12d20+72',
        speed: {
          walk: 50
        },
        strength: 27,
        dexterity: 13,
        constitution: 22,
        intelligence: 16,
        wisdom: 16,
        charisma: 20,
        strength_save: null,
        dexterity_save: null,
        constitution_save: 10,
        intelligence_save: null,
        wisdom_save: 7,
        charisma_save: 9,
        perception: 7,
        skills: {
          athletics: 14,
          intimidation: 9,
          perception: 7
        },
        damage_vulnerabilities: '',
        damage_resistances:
          'bludgeoning, piercing, and slashing from nonmagical weapons',
        damage_immunities: '',
        condition_immunities: '',
        senses: 'darkvision 120 ft., passive Perception 17',
        languages: 'Common, Giant, Primordial, Titan, telepathy 120 ft.',
        challenge_rating: '12',
        actions: [
          {
            name: 'Multiattack',
            desc:
              'The ancient titan makes two greatsword attacks or two longbow attacks'
          },
          {
            name: 'Greatsword',
            desc:
              'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 38 (8d6 + 8) slashing damage.',
            attack_bonus: 12,
            damage_dice: '8d6'
          },
          {
            name: 'Longbow',
            desc:
              'Ranged Weapon Attack: +5 to hit, range 150/640 ft., one target. Hit: 19 (4d8 + 1) piercing damage.',
            attack_bonus: 5,
            damage_dice: '4d8'
          },
          {
            name: 'Eldritch Singularity (Recharge 5-6)',
            desc:
              "The ancient titan opens a momentary rupture in the eldritch source that fuels its words of power. This rupture appears at a spot designated by the titan within 100 feet. Any creature within 60 feet of the spot must make a DC 17 Constitution saving throw. On a failure, the creature takes 28 (8d6) force damage, falls prone, and is pulled 1d6 x 10 feet toward the eldritch singularity, taking an additional 3 (1d6) bludgeoning damage per 10 feet they were dragged. If the saving throw succeeds, the target takes half as much force damage and isn't knocked prone or pulled. The spot where the rupture occurs becomes the center of a 60-foot-radius antimagic field until the end of the ancient titan's next turn. The titan's spells are not affected by this antimagic field."
          }
        ],
        reactions: '',
        legendary_desc: '',
        legendary_actions: '',
        special_abilities: [
          {
            name: 'Magic Resistance',
            desc:
              'The ancient titan has advantage on saving throws against spells and other magical effects.'
          },
          {
            name: 'Innate Spellcasting',
            desc:
              "the ancient titan's spellcasting ability is Charisma (spell save DC 17). The ancient titan can innately cast the following spells, requiring no material components:\n\n3/day: power word stun\n\n1/day: power word kill"
          }
        ],
        spell_list: [],
        img_main: null,
        document__slug: 'tob',
        document__title: 'Tome of Beasts OGL',
        document__license_url: 'http://open5e.com/legal'
      },
      {
        slug: 'andrenjinyi',
        name: 'Andrenjinyi',
        size: 'Gargantuan',
        type: 'celestial',
        subtype: '',
        group: null,
        alignment: 'neutral',
        armor_class: 18,
        armor_desc: 'natural armor',
        hit_points: 228,
        hit_dice: '13d20+91',
        speed: {
          walk: 60,
          burrow: 20,
          climb: 20,
          swim: 60
        },
        strength: 30,
        dexterity: 17,
        constitution: 25,
        intelligence: 10,
        wisdom: 18,
        charisma: 23,
        strength_save: null,
        dexterity_save: null,
        constitution_save: 12,
        intelligence_save: null,
        wisdom_save: 9,
        charisma_save: 11,
        perception: 9,
        skills: {
          arcana: 5,
          perception: 9,
          religion: 5
        },
        damage_vulnerabilities: '',
        damage_resistances: 'acid, cold, fire, lightning',
        damage_immunities: 'psychic',
        condition_immunities: '',
        senses: 'darkvision 60 ft., tremorsense 120 ft., passive Perception 19',
        languages: 'Common, Celestial, Giant, Sylvan',
        challenge_rating: '15',
        actions: [
          {
            name: 'Multiattack',
            desc:
              'The andrenjinyi makes two attacks, one with its bite and one with its constriction. If both attacks hit the same target, then the target is Swallowed Whole.'
          },
          {
            name: 'Bite',
            desc:
              'Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 36 (4d12 + 10) piercing damage.',
            attack_bonus: 15,
            damage_dice: '4d12'
          },
          {
            name: 'Constrict',
            desc:
              "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 36 (4d12 + 10) bludgeoning damage, and the target is grappled (escape DC 20). Until this grapple ends the target is restrained, and the andrenjinyi can't constrict another target.",
            attack_bonus: 15,
            damage_dice: '4d12'
          },
          {
            name: 'Rainbow Arch',
            desc:
              "The andrenjinyi can instantaneously teleport between sources of fresh water within 1 mile as an action. It can't move normally or take any other action on the turn when it uses this power. When this power is activated, a rainbow manifests between the origin and destination, lasting for 1 minute."
          },
          {
            name: 'Swallow Whole',
            desc:
              'If the bite and constrict attacks hit the same target in one turn, the creature is swallowed whole. The target is blinded and restrained, and has total cover against attacks and other effects outside the andrenjinyi. The target takes no damage inside the andrenjinyi. The andrenjinyi can have three Medium-sized creatures or four Small-sized creatures swallowed at a time. If the andrenjinyi takes 20 damage or more in a single turn from a swallowed creature, the andrenjinyi must succeed on a DC 18 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 5 feet of the andrenjinyi. If the andrenjinyi is slain, a swallowed creature is no longer restrained by it and can escape from the andrenjinyi by using 15 feet of movement, exiting prone. The andrenjinyi can regurgitate swallowed creatures as a free action.'
          },
          {
            name: 'Transmuting Gullet',
            desc:
              'When a creature is swallowed by an andrenjinyi, it must make a successful DC 19 Wisdom saving throw each round at the end of its turn or be affected by true polymorph into a new form chosen by the andrenjinyi. The effect is permanent until dispelled or ended with a wish or comparable magic.'
          }
        ],
        reactions: '',
        legendary_desc: '',
        legendary_actions: '',
        special_abilities: [
          {
            name: 'Amphibious',
            desc: 'The andrenjinyi can breathe air and water.'
          },
          {
            name: 'Innate Spellcasting',
            desc:
              "the andrenjinyi's spellcasting ability is Charisma (spell save DC 19, +11 to hit with spell attacks). It can innately cast the following spells, requiring only verbal components:\n\nat will: create water, speak with animals, stoneshape\n\n3/day each: control weather, dispel magic, reincarnate\n\n1/day each: blight, commune with nature, contagion, flesh to stone, plant growth"
          },
          {
            name: 'Magic Resistance',
            desc:
              'The andrenjinyi has advantage on saving throws against spells and other magical effects.'
          },
          {
            name: 'Magic Weapons',
            desc: "The andrenjinyi's weapon attacks are magical."
          }
        ],
        spell_list: [],
        img_main: null,
        document__slug: 'tob',
        document__title: 'Tome of Beasts OGL',
        document__license_url: 'http://open5e.com/legal'
      }
    ],
    addToComparison: monster => {
      setAppState({ type: 'ADD_TO_COMPARISON', monster: monster });
    }
  };
  const [appState, setAppState] = useReducer(reducer, contextState);
  const gotData = useRef(false);

  useEffect(() => {
    fetchMonsters();
    return () => {
      gotData.current = true;
    };
  }, []);

  fetchMonsters = () => {
    axios.get(`https://api.open5e.com/monsters/?limit=3`).then(response => {
      if (!gotData.current) {
        setAppState({ type: 'GET_MONSTERS', monsters: response.data.results });
      }
    });
  };

  return (
    <AppContext.Provider value={appState}>{props.children}</AppContext.Provider>
  );
};
