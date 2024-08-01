import { usePlayerStatusManager } from '../../../hooks/usePlayerStatusManager';

export const usePoisonMarker = () => {
   const { counter, addPoison, subPoison } = usePlayerStatusManager();

   const handleAddPoison = () => {
      addPoison();
   };

   const handleSubPoison = () => {
      subPoison();
   };

   return { poison: counter.poison, handleAddPoison, handleSubPoison };
};
