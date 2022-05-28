import type { NextApiRequest, NextApiResponse } from 'next'
import { TPost } from '../../../types/TPosts';
import mockPosts from './mockPosts.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPost[]>
) {
  const { id } = req.query;

  const data = mockPosts.filter((item) => item.user.username === id);

  res.status(200).json(data);
}
