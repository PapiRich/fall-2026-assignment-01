import { promises as fs } from "fs";

type RemoteComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );

  const comments: RemoteComment[] = await response.json();

  const summaries: CommentSummary[] = comments.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email.trim(),
  }));

  const filtered = summaries.filter(
    (comment) => !comment.commenterEmail.endsWith(".org"),
  );

  const jsonData = JSON.stringify(filtered, null, 2);

  await fs.writeFile(outputPath, jsonData);

  return filtered.length;
}