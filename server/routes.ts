import express, { Request, Response, Router } from "express";
import{ getNews, getNewsBySlug, addNews } from "./data/newsService"

const router: Router = express.Router();

// Homepagina
router.get("/", (req: Request, res: Response): void => {
  const news = getNews();

  res.render("index", { title: "News", news: news });
});

// Details
router.get("/news/:slug", (req: Request, res: Response): void => {
  const slug: string = req.params.slug;
  const newsSlug = getNewsBySlug(slug);

  res.render("details", { title: "News article", slug: newsSlug });
});

export default router;