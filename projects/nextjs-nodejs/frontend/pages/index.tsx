import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Node.js Full-Stack App</title>
        <meta name="description" content="A full-stack application with Next.js frontend and Node.js backend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Next.js + Node.js</span> App
        </h1>

        <p className={styles.description}>
          This is a full-stack web application combining Next.js for the frontend
          with server-side rendering and Node.js/Express for the backend API.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>🚀 Frontend Features</h2>
            <ul>
              <li>Server-Side Rendering (SSR)</li>
              <li>Static Site Generation (SSG)</li>
              <li>TypeScript Support</li>
              <li>API Routes Integration</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>⚙️ Backend Features</h2>
            <ul>
              <li>RESTful API Endpoints</li>
              <li>JWT Authentication</li>
              <li>Database Integration</li>
              <li>Error Handling</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>👥 Users from API</h2>
            {loading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p className={styles.error}>Error: {error}</p>
            ) : (
              <ul className={styles.userList}>
                {users.map((user) => (
                  <li key={user.id} className={styles.userItem}>
                    <strong>{user.name}</strong> - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.card}>
            <h2>📚 Technologies</h2>
            <div className={styles.techStack}>
              <span className={styles.techBadge}>Next.js</span>
              <span className={styles.techBadge}>React</span>
              <span className={styles.techBadge}>TypeScript</span>
              <span className={styles.techBadge}>Node.js</span>
              <span className={styles.techBadge}>Express</span>
              <span className={styles.techBadge}>MongoDB</span>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Built with Next.js and Node.js</p>
      </footer>
    </div>
  );
}