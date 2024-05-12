import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';

const loginCheckHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = parseCookies({ req });
  const isLoggedIn = Boolean(cookies.config);
  res.status(200).json({ isLoggedIn });
};

export default loginCheckHandler;
