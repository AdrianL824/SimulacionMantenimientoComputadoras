import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h2>Contacto</h2>
          <p>Universidad: Universidad Mayor de San Simon</p>
          <p>Grupo: N° 7</p>
        </div>
        <div className="footerSection">
          <h2>Síguenos en Redes Sociales</h2>
          <ul>
            <li>
              <a
                href="https://facebook.com/oficina7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/oficina7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/oficina7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomBar">
        <p>2-2023 Oficina 7 © Taller de Simulacion de Sistemas</p>
      </div>
    </footer>
  );
};
export default Footer;
