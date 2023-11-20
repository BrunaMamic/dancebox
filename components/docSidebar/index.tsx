const DocSidebar = ({ setDocSidebarOpen }: any) => {
  return (
    <div className="contact-info active">
      <div
        onClick={() => setDocSidebarOpen(false)}
        id="close-contact-info"
        className="fas fa-times"></div>
      {/* <iframe
            src="/static/PRAVILNIK O ČLANSTVU .pdf" width="100%" height="1000px">
        </iframe> */}
      <h2>Dokumenti</h2>
      <div className="pravilnik">
        {" "}
        <a
          target="_blank"
          href="/static/PRAVILNIK O ČLANSTVU .pdf"
          >Pravilnik o članstvu:</a>
        {" "}
        <a target="_blank" href="/static/raspored.pdf">
        Raspored 23/24
        </a>
      </div>
    </div>
  );
};

export default DocSidebar;
