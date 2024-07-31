import { SizeIcons } from './type';

export const handleSizeIcons = (value: SizeIcons) => {
   if (value == 'md') {
      return 20;
   }

   if (value == 'lg') {
      return 30;
   }

   return 15;
};
