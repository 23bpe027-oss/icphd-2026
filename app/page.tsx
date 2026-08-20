"use client";

import { useEffect, useMemo, useState } from "react";

const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL || "#registration";
const abstractUrl = process.env.NEXT_PUBLIC_ABSTRACT_URL || "#abstract";

const highlights = [
  ["panel.png", "Panel Discussions", "by Industry Experts & Academicians"],
  ["keynote.png", "Keynote Sessions", ""],
  ["papers.png", "Paper & Poster", "Presentations"],
  ["award.png", "Best Paper & Best Poster", "Presentation Awards"],
  ["networking.png", "Exhibition, Networking", "& Branding"],
];

const dates = [
  ["20 Aug 2026", "Abstract Submission Starts"],
  ["15 Oct 2026", "Abstract Submission Closes (extended)"],
  ["15 Oct 2026", "Notification of Acceptance/Rejection (on or before, extended)"],
  ["20 Nov 2026", "Final Registration Deadline for Authors/Delegates"],
  ["To Be Announced", "Pre-conference Workshop"],
  ["11 Dec 2026", "Inauguration"],
  ["13 Dec 2026", "Valedictory"],
  ["To Be Announced", "Full Paper Submission (on call basis)"],
];

const themes = [
  {
    title: "Decarbonisation and Global Sustainability",
    items: [
      "Decarbonisation and Climate Technologies",
      "Carbon Capture, Storage, and Utilisation",
      "Methane Management and Mitigation",
      "Storage Resource Management",
      "Electrification and Decarbonisation of Existing Operations",
      "Low-Carbon Petroleum Products: Advances and Innovations",
    ],
  },
  {
    title: "Hydrogen: Production, Storage, Transportation and Utilization",
    items: [
      "Hydrogen Production",
      "Hydrogen Storage",
      "Hydrogen Transportation",
      "Hydrogen Utilization",
      "Hydrogen Policy, Economics and Safety",
    ],
  },
  {
    title: "Petroleum Geoscience",
    items: [
      "Petroleum Geochemistry and Geology",
      "Sedimentology and Stratigraphy",
      "Structural Geology and Basin Analysis",
      "Core Sampling & Characterisation",
    ],
  },
  {
    title: "Geophysics and Geotechnical Engineering",
    items: [
      "Seismic Exploration and Interpretation",
      "Gravity and Magnetics",
      "Borehole Geophysics and Logging Techniques",
      "Near Surface Geophysics",
      "Rock Mechanics",
      "Remote Sensing and GIS in Geosciences",
    ],
  },
  {
    title: "Efficient Drilling and Completion Technologies",
    items: [
      "Drilling Technology",
      "Wells Construction and Completion Technology",
      "Cementing and Drilling Fluids",
      "HPHT and Deep-Water drilling",
    ],
  },
  {
    title: "Reservoir Engineering and Technologies",
    items: [
      "Reservoir Characterisation and Modelling",
      "Reservoir Simulation",
      "Reservoir Modelling/ Surveillance Technology",
      "Oil and Gas Field Development",
      "Flow through Porous Media",
      "Rock-fluid Interactions",
    ],
  },
  {
    title: "Petroleum Production Operations",
    items: [
      "Integrated Operations",
      "Artificial Lift",
      "High CO2 and Contaminated Fields",
      "Production Maintenance and Chemistry",
      "Subsea Production and Processing System",
      "Water Shut-off operations",
      "Sustainable Produced Water Management",
      "Workover & Well Stimulations",
    ],
  },
  {
    title: "Flow Assurance",
    items: [
      "Fluid Characterization and Transport",
      "CO2 transport",
      "High CO2 and Contaminated Fields",
      "Asphaltenes and Wax Mitigation",
      "Crude Oil Emulsification/Demulsification",
      "Scale Mitigation",
      "Corrosion Management",
    ],
  },
  {
    title: "Improved or Enhanced Oil Recovery (IOR/EOR)",
    items: [
      "Thermal EOR",
      "Chemical EOR",
      "Gas Injection Techniques",
      "Microbial EOR",
      "Emerging Technologies in EOR",
    ],
  },
  {
    title: "Unconventional Energy Resources",
    items: [
      "CBM and Shale",
      "Gas Hydrates",
      "Geothermal Energy Resources and Utilization",
      "Natural Hydrogen",
      "Fracturing",
      "Emerging Technologies",
    ],
  },
  {
    title: "Digitalization and Optimization of Oil & Gas Field operations",
    items: [
      "Data Science/Big Data",
      "Automation and Digital Operation",
      "Remote Operations",
      "AI and Machine Learning",
      "Smart Field Technologies",
      "Digital Operations/Oilfields",
      "Computational Fluid dynamics",
    ],
  },
  {
    title: "Health, Safety, Environment (HSE) and Social Responsibility",
    items: [
      "Operational HSE",
      "Minimising Environmental Discharge",
      "Environmental Stewardship and Sustainability",
      "Emergency Response and Recovery",
      "Sensors and Measurements for Environmental Hazards",
      "Digitalisation in HSE - Remote Inspection, Automation",
    ],
  },
  {
    title: "Project Management, Economics, and Contracting",
    items: [
      "Project Economics",
      "Field Development Planning, Strategies, and Methodologies",
      "EPC Project Management",
      "Governance, Policy and Regulations",
    ],
  },
  {
    title: "Energy Integration and Transition",
    items: [
      "Global Energy Transition Outlook and Future",
      "Renewable Energy Integration in O&G",
      "Policy Regulation and Market Trends",
      "Investment, Economics, and Workforce Development",
    ],
  },
];

const fees = [
  ["Industrial", "₹15,000 – 17,700"],
  ["Start-up Companies / R&D Labs", "₹15,000 – 17,700"],
  ["Academician", "₹8,000 – 9,440"],
  ["Post-Doc, PhD & PG Students", "₹8,000 – 9,440"],
  ["UG Students", "₹2,600 – 2,960"],
];

const contacts = [
  ["Dr. Shanker Krishna", "Convenor", "Assoc.DeanSOET@pdpu.ac.in", "+91-73959 70109"],
  ["Dr. Achinta Bera", "Convenor", "Achinta.Bera@spt.pdpu.ac.in", "+91-74775 93900"],
  ["Dr. Paul Naveen", "Convenor", "Paul.Naveen@spt.pdpu.ac.in", "+91-80510 50067"],
];

function Countdown() {
  const target = useMemo(() => new Date("2026-12-11T09:00:00+05:30").getTime(), []);
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
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">
          <img src="/assets/icphd-logo.png" alt="ICPHD logo" />
          <span>ICPHD <b>2026</b></span>
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#dates">Schedule</a>
          <a href="#theme">Theme</a>
          <a href="#registration">Registration</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <img className="hero-bg" src="/assets/campus-aerial.png" alt="" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="top-logos">
            <img src="/assets/pdeu-logo.png" alt="Pandit Deendayal Energy University" />
            <img className="soet" src="/assets/soet-logo.png" alt="School of Energy Technology" />
          </div>

          <p className="edition">FOURTH EDITION OF</p>
          <h1>International Conference on</h1>
          <h2>Petroleum, Hydrogen &amp; Decarbonization <span>(ICPHD 2026)</span></h2>
          <p className="tagline">Driving Innovation, Enabling Transition and Shaping the Energy Future</p>
          <div className="date-pill">December 11–13, 2026 (Friday–Sunday) &nbsp;||&nbsp; PDEU, Gandhinagar</div>

          <div className="hero-bottom">
            <div>
              <p className="mini-label">ORGANISED BY</p>
              <p>Departments of Petroleum Engineering and Chemical Engineering, Pandit Deendayal Energy University</p>
              <div className="association-logos">
                <img src="/assets/fipi-logo.png" alt="FIPI" />
                <img src="/assets/spe-logo.png" alt="SPE International" />
                <img src="/assets/iadc-logo.png" alt="IADC" />
                <img src="/assets/iadc-student-logo.png" alt="IADC Student Chapter" />
              </div>
            </div>
            <div className="guest-grid">
              <div><span>CHIEF GUEST</span><b>(INAUGURAL)</b><strong>To be announced</strong></div>
              <div><span>GUEST OF HONOR</span><strong>To be announced</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-strip">
        <div className="pill-row">
          <span>● ONGC</span><span>● GAIL (India)</span><span>● HPCL</span><span>● Sun Petrochemicals</span>
        </div>
        <p className="strip-label">SPONSORS</p>
        <div className="pill-row media"><span>● Media Partner 1</span><span>● Media Partner 2</span></div>
        <p className="strip-label">MEDIA PARTNERS</p>
        <div className="announcement">
          <b>Registration Starts: August 20th, 2026</b>
          <b>Sponsorship &amp; Exhibition Opportunities Open</b>
        </div>
        <div className="quick-actions">
          <a href="#dates">Event Schedule</a>
          <a href="/ICPHD-2026-Preview.pdf" target="_blank" rel="noreferrer">Download Brochure</a>
          <a href="/ICPHD-2026-Flyer.pdf" target="_blank" rel="noreferrer">Download Flyer</a>
        </div>
      </section>

      <section className="container about">
        <div>
          <SectionTitle title="About ICPHD 2026" />
          <p>Welcome to the 4th Edition of the International Conference on Petroleum, Hydrogen, and Decarbonization (ICPHD), organized by the Department of Petroleum Engineering and the Department of Chemical Engineering, Pandit Deendayal Energy University (PDEU), Gandhinagar.</p>
          <p>The conference brings together leading experts, researchers, academicians, industry professionals, and young researchers to explore cutting-edge developments in petroleum, hydrogen, and decarbonization.</p>
          <p>ICPHD focuses on advances, challenges, and opportunities shaping the future of the energy sector through technical presentations, panel sessions, and knowledge sharing.</p>
        </div>
        <div>
          <SectionTitle title="About the Departments" />
          <p>The conference is jointly organized by the Department of Petroleum Engineering and the Department of Chemical Engineering, representing complementary domains across the energy and process industries.</p>
          <p>The Petroleum Engineering department focuses on exploration, production, processing, and management of petroleum resources. Chemical Engineering addresses chemical processing, energy, petroleum refining, materials, and sustainable industrial applications.</p>
        </div>
        <div>
          <SectionTitle title="About the Institute" />
          <p>Pandit Deendayal Energy University (PDEU), located in Gandhinagar, Gujarat, is dedicated to education, research, innovation, and human resource development in the energy sector.</p>
          <p>Its ecosystem brings together schools, departments, laboratories, industry collaborations, and academic partnerships, providing an appropriate platform for a conference dedicated to petroleum, hydrogen, and decarbonization.</p>
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <SectionTitle eyebrow="FOURTH EDITION" title="Conference Highlights" />
          <div className="highlight-grid">
            {highlights.map(([img, title, sub]) => (
              <article className="highlight-card" key={title}>
                <img src={`/assets/${img}`} alt="" />
                <h3>{title}</h3>
                {sub && <p>{sub}</p>}
              </article>
            ))}
          </div>

          <div id="dates" className="anchor-section">
            <SectionTitle title="Important Dates" />
            <div className="dates-panel">
              <div className="dates-table">
                {dates.map(([date, label]) => (
                  <div className="date-row" key={date + label}>
                    <b>{date}</b><span>{label}</span>
                  </div>
                ))}
              </div>
              <img src="/assets/oil-pump.png" alt="Petroleum engineering display at the venue" />
            </div>
          </div>

          <div id="theme" className="anchor-section">
            <SectionTitle title="Conference Theme" />
            <div className="theme-grid">
              {themes.map((theme) => (
                <article className="theme-card" key={theme.title}>
                  <h3>{theme.title}</h3>
                  <ul>{theme.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="container registration anchor-section">
        <SectionTitle title="Registration & Abstract Submission" />
        <div className="registration-grid">
          <article>
            <h3>Registration</h3>
            <ul>
              <li>Delegates are advised to pay first and then complete the registration process.</li>
              <li>Payment via NEFT/SWIFT/Wire Transfer or UPI (Indian participants only).</li>
              <li>Registration form must be completed after payment for confirmation.</li>
              <li>Certificates issued only to registered participants.</li>
            </ul>
            <a className="primary-btn" href={registrationUrl}>Click here for Registration</a>
            <div className="fee-table">
              <div className="fee-head"><b>Category</b><b>Amount</b></div>
              {fees.map(([category, amount]) => (
                <div className="fee-row" key={category}><span>{category}</span><b>{amount}</b></div>
              ))}
            </div>
          </article>

          <article id="abstract">
            <h3>Abstract Submission</h3>
            <ul>
              <li><b>Title:</b> Times New Roman, 14pt, Bold</li>
              <li><b>Author:</b> Times New Roman, 12pt, Bold</li>
              <li><b>Affiliations:</b> Times New Roman, 11pt, Bold Italic</li>
              <li><b>Abstract:</b> Times New Roman, 12pt, 300–400 words</li>
              <li><b>Keywords:</b> Times New Roman, 11pt, Italic, 3–5 keywords</li>
              <li><b>Format:</b> MS Word-compatible file, A4 Portrait, 1.5 spacing</li>
              <li>Selected abstracts may be offered publication in a reputed journal/proceedings.</li>
            </ul>
            <a className="primary-btn" href={abstractUrl}>Abstract Submission Link</a>
            <div className="bank-placeholder">
              <b>Bank Details</b>
              <span>Upload official bank details here when finalized.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="soft venue">
        <div className="container">
          <SectionTitle title="Venue" />
          <div className="venue-grid">
            <article className="venue-copy">
              <h3>Pandit Deendayal Energy University Campus</h3>
              <p className="address">Knowledge Corridor, Raysan Village, PDPU Rd, Gandhinagar, Raysan, Gujarat 382426</p>
              <p>ICPHD 2026 will be held at Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat, India. Located in Raisan, on the outskirts of Gandhinagar, the university is well connected to Ahmedabad and other major cities by road, rail, and air.</p>
              <a className="secondary-btn" href="https://www.google.com/maps/search/?api=1&query=Pandit+Deendayal+Energy+University+Gandhinagar" target="_blank" rel="noreferrer">Open in Google Maps</a>
            </article>
            <img className="venue-map" src="/assets/venue-map.png" alt="Map showing PDEU venue" />
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <div className="container countdown-wrap">
          <div>
            <p className="eyebrow">DECEMBER 11–13, 2026</p>
            <h2>See you at ICPHD 2026</h2>
            <p>Driving innovation, enabling transition and shaping the energy future.</p>
          </div>
          <Countdown />
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-top">
          <div className="footer-title">
            <h2>Contact</h2>
            <p>ICPHD 2026 — Fourth Edition</p>
          </div>
          {contacts.map(([name, role, email, phone]) => (
            <div className="contact-card" key={email}>
              <h3>{name}</h3>
              <p>{role}</p>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            </div>
          ))}
          <img className="footer-seal" src="/assets/pdeu-seal.png" alt="PDEU seal" />
        </div>
        <div className="copyright">COPYRIGHT- ICPHD 2026 — Fourth Edition &nbsp;|&nbsp; December 11–13, 2026 &nbsp;|&nbsp; PDEU, Raysan Gandhinagar, 382009</div>
      </footer>
    </main>
  );
}
