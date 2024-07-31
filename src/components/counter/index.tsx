import { Props } from './types';

export const Counter = ({ value }: Props) => {
   return (
      <>
         <span className="font-audiowide underline text-5xl">{value}</span>
      </>
   );
};
