import { CommandInteraction } from "discord.js";
import { CommandObject, CommandType } from "wokcommands"
import ExtendedClient from "../structs/Client";

export default {
  description: "Template cmd",

  type: CommandType.SLASH,
  
  // i should use this feature in the future
  // To enable autocomplete pass in an options array with "autocomplete: true"
  // autocompelte: (command: Command, argument: string, instance: WOKCommands) => {
    // TODO: Return an array of strings
  // },
  options: [
    
  ],

  init: (client: ExtendedClient) => {

  },

  callback: ({ client, interaction }: { client: ExtendedClient, interaction: CommandInteraction }) => {
    interaction.reply("Template");
  }
} as CommandObject;

