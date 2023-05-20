import "dotenv/config";

import { connect, Connection } from "mongoose";
import EventEmitter from "events";

import ExtendedClient from "../structs/Client";
import UsersModel from "./Models/Users";

export default class Mongo extends EventEmitter {
  client: ExtendedClient;
  connection!: Connection;
  users = UsersModel;

  constructor(client: ExtendedClient) {
    super();
    this.client = client;

    connect(process.env.MONGO_URI!).then((mongo) => {
      this.connection = mongo.connection;

      this.emit("connected");
    });
  }
}
