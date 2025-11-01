import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Next.js Node.js App</title>
        <meta name="description" content="Learn more about our Next.js and Node.js application" />
      </Head>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p>
          Welcome to our Next.js and Node.js application. This is a full-stack web application
          built with modern technologies including React, Next.js for the frontend, and Node.js
          with Express for the backend.
        </p>
        <p>
          Our application features user authentication, protected routes, and a robust API
          structure to handle various operations.
        </p>
        <h2>Technologies Used</h2>
        <ul>
          <li>Frontend: Next.js, React, TypeScript</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB with Mongoose</li>
          <li>Authentication: JWT tokens</li>
          <li>Security: Helmet, CORS, Rate limiting</li>
        </ul>
      </div>
    </>
  );
};

export default About;