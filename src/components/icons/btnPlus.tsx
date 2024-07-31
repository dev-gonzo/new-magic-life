import { FaSquarePlus } from 'react-icons/fa6';
import { handleSizeIcons } from './helpers';
import { IconsProps } from './type';

export const BtnPlus = ({ size = 'md' }: IconsProps) => {
   return (
      <>
         <FaSquarePlus size={handleSizeIcons(size)} />
      </>
   );
};
