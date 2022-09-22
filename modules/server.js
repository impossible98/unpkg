// import third-party modules
import dotenv from 'dotenv'
// import local modules
import createServer from './createServer.js';
import { getEnv } from "./utils/env";
dotenv.config()
const server = createServer();
// console.log(process.env)

const port = getEnv(process.env.PORT, "8080")

function main() {
  server.listen(port, () => {
    console.log();
    console.log(`  local: http://127.0.0.1:${port}`);
    console.log('  Server listening on port %s, Ctrl+C to quit', port);
    console.log();
  });
}

main();
