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
      "https://www.facebook.com/PlesniStudioDanceBox/photos_by",
      "_blank"
    );
  };

  return (
    <section className="projects" id="projects">
      <h1 className="heading"> Najnoviji projekti </h1>

      <LightGallery
        onBeforeOpen={() => openFacebookGallery()}
        elementClassNames={"box-container"}>
        <a href="static/project28.jpg" className="box">
          <div className="image">
            <img src="static/project28.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>@darebelsdancecampbihac</h3>
              <p>
                Ova naša mala četa mladih plesača otisnula se u novi izazov
                zvani 12 plesnih radionica unutar 4 dana u Bihaću u više
                neznanim nego znanim stilovima. Bilo je tu jazz-a, modernog, ali
                i impro i free styla sa vrhunskim plesnim predavačima iz
                Nizozemske, Bosne i Hercegovine i Slovenije. Što reći osim da su
                se vratili ispunjeni i s novim idolima i osobama koje ih
                inspiriraju u plesu. Zahvaljujemo @darebelsdancecampbihac na
                odličnoj organizaciji i predavačima
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a href="static/project27.jpg" className="box">
          <div className="image">
            <img src="static/project27.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Kvalifikacije za IDO Velika Gorica, 29.05-02.06.2023</h3>
              <p>
                Samo nekoliko divotica od naših proteklih 5 dana u Velikoj
                Gorici. @photostudiostill
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
        <a href="static/projekti26.jpg" className="box">
          <div className="image">
            <img src="static/projekti26.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Dalmatian dance festival</h3>
              <p>
                <b>
                  Klub s najviše osvojenih pehara u grupama, formacijama i
                  produkcijama <br />
                </b>
                Ne može bolje za Svjetski dan plesa nego biti pobjednik
                cjelokupnog natjecanja. @dalmatian.dance.festivals Srce nam je
                veliko ko kuća 💗 Hvala organizatorima @jureleskur_pk_lambada i
                @ivana_zanetic_pk_lambada
              </p>
            </div>
            <i className="fas fa-plus"></i>
          </div>
        </a>
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
        {/* 
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
        </a> */}

        {/* <a href="static/projekti23.jpg" className="box">
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
        </a> */}
      </LightGallery>

      <br />
      <br />
      <div className="galerija">
        <p>
          Foto galerija:
          <a
            href="https://www.facebook.com/PlesniStudioDanceBox/photos_by"
            className="fab fa-facebook-f ms-3"></a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
