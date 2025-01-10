import { PostsList } from "@/components/Posts/PostsLists";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts(data.posts);

      }
      catch (error) {
        console.log("Error al cargar las entradas: ", error)
      }
      setLoading(false)
    }

    fetchPosts()
  }, []);
  return (
    <div className="flex flex-col w-full h-full mt-20 px-10 md:px-28">
      <div className="flex flex-row w-full item justify-between">
        <h1 className="font-bold text-3xl">Ultimas Entradas</h1>
      </div>
      {loading && <p className="text-base py-6">Cargando...</p>
      }
      <PostsList posts={posts} />
    </div>
  );
}
