import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

const logoutHandler = (req: NextApiRequest, res: NextApiResponse) => {
  destroyCookie({ res }, 'config', { path: '/' });
  res.status(200).json({ message: 'Logged out successfully' });
};

export default logoutHandler;
