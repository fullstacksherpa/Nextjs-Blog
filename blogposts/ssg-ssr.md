---
title: 'When to Use Static Generation vs. Server-side Rendering'
date: '2023-03-17'
---

**Static Site Generation** involves generating static HTML files for your web pages at build time. This means that the content is pre-rendered and doesn't require server-side processing for each request. SSG is excellent for pages with content that doesn't change frequently, as it can greatly improve performance and reduce server load.

In Next.js, you can implement SSG using the getStaticProps function. This function allows you to fetch data during the build process and pre-render your pages as static HTML. Here's a basic example:

~~~js
import { getStaticProps } from 'next';

function Page({ data }) {
  return <div>{data}</div>;
}

export async function getStaticProps() {
  const data = await fetchDataFromAPI();
  return {
    props: {
      data,
    },
    revalidate: 3600, // Regenerate page content at most once every hour
  };
}

export default Page;
~~~

**Server-Side Rendering** involves rendering your web pages on the server for each request. When a user visits a page, the server generates the HTML content and sends it directly to the browser. This approach can be beneficial for pages that require up-to-date data or dynamic content at the time of each request. It's particularly useful for maintaining a consistent user experience and ensuring search engines can properly index your content.

In Next.js, you can implement SSR by using the getServerSideProps function. This function allows you to fetch data on the server and pass it to your components before rendering them. Here's a basic example:

~~~js
import { getServerSideProps } from 'next';

function Page({ data }) {
  return <div>{data}</div>;
}

export async function getServerSideProps() {
  const data = await fetchDataFromAPI();
  return {
    props: {
      data,
    },
  };
}

export default Page;
~~~

 