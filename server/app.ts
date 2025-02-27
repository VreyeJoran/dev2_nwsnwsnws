import routes from "./routes";
import express, { Application, Request, Response } from "express";
import path from "path";

const app: Application = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

// Route om een HTML-pagina te tonen
app.get("/", (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

// Middleware om statische bestanden te serveren
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});