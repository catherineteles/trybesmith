import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/users.interfaces';
import connection from './connection';

const addUser = async (user: User) => {
  const { username, classe, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    `INSERT INTO
    Trybesmith.Users(username, classe, level, password)
  VALUES
    (?, ?, ?, ?);`,
    [username, classe, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, username };
};

export default addUser;