import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Router, useRouter } from "next/router";

const Projects = () => {
  const openFacebookGallery = () => {
    window.open(
      "https://www.facebook.com/PlesniStudioDanceBox/photos",
      "_blank"
    );
  };

  return (
    <section className="projects" id="projects">
      <h1 className="heading"> Najnoviji projekti </h1>

      <LightGallery
        onBeforeOpen={() => openFacebookGallery()}
        elementClassNames={"box-container"}>
        <a
          href="static/produkcija.jpg"
          onClick={() => console.log("hello world")}
          className="box">
          <div className="image">
            <img src="static/produkcija.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Četvrta po redu Produkcija održati će se 17.12 u 17.00</h3>
              <p>
                Imati ćete priliku pogledati sve naše dobne skupine s
                ovogodišnjim koreografijama na jednom mjestu u istom terminu.
                Širokih ruku očekuju Vas blizu 150 plesača uz zanimljive goste
                plesače i još zanimljiviju voditeljicu programa.
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a
          href="static/europsko.jpg"
          onClick={() => console.log("hello world")}
          className="box">
          <div className="image">
            <img src="static/europsko.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Laura i Ana na @idoworlddance</h3>
              <p>
                Laura i Ana naše su starije juniorke koje se po prvi puta
                natječu na jednom ovako gigantskom natjecanju
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a
          href="static/gala.jpg"
          onClick={() => console.log("hello world")}
          className="box">
          <div className="image">
            <img src="static/gala.jpeg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>2. mjesto gala večeri Dalamtian Dance festivala</h3>
              <p>
                13.11.2022. <br />
                Ovako maleni i malobrojni osvojiti 2. mjesto na Gali u top 9
                koreografija natjecanja za dječje grupe, formacije i produkcije
                je zaista veliki uspjeh.
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a
          href="static/projekti11.jpg"
          onClick={() => console.log("hello world")}
          className="box">
          <div className="image">
            <img src="static/projekti11.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Sudjelovanje na Dalmatian Dance festival-u</h3>
              <p>
                13.11.2022. <br />
                Foto: @vesnabilman @dalmatian.dance.festivals
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a
          href="static/cure.jpg"
          onClick={() => console.log("hello world")}
          className="box">
          <div className="image">
            <img src="static/cure.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Race for the cure</h3>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekt10.jpg" className="box">
          <div className="image">
            <img src="static/projekt10.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Proslava 10. godišnjice kluba</h3>
              <p>
                3.9.2022. <br />
                Photo by @mdphotography18
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekti.jpg" className="box">
          <div className="image">
            <img src="static/projekti.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Šibenski plesni festival</h3>
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
      </LightGallery>

      <br />
      <br />
      <div className="galerija">
        <p>
          Foto galerija:
          <a
            href="https://www.facebook.com/PlesniStudioDanceBox/photos"
            className="fab fa-facebook-f ms-3"></a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
