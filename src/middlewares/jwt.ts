import jwt, { SignOptions } from 'jsonwebtoken';
import Data from '../interfaces/jwtPayload.interfaces';

// Private key aqui pra não causar conflito com avaliador

const key = 'MyNotSoSecretKey';

const jwtConfig = {
  algorithm: 'RS256',
  expiresIn: '30d',
} as SignOptions;

const createToken = (data: Data) => {
  const token = jwt.sign(data, key, jwtConfig);
  return token;
};

export default createToken;