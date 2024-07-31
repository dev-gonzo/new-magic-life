import { FaSquareMinus } from 'react-icons/fa6';
import { handleSizeIcons } from './helpers';
import { IconsProps } from './type';

export const BtnMinus = ({ size = 'md' }: IconsProps) => {
   return (
      <>
         <FaSquareMinus size={handleSizeIcons(size)} />
      </>
   );
};
