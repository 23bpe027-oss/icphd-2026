export default function SpeakersPage() {
  return (
    <main className="page-speakers">
      <section className="soft speakers-section">
        <div className="container">
          <div className="section-title"><h2>Keynote Speakers</h2><span /></div>
          <div className="speakers-grid">
              <article className="speaker-card">
                <div className="speaker-photo-wrap">
                  <img src="https://www.hw.ac.uk/image-library/pure-upload/Andreas-Busch/andreas-busch-profile-151923224.x564e488e.jpg?f=webp&fit=crop&h=480&q=80&w=480" alt="Prof. Andreas Busch" />
                </div>
                <div className="speaker-info">
                  <h3>Prof. Andreas Busch</h3>
                  <p>Professor in Earth Sciences – GeoEnergy</p>
                  <span>Heriot-Watt University</span>
                </div>
              </article>
              <article className="speaker-card">
                <div className="speaker-photo-wrap">
                  <img src="https://www.iitg.ac.in/chemeng/faculty/b22e77b03d0a2085e34b8f117f5f5157479c6a27jpeg" alt="Prof. Anugrah Singh" />
                </div>
                <div className="speaker-info">
                  <h3>Prof. Anugrah Singh</h3>
                  <p>Professor, Department of Chemical Engineering</p>
                  <span>Indian Institute of Technology Guwahati</span>
                </div>
              </article>
              <article className="speaker-card">
                <div className="speaker-photo-wrap">
                  <img src="https://ceat.okstate.edu/site-files/announcements/che/images/bikkina.jpg" alt="Prof. Prem Bikkina" />
                </div>
                <div className="speaker-info">
                  <h3>Prof. Prem Bikkina</h3>
                  <p>Professor; Harold Courson Chair in Petroleum Engineering; Petroleum Program Director</p>
                  <span>Oklahoma State University</span>
                </div>
              </article>
              <article className="speaker-card">
                <div className="speaker-photo-wrap">
                  <img src="https://www.geos.iitb.ac.in/uploads/VV_1_56576d0278.jpg" alt="Prof. Vikram Vishal" />
                </div>
                <div className="speaker-info">
                  <h3>Prof. Vikram Vishal</h3>
                  <p>Professor, Department of Earth Sciences</p>
                  <span>Indian Institute of Technology Bombay</span>
                </div>
              </article>
              <article className="speaker-card">
                <div className="speaker-photo-wrap">
                  <img src="https://channeli.in/media/kernel/display_pictures/3d3b6f87-9326-4d01-ab00-036ed80a550b" alt="Prof. Hari Prakash Veluswamy" />
                </div>
                <div className="speaker-info">
                  <h3>Prof. Hari Prakash Veluswamy</h3>
                  <p>Associate Professor, Department of Chemical Engineering</p>
                  <span>Indian Institute of Technology Roorkee</span>
                </div>
              </article>
          </div>
        </div>
      </section>
    </main>
  );
}
