import { useState } from 'react';
import { PlayerCounter } from '../@types';

export const usePlayerStatusManager = () => {
   const [counter, setCounter] = useState<PlayerCounter>({
      life: 20,
      poison: 0,
      energy: 0,
      taxCommander: 0,
      rad: 0,
      monarch: false,
      citysBlessing: false,
      commanderDamage: undefined,
      death: false,
   });

   const updateCounter = (key: keyof PlayerCounter, value: number) => {
      setCounter((prev) => ({
         ...prev,
         [key]:
            key === 'life'
               ? (prev.life ?? 0) + value
               : Math.max(0, (prev[key] as number) + value),
      }));
   };

   const toggleBoolean = (key: keyof PlayerCounter) => {
      setCounter((prev) => ({
         ...prev,
         [key]: !prev[key],
      }));
   };

   return {
      counter,

      addLife: () => updateCounter('life', 1),
      subLife: () => updateCounter('life', -1),
      addPoison: () => updateCounter('poison', 1),
      subPoison: () => updateCounter('poison', -1),
      addEnergy: () => updateCounter('energy', 1),
      subEnergy: () => updateCounter('energy', -1),
      addTaxCommander: () => updateCounter('taxCommander', 2),
      subTaxCommander: () => updateCounter('taxCommander', -2),
      addRad: () => updateCounter('rad', 1),
      subRad: () => updateCounter('rad', -1),
      toggleMonarch: () => toggleBoolean('monarch'),
      toggleCitysBlessing: () => toggleBoolean('citysBlessing'),
      toggleDeath: () => toggleBoolean('death'),
   };
};
