const ContactSidebar = ({ setContactSideBarOpen }: any) => {
  return (
    <div className="contact-info active">
      <div
        onClick={() => setContactSideBarOpen(false)}
        id="close-contact-info"
        className="fas fa-times"
      ></div>

      <div className="info">
        <i className="fas fa-phone"></i>
        <h3>Broj mobitela</h3>
        <p>+385 91 506 2940</p>
      </div>

      <div className="info">
        <i className="fas fa-envelope"></i>
        <h3>Email</h3>
        <p>danceboxsplit1@gmail.com</p>
      </div>

      <div className="info">
        <i className="fas fa-map-marker-alt"></i>
        <h3>Lokacija</h3>
        <p>Trodhemska 10, 21000 Split</p>
      </div>

      <div className="share">
        <a href="https://www.facebook.com/PlesniStudioDanceBox" target={'_blank'} rel={'noreferrer'} className="fab fa-facebook-f"></a>
        <a href="https://www.instagram.com/danceboxsplit/" target={'_blank'} rel={'noreferrer'} className="fab fa-instagram"></a>
      </div>
    </div>
  );
};

export default ContactSidebar;
