import type { NextApiRequest, NextApiResponse } from 'next'
import { TUser } from '../../../types/TUsers';
import mockUsers from './mockUsers.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TUser>
) {
  res.status(200).json(mockUsers[0]);
}
