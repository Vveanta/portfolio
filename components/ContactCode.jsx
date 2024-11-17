import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'vedanshmaheshwari.me',
    href: 'https://vedanshmaheshwari.me',
  },
  {
    social: 'email',
    link: 'maheshwariv@ufl.edu',
    href: 'mailto:maheshwariv@ufl.edu',
  },
  {
    social: 'phone',
    link: '+1 (352) 740-6059',
    href: 'tel:+13527406059',
  },
  {
    social: 'github',
    link: '@Vveanta',
    href: 'https://github.com/Vveanta',
  },
  {
    social: 'linkedin',
    link: '@Vedansh-mahe',
    href: 'https://www.linkedin.com/in/vedansh-mahe/',
  },
  {
    social: 'X',
    link: '@vveanta',
    href:'https://x.com/vveanta' ,
  },
  {
    social: 'instagram',
    link: '@vedansh.13',
    href: 'https://www.instagram.com/vedansh.13',
  },
  {
    social: 'telegram,',
    link: '@vveanta',
    href: 'https://t.me/vveanta',
  },
  // 
  // 
  // 
  // 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
