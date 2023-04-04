import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import { ReactComponent as AppLogo } from '../../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { ReactComponent as ContributeIcon } from '../../assets/contributeIcon.svg';
import { ReactComponent as MyShelfIcon } from '../../assets/myShelfIcon.svg';
import { Link } from 'react-router-dom';
import { Tag } from '../../components/Tag/Tag';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <AppLogo width={120} height={75} />
      </div>
      <div>
        <ul className={styles.nav}>
          <li>
            <Link to={'/'} className={styles.navItem}>
              <HomeIcon />
              <Tag size='xl'>Home</Tag>
            </Link>
          </li>
          <li>
            <Link to={'/search'} className={styles.navItem}>
              <SearchIcon />
              <Tag size='xl'>Search</Tag>
            </Link>
          </li>
          <li>
            <Link to={'/myshelf'} className={styles.navItem}>
              <MyShelfIcon />
              <Tag size='xl'>My Shelf</Tag>
            </Link>
          </li>
          <li>
            <Link to={'/contribute'} className={styles.navItem}>
              <ContributeIcon />

              <Tag size='xl'>Contribute</Tag>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
