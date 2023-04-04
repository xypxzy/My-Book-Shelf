import React from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';
import { TagProps } from './Tag.props';

export const Tag = ({
  size = 'm',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps) => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.lg]: size == 'lg',
        [styles.xl]: size == 'xl',
        [styles.ghost]: color == 'ghost',
        [styles.green]: color == 'green',
      })}
      {...props}
    >
      {' '}
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
