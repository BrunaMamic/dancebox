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
            <div className={style.naslovPlan}>2023.</div>
            <div className={style.planData}>
              <div className={style.planDataSpec}>
                <p style={{ fontSize: "2.1rem" }}>
                  Europsko prvenstvo u show dance-u
                </p>
                <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                  Lasko, Slovenija 09. - 12.11.2023
                </p>
              </div>
              <div className={style.planDataSpec}>
                <p style={{ fontSize: "2.1rem" }}>Dalmatian dance festival</p>
                <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                  Split 26.11.2023
                </p>
              </div>
              <div className={style.planDataSpec}>
                <p style={{ fontSize: "2.1rem" }}>
                  Godisnja produkcija studija
                </p>
                <p style={{ color: "rgb(170 126 126 / 51%)" }}>
                  Split, 16.12.2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
