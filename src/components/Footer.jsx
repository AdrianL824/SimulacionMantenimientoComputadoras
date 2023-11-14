
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h2>Contacto</h2>
          <p>Universidad: Universidad Mayor de San Simon</p>
          <p>Grupo: N° 7 </p>
          <p></p>
        </div>
        <div style={styles.footerSection}>
          <h2>Síguenos en Redes Sociales</h2>
          <ul style={styles.list}>
            <li>
              <a
                href="https://facebook.com/tusitio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tusitio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/tusitio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>2-2023 Oficina 7 © Taller de Simulacion de Sistemas</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    marginTop: "20px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  footerSection: {
    flex: "1",
    margin: "0 20px",
  },
  list: {
    listStyle: "none",
  },
  bottomBar: {
    marginTop: "20px",
    borderTop: "1px solid #555",
    paddingTop: "10px",
  },
};
export default Footer;
