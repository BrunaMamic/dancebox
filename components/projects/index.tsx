import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="heading"> Najnoviji projekti </h1>

      <LightGallery elementClassNames={"box-container"}>
        <a href="static/projekti.jpg" className="box">
          <div className="image">
            <img src="static/projekti.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Šibenski festival</h3>
              <p>
                Čestitke svim našim voditeljima i plesačima koji su uložili
                izniman trud i energiju kako bi ova godina bila uspješna...
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekt1.jpg" className="box">
          <div className="image">
            <img src="static/projekt1.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Mali Split</h3>
              <p>Mali Split 2022. i naših 26 plesača</p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekt2.jpg" className="box">
          <div className="image">
            <img src="static/projekt2.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Nova kolekcija</h3>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekt3.jpg" className="box">
          <div className="image">
            <img src="static/projekt3.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Dubrovnik Dance explosion 2022</h3>
              <p>Backstage </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekt4.jpg" className="box">
          <div className="image">
            <img src="static/projekt4.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Dubrovnik Dance explosion 2022</h3>
              <p>
                Nakon dvije godine "apstinencije" napokon smo došli na svoje.
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekt5.jpg" className="box">
          <div className="image">
            <img src="static/projekt5.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Advent na Mertojaku</h3>
              <p>
                Posljednji ovogodišnji nastup naših najmlađih uz Čarobne
                animatore na Adventu u Parku Mertojak
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
      </LightGallery>

      <br />
      <br />
      <div className="galerija">
        <p>
          Foto galerija:
          <a
            href="https://www.facebook.com/PlesniStudioDanceBox/photos"
            className="fab fa-facebook-f ms-3"
          ></a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
