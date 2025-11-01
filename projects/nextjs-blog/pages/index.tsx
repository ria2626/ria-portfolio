import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="container">
      <Head>
        <title>My Blog - Next.js</title>
        <meta name="description" content="A modern blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <div className="logo">
            <Link href="/">My Blog</Link>
          </div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to My Blog</h1>
          <p>Sharing thoughts on web development, technology, and life.</p>
        </section>

        <section className="posts">
          <h2>Latest Posts</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.slug} className="post-card">
                <h3>
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="post-date">{post.date}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link href={`/posts/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 My Blog. Built with Next.js.</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}