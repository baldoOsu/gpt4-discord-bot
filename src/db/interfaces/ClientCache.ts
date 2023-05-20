import { Collection, Snowflake } from "discord.js"

export interface ClientCache {
  users: Collection<Snowflake, User>
}

export interface User {
  discordId: string,
  name: string,
}