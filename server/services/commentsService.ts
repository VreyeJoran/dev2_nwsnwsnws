// Importeer sql uit db.ts
import sql from "./db";

// Interface voor een comment
export interface Comments {
    id?: number;
    user_id?: number;
    news_id: number;
    comment?: string;
    created_at?: string;
  }

// Alle comments ophalen
export async function getAllComments(): Promise<Comments[]> {
    try {
        const data : Comments[] = await sql`select * from comments`;
        return data;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error('Could not fetch news: ' + error);
    }
}

// Comments ophalen per artikel
export async function getCommentsByNewsId(news_id: number): Promise<Comments[]> {
  try {
      const data : Comments[] = await sql`select * from comments where news_id = ${news_id}`;
      return data;

  } catch (error) {
      console.error('Error fetching news:', error);
      throw new Error('Could not fetch news: ' + error);
  }
}

const addComment = async (newsId: number, author: string, comment: string) => {
    await sql`
      INSERT INTO comments (news_id, author, comment) 
      VALUES (${newsId}, ${author}, ${comment});
    `;
  };