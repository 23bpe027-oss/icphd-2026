'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

const abstractUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc8zIIplqNH0R0gzwqkgrfPBg0jQUOMYxPrmiXAJPWOBip66A/viewform?usp=send_form';

function openAndDownloadPdf(url: string, filename: string) {
  // Open the PDF in a new tab and start a download from the same user click.
  window.open(url, '_blank', 'noopener,noreferrer');
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function openPreviewAndDownload(previewUrl: string, downloadUrl: string, filename: string) {
  // Open a readable preview and download the editable source from the same click.
  window.open(previewUrl, '_blank', 'noopener,noreferrer');
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();
}


const navLinks = [
  ['Home', '/'],
  ['About', '/#about'],
  ['Highlights', '/#highlights'],
  ['Schedule', '/#dates'],
  ['Themes', '/themes'],
  ['Registration', '/registration'],
];

const highlights = [
  ['keynote-transparent.png', 'Keynote sessions by', 'eminent industry and academic professionals'],
  ['panel-transparent.png', 'Panel Discussions by', 'Industrial and Academic Professionals'],
  ['papers-transparent.png', 'Technical Paper and Poster', 'Presentations'],
  ['networking-branding-final.svg', 'Networking and', 'Branding'],
  ['networking-cropped.png', 'Exhibition', 'opportunities'],
  ['award-transparent.png', 'Best Paper and Poster', 'Presentation Awards'],
];

const dates = [
  ['10 October 2026', 'Abstract Submission Starts'],
  ['16 November 2026', 'Abstract Submission Closes'],
  ['18 November 2026', 'Notification of Acceptance'],
  ['25 November 2026', 'Final Date for Registration'],
  ['11 December 2026', 'Conference Inauguration'],
  ['13 December 2026', 'Conference Valedictory'],
];


const organizingCommittee = [
  { group: 'PATRONS', people: [
    ['patron-rajesh-patel.jpg', 'Prof. Rajesh Patel', 'Director, SoET, PDEU'],
    ['patron-anirbid-sircar.jpg', 'Prof. Anirbid Sircar', 'Director, SoT, PDEU'],
  ]},
  { group: 'CONFERENCE CHAIRS', people: [
    ['patron-bhawansingh-desai.jpg', 'Prof. Bhawanisingh Desai', 'Dean R & D, PDEU'],
    ['chair-hari-s.jpg', 'Dr. Hari S', 'HoD PE, SoET, PDEU'],
    ['chair-anirban-das.jpg', 'Prof. Anirban Das', 'HoD Chemistry, SoET, PDEU'],
    ['chair-pravin-kodgire.jpg', 'Dr. Pravin Kodgire', 'HoD CE, SoET, PDEU'],
  ]},
  { group: 'CONVENERS', people: [
    ['convener-shanker-krishna.jpg', 'Dr. Shanker Krishna', 'Associate Dean SoET, PDEU'],
    ['convener-achinta-bera.jpg', 'Dr. Achinta Bera', 'SoET, PDEU'],
    ['convener-paul-naveen.jpg', 'Dr. Paul Naveen', 'SoET, PDEU'],
  ]},
  { group: 'CO-CONVENERS', people: [
    ['co-convener-r-balasubramanian.jpg', 'Dr. R Balasubramanian', 'SoET, PDEU'],
    ['co-convener-vivek-ramalingam.jpg', 'Dr. Vivek Ramalingam', 'SoET, PDEU'],
    ['co-convener-uttam-kumar-bhui.jpg', 'Prof. Uttam Kumar Bhui', 'SoET, PDEU'],
  ]},
  { group: 'ORGANIZING SECRETARIES', people: [
    ['secretary-anirudh-bardhan.jpg', 'Dr. Anirudh Bardhan', 'SoET, PDEU'],
    ['secretary-atul-kumar-patidar.jpg', 'Dr. Atul Kumar Patidar', 'SoET, PDEU'],
    ['secretary-amit-verma.jpg', 'Dr. Amit Verma', 'SoET, PDEU'],
  ]},
  { group: 'TREASURERS', people: [
    ['treasurer-namrata-bist.jpg', 'Dr. Namrata Bist', 'SoET, PDEU'],
    ['treasurer-abhinav-kumar.jpg', 'Dr. Abhinav Kumar', 'SoET, PDEU'],
    ['treasurer-maunish-shah.jpg', 'Dr. Maunish Shah', 'SoET, PDEU'],
  ]},
  { group: 'MEMBERS', people: [
    ['member-ramanand-singh.jpg', 'Dr. Ramanand Singh', 'SoET, PDEU'],
    ['member-lakshmanarao-jeeru.jpg', 'Dr. Lakshmanarao Jeeru', 'SoET, PDEU'],
    ['member-n-madhavan.jpg', 'Dr. N. Madhavan', 'SoET, PDEU'],
  ]},
];

const internationalAdvisory = [
  { name: 'Prof. Hadi Belhaj', detail: 'Dalhousie University, Canada' },
  { name: 'Dr. Emad W. Al-Shalabi', detail: 'Khalifa University, UAE' },
  { name: 'Dr. Ashkan Jahanbani Gharfarokhi', detail: 'NTNU Norway' },
  { name: 'Prof. Japan Trivedi', detail: 'University of Alberta, Canada' },
  { name: 'Dr. Kamaljit Singh', detail: 'Heriot-Watt University, UK' },
  { name: 'Prof. Reza Barati', detail: 'Kansas University, USA' },
  { name: 'Dr. Prashant Jadhawar', detail: 'University of Aberdeen, UK' },
  { name: 'Dr. Jyoti Phirani', detail: 'Baker Hughes, UK' },
  { name: 'Prof. Prem K. Bikkina', detail: 'Oklahoma State University, USA' },
  { name: 'Dr. Deepak Devegowda', detail: 'Oklahoma University, USA' },
  { name: 'Prof. Stefan Iglauer', detail: 'Edith Cowan University, Australia' },
  { name: 'Dr. Munawar Shaik', detail: 'UAE University, Al-Ain UAE' },
  { name: 'Dr. Francisco Arguelles Vivas', detail: 'ExxonMobil, TX-USA' },
  { name: 'Prof. Dayanand Saini', detail: 'California State University, USA' },
  { name: 'Prof. Praveen Linga', detail: 'National University of Singapore' },
];

const nationalAdvisory = [
  { name: 'Prof. Pankaj Tiwari', detail: 'IIT Guwahati, India' },
  { name: 'Prof. Anugrah Singh', detail: 'IIT-Guwahati, India' },
  { name: 'Prof. Ajay Mandal', detail: 'IIT(ISM) Dhanbad, India' },
  { name: 'Prof. Shalivahan', detail: 'Director, IIPE Vishakhapatnam, India' },
  { name: 'Prof. Jitendra Sangwai', detail: 'IIT Madras, India' },
  { name: 'Prof. Vikram Vishal', detail: 'IIT Bombay, India' },
  { name: 'Dr. Krian Bala Rathi', detail: 'IRS, ONGC, India' },
  { name: 'Dr. Anand Gupta', detail: 'RBM Infracon Limited, India' },
  { name: 'Prof. Harish Hirani', detail: 'Director, RGIPT Jais, India' },
  { name: 'Prof. Keka Ojha', detail: 'IIT(ISM) Dhanbad, India' },
  { name: 'Prof. Vikas Mahto', detail: 'IIT(ISM) Dhanbad, India' },
  { name: 'Prof. Tarun Kumar Naiya', detail: 'IT(SM) Dhanbad, India' },
  { name: 'Prof. Satish Kumar Sinha', detail: 'RGIPT Jais, India' },
  { name: 'Prof. Alok Kumar Singh', detail: 'RGIPT Jais, India' },
  { name: 'Dr. Ravi Sharma', detail: 'IIT Roorkee, India' },
  { name: 'Dr. Sandeep Kulkarni', detail: 'IIT Kharagpur, India' },
  { name: 'Dr. Hari Prakash Veluswamy', detail: 'IIT Roorkee, India' },
  { name: 'Dr. Himanshu Sharma', detail: 'IIT Kanpur, India' },
  { name: 'Dr. Pankaj Khanna', detail: 'IIT Gandhinagar, India' },
  { name: 'Prof. Tushar Sharma', detail: 'RGIPT Jais, India' },
  { name: 'Col (Dr) R. K. Shrivastawa', detail: 'Registrar, PDEU' },
  { name: 'Dr. Anil Bhardwaj', detail: 'Former GGM (Chemistry), ONGC' },
  { name: 'Prof. Rajesh Patel', detail: 'Director, SoET, PDEU' },
  { name: 'Prof. Anirbid Sircar', detail: 'Director, SoT, PDEU' },
  { name: 'Dr. Praghnesh Bhatt', detail: 'Dean Academic, PDEU' },
  { name: 'Dr. Swapnil Dharaskar', detail: 'Dean SoET, PDEU' },
  { name: 'Prof. Bhawanisingh Desai', detail: 'Dean-R&D, PDEU' },
  { name: 'Dr. Anurag Kandya', detail: 'Dean-Student Affairs, PDEU' },
  { name: 'Prof. R.K. Vij', detail: 'Professor of Practice, PDEU' },
  { name: 'Dr. Sachidanand Singh', detail: 'Dean-IT, PDEU' },
  { name: 'Prof. Subrata K. Majumdar', detail: 'IIT, Guwahati' },
];

const themes = [
  { title: 'Improved or Enhanced Oil Recovery (IOR/EOR)', items: ['Thermal, chemical and gas-injection EOR', 'Emerging EOR technologies and field applications', 'Reservoir performance and recovery optimisation'] },
  { title: 'Unconventional Energy Resources', items: ['CBM, shale and gas hydrates', 'Geothermal and natural hydrogen resources', 'Fracturing and emerging extraction technologies'] },
  { title: 'Digitalization and Optimization of Oil & Gas Field Operations', items: ['AI, machine learning and data analytics', 'Automation, remote operations and smart fields', 'Digital twins and production optimisation'] },
  { title: 'Health, Safety, Environment (HSE) and Social Responsibility', items: ['Operational HSE and emergency response', 'Environmental stewardship and sustainability', 'Digital HSE, monitoring and risk management'] },
  { title: 'Project Management, Economics, & Contracting', items: ['Project economics and field development planning', 'EPC project management and contracting', 'Governance, policy and regulatory frameworks'] },
  { title: 'Energy Integration and Transition', items: ['Renewable integration in oil and gas', 'Energy transition pathways and policy', 'Investment, economics and workforce development'] },
  { title: 'Decarbonisation and Global Sustainability', items: ['Low-carbon operations and climate technologies', 'Methane management and emissions reduction', 'Sustainable energy systems and resource management'] },
  { title: 'Hydrogen: Production, Storage, Transportation and Utilization', items: ['Hydrogen production and purification', 'Storage, transportation and infrastructure', 'Utilization, economics, policy and safety'] },
  { title: 'Petroleum Geoscience', items: ['Geochemistry, geology and sedimentology', 'Structural geology and basin analysis', 'Core characterisation and reservoir studies'] },
  { title: 'Geophysics and Geotechnical Engineering', items: ['Seismic, gravity and magnetic methods', 'Borehole geophysics and logging', 'Rock mechanics, GIS and near-surface geophysics'] },
  { title: 'Efficient Drilling and Completion Technologies', items: ['Drilling fluids, cementing and well construction', 'HPHT, deep-water and advanced drilling', 'Completion technologies and well integrity'] },
  { title: 'Reservoir Engineering and Technologies', items: ['Reservoir characterisation and simulation', 'Field development and surveillance', 'Flow through porous media and rock-fluid interaction'] },
  { title: 'Petroleum Production Operations', items: ['Artificial lift and integrated operations', 'Production chemistry, subsea and processing systems', 'Produced-water management, workover and stimulation'] },
  { title: 'Carbon Capture, Utilization and Removal', items: ['CO₂ capture, separation and compression', 'Utilization pathways and value-added products', 'Storage, monitoring and carbon-removal technologies'] },
  { title: 'Refining and Petrochemicals', items: ['Advances in refining processes, catalysts and process intensification', 'Petrochemical production, polymers and value-chain integration', 'Refinery digitalization, energy efficiency and cleaner fuels'] },
  { title: 'Alternative Fuels for a Sustainable Future', items: ['Biofuels, sustainable aviation fuels and waste-to-fuel pathways', 'Synthetic fuels, e-fuels and low-carbon fuel technologies', 'Fuel blending, lifecycle assessment and commercialization challenges'] },
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


const studentVolunteers = [
  ['Mr. Abrarhussain Virani', 'Student Convenor', '', '+91 88661 28781'],
  ['Ms. Avani Gupta', 'Student Convenor', '', '+91 82005 44890'],
  ['Mr. Padam Pandey', 'Student Convenor', '', '+91 63066 89036'],
  ['Mr. Jinay Jain', 'Student Convenor', '', '+91 70023 84081'],
  ['Mr. Dhananjay Nathani', 'Student Convenor', '', '+91 96648 35463'],
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
  const pathname = usePathname();
  const isThemesPage = pathname === '/themes';
  const isCommitteePage = pathname === '/organizing-committee';
  const isAdvisoryPage = pathname === '/advisory-committee';
  const isRegistrationPage = pathname === '/registration';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale'));
    if (!elements.length) return;

    // Keep scroll reveals reliable across browsers: reveal anything already in
    // the viewport immediately, then observe the rest as the page scrolls.
    const revealVisible = () => {
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewport * 0.92 && rect.bottom > 0) {
          element.classList.add('is-visible');
        }
      });
    };

    revealVisible();

    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach(element => {
      if (!element.classList.contains('is-visible')) observer.observe(element);
    });

    window.addEventListener('resize', revealVisible);
    window.addEventListener('orientationchange', revealVisible);
    const kickoff = window.setTimeout(revealVisible, 120);

    return () => {
      window.clearTimeout(kickoff);
      window.removeEventListener('resize', revealVisible);
      window.removeEventListener('orientationchange', revealVisible);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={isThemesPage ? "page-themes" : isCommitteePage ? "page-organizing-committee" : isRegistrationPage ? "page-registration" : isAdvisoryPage ? "page-advisory-committee" : "page-home"}>
      <header className={`nav${menuOpen ? ' menu-open' : ''}`}>
        <a className="brand" href="/" onClick={closeMenu}>
          <img src="/assets/icphd-circle-clean-final.png" alt="ICPHD 2026 logo" />
          <span>ICPHD <b>2026</b></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <details className="nav-dropdown">
            <summary>Committees</summary>
            <div className="nav-dropdown-menu">
              <a href="/advisory-committee">Advisory Committee</a>
              <a href="/organizing-committee">Organizing Committee</a>
            </div>
          </details>
          <a href="/#contact">Contact</a>
        </nav>

        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <details className="mobile-nav-dropdown">
            <summary>Committees</summary>
            <div>
              <a href="/advisory-committee" onClick={closeMenu}>Advisory Committee</a>
              <a href="/organizing-committee" onClick={closeMenu}>Organizing Committee</a>
            </div>
          </details>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      <section className="hero reveal reveal-delay-1" id="home">
        <img className="hero-bg" src="/assets/campus-aerial-final.jpg" alt="PDEU campus aerial view" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="top-logos" aria-label="Conference, university and school logos">
            <img className="pdeu-main-logo" src="/assets/pdeu-logo-clean-transparent.png" alt="Pandit Deendayal Energy University" />
            <img className="hero-icphd-logo" src="/assets/icphd-circle-clean-final.png" alt="ICPHD 2026 logo" />
            <img className="hero-soet-logo" src="/assets/soet-logo-exact.jpg" alt="School of Energy Technology" />
          </div>

          <div className="hero-title-block reveal reveal-delay-2">
            <p className="edition">FOURTH EDITION OF</p>
            <h1>International Conference on</h1>
            <h2>Petroleum, Hydrogen &amp; Decarbonization <span>(ICPHD 2026)</span></h2>
            <p className="tagline">Driving Innovation, Enabling Transition and Shaping the Energy Future</p>
            <div className="date-pill">December 11–13, 2026 (Friday–Sunday) <span>||</span> PDEU, Gandhinagar</div>
          </div>

          <div className="hero-lower reveal reveal-delay-3">
            <div className="organizers-panel">
              <div className="org-block">
                <p className="mini-label">ORGANISED BY</p>
                <p className="org-copy">Department of Petroleum Engineering with Department of Chemical Engineering and Department of Chemistry,<span className="desktop-org-break"><br /></span> Pandit Deendayal Energy University</p>
              </div>

              <div className="association-block">
                <p className="mini-label">IN ASSOCIATION WITH</p>
                <div className="association-logos">
                  <div className="association-slot association-fipi"><img src="/assets/fipi-association-clean-final.png" alt="FIPI" /></div>
                  <div className="association-slot"><img src="/assets/spe-association-clean-transparent.png" alt="SPE PDEU Student Chapter" /></div>
                  <div className="association-slot"><img src="/assets/seg-spg-eage-final-hd-transparent.png" alt="SEG, SPG and EAGE PDEU Student Chapters" /></div>
                  <div className="association-slot"><img src="/assets/iadc-colored-card.png" alt="IADC PDEU Student Chapter" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-strip reveal reveal-delay-1">
        <div className="media-partner-panel">
          <p className="mini-label">MEDIA PARTNER</p>
          <div className="media-partner-logo-card">
            <img src="/assets/dew-journal-media-partner.png" alt="DEW Journal — The Complete Energy Journal" />
          </div>
        </div>
        <div className="announcement"><b>Abstract Submission Has Begun</b><b>Sponsorship &amp; Exhibition Opportunities Open</b></div>
        <div className="quick-actions"><a href="/ICPHD%202026_PDEU%20Gandhinagar_Flyer.pdf" target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); openAndDownloadPdf("/ICPHD%202026_PDEU%20Gandhinagar_Flyer.pdf", "ICPHD 2026_PDEU Gandhinagar_Flyer.pdf"); }}>Download Flyer</a><a href="/Brochure_ICPHD%202026_PDEU%20Gandhinagar.pdf" target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); openAndDownloadPdf("/Brochure_ICPHD%202026_PDEU%20Gandhinagar.pdf", "Brochure_ICPHD 2026_PDEU Gandhinagar.pdf"); }}>Download Brochure</a><a href="/Sponsorship-ICPHD-2026.pdf" target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); openAndDownloadPdf("/Sponsorship-ICPHD-2026.pdf", "Sponsorship-ICPHD-2026.pdf"); }}>Sponsorship Details</a></div>

      </section>

      <section id="about" className="container about anchor-section reveal reveal-delay-2">
        <div><SectionTitle title="About ICPHD 2026" /><p>ICPHD 2026, the fourth edition of the International Conference on Petroleum, Hydrogen, and Decarbonization, brings together researchers, academicians, students, and industry professionals to share ideas and advances across the energy sector. Through technical presentations and discussion, the conference encourages collaboration and explores practical pathways towards a more sustainable energy future.</p></div>
        <div><SectionTitle title="About the Departments" /><p>The conference is organized by the Department of Petroleum Engineering, Pandit Deendayal Energy University, in collaboration with the Department of Chemistry and the Department of Chemical Engineering. This collaboration brings together complementary expertise across petroleum, chemical sciences, process engineering, hydrogen, and emerging energy technologies to support research, innovation, and sustainable solutions for the evolving energy landscape.</p></div>
        <div><SectionTitle title="About the Institute" /><p>Pandit Deendayal Energy University (PDEU), located in Gandhinagar, Gujarat, focuses on education, research, and innovation across energy and allied disciplines. Its interdisciplinary academic environment and industry partnerships make it a fitting platform for ICPHD 2026 to connect academia and industry and advance cleaner, more resilient energy solutions.</p></div>
      </section>

      <section className="soft conference-content reveal reveal-delay-3">
        <div className="container">
          <div id="highlights" className="content-section highlights-section anchor-section">
            <SectionTitle eyebrow="FOURTH EDITION" title="Conference Highlights" />
            <div className="highlight-grid">
              {highlights.map(([img, title, sub], index) => <article className="highlight-card reveal-scale" key={title}><div className={`highlight-icon${index === 2 ? ' networking-highlight' : ''}${index === 4 ? ' exhibition-highlight' : ''}`}><img src={`/assets/${img}`} alt="" /></div><h3>{title}</h3>{sub && <p>{sub}</p>}</article>)}
            </div>
          </div>

          <div id="dates" className="content-section dates-section anchor-section">
            <SectionTitle title="Important Dates" />
            <div className="dates-panel"><div className="dates-layout"><div className="dates-table">{dates.map(([date, label]) => <div className="date-row" key={date + label}><b>{date}</b><span>{label}</span></div>)}</div><div className="dates-photo-wrap"><img className="dates-photo" src="/assets/pdeu-oil-pump-new.jpg" alt="PDEU oil pump" /></div></div></div>
          </div>

          <div id="theme" className="content-section theme-section anchor-section">
            <SectionTitle title="Conference Themes" />
            <div className="theme-grid">{themes.map(theme => <article className="theme-card" key={theme.title}><h3>{theme.title}</h3><ul>{theme.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
          </div>
        </div>
      </section>

      <section className="container registration anchor-section reveal reveal-delay-2" id="registration">
        <SectionTitle title="Registration & Abstract Submission" />
        <div className="registration-grid">
          <article><h3>Registration</h3><ul><li>Delegates are advised to pay first and then complete the registration process.</li><li>Payment via NEFT/SWIFT/Wire Transfer or UPI (Indian participants only).</li><li>Registration form must be completed after payment for confirmation.</li><li>Certificates issued only to registered participants.</li></ul><a className="primary-btn" href="https://forms.gle/pWQjc1RdnkQr9Sqs7" target="_blank" rel="noopener noreferrer">Register Here</a><div className="fee-table flyer-fee-table"><div className="fee-head"><b>Delegate Type</b><b>Before<br />25th November 2026</b><b>After<br />25th November 2026</b><b>International<br />delegate</b></div>{fees.map(([category, before, after, international]) => <div className="fee-row" key={category}><span>{category}</span><b>{before}</b><b>{after}</b><b>{international}</b></div>)}</div></article>
          <article id="abstract"><h3>Abstract Submission (Started 10th October 2026)</h3><ul><li><b>Title:</b> Times New Roman, 14pt, Bold</li><li><b>Author:</b> Times New Roman, 12pt, Bold</li><li><b>Affiliations:</b> Times New Roman, 11pt, Bold Italic</li><li><b>Abstract:</b> Times New Roman, 12pt, 300–400 words</li><li><b>Keywords:</b> Times New Roman, 11pt, Italic, 3–5 keywords</li><li><b>Format:</b> MS Word-compatible file, A4 Portrait, 1.5 spacing</li><li>Selected abstracts may be offered publication in a reputed journal/proceedings.</li></ul><a className="primary-btn" href={abstractUrl} target="_blank" rel="noopener noreferrer">Abstract Submission Link</a><a className="abstract-template-btn" href="/ICPHD-2026-Abstract-Template.docx" onClick={(event) => { event.preventDefault(); openPreviewAndDownload("/ICPHD-2026-Abstract-Template.pdf", "/ICPHD-2026-Abstract-Template.docx", "ICPHD-2026-Abstract-Template.docx"); }}>Download Abstract Template</a><div className="bank-placeholder"><b>Payment Link</b><a href="https://onlinepayment.pdpu.ac.in/conferences/?event=414" target="_blank" rel="noopener noreferrer">https://onlinepayment.pdpu.ac.in/conferences/?event=414</a></div></article>
        </div>
      </section>


      {isAdvisoryPage && (
        <section className="soft advisory-committee-section">
          <div className="container">
            <SectionTitle title="Advisory Committee" />
            <div className="advisory-panels">
              <section className="advisory-panel">
                <h3>International Advisory Committee</h3>
                <div className="advisory-name-grid">
                  {internationalAdvisory.map(person => <div className="advisory-person" key={person.name}><strong>{person.name}</strong><span>{person.detail}</span></div>)}
                </div>
              </section>
              <section className="advisory-panel">
                <h3>National Advisory Committee</h3>
                <div className="advisory-name-grid">
                  {nationalAdvisory.map(person => <div className="advisory-person" key={person.name}><strong>{person.name}</strong><span>{person.detail}</span></div>)}
                </div>
              </section>
            </div>
          </div>
        </section>
      )}

      {isCommitteePage && (
      <section className="soft organizing-committee-section anchor-section reveal reveal-delay-2" id="organizing-committee">
        <div className="container">
          <SectionTitle title="Organizing Committee" />
          <section className="committee-group committee-chief-group">
            <h3>CHIEF PATRON</h3>
            <div className="committee-chief">
              <img src="/assets/committee/chief-patron.jpg" alt="Prof. S. Sundar Manoharan" />
              <div><h4>Prof. S. Sundar Manoharan</h4><p>Director General, PDEU</p></div>
            </div>
          </section>
          <div className="committee-groups">
            {organizingCommittee.map(group => <section className="committee-group" key={group.group}>
              <h3>{group.group}</h3>
              <div className="committee-grid">
                {group.people.map(([photo, name, detail]) => <article className="committee-person" key={name}>
                  <img src={`/assets/committee/${photo}`} alt={name} loading="lazy" />
                  <div><h4>{name}</h4><p>{detail}</p></div>
                </article>)}
              </div>
            </section>)}
          </div>
        </div>
      </section>
      )}

      <section className="soft venue reveal reveal-delay-2">
        <div className="container"><SectionTitle title="Venue" /><div className="venue-grid"><article className="venue-copy"><img className="venue-building" src="/assets/pdeu-building-new.jpg" alt="PDEU campus building" /><div className="venue-copy-inner"><h3>Pandit Deendayal Energy University Campus</h3><p className="address">Knowledge Corridor, Raysan Village, PDPU Rd, Gandhinagar, Raysan, Gujarat 382426</p><p>ICPHD 2026 will be held at Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat, India. Located in Raisan, on the outskirts of Gandhinagar, the university is well connected to Ahmedabad and other major cities by road, rail, and air.</p></div></article><a className="maps-card" href="https://www.google.com/maps/search/?api=1&query=Pandit+Deendayal+Energy+University+Gandhinagar" target="_blank" rel="noreferrer"><div className="map-preview"><img src="/assets/venue-map.png" alt="PDEU location on Google Maps" /></div><div className="map-card-footer"><span>VENUE LOCATION</span><strong>Open in Google Maps →</strong></div></a></div></div>
      </section>

      <section className="countdown-section reveal reveal-delay-1"><div className="container countdown-wrap"><div><p className="eyebrow">DECEMBER 11–13, 2026</p><h2>See you at ICPHD 2026</h2><p>Driving innovation, enabling transition and shaping the energy future.</p></div><Countdown /></div></section>

      <footer id="contact"><div className="container footer-top">
        <div className="footer-heading-row"><div className="footer-title"><h2>Contact</h2><p className="contact-link-row"><svg className="contact-social-icon mail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Mail us at <a className="contact-email" href="mailto:ICPHD2026@pdpu.ac.in">ICPHD2026@pdpu.ac.in</a></span></p><p className="contact-link-row"><svg className="contact-social-icon instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.7" r="1.1" fill="currentColor"/></svg><span>Visit us at <a className="contact-instagram" href="https://www.instagram.com/icphd2026.pdeu/" target="_blank" rel="noreferrer">@icphd2026.pdeu</a></span></p></div><img className="footer-seal-mini" src="/assets/pdeu-seal-new-transparent.png" alt="PDEU circular seal" /></div>
        <div className="footer-groups">
        <section className="contact-group" aria-label="Convenors"><div className="contact-group-grid">{contacts.map(([name, role, email, phone]) => <div className="contact-card" key={name}><h4>{name}</h4><p>{role}</p><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>)}</div></section>
        <section className="contact-group" aria-label="Student Convenors"><div className="contact-group-grid">{studentVolunteers.map(([name, role, email, phone]) => <div className="contact-card" key={name}><h4>{name}</h4><p>{role}</p><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>)}</div></section>
        </div>
      </div><div className="copyright">COPYRIGHT- ICPHD 2026 — Fourth Edition &nbsp;|&nbsp; December 11–13, 2026 &nbsp;|&nbsp; PDEU, Raysan Gandhinagar, 382009</div></footer>
    </main>
  );
}
