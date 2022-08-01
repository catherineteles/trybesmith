import User from '../interfaces/users.interfaces';
import addUser from '../models/users.models';

const addNewUser = async (user: User) => addUser(user);

export default addNewUser;