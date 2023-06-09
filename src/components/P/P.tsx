import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({
  size,
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
        [styles.xl]: size == 'xl',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
