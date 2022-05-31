import type { NextApiRequest, NextApiResponse } from 'next'
import { TUser } from '@/types/TUsers';
import mockUsers from './mockUsers.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TUser | null>
) {
  const { id } = req.query;
  
  const data = mockUsers.find((item) => item.username === id) || null;

  res.status(200).json(data);
}
