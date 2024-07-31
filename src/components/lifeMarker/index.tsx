import { Counter } from '../counter';
import { BtnMinus, BtnPlus } from '../icons';
import { useLifeMaker } from './hook/useLifeMaker';

export const LifeMaker = () => {
   const { life, handleAddLife, handleSubLife } = useLifeMaker();
   return (
      <>
         <div className="flex justify-center items-center gap-2">
            <button onClick={handleSubLife}>
               <BtnMinus/>
            </button>
            <Counter value={life} />
            <button onClick={handleAddLife}>
               <BtnPlus />
            </button>
         </div>
      </>
   );
};
