import React from 'react';
import cn from 'classnames';

import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className={cn(className, styles.footer)}>
      <ul>
        <li>About</li>
        <li>Support</li>
        <li>Terms & Condition</li>
      </ul>
    </div>
  );
};
