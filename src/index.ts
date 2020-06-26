import { User } from "./models/User";

const collection = User.buildUserCollecction();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
