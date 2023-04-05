import React, { FunctionComponent, useEffect, useState } from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar, Header } from './index';
import styles from './Layout.module.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';

export const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.preloader}>
          <Logo width={250} height={155} />
        </div>
      ) : (
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.main}>
            <Header className={styles.header} />
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
