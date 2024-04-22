/* eslint-disable @next/next/no-img-element */
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
        <a href="static/projekti25.jpg" className="box">
          <div className="image">
            <img src="static/projekti25.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Dance explosion u Dubrovniku</h3>
              <p>
                Misiju Dubrovnik smo završili i to vrlo zadovoljavajuće i s puno
                lijepih momenata. Nekima je ovo bilo prvo noćenje s plesnim
                prijateljicama, nekima prvo uopće odvajanje od roditelja, a
                nekim još jedno u nizu putovanja s nama. Sve u svemu, idemo
                dalje. 
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekti24.jpg" className="box">
          <div className="image">
            <img src="static/projekti24.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Državno prvenstvo osnovnih i srednjih škola u plesu.</h3>
              <p>
                Stižu nam vijesti iz Poreča gdje je jučer završeno državno
                prvenstvo osnovnih i srednjih škola u plesu. Naše cure koje su
                plesale za osnovnu školu Mertojak zauzele su 9.mjesto u
                konkurenciji 20 timova osnovnih škola. Čestitamo curama,
                profesorici Mariji i naravno OŠ Mertojak
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>

        <a href="static/projekti23.jpg" className="box">
          <div className="image">
            <img src="static/projekti23.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Produkcija</h3>
              <p>
                Peta po redu produkcija studija održati će se 16.12.2023. u
                dvorani Lora s početkom u 19.30. Ulaznice po cijeni od 5€ i broj
                za lutriju po cijeni od 2€ možete kupiti u studiju ili na ulazu
                sat vremena prije početka. Vidimo se !
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a href="static/projekti21.jpg" className="box">
          <div className="image">
            <img src="static/projekti21.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <p>
                Na osmom izdanju Dalmatinskog plesnog festivala sudjelovali smo
                s 78 plesača i 13 koreografija. Rame uz rame s dobrom energijom
                naravno da stižu i dobri rezultati 🤗 <br></br>
                Čestitamo svim plesačima na sjajnim rezultatima, a posebno hvala
                našoj alfi i omegi Ines Mamić!
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
            className="fab fa-facebook-f ms-3"></a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
