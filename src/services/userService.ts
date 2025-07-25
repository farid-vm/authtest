import { User } from '@/types';

export const fetchUser = async (): Promise<User> => {
  const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  const data = await res.json();
  return data.results[0];
};