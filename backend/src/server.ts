import { app } from "./app";
import { env } from "./env";

app.listen(
  {
    host: env.HOST,
    port: env.PORT,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address} 🚀`);
  }
);
