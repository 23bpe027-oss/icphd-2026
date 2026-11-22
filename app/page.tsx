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
  ['Previous Editions', '/previous-editions'],
  ['Speakers', '/speakers'],
  ['Schedule', '/#dates'],
  ['Themes', '/themes'],
  ['Registration', '/registration'],
];

const highlights = [
  ['keynote-transparent.png', 'Keynote Sessions and', 'Plenary Lectures'],
  ['panel-transparent.png', 'Panel Discussions by', 'Industrial and Academic Professionals'],
  ['papers-transparent.png', 'Technical Paper and Poster', 'Presentations'],
  ['networking-branding-final.svg', 'Networking and', 'Branding'],
  ['networking-cropped.png', 'Exhibition', 'opportunities'],
  ['award-transparent.png', 'Best Paper and Poster', 'Presentation Awards'],
];

const dates = [
  ['10 October 2026', 'Abstract Submission Starts'],
  ['20 November 2026', 'Abstract Submission Closes'],
  ['23 November 2026', 'Notification of Acceptance'],
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
  const isPreviousEditionsPage = pathname === '/previous-editions';
  const isSpeakersPage = pathname === '/speakers';
  const isCommitteePage = pathname === '/organizing-committee';
  const isAdvisoryPage = pathname === '/advisory-committee';
  const isNearbyStaysPage = pathname === '/nearby-stays';
  const isNearbyAttractionsPage = pathname === '/nearby-attractions';
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
    <main className={isThemesPage ? "page-themes" : isPreviousEditionsPage ? "page-previous-editions" : isSpeakersPage ? "page-speakers" : isCommitteePage ? "page-organizing-committee" : isRegistrationPage ? "page-registration" : isAdvisoryPage ? "page-advisory-committee" : isNearbyStaysPage ? "page-nearby-stays" : isNearbyAttractionsPage ? "page-nearby-attractions" : "page-home"}>
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
          <a href="/nearby-stays">Accommodation</a>
          <a href="/nearby-attractions">Nearby Attractions</a>
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
          <a href="/nearby-stays" onClick={closeMenu}>Accommodation</a>
          <a href="/nearby-attractions" onClick={closeMenu}>Nearby Attractions</a>
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

              <div className="association-block association-guests-layout">
                <div className="association-chapters">
                  <p className="mini-label">IN ASSOCIATION WITH</p>
                  <div className="association-logos">
                    <div className="association-slot association-fipi"><img src="/assets/fipi-association-clean-final.png" alt="FIPI" /></div>
                    <div className="association-slot"><img src="/assets/spe-association-clean-transparent.png" alt="SPE PDEU Student Chapter" /></div>
                    <div className="association-slot"><img src="/assets/seg-spg-eage-final-hd-transparent.png" alt="SEG, SPG and EAGE PDEU Student Chapters" /></div>
                    <div className="association-slot"><img src="/assets/iadc-colored-card.png" alt="IADC PDEU Student Chapter" /></div>
                  </div>
                </div>
                <div className="guest-of-honor-panel">
                  <p className="mini-label">GUESTS OF HONOR</p>
                  <div className="guest-of-honor-grid">
                    <article className="guest-of-honor-card">
                      <img src="/assets/guest-dharm-pal.jpg" alt="Shri Dharm Pal" />
                      <div className="guest-of-honor-caption">
                        <h3>Shri Dharm Pal</h3>
                        <p>Head of Institute (HOI), Institute of Reservoir Studies, ONGC</p>
                      </div>
                    </article>
                    <article className="guest-of-honor-card">
                      <img src="/assets/guest-ashish-agarwal.jpg" alt="Shri Ashish Liladhar Agarwal" />
                      <div className="guest-of-honor-caption">
                        <h3>Shri Ashish Liladhar Agarwal</h3>
                        <p>MD and CEO, SEROS</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-strip reveal reveal-delay-1">
        <div className="media-partner-panel">
          <div className="media-partner-item">
            <p className="media-partner-item-label">MEDIA PARTNER</p>
            <div className="media-partner-logo-card">
              <img src="/assets/dew-journal-media-partner.png" alt="DEW Journal — The Complete Energy Journal" />
            </div>
          </div>
          <div className="prize-sponsor-group">
            <p className="media-partner-item-label prize-group-label">PRIZE SPONSOR</p>
            <div className="media-partner-item prize-sponsor-item">
              <div className="media-partner-logo-card acs-media-partner-logo-card">
                <img src="/assets/acs-publications-media-partner.png" alt="ACS Publications — Most Trusted. Most Cited. Most Read." />
              </div>
            </div>
            <div className="prize-description-card">
              <p><strong>Poster Presentation</strong> and <strong>Oral Presentation</strong> awards will be supported by <em>Energy &amp; Fuels</em>, <em>Industrial &amp; Engineering Chemistry Research</em>, and <em>ACS Omega</em>. Award recipients will receive certificates along with a complimentary ACS Membership.</p>
            </div>
          </div>
        </div>
        <div className="announcement"><b>Abstract Submission Extended to 20th November 2026</b><b>Sponsorship &amp; Exhibition Opportunities Open</b></div>
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
          <article id="abstract"><h3>Abstract Submission</h3><ul><li><b>Title:</b> Times New Roman, 14pt, Bold</li><li><b>Author:</b> Times New Roman, 12pt, Bold</li><li><b>Affiliations:</b> Times New Roman, 11pt, Bold Italic</li><li><b>Abstract:</b> Times New Roman, 12pt, up to 300 words</li><li><b>Keywords:</b> Times New Roman, 11pt, Italic, 3–5 keywords</li><li><b>Format:</b> MS Word-compatible file, A4 Portrait, 1.5 spacing</li><li>Selected abstracts may be offered publication in a reputed journal/proceedings.</li></ul><a className="primary-btn" href={abstractUrl} target="_blank" rel="noopener noreferrer">Abstract Submission Link</a><a className="abstract-template-btn" href="/ICPHD-2026-Abstract-Template.docx" onClick={(event) => { event.preventDefault(); openPreviewAndDownload("/ICPHD-2026-Abstract-Template.pdf", "/ICPHD-2026-Abstract-Template.docx", "ICPHD-2026-Abstract-Template.docx"); }}>Download Abstract Template</a><div className="bank-placeholder"><b>Payment Link</b><a href="https://onlinepayment.pdpu.ac.in/conferences/?event=414" target="_blank" rel="noopener noreferrer">https://onlinepayment.pdpu.ac.in/conferences/?event=414</a></div></article>
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


      {isSpeakersPage && (
        <section className="soft speakers-section">
          <div className="container">
            <SectionTitle title="Keynote Speakers" />
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
                  <img src="https://channeli.in/media/kernel/display_pictures/3d3b6f87-9326-4d01-ab00-036ed80a550b" alt="Prof. Hari Prakash Veluswamy" referrerPolicy="no-referrer" loading="eager" />
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
      )}

      {isNearbyStaysPage && (
        <section className="soft nearby-stays-section">
          <div className="container">
            <SectionTitle title="Accommodation" />

            <section className="nearby-stays-group">
              <h3 className="nearby-stays-group-title">Hostels and PG</h3>
              <div className="nearby-stays-grid">
                {[
                  { category: 'Hostel', name: 'GR Hostel for Boys and Girls', area: 'Near the conference venue', distance: '850 m from venue', phone: '+91-6357903723', map: 'GR Hostel for Boys and Girls, Gandhinagar' },
                  { category: 'PG', name: '2nd Home Luxuries PG for Boys and Girls', area: 'Near the conference venue', distance: '900 m from venue', phone: '+91-9662343427', map: '2nd Home Luxuries PG, Gandhinagar' },
                ].map((stay) => (
                  <article className="nearby-stay-card" key={stay.name}>
                    <div className="nearby-stay-card-top">
                      
                      <h3>{stay.name}</h3>
                      <p className="nearby-stay-area">{stay.area}</p>
                    </div>
                    <p className="nearby-stay-distance">{stay.distance}</p>
                    <div className="nearby-stay-actions">
                      <a href={`tel:${stay.phone.replace(/\s/g, '')}`}>Call {stay.phone}</a>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.map)}`} target="_blank" rel="noopener noreferrer">View Location</a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="nearby-stays-group">
              <h3 className="nearby-stays-group-title">Hotels</h3>
              <div className="nearby-stays-grid">
                {[
                  { name: 'The Eiffel Hotel & Banquet', area: 'Gandhinagar', distance: 'Approx. 2.1 km from PDEU', rating: '4.0/5 (151 ratings)', phone: '+91-8153811117', map: 'The Eiffel Hotel & Banquet, Gandhinagar' },
                  { name: 'Hotel The Velvet', area: 'Raysan', distance: '1.8 km from PDEU', rating: '4.0/5 (52 ratings)', phone: '+91-8980012315', map: 'Hotel The Velvet, Raysan, Gandhinagar' },
                  { name: 'Hotel The Vibes', area: 'Raysan', distance: '1.8 km from PDEU', rating: '3.8/5 (4 ratings)', phone: '+91-8866360460', map: 'Hotel The Vibes, Raysan, Gandhinagar' },
                  { name: 'Gift City Club, a member of Radisson Individuals', area: 'GIFT City', distance: '4.7 km from venue', phone: '079617 10101', map: 'Gift City Club, a member of Radisson Individuals, GIFT City' },
                  { name: 'Grand Mercure Ahmedabad GIFT City', area: 'GIFT City', distance: 'Approx. 4.8 km from PDEU', rating: '4.2/5 (331 ratings)', phone: '079618 01300', map: 'Grand Mercure Ahmedabad GIFT City' },
                  { name: 'Hotel Royal Heritage', area: 'Gandhinagar', distance: '3.3 km from venue', phone: '9257271170', map: 'Hotel Royal Heritage, Gandhinagar' },
                  { name: 'Hotel Royal Empire', area: 'Koba, Gandhinagar', distance: '3.9 km from PDEU', rating: '4.2/5 (124 ratings)', phone: '+91 99250 43599', map: 'Hotel Royal Empire, Koba, Gandhinagar' },
                  { name: 'The Zuree Hotel', area: 'Gandhinagar', distance: '3.8 km from PDEU', rating: '4.3/5 (135 ratings)', phone: '', map: 'The Zuree Hotel, Gandhinagar' },
                  { name: 'Hotel Vivan', area: 'Gandhinagar', distance: '3.3 km from venue', phone: '9974945884', map: 'Hotel Vivan, Gandhinagar' },
                  { name: 'Hotel Avenue Gold', area: 'Koba, Gandhinagar', distance: '2.3 km from PDEU', rating: '3.9/5 (125 ratings)', phone: '+91 76002 90701', map: 'Hotel Avenue Gold, Koba, Gandhinagar' },
                  { name: 'The Lemongrass Hotels', area: 'Bhaijipura, Gandhinagar', distance: '3.5 km from PDEU', rating: '4.1/5 (270 ratings)', phone: '+91 90237 63664', map: 'The Lemongrass Hotels, Gandhinagar' },
                ].map((stay) => (
                  <article className="nearby-stay-card" key={stay.name}>
                    <div className="nearby-stay-card-top">
                      
                      <h3>{stay.name}</h3>
                      <p className="nearby-stay-area">{stay.area}</p>
                    </div>
                    <p className="nearby-stay-distance">{stay.distance}</p>
                    <div className="nearby-stay-actions">
                      {stay.phone && <a href={`tel:${stay.phone.replace(/\s/g, '')}`}>Call {stay.phone}</a>}
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.map)}`} target="_blank" rel="noopener noreferrer">View Location</a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      )}

      {isNearbyAttractionsPage && (
        <section className="soft nearby-attractions-section">
          <div className="container">
            <SectionTitle title="Nearby Attractions" />
            <section className="nearby-attraction-category">
              <h3 className="nearby-attraction-category-title">Places to Visit</h3>
              <div className="nearby-attractions-grid">
                {[
                  { name: 'Swaminarayan Akshardham Temple', distance: 'Approx. 10 km from PDEU', description: 'A major cultural and spiritual complex known for its intricately carved pink sandstone temple, exhibitions and gardens.', map: 'Swaminarayan Akshardham Temple, Gandhinagar', image: 'https://imagesvs.oneindia.com/hi/img/2017/11/02-1509617085-temple-601.jpg' },
                  { name: 'Adalaj Stepwell', distance: 'Approx. 18 km from PDEU', description: 'A five-storey, 15th-century stepwell celebrated for its detailed stone carvings and Indo-Islamic architecture.', map: 'Adalaj Stepwell, Adalaj, Gujarat', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Adalaj_ki_Vav_Gujarat_240A1370_72.jpg' },
                  { name: 'Dandi Kutir Museum', distance: 'Approx. 12 km from PDEU', description: 'An interactive museum presenting the life and teachings of Mahatma Gandhi and the history of the Dandi March.', map: 'Dandi Kutir Museum, Gandhinagar', image: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/gandhi-circuit/dandi-kutir-museum/gallery/Dandi%20Kutir%20Museum7.jpg' },
                  { name: 'Sabarmati Ashram', distance: 'Approx. 12 km from PDEU', description: 'A historic ashram and museum on the Sabarmati River associated with Mahatma Gandhi.', map: 'Sabarmati Ashram, Ahmedabad', image: 'https://images.hindustantimes.com/img/2021/07/31/960x540/_7bb567d6-4f3b-11eb-983b-26bf3b8bba69_1627697096179.png' },
                  { name: 'Trimandir, Adalaj', distance: 'Approx. 17 km from PDEU', description: 'A distinctive non-sectarian temple complex near Adalaj.', map: 'Trimandir Adalaj, Gujarat', image: 'https://images.bhaskarassets.com/thumb/1200x900/web2images/960/2024/06/17/7-adalaj-trimandirr_1718633317.jpg' },
                  { name: 'Statue of Unity', distance: 'Approx. 200–220 km from PDEU · Full-day trip', description: 'The 182-metre statue of Sardar Vallabhbhai Patel at Ekta Nagar, with the viewing gallery, Valley of Flowers and other attractions in the surrounding destination.', map: 'Statue of Unity, Ekta Nagar, Gujarat', image: 'https://static.abplive.com/wp-content/uploads/sites/2/2019/02/18080711/statue-of-unity-720.jpg' },
                  { name: 'Kankaria Lake', distance: 'Approx. 25–30 km from PDEU', description: 'A historic lakefront in Ahmedabad with a promenade, gardens, boating and family entertainment attractions.', map: 'Kankaria Lake, Ahmedabad, Gujarat', image: 'https://miro.medium.com/1%2A295IIw82SKQ9Kj4NT7iTAw.jpeg' },
                  { name: 'Rani ki Vav', distance: 'Approx. 115–130 km from PDEU · Day trip', description: 'A UNESCO World Heritage stepwell in Patan, renowned for its elaborate multi-level sculptural architecture.', map: 'Rani ki Vav, Patan, Gujarat', image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Rani_ki_vav-Patan-Ahmedabad-Gujarat-O0A0110A.jpg' },
                  { name: 'Modhera Sun Temple', distance: 'Approx. 85–90 km from PDEU · Day trip', description: 'An 11th-century Sun Temple celebrated for its stone carvings and the stepped Surya Kund.', map: 'Modhera Sun Temple, Gujarat', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Sun_Temple%2C_Modhera_-_the_Sabha_Mandapa_01.jpg' },
                  { name: 'Champaner–Pavagadh Archaeological Park', distance: 'Approx. 160–175 km from PDEU · Day trip', description: 'A UNESCO World Heritage landscape of forts, mosques, temples and historic remains around Pavagadh Hill.', map: 'Champaner Pavagadh Archaeological Park, Gujarat', image: 'https://www.gujarattourguide.in/images/place-champaner-archaeological-park.jpg' },
                  { name: 'Lothal Archaeological Site', distance: 'Approx. 100–110 km from PDEU · Day trip', description: 'An important archaeological site of the ancient Indus Valley Civilisation, known for its planned settlement and dockyard remains.', map: 'Lothal Archaeological Site, Gujarat', image: 'https://2.bp.blogspot.com/-DqTq34Ll_vo/XlUAjuHsZpI/AAAAAAAAk74/uFpnPa2Wg04A-iQaMhOXVur7wx8N6VEmQCLcBGAsYHQ/s1600/lothal-india-6.jpg' },
                ].map(place => <article className="nearby-attraction-card" key={place.name}>
                  <img className="nearby-attraction-card-image" src={place.image} alt={place.name} loading="lazy" />
                  <div className="nearby-attraction-card-body"><h4>{place.name}</h4><p className="nearby-attraction-distance">{place.distance}</p><p>{place.description}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}`} target="_blank" rel="noopener noreferrer">View Location</a></div>
                </article>)}
              </div>
            </section>

            <section className="nearby-attraction-category">
              <h3 className="nearby-attraction-category-title">Parks &amp; Nature</h3>
              <div className="nearby-attractions-grid">
                {[
                  { name: 'Indroda Nature Park', distance: 'Approx. 10 km from PDEU', description: 'A large nature park with dinosaur and fossil exhibits, wildlife sections and botanical gardens.', map: 'Indroda Nature Park, Gandhinagar', image: 'https://img-cdn.publive.online/fit-in/1200x675/english-betterindia/media/media_files/uploads/2014/06/indroda_nature_park_gandhinagar.jpeg' },
                  { name: 'Sarita Udyan', distance: 'Approx. 8 km from PDEU', description: 'A riverside garden and popular picnic spot along the Sabarmati.', map: 'Sarita Udyan, Gandhinagar', image: 'https://media1.thrillophilia.com/filestore/awn8rn34bo4wzqalnvhbzs9y06k6_1581164255_sarita2.jpg?dpr=2&w=1440' },
                  { name: 'Punit Van', distance: 'Gandhinagar', description: 'A themed botanical garden with landscaped green spaces and tree collections.', map: 'Punit Van, Gandhinagar', image: 'https://wanderon-images.gumlet.io/blogs/new/2024/02/489ef017-dae3-408a-9090-07eaf72e271f.jpg' },
                  { name: 'Thol Bird Sanctuary', distance: 'Approx. 40 km from PDEU', description: 'A wetland destination known for birdwatching and seasonal migratory birds.', map: 'Thol Bird Sanctuary, Gujarat', image: 'https://media.assettype.com/outlooktraveller%2F2025-06-27%2F4iajxsq7%2FGreater-Flamingoat-Thol-Bird-Sanctury-KRG03581.jpg' },
                  { name: 'Nalsarovar Bird Sanctuary', distance: 'Approx. 85–100 km from PDEU · Day trip', description: 'A major wetland and bird sanctuary known for migratory birds and seasonal boat rides.', map: 'Nalsarovar Bird Sanctuary, Gujarat', image: 'https://www.clubmahindra.com/blog/images/Nalsarovar-resized.jpg' },
                  { name: 'Polo Forest', distance: 'Approx. 130–150 km from PDEU · Long day trip', description: 'A scenic forest region with historic temple ruins, trails and seasonal streams, especially popular during the monsoon and winter.', map: 'Polo Forest, Gujarat', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/0081423_Surya_Temple_Ruins%2C_Shiva_Shakti_Temple%2C_Abhapur_Gujarat_010.jpg' },
                  { name: 'Zanzari Waterfall', distance: 'Approx. 60–70 km from PDEU', description: 'A rocky riverside waterfall and natural outing near the Vatrak River; conditions vary by season and monsoon flow.', map: 'Zanzari Waterfall, Gujarat', image: 'https://wanderon-images.gumlet.io/gallery/new/2025/09/03/1756902202697-zanzari-waterfall-gujarat.jpg' },
                ].map(place => <article className="nearby-attraction-card" key={place.name}>
                  <img className="nearby-attraction-card-image" src={place.image} alt={place.name} loading="lazy" />
                  <div className="nearby-attraction-card-body"><h4>{place.name}</h4><p className="nearby-attraction-distance">{place.distance}</p><p>{place.description}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}`} target="_blank" rel="noopener noreferrer">View Location</a></div>
                </article>)}
              </div>
            </section>

            <section className="nearby-attraction-category">
              <h3 className="nearby-attraction-category-title">Shopping &amp; Entertainment</h3>
              <div className="nearby-attractions-grid">
                {[
                  { name: 'Swagat Holiday Mall', distance: 'Gandhinagar', description: 'A shopping and leisure destination with retail stores, food options and entertainment.', map: 'Swagat Holiday Mall, Gandhinagar', image: 'https://www.swagatgroup.in/swagat-holiday-mall/gallery/swagat-holiday-mall-8.jpg' },
                  { name: 'The Landmark', distance: 'Kudasan, Gandhinagar', description: 'A local shopping and lifestyle complex with retail outlets and everyday services.', map: 'The Landmark, Kudasan, Gandhinagar', image: 'https://imgcdn.houssed.com/assets/Files/Projects/151179/Project%20Image/hou-1764241032.webp' },
                  { name: 'Pramukh Anand Mall', distance: 'Kudasan, Gandhinagar', description: 'A commercial and lifestyle destination with shopping, food and entertainment options.', map: 'Pramukh Anand Mall, Kudasan, Gandhinagar', image: 'https://imgcdn.houssed.com/assets/Files/Projects/150407/Project%20Image/p3-1761718547.webp' },
                  { name: 'GIFT City', distance: 'Approx. 5–6 km from PDEU', description: 'A modern financial and business district known for its skyline, public spaces, dining and urban architecture.', map: 'GIFT City, Gandhinagar', image: 'https://im.rediff.com/money/2020/aug/04gift-city.jpg' },
                  { name: 'Infocity & Super Mall 1', distance: 'Gandhinagar', description: 'A convenient area for cafés, restaurants, shopping and casual outings.', map: 'Super Mall 1, Infocity, Gandhinagar', image: 'https://img.magicpin.com/lh3/xs-IwyWgARPu8OAZqlM74C1oorJ0tqV4SAi8Ftmik7m_SNDUU05un9C3HcJ_s1FKVmAmxocZZSd7RBw7eC1nWHUyO_nSZBARnSlFu_w' },
                  { name: 'City Pulse', distance: 'Gandhinagar', description: 'A cinema and entertainment option for a relaxed outing.', map: 'City Pulse, Gandhinagar', image: 'https://files.yappe.in/place/full/city-pulse-cinema-gandhinagar-9405524.webp' },
                ].map(place => <article className="nearby-attraction-card" key={place.name}>
                  <img className="nearby-attraction-card-image" src={place.image} alt={place.name} loading="lazy" />
                  <div className="nearby-attraction-card-body"><h4>{place.name}</h4><p className="nearby-attraction-distance">{place.distance}</p><p>{place.description}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}`} target="_blank" rel="noopener noreferrer">View Location</a></div>
                </article>)}
              </div>
            </section>
          </div>
        </section>
      )}

      {isPreviousEditionsPage && (
        <section className="soft previous-editions-section">
          <div className="container">
            <SectionTitle title="Previous Editions" />
            <p className="previous-editions-intro">
              Explore the conferences that have brought researchers, academicians and energy professionals together
              to exchange ideas on petroleum, hydrogen and decarbonisation.
            </p>

            <div className="previous-editions-grid">
              <div className="previous-edition-item">
                <p className="previous-edition-edition-label">FIRST EDITION</p>
                <article className="previous-edition-card">
                <div className="previous-edition-image-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4D22AQGDFN-egkEQkQ/feedshare-shrink_800/feedshare-shrink_800/0/1699354791845?e=2147483647&t=9BV6GgFoimWOAFVZ5aROslrS9W4gI1CesIQyRn73iVg&v=beta" alt="ICPHD 2023 conference at IIT Guwahati" loading="lazy" />
                </div>
                <div className="previous-edition-content">
                  <h3>ICPHD 2023</h3>
                  <p className="previous-edition-venue">Indian Institute of Technology Guwahati</p>
                  <p className="previous-edition-date">3–5 November 2023 · Guwahati, Assam</p>
                  <p>The inaugural conference was jointly organised by the <strong>Department of Chemical Engineering, IIT Guwahati</strong>, and the <strong>IIT Guwahati SPE Student Chapter</strong>, bringing together students, researchers, industry leaders and policymakers to exchange ideas on <strong>sustainable petroleum production</strong> and the <strong>energy transition</strong>.</p>
                </div>
                </article>
              </div>

              <div className="previous-edition-item">
                <p className="previous-edition-edition-label">SECOND EDITION</p>
                <article className="previous-edition-card">
                <div className="previous-edition-image-wrap">
                  <img src="https://www.theresearchers.us/wp-content/uploads/2024/12/ICPHD-ISM-png.avif" alt="ICPHD 2024 conference at IIT ISM Dhanbad" loading="lazy" />
                </div>
                <div className="previous-edition-content">
                  <h3>ICPHD 2024</h3>
                  <p className="previous-edition-venue">Indian Institute of Technology (ISM) Dhanbad</p>
                  <p className="previous-edition-date">12–14 December 2024 · Dhanbad, Jharkhand</p>
                  <p>Held under the theme <strong>“Sustainability through Transition”</strong>, the conference brought together delegates, researchers and professionals for plenary lectures, invited talks, and oral and poster presentations on emerging developments in petroleum, hydrogen and sustainable energy.</p>
                </div>
                </article>
              </div>

              <div className="previous-edition-item">
                <p className="previous-edition-edition-label">THIRD EDITION</p>
                <article className="previous-edition-card">
                <div className="previous-edition-image-wrap">
                  <img src="https://www.rgipt.ac.in/site/writereaddata/uploadedImages/Image/I_202505311358272315.jpg" alt="RGIPT Jais campus, host of ICPHD 2025" loading="lazy" />
                </div>
                <div className="previous-edition-content">
                  <h3>ICPHD 2025</h3>
                  <p className="previous-edition-venue">Rajiv Gandhi Institute of Petroleum Technology (RGIPT)</p>
                  <p className="previous-edition-date">7–9 November 2025 · Jais, Amethi, Uttar Pradesh</p>
                  <p>Organised by RGIPT’s Department of Petroleum Engineering and Geoengineering, the conference focused on <strong>“Advances, Challenges &amp; Opportunities for a Sustainable Future”</strong>, creating a platform for discussions and knowledge exchange on sustainable energy technologies and the evolving energy landscape.</p>
                  <div className="previous-edition-actions"><a className="previous-edition-website-link" href="https://icphd2025.com/" target="_blank" rel="noopener noreferrer">ICPHD 2025 Website <span aria-hidden="true">↗</span></a></div>
                </div>
                </article>
              </div>
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
