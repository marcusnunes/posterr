import type { NextApiRequest, NextApiResponse } from 'next'
import { TPost } from '../../../types/TPosts';
import mockPosts from './mockPosts.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPost[]>
) {
  res.status(200).json(mockPosts);
}
