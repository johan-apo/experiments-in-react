import {
  Container,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function ScrollingEvent() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Effect!");
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = (await res.json()) as Post[];
      setPosts(data.slice(0, 30));
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Scrolling event</title>
      </Head>
      {loading ? (
        <Loading />
      ) : posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <Title order={3} align="center">
          No posts available
        </Title>
      )}
    </>
  );
}

function Loading() {
  return (
    <Group position="center">
      <Loader size="lg" />
    </Group>
  );
}

function PostsList({ posts }: { posts: Post[] }) {
  return (
    <SimpleGrid cols={3}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </SimpleGrid>
  );
}

function Post({ title, body }: Pick<Post, "title" | "body">) {
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[6],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.sm,
      })}
    >
      <Title order={4}>{title}</Title>
      <Text>{body}</Text>
    </Paper>
  );
}
