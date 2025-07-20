'use client';

import { useRouter } from 'next/navigation';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/auth');
  };

  return (
    <nav className={styles.navbar}>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;