import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - My Blog</title>
        <meta name="description" content="About the author" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
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
          <section className="about">
            <h1>About Me</h1>
            <p>
              I'm a passionate web developer with over 10 years of experience in PHP, WordPress, and modern JavaScript frameworks.
              This blog is where I share my thoughts, tutorials, and insights about web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or writing about my latest discoveries in the tech world.
            </p>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 My Blog. Built with Next.js.</p>
        </footer>
      </div>
    </>
  );
}