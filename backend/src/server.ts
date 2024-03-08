import { app } from "./app";

const port = parseInt(process.env.PORT || '3333');
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
})