import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Mentors = () => {
  return (
    <section className="voditelji" id="voditelji">
      <h1 className="heading"> Voditelji </h1>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={"box-container"}
      >
        <a href="static/voditelj1.jpg" className="box">
          <div className="image">
            <img src="static/voditelj1.jpg" alt="" />
          </div>
          <div className="content">
            <div className="info">
              <figure>
                <h3>Ines Mamić</h3>
                <figcaption className="caption">
                  Baletno školovanje započinje u Baletnom studiju pri Hrvatskom
                  narodnom kazalištu u Splitu. Već s 12 godina radi potreba rada
                  ansambla angažirana je za rad u istom, te je tako baletno
                  obrazovanje uz redovno školovanje u Studiju, stjecala i radeći
                  s profesionalnim baletnim umjetnicima.
                  <br />
                  <br />
                  Od 2012. do 2020. obavljala je funkciju Predsjednice Hrvatskog
                  show dance saveza. Ujedno je i od osnutka istog licencirana
                  sutkinja za discipline umjetničkih plesova.
                  <br />
                  <br />
                  Danas djeluje kao Predsjednica Plesnog studija DanceBox gdje
                  kao koreograf i voditelj radi sa svim dobnim skupinama
                  njegujući balet, jazz balet, modern i savremeni kao temeljne
                  plesne discipline studija.
                  <br />
                  <br />
                  Članica je Hrvatskog udruženja profesionalnih baletnih
                  umjetnika te studentica na Institutu za umjetničku igru u
                  Beogradu.
                </figcaption>
              </figure>
            </div>
          </div>
        </a>

        <a href="static/voditelj2.jpg" className="box">
          <div className="image">
            <img src="static/voditelj2.jpg" alt="voditelj" />
          </div>
          <div className="content">
            <div className="info">
              <figure>
                <h3>Barbara Mamić</h3>
                <figcaption className="caption">
                  Barbara Mamić rođena je 12.09.1999. godine u Splitu.
                  <br />
                  Plesnu edukaciju na području umjetničkog plesa počela je 2005.
                  godine pod mentorstvom Ines Mamić, nekadašnje profesionalne
                  balerine pri Hrvatskom narodnom kazalištu Splitu. Tijekom
                  intenzivnog rada s njom aktivno se bavila i hip hop-om pod
                  pedagoškom i trenerskom palicom Vedrane Grčić i Katarine
                  Botice, te i na tom području bila prepoznata kao izuzetno
                  vrijedan i talentiran plesač.
                  <br />
                  <br />
                  Stečeno plesno iskustvo i znanje pomogli su joj pri upisu na
                  Akademiju dramskih umjetnosti u Zagrebu gdje je trenutno
                  student treće godine na odsjeku Suvremeni ples/nastavnički
                  smjer.
                  <br />
                  <br />
                  Barbara intenzivno sudjeluje u radu Studija kao koreograf i
                  on-line voditelj.
                </figcaption>
              </figure>
            </div>
          </div>
        </a>
      </LightGallery>
    </section>
  );
};

export default Mentors;
