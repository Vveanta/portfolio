import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Vedansh Maheshwari is a passionate data scientist and software developer, leveraging machine learning and web development skills to create impactful applications and insights."
      />
      <meta
        name="keywords"
        content="vedansh maheshwari, vedansh, maheshwari, data scientist portfolio, machine learning engineer portfolio, software engineer portfolio, data engineer portfolio, data scientist, Vedansh web developer, vscode-portfolio"
      />
      <meta property="og:title" content="Vedansh Maheshwari's Portfolio" />
      <meta
        property="og:description"
        content="A data scientist and developer crafting innovative solutions using machine learning, deep learning, and full-stack development."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" /> */}
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Vedansh Maheshwari',
};
