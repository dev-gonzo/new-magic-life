import { Counter } from '../../counter';
import { BtnMinus, BtnPlus } from '../../icons';

export const LifeMaker = () => {
   return (
      <>
         <div className="flex justify-center items-center gap-2">
            <button>
               <BtnMinus />
            </button>
            <Counter value={44} />
            <button>
               <BtnPlus />
            </button>
         </div>
      </>
   );
};
