import { app } from "./app";
import { initVenom } from "./bot";

const port = parseInt(process.env.PORT || '3333');
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
  initVenom();
})