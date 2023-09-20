import styles from './Footer.module.css';

const FooterComponent = () => {
  return (
    <>
        <footer className={styles.footer}>
            <h3>Escreva sobre o que você tem interesse!</h3>
            <p>Mini<strong>BLOG</strong> &copy; 2023</p>
        </footer>
    </>
  )
}

export default FooterComponent