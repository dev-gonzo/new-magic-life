import { usePlayerStatusManager } from '../../../hooks/usePlayerStatusManager';

export const useLifeMaker = () => {
   const { counter, addLife, subLife } = usePlayerStatusManager();

   const handleAddLife = () => {
      addLife();
   };

   const handleSubLife = () => {
      subLife();
   };

   return { life: counter.life, handleAddLife, handleSubLife };
};
