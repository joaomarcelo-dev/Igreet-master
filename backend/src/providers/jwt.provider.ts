import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const sign = (payload: any) => {
  return jwt.sign(payload, secret, { expiresIn: '1d' });
};

const verify = (token: string) => {
  return jwt.verify(token, secret);
};

const jwtProvider = {
  sign,
  verify,
};

export default jwtProvider;
