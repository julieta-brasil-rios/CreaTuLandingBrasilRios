import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta que estás buscando no existe.</p>

      <Link to="/" className="btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}

