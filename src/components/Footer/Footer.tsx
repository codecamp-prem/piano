import styles from "./Footer.module.css";

type Props = {};
const Footer = ({}: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <a href="#">369 company</a>
        <br />
        {currentYear}
      </footer>
    </>
  );
};
export default Footer;
