import 'dotenv/config';

import ExtendedClient from './structs/Client';

import WOKCommands, { DefaultCommands } from 'wokcommands';
import path from 'path';


const client = new ExtendedClient();

client.on('ready', () => {
  new WOKCommands({
    client,
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['346227820269273089'],
    disabledDefaultCommands: [
      DefaultCommands.ChannelCommand,
      DefaultCommands.CustomCommand,
      DefaultCommands.Prefix,
      DefaultCommands.RequiredPermissions,
      DefaultCommands.RequiredRoles,
      DefaultCommands.ToggleCommand
    ]
  });
});

client.login(process.env.DISCORD_TOKEN);

export default client;