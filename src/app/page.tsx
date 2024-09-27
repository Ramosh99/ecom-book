import Post from "../../components/post";
import prisma from "../../lib/prisma";
async function getposts(){
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
          },
        },
      },
  });
  return posts;
}

export default async function Home() {
  const posts = await getposts();
  // console.log(posts);
  return (
    <main className="m-10">
      <h1 className="text-center text-4xl text-blue-500">
        hello
      </h1>
      <input type="text" placeholder="add" className="rounded-md m-10 px-4" />
      <button className="bg-orange-500 rounded-md px-2">
        add
      </button>
      <h1 className="text-center">feed</h1>
      {
        posts.map((post:any) => (
          <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author.name}
          ></Post>
        ))
      }
    </main>
  );
}
