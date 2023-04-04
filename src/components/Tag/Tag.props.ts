import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement //Чтобы свойство с обычных button'ов тоже работали, расширяем
  > {
  children: ReactNode;
  size?: 's' | 'm' | 'lg' | 'xl';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}
