import { Schema } from "mongoose";
import { User } from "../interfaces/ClientCache";


const UserSchema = new Schema<User>({
  discordId: {
    type: String,
    required: true
  },
  // Their riot name and tag for example GamingMonkey#EUW
  // This will not be updated whenever player changes it in riot account settings
  // Therefore only uuid should be used for queries
  name: {
    type: String,
    required: true
  },
});

UserSchema.post('save', async function(user) {
  const client = (await import('../../index')).default;
  console.log("Updating cache");
  client.cache.users.set(user.discordId, user.toJSON());
});

UserSchema.post('updateOne', {document: true, query: false}, function(user) {
  const client = require('../../index');
  console.log("Updating cache");
  client.cache.users.set(user.discordId, user.toJSON());
});

UserSchema.post('deleteOne', {document: true, query: false}, function(user) {
  const client = require('../../index');
  console.log(`Removing user ${user.discordId} from cache`);
  client.cache.users.delete(user.discordId);
});

export default UserSchema;