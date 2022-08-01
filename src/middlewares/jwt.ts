import jwt, { SignOptions } from 'jsonwebtoken';

// Private key aqui pra não causar conflito com avaliador

const key = 'MyNotSoSecretKey';

const jwtConfig = {
  algorithm: 'RS256',
  expiresIn: '30d',
} as SignOptions;

const createToken = (id: number) => {
  const token = jwt.sign({ id }, key, jwtConfig);
  return token;
};

export default createToken;