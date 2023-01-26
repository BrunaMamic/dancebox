const Info = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"> O nama </h1>

      <div className="row">
        <div className="video">
          {/* <video src="static/video2022.mp4" controls={true}  muted>
            <source src="static/video.mp4" type="video/mp4" />
          </video> */}
          <img src="static/info.jpg" alt="" />
        </div>

        <div className="content">
          <p>
            Plesni studio Dance Box je neprofitna organizacija čiji je primarni
            cilj razvijanje glazbeno – plesne djelatnosti na području grada
            Splita i šire.
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
