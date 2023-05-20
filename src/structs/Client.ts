import { Client, IntentsBitField, Collection, Snowflake } from 'discord.js';
import Mongo from '../db/mongo';

import { ClientCache, User } from '../db/interfaces/ClientCache';

export default class ExtendedClient extends Client {
  mongo: Mongo;
  cache: ClientCache = {
    users: new Collection<Snowflake, User>()
  };

  constructor() {
    const intents = new IntentsBitField([
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.DirectMessages,
    ]);
    super({ intents: intents });

    this.mongo = new Mongo(this);
  }
}
