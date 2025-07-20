'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './auth.module.scss';
import { fetchUser } from '@/services/userService';
import { User } from '@/types';

const AuthPage = () => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validateMobile = (mobile: string) => {
    const regex = /^(\+98|0)?9\d{9}$/;
    return regex.test(mobile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateMobile(mobile)) {
      setError('شماره موبایل را صحیح وارد بفرمایید.');
      return;
    }
    setError('');

    try {
      const user: User = await fetchUser();
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <label>شماره موبایل: </label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="شماره موبایل"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>ورود</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default AuthPage;