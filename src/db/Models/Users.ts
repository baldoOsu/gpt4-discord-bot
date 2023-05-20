import { model } from "mongoose";
import UserSchema from "../Schemas/Users";
import { User } from "../interfaces/ClientCache";

export default model<User>("Users", UserSchema);
