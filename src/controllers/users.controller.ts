import { Request, Response } from 'express';
import Data from '../interfaces/jwtPayload.interfaces';
import User from '../interfaces/users.interfaces';
import createToken from '../middlewares/jwt';
import addNewUser from '../services/users.service';

const create = async (req: Request, res: Response) => {
  const user = req.body as User;
  const result = await addNewUser(user) as Data;
  const token = await createToken(result);
  return res.status(201).json({ token });
};

export default create;