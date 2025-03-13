import express, { Request, Response, Router } from "express";
import { News, getAllNews, getNewsBySlug, addNewsItem } from "./services/newsService";
import { Comments, getAllComments } from "./services/commentsService";

const router: Router = express.Router();

// Homepagina
// router.get("/", (req: Request, res: Response): void => {
//   const news = getNews();

//   res.render("index", { title: "News", news: news });
// });

// Details
// router.get("/news/:slug", (req: Request, res: Response): void => {
//   const slug: string = req.params.slug;
//   const newsSlug = getNewsBySlug(slug);

//   res.render("details", { title: "News article", slug: newsSlug });
// });

router.get("/", async (req: Request, res: Response) => {
  const news: News[] = await getAllNews();

  res.render("index", { news, title: "Recent news" });
});

router.get("/allComments", async (req: Request, res: Response) => {
  const comments: Comments[] = await getAllComments();

  res.render("allComments", { comments, title: "All comments" });
});

router.get("/news/:slug", async (req: Request, res: Response) => {
  const slug: string = req.params.slug;
  const newsSlug = await getNewsBySlug(slug);

  res.render("news", { title: "News article", news: newsSlug[0] });
});

export default router;