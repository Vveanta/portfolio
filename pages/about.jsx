import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Text Section with more growth on flex-grow */}
      <div className={styles.textSection}>
        <p><span style={{ color: '#2c9ffe' }}>{'<h3>'}</span> A Little Bit About Me <span style={{ color: '#2c9ffe' }}>{'</h3>'}</span></p>
        <br/>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
        <p style={{ marginLeft: '20px' }}>
          Hi there! I'm <span style={{ color: 'lightcoral' }}>Vedansh Maheshwari</span>, a Master’s in Computer Science student at the <span style={{ color: 'yellow' }}>University of Florida</span>,
          graduating in December 2024. With a deep passion for <span style={{ color: 'green' }}>data science</span>, <span style={{ color: '#c586c0' }}>machine learning</span>, and <span style={{ color: 'green' }}>Software Development</span>, I specialize in creating impactful solutions that combine technical expertise with creative
          problem-solving. My journey has been marked by hands-on experience in building ML-driven applications,
          designing intuitive user interfaces, and working on innovative research projects.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>

        <br/>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
        <p style={{ marginLeft: '20px' }}>
          I thrive at the intersection of data and technology, using my skills in <span style={{ color: 'green' }}>Python</span>, <span style={{ color: '#c586c0' }}>JavaScript</span>, <span style={{ color: 'green' }}>TensorFlow</span>,
          and <span style={{ color: '#c586c0' }}>PostgreSQL</span> to develop scalable and efficient solutions. From fine-tuning machine learning models
          for real-world applications to designing web platforms that enhance user experiences, I aim to make a
          meaningful impact in the world of technology.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>

        <br/>
        <p><span style={{ color: '#2c9ffe' }}>&lt;p</span> <span style={{ color: 'lightskyblue' }}>class</span>=<span style={{ color: 'orange' }}>"hobbies"</span><span style={{ color: '#2c9ffe' }}>&gt;</span></p>
        <p style={{ marginLeft: '20px' }}>
          When I'm not coding or exploring new tools, you can find me playing cricket, honing my chess strategies,
          or creating art. I'm always excited to connect with like-minded individuals and collaborate on projects
          that push the boundaries of innovation.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>
      </div>
      
      
      {/* Image Section with less growth on flex-grow */}
      <div className={styles.imageSection}>
        <img src="/me.jpg" alt="Vedansh Maheshwari" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
