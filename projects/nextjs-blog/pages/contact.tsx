import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - My Blog</title>
        <meta name="description" content="Get in touch" />
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
          <section className="contact">
            <h1>Contact Me</h1>
            <p>
              I'd love to hear from you! Whether you have questions about my posts,
              want to collaborate on a project, or just want to say hello.
            </p>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 My Blog. Built with Next.js.</p>
        </footer>
      </div>
    </>
  );
}