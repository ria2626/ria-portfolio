import Head from 'next/head';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}