'use client';

import { useEffect, useMemo, useState } from 'react';

const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL || '#registration';
const abstractUrl = process.env.NEXT_PUBLIC_ABSTRACT_URL || '#abstract';

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Highlights', '#highlights'],
  ['Schedule', '#dates'],
  ['Theme', '#theme'],
  ['Registration', '#registration'],
  ['Contact', '#contact'],
];

const highlights = [
  ['panel-transparent.png', 'Panel Discussions by', 'Industrial and Academic Professionals'],
  ['keynote-transparent.png', 'Keynote sessions by', 'eminent industry and academic professionals'],
  ['networking-transparent.png', 'Networking and', 'Branding'],
  ['papers-transparent.png', 'Technical Paper and Poster', 'Presentations'],
  ['networking-cropped.png', 'Exhibition', 'opportunities'],
  ['award-transparent.png', 'Best Paper and Poster', 'Presentation Awards'],
];

const dates = [
  ['25 August 2026', 'Abstract Submission Starts (Tuesday)'],
  ['15 October 2026', 'Abstract Submission Closes (Thursday)'],
  ['20 October 2026', 'Notification of Acceptance (Tuesday)'],
  ['20 November 2026', 'Last date for Registration (Friday)'],
  ['11 December 2026', 'Conference Inauguration (Friday)'],
  ['13 December 2026', 'Conference Valedictory (Sunday)'],
];

const themes = [
  { title: 'Improved or Enhanced Oil Recovery (IOR/EOR)', items: [] },
  { title: 'Unconventional Energy Resources', items: [] },
  { title: 'Digitalization and Optimization of Oil & Gas Field Operations', items: [] },
  { title: 'Health, Safety, Environment (HSE) and Social Responsibility', items: [] },
  { title: 'Project Management, Economics, & Contracting', items: [] },
  { title: 'Energy Integration and Transition', items: [] },
  { title: 'Decarbonisation and Global Sustainability Hydrogen: Production, Storage, Transportation and Utilization', items: [] },
  { title: 'Petroleum Geoscience', items: [] },
  { title: 'Geophysics and Geotechnical Engineering', items: [] },
  { title: 'Efficient Drilling and Completion Technologies', items: [] },
  { title: 'Reservoir Engineering and Technologies', items: [] },
  { title: 'Petroleum Production Operations', items: [] },
  { title: 'Carbon Capture, Utilization and removal', items: [] },
];

const fees = [
  ['Attendee/Companion', '₹3,540', '₹4,130', '$50'],
  ['Industrial', '₹17,700', '₹18,290', '$200'],
  ['Faculty/Academician', '₹9,440', '₹10,030', '$150'],
  ['Post-Doc', '₹7,080', '₹7,670', '$125'],
  ['PhD & Research Scholars', '₹5,900', '₹6,490', '$100'],
  ['UG/PG Students', '₹3,540', '₹4,130', '$50'],
];

const contacts = [
  ['Dr. Shanker Krishna', 'Convenor', 'Assoc.DeanSOET@pdpu.ac.in', '+91-73959 70109'],
  ['Dr. Achinta Bera', 'Convenor', 'Achinta.Bera@spt.pdpu.ac.in', '+91-74775 93900'],
  ['Dr. Paul Naveen', 'Convenor', 'Paul.Naveen@spt.pdpu.ac.in', '+91-80510 50067'],
];

function Countdown() {
  const target = useMemo(() => new Date('2026-12-11T09:00:00+05:30').getTime(), []);
  const [left, setLeft] = useState(target - Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setLeft(target - Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const days = Math.max(0, Math.floor(left / 86400000));
  const hours = Math.max(0, Math.floor((left % 86400000) / 3600000));
  const minutes = Math.max(0, Math.floor((left % 3600000) / 60000));
  const seconds = Math.max(0, Math.floor((left % 60000) / 1000));

  return (
    <div className="countdown" aria-label="Countdown to conference">
      <div><strong>{days}</strong><span>Days</span></div>
      <div><strong>{hours}</strong><span>Hours</span></div>
      <div><strong>{minutes}</strong><span>Minutes</span></div>
      <div><strong>{seconds}</strong><span>Seconds</span></div>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <span />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`nav${menuOpen ? ' menu-open' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <img src="/assets/icphd-circle-clean-final.png" alt="ICPHD 2026 logo" />
          <span>ICPHD <b>2026</b></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
      </div>

      <section className="hero reveal reveal-delay-1" id="home">
        <img className="hero-bg" src="/assets/campus-aerial-final.jpg" alt="PDEU campus aerial view" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="top-logos">
            <div className="hero-left-logos" aria-label="PDEU and SOET logos">
              <img className="pdeu-main-logo" src="/assets/pdeu-logo-clean-transparent.png" alt="Pandit Deendayal Energy University" />
              <img className="hero-soet-logo" src="/assets/soet-logo-final-transparent.png" alt="School of Energy Technology" />
            </div>
            <img className="hero-icphd-logo" src="/assets/icphd-circle-clean-final.png" alt="ICPHD 2026 logo" />
          </div>

          <div className="hero-title-block reveal reveal-delay-2">
            <p className="edition">Organizing</p>
            <h1>International Conference on</h1>
            <h2>Petroleum, Hydrogen &amp; Decarbonization <span>(ICPHD 2026)</span></h2>
            <p className="tagline">Driving Innovation, Enabling Transition and Shaping the Energy Future</p>
            <div className="date-pill">December 11–13, 2026 (Friday–Sunday) <span>||</span> PDEU, Gandhinagar</div>
          </div>

          <div className="hero-lower reveal reveal-delay-3">
            <div className="organizers-panel">
              <div className="org-block">
                <p className="mini-label">ORGANISED BY</p>
                <p className="org-copy">Department of Petroleum Engineering in collaboration with Department of Chemical Engineering and Chemistry, Pandit Deendayal Energy University</p>
              </div>

              <div className="association-block">
                <p className="mini-label">IN ASSOCIATION WITH</p>
                <div className="association-logos">
                  <div className="association-slot association-fipi"><img src="/assets/fipi-association-clean-final.png" alt="FIPI" /></div>
                  <div className="association-slot"><img src="/assets/spe-association-clean-transparent.png" alt="SPE PDEU Student Chapter" /></div>
                  <div className="association-slot"><img src="/assets/seg-spg-eage-clean-transparent.png" alt="SEG, SPG and EAGE PDEU Student Chapters" /></div>
                  <div className="association-slot"><img src="/assets/iadc-association-clean-transparent.png" alt="IADC PDEU Student Chapter" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-strip reveal reveal-delay-1">
        <div className="announcement"><b>Abstract Submission Starts: 25 August 2026</b><b>Last date for Registration: 20 November 2026</b></div>
        <div className="quick-actions"><a href="#dates">Event Schedule</a><a href="/ICPHD-2026-Preview.pdf" target="_blank" rel="noreferrer">Download Brochure</a><a href="/ICPHD-2026-Flyer.jpg" target="_blank" rel="noreferrer">Download Flyer</a></div>
      </section>

      <section id="about" className="container about anchor-section reveal reveal-delay-2">
        <div><SectionTitle title="About ICPHD 2026" /><p>International Conference on Petroleum, Hydrogen &amp; Decarbonization (ICPHD 2026) is organized by the Department of Petroleum Engineering in collaboration with Department of Chemical Engineering and Chemistry, Pandit Deendayal Energy University.</p><p>Driving Innovation, Enabling Transition, Shaping the Energy Future.</p></div>
        <div><SectionTitle title="Organizing Departments" /><p>Department of Petroleum Engineering in collaboration with Department of Chemical Engineering and Chemistry, Pandit Deendayal Energy University.</p></div>
        <div><SectionTitle title="In Association With" /><p>SPE PDEU Student Chapter, IADC Pandit Deendayal Energy University Student Chapter, PDEU Student Chapters (SEG, SPG and EAGE), and FIPI.</p></div>
      </section>
      <section className="soft conference-content reveal reveal-delay-3">
        <div className="container">
          <div id="highlights" className="content-section highlights-section anchor-section">
            <SectionTitle eyebrow="FOURTH EDITION" title="Conference Highlights" />
            <div className="highlight-grid">
              {highlights.map(([img, title, sub], index) => <article className="highlight-card reveal-scale" key={title}><div className={`highlight-icon${index === 4 ? ' networking-highlight' : ''}`}><img src={`/assets/${img}`} alt="" /></div><h3>{title}</h3>{sub && <p>{sub}</p>}</article>)}
            </div>
          </div>

          <div id="dates" className="content-section dates-section anchor-section">
            <SectionTitle title="Important Dates" />
            <div className="dates-panel"><div className="dates-layout"><div className="dates-table">{dates.map(([date, label]) => <div className="date-row" key={date + label}><b>{date}</b><span>{label}</span></div>)}</div><div className="dates-photo-wrap"><img className="dates-photo" src="/assets/pdeu-oil-pump-new.jpg" alt="PDEU oil pump" /></div></div></div>
          </div>

          <div id="theme" className="content-section theme-section anchor-section">
            <SectionTitle title="Conference Theme" />
            <div className="theme-grid">{themes.map(theme => <article className="theme-card" key={theme.title}><h3>{theme.title}</h3></article>)}</div>
          </div>
        </div>
      </section>

      <section className="container registration anchor-section reveal reveal-delay-2" id="registration">
        <SectionTitle title="Registration & Abstract Submission" />
        <div className="registration-grid">
          <article><h3>Registration</h3><div className="fee-table flyer-fee-table"><div className="fee-head"><b>Delegate Type</b><b>Before<br />20 Nov, 26</b><b>After<br />20 Nov, 26</b><b>International<br />delegate</b></div>{fees.map(([category, before, after, international]) => <div className="fee-row" key={category}><span>{category}</span><b>{before}</b><b>{after}</b><b>{international}</b></div>)}</div></article>
          <article id="abstract"><h3>Abstract Submission</h3><p className="abstract-lead">Link for the Abstract submission</p><p>Selected abstracts will be provided with an opportunity for paper publication.</p><a className="primary-btn" href={abstractUrl}>Abstract Submission Link</a></article>
        </div>
      </section>
      <section className="soft venue reveal reveal-delay-2">
        <div className="container"><SectionTitle title="Venue" /><div className="venue-grid"><article className="venue-copy"><img className="venue-building" src="/assets/pdeu-building-new.jpg" alt="PDEU campus building" /><div className="venue-copy-inner"><h3>Pandit Deendayal Energy University Campus</h3><p className="address">PDEU Road, Raysan, Gandhinagar - 382426, Gujarat, India</p><p>ICPHD 2026 will be held at Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat, India. </p></div></article><a className="maps-card" href="https://www.google.com/maps/search/?api=1&query=Pandit+Deendayal+Energy+University+Gandhinagar" target="_blank" rel="noreferrer"><div className="map-preview"><img src="/assets/venue-map.png" alt="PDEU location on Google Maps" /></div><div className="map-card-footer"><span>VENUE LOCATION</span><strong>Open in Google Maps →</strong></div></a></div></div>
      </section>

      <section className="countdown-section reveal reveal-delay-1"><div className="container countdown-wrap"><div><p className="eyebrow">DECEMBER 11–13, 2026</p><h2>See you at ICPHD 2026</h2><p>Driving innovation, enabling transition and shaping the energy future.</p></div><Countdown /></div></section>

      <footer id="contact"><div className="container footer-top"><div className="footer-title"><h2>Contact</h2><p>ICPHD 2026 — Fourth Edition</p><img className="footer-seal-mini" src="/assets/pdeu-seal-new-transparent.png" alt="PDEU seal" /></div>{contacts.map(([name, role, email, phone]) => <div className="contact-card" key={email}><h3>{name}</h3><p>{role}</p><a href={`mailto:${email}`}>{email}</a><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>)}</div><div className="copyright">COPYRIGHT- ICPHD 2026 — Fourth Edition &nbsp;|&nbsp; December 11–13, 2026 &nbsp;|&nbsp; PDEU, Raysan, Gandhinagar - 382426, Gujarat, India</div></footer>
    </main>
  );
}
