import "../assets/css/Error404.css";
import image from "../assets/img/errorCompu.png";
import Container from "react-bootstrap/Container";

const Error404 = () => {
  return (
    <Container className="error">
      <h1 className="tituloError">Esta página no existe</h1>
      <img className="imgError" src={image} alt="Img de Error" />
    </Container>
  );
};
export default Error404;
