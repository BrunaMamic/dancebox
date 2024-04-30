import style from "./Plan.module.css";

const Plan = () => {
  return (
    <section className={style.plan} id="plan">
      {/* <h1 className="heading"> O nama </h1> */}

      <div className="row">
        <div className="content">
          <div className={style.naslovPlan}>
            PLANIRANE IZVAN STUDIJSKE AKTIVNOSTI ZA AKADEMSKU GODINU 2023./2024.
          </div>
          <div className={style.planProgram}>
            <div className={style.tri}>
              <div className={style.naslovPlan}>2023.</div>
              <div className={style.planData}>
                <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>
                    Europsko prvenstvo u show dance-u
                  </p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                    Lasko, Slovenija 09. - 12.11.2023
                  </p>
                  <div className={style.checkmark}>✔</div>
                </div>
                <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>Dalmatian dance festival</p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                    Split 26.11.2023
                  </p>
                  <div className={style.checkmark}>✔</div>
                </div>
                <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>
                    Godišnja produkcija studija
                  </p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                    Split, 16.12.2023
                  </p>
                  <div className={style.checkmark}>✔</div>
                </div>
              </div>
            </div>
            <div className={style.cetri}>
              <div className={style.naslovPlan}>2024.</div>
              <div className={style.planData}>
  
                <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>
                    Kvalifikacije za IDO / Dance explosion
                  </p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                    Dubrovnik, 05.-07.04.2024
                  </p>
                  <div className={style.checkmark}>✔</div>
                </div>

                <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>
                    Dalmatian dance Festival
                  </p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                    Split, 28.04.2024
                  </p>
                  <div className={style.checkmark}>✔</div>
                </div>
                
                <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>
                    Kvalifikacije za IDO / Dance explosion HPS
                  </p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                    Velika Gorica, 29.05-02.06.2023
                  </p>
                </div>

                {/* <div className={style.planDataSpec}>
                  <p style={{ fontSize: "2.1rem" }}>
                  Europsko prvenstvo modern, jazz, balet i show dance
                  </p>
                  <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                  IDO Laško, Slovenija, rujan 2024.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
