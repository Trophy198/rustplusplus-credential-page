import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';
import { CONFIG_COOKIE, LOGIN_FLAG_COOKIE } from '@/lib/authCookie';

const logoutHandler = (req: NextApiRequest, res: NextApiResponse) => {
  destroyCookie({ res }, CONFIG_COOKIE, { path: '/' });
  destroyCookie({ res }, LOGIN_FLAG_COOKIE, { path: '/' });
  res.status(200).json({ message: 'Logged out successfully' });
};

export default logoutHandler;
