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
        content="vedansh maheshwari,vveanta, vedansh, maheshwari, vedansh.13, vs-code portfolio, vscode-portfolio, vedansh portfolio, web developer portfolio"
      />
      <meta
        name="keywords"
        content="vedansh maheshwari uf, uf, university of florida, computer science uf, computer science university of florida, data science UF, data science university of florida, AI research UF, UF CISE"
      />
      <meta
        name="keywords"
        content="data scientist portfolio, data science, machine learning engineer portfolio, machine learning, artificial intelligence, deep learning, data engineer, big data, predictive analytics, data visualization"
      />
      <meta
        name="keywords"
        content="software development, software developer portfolio, web developer, full stack developer, React developer, Node.js, software engineering, agile development, coding portfolio, programming projects"
      />


      <meta property="og:title" content="Vedansh Maheshwari's Portfolio" />
      <meta
        property="og:description"
        content="A data scientist and developer crafting innovative solutions using machine learning, deep learning, and full-stack development."
      />
      <meta property="og:image" content="https://imgur.com/a/OAcRzgh" />
      <meta property="og:url" content="https://vedanshmaheshwari.netlify.app" />
      <meta property="og:url" content="https://vedanshmaheshwari.me" />
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Vedansh Maheshwari',
};
