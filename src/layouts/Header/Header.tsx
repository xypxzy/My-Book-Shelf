import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

export const Header = ({ className, ...props }: HeaderProps) => {
  return <div className={cn(className, styles.sidebar)}>Header</div>;
};
