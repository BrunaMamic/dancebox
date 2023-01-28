const Info = () => {
  return (
    <section className="about" id="about">
      {/* <h1 className="heading"> O nama </h1> */}

      <div className="row">
        {/* <div className="video"> */}
          {/* <video src="static/video2022.mp4" controls={true}  muted>
            <source src="static/video.mp4" type="video/mp4" />
          </video> */}
          {/* <img  src="static/info.jpg" alt="" /> */}
        {/* </div> */}

        <div className="content">
          <div className="naslov">Dance Box</div>
          <p>
            je neprofitna organizacija čiji je primarni
            cilj razvijanje glazbeno – plesne djelatnosti na području grada
            Splita i šire.
          </p>
          <p>
          Studio njeguje jazz balet, modern jazz i suvremeni ples kao temeljne plesne discipline i to sa svim dobnim skupinama.

          Polaznicima se nudi mogućnost nastupa na raznim glazbeno-scenskim manifestacijama u gradu Splitu i šire, sudjelovanje na godišnjim i polugodišnjim produkcijama Studia
           kao i mogućnost sudjelovanja na nacionalnim i međunarodnim natjecanjima i festivalima.
          </p>
          <p>
            Dvije plesne dvorane raspoređene na 170 kvadratnih metara, te
            stručni kadar omogućuju intezivan i kvalitetan rad s polaznicima te
            ih osposobljava za kasnije eventualno profesionalno bavljenje ovom
            glazbeno-scenskom djelatnošću.
          </p>
          <a href="#services" className="btn">
            više ...
          </a>
        </div>

        <div className="vise"></div>
      </div>
    </section>
  );
};

export default Info;
