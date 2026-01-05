import { DrizzlePostRepository } from "@/repositories/post/drizzle-post-repository";

(async () => {
  const drizzleRepo = new DrizzlePostRepository();
  const posts = await drizzleRepo.findAll();

  posts.forEach(post => {
    console.log(post.title);
  });
})();
