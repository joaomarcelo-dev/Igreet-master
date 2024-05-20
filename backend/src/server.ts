import { app } from "./app";

const port = parseInt(process.env.PORT || '3333');
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
