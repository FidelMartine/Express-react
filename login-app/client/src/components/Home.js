import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión
    navigate('/');
  };

  const posts = [
    {
      title: 'El impacto del cambio climático en el mundo',
      content: 'El cambio climático está afectando a todos los ecosistemas del planeta, causando cambios drásticos en el clima y la biodiversidad.',
      author: 'Autor 1',
      date: '12 de julio, 2024',
      link: '/post/1',
      image: 'https://conecta.tec.mx/sites/default/files/styles/header_full/public/2022-10/impacto-del-cambio-climatico.jpg.webp?itok=Bmyr8F0O'  // URL de la imagen
    },
    {
      title: 'Cómo podemos reducir nuestra huella de carbono',
      content: 'Existen muchas maneras en las que podemos contribuir a la reducción de emisiones, desde el uso de energías renovables hasta cambios en nuestros hábitos diarios.',
      author: 'Autor 2',
      date: '10 de julio, 2024',
      link: '/post/2',
      image: 'https://www.eurofins-environment.es/wp-content/uploads/2021/12/como-reducir-la-huella-de-carbono.jpg' // URL de la imagen
    },
    {
      title: 'La importancia de la conservación de los bosques',
      content: 'Los bosques son esenciales para la vida en la Tierra. Proporcionan oxígeno, albergan biodiversidad y ayudan a regular el clima.',
      author: 'Autor 3',
      date: '8 de julio, 2024',
      link: '/post/3',
      image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/latin-america/brasil35-es.jpg?crop=0%2C231%2C4000%2C2200&wid=4000&hei=2200&scl=1.0' // URL de la imagen
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column align-items-center min-vh-100 bg-info">
      <nav className="navbar navbar-expand-lg navbar-dark bg-info w-100">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/inicio">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">Contacto</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger nav-link text-dark" onClick={handleLogout}>Cerrar sesión</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="my-4 text-center text-dark">Cambio Climático</h1>
      <div className="row w-100">
        {posts.map((post, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p className="text-muted">{post.author} - {post.date}</p>
                <Link to={post.link} className="btn btn-primary">Leer más</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-auto text-center">
        <p className="text-muted">© 2024 Blog sobre Cambio Climático. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;



