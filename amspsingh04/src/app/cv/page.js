import styles from './page.module.css';

const CV = () => {
  return (
    <div className={styles.cv}>
      <p className={styles.description}>
        Below is a preview of my CV. You can also{' '}
        <a href="/CV.pdf" download className={styles.downloadLink}>
          download it here (Last Updated: November 2024)
        </a>.
      </p>
      <br></br>
      <div className={styles.pdfViewer}>
        <iframe 
          src='/CV.pdf' 
          width="100%" 
          height="1000px" 
          title="CV" 
        />
      </div>
    </div>
  );
};

export default CV;
