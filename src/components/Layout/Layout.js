import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <NavLink
            className={styles.link}
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={styles.link}
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
