const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br/><br/>
      <p>
        Hi there! I'm Vedansh Maheshwari, a Master’s in Computer Science student at the University of Florida, 
        graduating in December 2024. With a deep passion for data science, machine learning, and software 
        development, I specialize in creating impactful solutions that combine technical expertise with creative 
        problem-solving. My journey has been marked by hands-on experience in building ML-driven applications, 
        designing intuitive user interfaces, and working on innovative research projects.
      </p>
      <br/>
      <p>
        I thrive at the intersection of data and technology, using my skills in Python, JavaScript, TensorFlow, 
        and PostgreSQL to develop scalable and efficient solutions. From fine-tuning machine learning models 
        for real-world applications to designing web platforms that enhance user experiences, I aim to make a 
        meaningful impact in the world of technology.
      </p>
      <br/>
      <p>
        When I'm not coding or exploring new tools, you can find me playing cricket, honing my chess strategies, 
        or creating art. I'm always excited to connect with like-minded individuals and collaborate on projects 
        that push the boundaries of innovation.
      </p>
    </>
  );
};


export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
