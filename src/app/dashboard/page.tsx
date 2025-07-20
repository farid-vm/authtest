'use client';

import Navbar from '@/components/Navbar';

import { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';

import { User } from '@/types';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Navbar />
    <div className={styles.container}>
      {user ? (
        <h1 className={styles.title}>{user.name.first} {user.name.last} خوش آمدید</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default DashboardPage;