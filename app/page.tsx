const embeddedStyles = ":root {\n  --navy: #061d39;\n  --navy-2: #0b2c52;\n  --blue: #1b6fae;\n  --blue-light: #62b9ec;\n  --ink: #10263e;\n  --muted: #607287;\n  --paper: #f5f8fb;\n  --white: #fff;\n  --line: rgba(8, 42, 76, 0.16);\n  --shadow: 0 18px 45px rgba(4, 26, 48, 0.12);\n}\n\n* { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; }\nbody {\n  margin: 0;\n  color: var(--ink);\n  background: var(--paper);\n  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  line-height: 1.6;\n}\na { color: inherit; text-decoration: none; }\nimg { display: block; max-width: 100%; }\nbutton { font: inherit; }\n\n.container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }\n.anchor-section { scroll-margin-top: 88px; }\n\n/* NAVIGATION */\n.nav {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  min-height: 76px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 8px 28px;\n  background: rgba(5, 26, 50, 0.97);\n  color: var(--white);\n  border-bottom: 1px solid rgba(255,255,255,.12);\n  backdrop-filter: blur(14px);\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  flex: 0 0 auto;\n  font-size: 1.12rem;\n  font-weight: 800;\n  letter-spacing: .04em;\n}\n.brand img { width: 54px; height: 54px; object-fit: contain; }\n.brand b { color: var(--blue-light); }\n.desktop-nav {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 18px;\n}\n.desktop-nav a {\n  font-size: 1rem;\n  font-weight: 650;\n  letter-spacing: .035em;\n  opacity: .92;\n  transition: color .2s ease, opacity .2s ease;\n}\n.desktop-nav a:hover { color: var(--blue-light); opacity: 1; }\n.menu-toggle { display: none; border: 0; background: transparent; color: white; padding: 8px; cursor: pointer; }\n.menu-toggle span { display: block; width: 28px; height: 2px; margin: 5px 0; background: currentColor; border-radius: 10px; }\n.mobile-menu { display: none; }\n\n/* HERO */\n.hero {\n  position: relative;\n  min-height: 850px;\n  overflow: hidden;\n  color: white;\n  background: var(--navy);\n}\n.hero-bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(3, 29, 57, .68), rgba(4, 43, 80, .76));\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n  width: min(1240px, calc(100% - 56px));\n  margin: 0 auto;\n  padding: 30px 0 38px;\n}\n.top-logos {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  min-height: 132px;\n}\n.hero-left-logos {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.pdeu-main-logo {\n  width: min(570px, 64vw);\n  height: 112px;\n  object-fit: contain;\n  object-position: left center;\n  background: transparent;\n}\n.hero-soet-logo {\n  width: 96px;\n  height: 96px;\n  object-fit: contain;\n  object-position: center;\n  flex: 0 0 96px;\n  border-radius: 8px;\n}\n.hero-icphd-logo {\n  width: 132px;\n  height: 132px;\n  object-fit: contain;\n  object-position: center;\n  flex: 0 0 132px;\n}\n.hero-title-block {\n  max-width: 1120px;\n  margin: 24px auto 0;\n  text-align: center;\n  letter-spacing: .065em;\n}\n.edition {\n  margin: 0 0 5px;\n  color: #77aee0;\n  font-weight: 800;\n  font-size: clamp(.95rem, 1.7vw, 1.2rem);\n  letter-spacing: .22em;\n}\n.hero-title-block h1 {\n  margin: 0;\n  font-size: clamp(1.7rem, 3vw, 2.5rem);\n  line-height: 1.15;\n  font-weight: 760;\n  letter-spacing: .075em;\n}\n.hero-title-block h2 {\n  margin: 9px 0 8px;\n  color: #61b8ec;\n  font-size: clamp(1.55rem, 3vw, 2.5rem);\n  line-height: 1.15;\n  font-weight: 850;\n  letter-spacing: .065em;\n  white-space: nowrap;\n}\n.hero-title-block h2 span { color: #d8efff; }\n.tagline {\n  margin: 0;\n  font-size: clamp(1.02rem, 2vw, 1.42rem);\n  font-weight: 720;\n  letter-spacing: .085em;\n}\n.date-pill {\n  width: fit-content;\n  max-width: 100%;\n  margin: 28px auto 0;\n  padding: 12px 26px;\n  border: 1px solid rgba(96, 189, 245, .7);\n  border-radius: 999px;\n  background: rgba(5, 38, 72, .82);\n  font-size: clamp(.9rem, 1.5vw, 1.05rem);\n  font-weight: 650;\n  letter-spacing: .035em;\n}\n.date-pill span { opacity: .7; margin: 0 6px; }\n.hero-lower { margin-top: 42px; }\n.organizers-panel { max-width: 1180px; margin: 0 auto; }\n.org-block, .association-block { width: 100%; }\n.org-block { margin-bottom: 28px; }\n.mini-label {\n  margin: 0 0 8px;\n  font-size: .88rem;\n  font-weight: 850;\n  letter-spacing: .18em;\n  color: #e8f6ff;\n}\n.org-copy {\n  max-width: 1020px;\n  margin: 0;\n  color: #65baf0;\n  font-size: clamp(1.02rem, 1.7vw, 1.25rem);\n  line-height: 1.42;\n  font-weight: 750;\n  letter-spacing: .035em;\n}\n.association-logos {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  align-items: center;\n  justify-items: center;\n  gap: 10px;\n  width: 100%;\n  margin-top: 10px;\n}\n.association-slot {\n  width: 100%;\n  height: 116px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n.association-slot img {\n  width: 154px;\n  height: 104px;\n  object-fit: contain;\n  object-position: center;\n  margin: 0;\n}\n.association-fipi img { width: 128px; }\n\n/* STRIP */\n.dark-strip {\n  background: var(--navy);\n  color: white;\n  padding: 16px 24px;\n}\n.announcement, .quick-actions { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 18px; }\n.announcement { font-size: .88rem; letter-spacing: .035em; }\n.quick-actions { justify-content: flex-start; margin-top: 10px; }\n.quick-actions a { padding: 7px 14px; border: 1px solid rgba(255,255,255,.22); border-radius: 999px; font-size: .82rem; }\n\n/* GENERAL SECTIONS */\n.about { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; padding-top: 72px; padding-bottom: 72px; }\n.about > div { min-width: 0; }\n.about p { color: #43586d; font-size: .97rem; }\n.section-title { margin-bottom: 24px; }\n.section-title .eyebrow { margin: 0 0 3px; color: var(--blue); font-weight: 850; letter-spacing: .18em; font-size: .78rem; }\n.section-title h2 { margin: 0; color: var(--navy); font-size: clamp(1.7rem, 3vw, 2.35rem); line-height: 1.1; letter-spacing: .02em; }\n.section-title > span { display: block; width: 58px; height: 3px; margin-top: 10px; background: var(--blue); border-radius: 4px; }\n.soft { background: #edf4f9; }\n.conference-content { padding: 72px 0; }\n.content-section + .content-section { margin-top: 84px; }\n\n/* HIGHLIGHTS */\n.highlight-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }\n.highlight-card {\n  text-align: center;\n  padding: 18px 10px 10px;\n}\n.highlight-icon {\n  width: 126px;\n  height: 126px;\n  margin: 0 auto 16px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--navy-2);\n  box-shadow: 0 10px 24px rgba(4, 31, 59, .14);\n  overflow: hidden;\n}\n.highlight-icon img {\n  width: 98px;\n  height: 98px;\n  object-fit: contain;\n  object-position: center;\n  margin: 0;\n  transform: none;\n}\n.highlight-icon.networking-highlight img { width: 92px; height: 92px; }\n.highlight-card h3 { margin: 0; color: var(--navy); font-size: 1rem; line-height: 1.25; font-weight: 850; }\n.highlight-card p { margin: 5px 0 0; color: #52677b; font-size: .92rem; line-height: 1.3; font-weight: 650; }\n\n/* DATES */\n.dates-panel { background: white; border-radius: 22px; box-shadow: var(--shadow); padding: 20px; }\n.dates-layout { display: grid; grid-template-columns: 1.25fr .75fr; gap: 24px; align-items: stretch; }\n.dates-table { border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }\n.date-row { display: grid; grid-template-columns: 190px 1fr; border-bottom: 1px solid var(--line); }\n.date-row:last-child { border-bottom: 0; }\n.date-row > * { padding: 13px 15px; }\n.date-row b { background: #eef5fa; color: var(--navy); }\n.date-row span { color: #455d72; }\n.dates-photo-wrap { min-height: 100%; border-radius: 16px; overflow: hidden; }\n.dates-photo { width: 100%; height: 100%; min-height: 360px; object-fit: cover; }\n\n/* THEME */\n.theme-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }\n.theme-card {\n  padding: 22px;\n  border: 2px solid #123f69;\n  box-shadow: 0 0 0 2px rgba(27,111,174,.08), 0 7px 20px rgba(7, 43, 76, .05);\n  border-radius: 18px;\n  background: white;\n  box-shadow: 0 7px 20px rgba(7, 43, 76, .05);\n}\n.theme-card h3 { margin: 0 0 10px; color: var(--navy); font-size: 1.05rem; line-height: 1.3; }\n.theme-card ul { margin: 0; padding-left: 20px; color: #50667a; }\n.theme-card li + li { margin-top: 5px; }\n\n/* REGISTRATION */\n.registration { padding-top: 72px; padding-bottom: 72px; }\n.registration-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }\n.registration-grid article { background: white; border: 1px solid var(--line); border-radius: 20px; padding: 26px; box-shadow: var(--shadow); }\n.registration-grid h3 { margin-top: 0; color: var(--navy); font-size: 1.35rem; }\n.registration-grid li { color: #4b6175; }\n.primary-btn { display: inline-block; margin-top: 12px; padding: 12px 18px; border-radius: 10px; background: var(--navy); color: white; font-weight: 800; }\n.fee-table { margin-top: 24px; border: 1px solid #9fb0c0; border-radius: 10px; overflow: hidden; }\n.fee-head, .fee-row { display: grid; grid-template-columns: 1.4fr .8fr; }\n.fee-head > *, .fee-row > * { padding: 12px 14px; border-right: 1px solid #7f95aa; border-bottom: 1px solid #7f95aa; }\n.fee-head > *:last-child, .fee-row > *:last-child { border-right: 0; }\n.fee-row:last-child > * { border-bottom: 0; }\n.fee-head { background: #eaf2f8; color: var(--navy); }\n.fee-head b:first-child { text-align: center; }\n.fee-head b:last-child { text-align: center; }\n.fee-row b { text-align: center; }\n.fee-row span { text-align: left; color: #344d63; }\n.fee-row b { color: #223e58; }\n.bank-placeholder { margin-top: 24px; padding: 16px; border-left: 4px solid var(--blue); background: #edf5fa; display: grid; gap: 3px; }\n.bank-placeholder b { color: var(--navy); }\n.bank-placeholder span { color: #52687c; }\n\n/* VENUE */\n.venue { padding: 72px 0; }\n.venue-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }\n.venue-copy, .maps-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow); }\n.venue-building { width: 100%; height: 290px; object-fit: cover; }\n.venue-copy-inner { padding: 24px; }\n.venue-copy-inner h3 { color: var(--navy); }\n.address { color: #5c7184; font-weight: 650; }\n.maps-card { color: white; background: var(--navy); }\n.map-preview { height: 100%; min-height: 380px; }\n.map-preview img { width: 100%; height: 100%; object-fit: cover; }\n.map-card-footer { padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }\n.map-card-footer span { font-size: .75rem; letter-spacing: .16em; color: #9fc5e2; }\n.map-card-footer strong { color: white; }\n\n/* COUNTDOWN */\n.countdown-section { background: var(--navy); color: white; padding: 54px 0; }\n.countdown-wrap { display: flex; align-items: center; justify-content: space-between; gap: 30px; }\n.countdown-wrap h2 { margin: 5px 0; font-size: clamp(1.8rem, 3vw, 2.5rem); }\n.countdown-wrap > div:first-child p:last-child { color: #b7cce0; }\n.countdown { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; min-width: 420px; }\n.countdown > div { min-width: 90px; padding: 12px 10px; border: 1px solid rgba(255,255,255,.18); border-radius: 12px; text-align: center; background: rgba(255,255,255,.04); }\n.countdown strong { display: block; font-size: 1.75rem; }\n.countdown span { color: #9fb8cf; font-size: .75rem; letter-spacing: .08em; text-transform: uppercase; }\n\n/* FOOTER */\nfooter { background: #041a31; color: white; }\n.footer-top { display: grid; grid-template-columns: 1.2fr repeat(3, 1fr); gap: 26px; padding: 54px 0; align-items: start; }\n.footer-title h2 { margin: 0; font-size: 2rem; }\n.footer-title p { margin: 2px 0 12px; color: #a8bfd4; }\n.footer-seal-mini { width: 72px; height: 72px; object-fit: contain; margin-top: 12px; }\n.contact-card h3 { margin: 0 0 2px; font-size: 1rem; }\n.contact-card p { margin: 0 0 7px; color: #9db6cb; }\n.contact-card a { display: block; color: #d9e9f6; font-size: .9rem; overflow-wrap: anywhere; }\n.copyright { padding: 16px 24px; border-top: 1px solid rgba(255,255,255,.1); text-align: center; color: #87a3ba; font-size: .76rem; letter-spacing: .04em; }\n\n/* SCROLL ANIMATION */\n.reveal, .reveal-left, .reveal-right, .reveal-scale { opacity: 0; transition: opacity .75s ease, transform .75s ease; }\n.reveal { transform: translateY(26px); }\n.reveal-left { transform: translateX(-28px); }\n.reveal-right { transform: translateX(28px); }\n.reveal-scale { transform: scale(.92); }\n.reveal.is-visible, .reveal-left.is-visible, .reveal-right.is-visible, .reveal-scale.is-visible { opacity: 1; transform: none; }\n.reveal-delay-1 { transition-delay: .08s; }\n.reveal-delay-2 { transition-delay: .16s; }\n.reveal-delay-3 { transition-delay: .24s; }\n.reveal-delay-4 { transition-delay: .32s; }\n.reveal-delay-5 { transition-delay: .4s; }\n\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }\n}\n\n/* TABLET */\n@media (max-width: 1050px) {\n  .desktop-nav { gap: 15px; }\n  .desktop-nav a { font-size: .88rem; }\n  .pdeu-main-logo { width: min(440px, 55vw); }\n  .hero-soet-logo { width: 86px; height: 86px; flex-basis: 86px; }\n  .hero-icphd-logo { width: 112px; height: 112px; flex-basis: 112px; }\n  .highlight-grid { grid-template-columns: repeat(3, 1fr); }\n  .about { grid-template-columns: 1fr; }\n}\n\n/* MOBILE */\n@media (max-width: 720px) {\n  .container { width: min(100% - 30px, 600px); }\n  .nav { min-height: 68px; padding: 8px 15px; }\n  .brand { font-size: .98rem; }\n  .brand img { width: 48px; height: 48px; }\n  .desktop-nav { display: none; }\n  .menu-toggle { display: block; margin-left: auto; }\n  .mobile-menu { position: fixed; inset: 68px 0 0; z-index: 999; display: block; background: rgba(4, 25, 48, .99); padding: 18px 15px 30px; transform: translateY(-110%); transition: transform .3s ease; }\n  .mobile-menu.is-open { transform: translateY(0); }\n  .mobile-menu nav { display: grid; gap: 8px; }\n  .mobile-menu a { padding: 16px 18px; border-radius: 10px; color: white; font-size: 1.02rem; font-weight: 750; letter-spacing: .03em; background: rgba(255,255,255,.04); }\n\n  .hero { min-height: auto; }\n  .hero-overlay { background: linear-gradient(180deg, rgba(3,29,57,.72), rgba(4,43,80,.82)); }\n  .hero-inner { width: min(100% - 28px, 620px); padding: 18px 0 30px; }\n  .top-logos { min-height: 92px; gap: 10px; align-items: center; }\n  .hero-left-logos { gap: 7px; }\n  .pdeu-main-logo { width: min(235px, 60vw); height: 68px; }\n  .hero-soet-logo { width: 58px; height: 62px; flex-basis: 58px; border-radius: 5px; }\n  .hero-icphd-logo { width: 72px; height: 72px; flex-basis: 72px; }\n  .hero-title-block { margin-top: 20px; letter-spacing: .045em; }\n  .edition { font-size: .72rem; letter-spacing: .18em; }\n  .hero-title-block h1 { font-size: 1.3rem; }\n  .hero-title-block h2 { font-size: 1.18rem; white-space: normal; }\n  .tagline { font-size: .88rem; letter-spacing: .035em; }\n  .date-pill { margin-top: 18px; padding: 10px 14px; font-size: .8rem; line-height: 1.35; }\n  .date-pill span { display: none; }\n  .hero-lower { margin-top: 30px; }\n  .org-block { margin-bottom: 22px; }\n  .mini-label { font-size: .72rem; letter-spacing: .15em; }\n  .org-copy { font-size: .91rem; line-height: 1.55; }\n  .association-logos { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }\n  .association-slot { height: 82px; }\n  .association-slot img { width: 132px; height: 80px; }\n  .association-fipi img { width: 108px; }\n\n  .announcement, .quick-actions { width: 100%; flex-direction: column; align-items: flex-start; }\n  .quick-actions { gap: 8px; }\n  .quick-actions a { width: 100%; text-align: center; }\n\n  .about { padding-top: 52px; padding-bottom: 52px; gap: 42px; }\n  .conference-content, .registration, .venue { padding-top: 54px; padding-bottom: 54px; }\n  .highlight-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .highlight-card { padding: 8px 4px; }\n  .highlight-icon { width: 104px; height: 104px; }\n  .highlight-icon img { width: 80px; height: 80px; }\n  .highlight-icon.networking-highlight img { width: 86px; height: 86px; }\n\n  .dates-layout, .registration-grid, .venue-grid, .theme-grid { grid-template-columns: 1fr; }\n  .date-row { grid-template-columns: 125px 1fr; }\n  .date-row > * { padding: 10px 9px; font-size: .83rem; }\n  .dates-photo { min-height: 260px; }\n  .map-preview { min-height: 300px; }\n  .map-card-footer { align-items: flex-start; flex-direction: column; gap: 4px; }\n\n  .countdown-wrap { flex-direction: column; align-items: flex-start; }\n  .countdown { width: 100%; min-width: 0; }\n  .countdown > div { min-width: 0; }\n  .countdown strong { font-size: 1.35rem; }\n\n  .footer-top { grid-template-columns: 1fr; padding: 42px 0; }\n}\n\n/* FINAL LOGO + LAYOUT OVERRIDES */\n.hero-left-logos {\n  display: inline-flex;\n  flex: 0 1 auto;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  width: fit-content;\n}\n.pdeu-main-logo {\n  width: min(540px, 56vw);\n  height: 104px;\n  flex: 0 1 auto;\n}\n.hero-soet-logo {\n  width: 88px;\n  height: 88px;\n  flex: 0 0 88px;\n}\n.top-logos {\n  align-items: center;\n}\n.hero-icphd-logo {\n  width: 132px;\n  height: 132px;\n  flex: 0 0 132px;\n  margin-left: auto;\n}\n\n/* Use the supplied transparent/clean logo files. Screen blending hides any\n   residual pure-black matte without altering the layout. */\n.pdeu-main-logo,\n.association-slot img {\n  mix-blend-mode: screen;\n}\n\n.association-logos {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 8px;\n}\n.association-slot {\n  min-width: 0;\n  height: 116px;\n}\n.association-slot img {\n  width: min(100%, 154px);\n  height: 108px;\n  object-fit: contain;\n}\n.association-fipi img {\n  width: min(100%, 128px);\n}\n\n.highlight-icon {\n  display: grid;\n  place-items: center;\n}\n.highlight-icon img {\n  width: 98px;\n  height: 98px;\n  object-fit: contain;\n  object-position: center;\n}\n.highlight-icon.networking-highlight img {\n  width: 92px;\n  height: 92px;\n}\n\n/* Full table grid: vertical + horizontal rules remain visible for every cell. */\n.fee-table {\n  border: 1px solid #7f95aa;\n}\n.fee-head > *,\n.fee-row > * {\n  border-right: 1px solid #7f95aa;\n  border-bottom: 1px solid #7f95aa;\n}\n.fee-head > *:last-child,\n.fee-row > *:last-child {\n  border-right: 0;\n}\n.fee-row:last-child > * {\n  border-bottom: 0;\n}\n.fee-head b:first-child,\n.fee-head b:last-child {\n  text-align: center;\n}\n.fee-row span {\n  text-align: left;\n}\n.fee-row b {\n  text-align: center;\n}\n\n@media (max-width: 1050px) {\n  .pdeu-main-logo {\n    width: min(430px, 52vw);\n    height: 92px;\n  }\n  .hero-soet-logo {\n    width: 78px;\n    height: 78px;\n    flex-basis: 78px;\n  }\n  .hero-icphd-logo {\n    width: 110px;\n    height: 110px;\n    flex-basis: 110px;\n  }\n}\n\n@media (max-width: 720px) {\n  .top-logos {\n    gap: 7px;\n    min-height: 82px;\n  }\n  .hero-left-logos {\n    gap: 5px;\n    flex: 0 1 auto;\n  }\n  .pdeu-main-logo {\n    width: min(205px, 55vw);\n    height: 58px;\n  }\n  .hero-soet-logo {\n    width: 52px;\n    height: 56px;\n    flex-basis: 52px;\n  }\n  .hero-icphd-logo {\n    width: 68px;\n    height: 68px;\n    flex-basis: 68px;\n  }\n  .association-logos {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 4px;\n  }\n  .association-slot {\n    height: 76px;\n  }\n  .association-slot img {\n    width: 100%;\n    height: 70px;\n  }\n  .association-fipi img {\n    width: 92%;\n  }\n  .highlight-icon {\n    width: 100px;\n    height: 100px;\n  }\n  .highlight-icon img {\n    width: 78px;\n    height: 78px;\n  }\n  .highlight-icon.networking-highlight img {\n    width: 86px;\n    height: 86px;\n  }\n}\n\n/* FINAL RESTORATION: match the original first-PDF quick-action strip */\n.dark-strip {\n  background: #102f56;\n  padding: 16px 24px 24px;\n}\n.announcement {\n  width: min(1180px, calc(100% - 48px));\n  min-height: 31px;\n  padding: 0 18px;\n  box-sizing: border-box;\n  background: #f4f7fa;\n  color: #173554;\n  border-radius: 5px;\n  font-size: .78rem;\n  letter-spacing: .01em;\n}\n.quick-actions {\n  width: min(1180px, calc(100% - 48px));\n  margin: 10px auto 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 8px;\n  justify-content: stretch;\n}\n.quick-actions a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 35px;\n  padding: 7px 14px;\n  border: 2px solid #fff;\n  border-radius: 999px;\n  color: #fff;\n  background: transparent;\n  font-size: .82rem;\n  font-weight: 800;\n  text-align: center;\n}\n.quick-actions a:nth-child(2) {\n  border-color: #3b7db7;\n  border-radius: 0;\n  background: #3b7db7;\n}\n\n/* Center the conference section headings and their accent rule. */\n.section-title {\n  text-align: center;\n}\n.section-title > span {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* Highlight cards must visibly retain their boxes. */\n.highlight-card {\n  border: 1px solid rgba(18,63,105,.20);\n  border-radius: 14px;\n  background: #fff;\n  padding: 18px 10px 14px;\n  box-shadow: 0 8px 22px rgba(4,31,59,.08);\n}\n.highlight-grid { gap: 18px; }\n\n/* Clean, consistently sized association logos. */\n.pdeu-main-logo,\n.association-slot img {\n  mix-blend-mode: normal;\n}\n.association-logos {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.association-slot {\n  height: 124px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.association-slot img {\n  width: 164px;\n  height: 112px;\n  object-fit: contain;\n  object-position: center;\n}\n.association-fipi img { width: 132px; }\n/* SPE is visually heavier, so keep it a little smaller while preserving equal slots. */\n.association-slot:nth-child(2) img { width: 158px; height: 108px; }\n\n/* Registration fee table: bold category labels and clear full grid. */\n.fee-table { border-collapse: collapse; }\n.fee-head > *, .fee-row > * {\n  border-right: 1px solid #7f95aa;\n  border-bottom: 1px solid #7f95aa;\n}\n.fee-row span { font-weight: 800; text-align: left; }\n.fee-row b { text-align: center; font-weight: 800; }\n\n/* Restore the blue Google Maps action footer appearance. */\n.maps-card { background: #0d3159; }\n.map-card-footer {\n  background: #0d3159;\n  padding: 15px 20px 17px;\n}\n.map-card-footer strong {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 36px;\n  padding: 0 16px;\n  border: 1px solid #4e9bd5;\n  border-radius: 7px;\n  background: #236fa8;\n  color: #fff;\n  font-weight: 800;\n}\n\n@media (max-width: 720px) {\n  .announcement, .quick-actions { width: 100%; }\n  .announcement { min-height: 40px; }\n  .quick-actions { grid-template-columns: 1fr; gap: 8px; }\n  .quick-actions a:nth-child(2) { border-radius: 999px; }\n  .association-logos { gap: 8px; }\n  .association-slot { height: 86px; }\n  .association-slot img { width: 100%; height: 80px; }\n  .association-fipi img { width: 96%; }\n  .association-slot:nth-child(2) img { width: 94%; height: 76px; }\n  .highlight-card { padding: 14px 6px 12px; }\n}\n\n/* FINAL MOBILE POLISH + VENUE RESTORATION */\nhtml, body { overflow-x: hidden; }\n\n.venue-grid {\n  align-items: stretch;\n}\n.venue-copy,\n.maps-card {\n  min-width: 0;\n}\n.venue-building {\n  height: 235px;\n}\n.venue-copy-inner {\n  padding: 28px;\n}\n.venue-copy-inner h3 {\n  margin: 0 0 18px;\n  font-size: 1.7rem;\n  line-height: 1.2;\n}\n.venue-copy-inner p {\n  margin: 0 0 18px;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.map-preview {\n  height: 400px;\n  min-height: 0;\n}\n.map-card-footer {\n  min-height: 82px;\n  flex-direction: row;\n  align-items: center;\n  padding: 15px 22px;\n  background: #0d3159;\n}\n.map-card-footer span {\n  white-space: nowrap;\n}\n.map-card-footer strong {\n  min-height: 38px;\n  white-space: nowrap;\n}\n\n@media (max-width: 720px) {\n  .hero-inner {\n    width: calc(100% - 24px);\n    padding-top: 14px;\n  }\n\n  /* Keep PDEU + SOET together on the left and ICPHD on the right.\n     This prevents the three hero logos from colliding on narrow screens. */\n  .top-logos {\n    width: 100%;\n    min-height: 76px;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    column-gap: 6px;\n    align-items: center;\n  }\n  .hero-left-logos {\n    width: max-content;\n    max-width: 100%;\n    gap: 2px;\n    flex-wrap: nowrap;\n  }\n  .pdeu-main-logo {\n    width: clamp(145px, 48vw, 190px);\n    height: 54px;\n    flex: 0 1 auto;\n  }\n  .hero-soet-logo {\n    width: 48px;\n    height: 52px;\n    flex: 0 0 48px;\n    border-radius: 3px;\n  }\n  .hero-icphd-logo {\n    width: 62px;\n    height: 62px;\n    flex: 0 0 62px;\n    margin-left: 0;\n  }\n\n  .hero-title-block {\n    max-width: 100%;\n    margin-top: 18px;\n    letter-spacing: .035em;\n  }\n  .hero-title-block h1 {\n    font-size: clamp(1.22rem, 6vw, 1.5rem);\n    letter-spacing: .04em;\n  }\n  .hero-title-block h2 {\n    font-size: clamp(1.08rem, 5.2vw, 1.28rem);\n    line-height: 1.2;\n    letter-spacing: .025em;\n    white-space: normal;\n    overflow-wrap: anywhere;\n  }\n  .tagline {\n    font-size: .86rem;\n    line-height: 1.45;\n  }\n\n  .hero-lower {\n    margin-top: 28px;\n  }\n  .org-copy {\n    font-size: .88rem;\n    line-height: 1.5;\n    overflow-wrap: anywhere;\n  }\n\n  .association-logos {\n    width: 100%;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 2px;\n  }\n  .association-slot {\n    height: 78px;\n    min-width: 0;\n  }\n  .association-slot img {\n    width: 100%;\n    max-width: 100%;\n    height: 72px;\n    object-fit: contain;\n  }\n  .association-fipi img {\n    width: 96%;\n  }\n  .association-slot:nth-child(2) img {\n    width: 92%;\n    height: 70px;\n  }\n\n  .dark-strip {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n  .announcement {\n    width: 100%;\n    text-align: center;\n    justify-content: center;\n  }\n  .quick-actions {\n    width: 100%;\n  }\n\n  .venue {\n    padding-top: 54px;\n    padding-bottom: 54px;\n  }\n  .venue-grid {\n    grid-template-columns: 1fr;\n    gap: 18px;\n  }\n  .venue-building {\n    height: 205px;\n  }\n  .venue-copy-inner {\n    padding: 22px;\n  }\n  .venue-copy-inner h3 {\n    font-size: 1.42rem;\n  }\n  .venue-copy-inner p {\n    font-size: .92rem;\n    line-height: 1.55;\n  }\n  .map-preview {\n    height: 300px;\n  }\n  .map-card-footer {\n    min-height: 70px;\n    flex-direction: row;\n    padding: 12px 15px;\n    gap: 8px;\n  }\n  .map-card-footer span {\n    font-size: .68rem;\n    letter-spacing: .11em;\n  }\n  .map-card-footer strong {\n    min-height: 34px;\n    padding: 0 10px;\n    font-size: .8rem;\n  }\n}\n\n\n/* Final student chapter logo color/size refinement — desktop + mobile */\n.association-slot:nth-child(3) img { width: 158px; height: 108px; object-fit: contain; }\n.association-slot:nth-child(4) img { width: 150px; height: 108px; object-fit: contain; }\n@media (max-width: 900px) {\n  .association-slot:nth-child(3) img { width: 96%; height: 82px; }\n  .association-slot:nth-child(4) img { width: 92%; height: 82px; }\n}\n";

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
  ['panel-transparent.png', 'Panel Discussions', 'by Industry Experts & Academicians'],
  ['keynote-transparent.png', 'Keynote Sessions', ''],
  ['papers-transparent.png', 'Paper & Poster', 'Presentations'],
  ['award-transparent.png', 'Best Paper & Best Poster', 'Presentation Awards'],
  ['networking-cropped.png', 'Exhibition, Networking', '& Branding'],
];

const dates = [
  ['20 Aug 2026', 'Abstract Submission Starts'],
  ['15 Oct 2026', 'Abstract Submission Closes (extended)'],
  ['15 Oct 2026', 'Notification of Acceptance/Rejection (on or before, extended)'],
  ['20 Nov 2026', 'Final Registration Deadline for Authors/Delegates'],
  ['To Be Announced', 'Pre-conference Workshop'],
  ['11 Dec 2026', 'Inauguration'],
  ['13 Dec 2026', 'Valedictory'],
  ['To Be Announced', 'Full Paper Submission (on call basis)'],
];

const themes = [
  { title: 'Decarbonisation and Global Sustainability', items: ['Decarbonisation and Climate Technologies', 'Carbon Capture, Storage, and Utilisation', 'Methane Management and Mitigation', 'Storage Resource Management', 'Electrification and Decarbonisation of Existing Operations', 'Low-Carbon Petroleum Products: Advances and Innovations'] },
  { title: 'Hydrogen: Production, Storage, Transportation and Utilization', items: ['Hydrogen Production', 'Hydrogen Storage', 'Hydrogen Transportation', 'Hydrogen Utilization', 'Hydrogen Policy, Economics and Safety'] },
  { title: 'Petroleum Geoscience', items: ['Petroleum Geochemistry and Geology', 'Sedimentology and Stratigraphy', 'Structural Geology and Basin Analysis', 'Core Sampling & Characterisation'] },
  { title: 'Geophysics and Geotechnical Engineering', items: ['Seismic Exploration and Interpretation', 'Gravity and Magnetics', 'Borehole Geophysics and Logging Techniques', 'Near Surface Geophysics', 'Rock Mechanics', 'Remote Sensing and GIS in Geosciences'] },
  { title: 'Efficient Drilling and Completion Technologies', items: ['Drilling Technology', 'Wells Construction and Completion Technology', 'Cementing and Drilling Fluids', 'HPHT and Deep-Water drilling'] },
  { title: 'Reservoir Engineering and Technologies', items: ['Reservoir Characterisation and Modelling', 'Reservoir Simulation', 'Reservoir Modelling/ Surveillance Technology', 'Oil and Gas Field Development', 'Flow through Porous Media', 'Rock-fluid Interactions'] },
  { title: 'Petroleum Production Operations', items: ['Integrated Operations', 'Artificial Lift', 'High CO2 and Contaminated Fields', 'Production Maintenance and Chemistry', 'Subsea Production and Processing System', 'Water Shut-off operations', 'Sustainable Produced Water Management', 'Workover & Well Stimulations'] },
  { title: 'Flow Assurance', items: ['Fluid Characterization and Transport', 'CO2 transport', 'High CO2 and Contaminated Fields', 'Asphaltenes and Wax Mitigation', 'Crude Oil Emulsification/Demulsification', 'Scale Mitigation', 'Corrosion Management'] },
  { title: 'Improved or Enhanced Oil Recovery (IOR/EOR)', items: ['Thermal EOR', 'Chemical EOR', 'Gas Injection Techniques', 'Microbial EOR', 'Emerging Technologies in EOR'] },
  { title: 'Unconventional Energy Resources', items: ['CBM and Shale', 'Gas Hydrates', 'Geothermal Energy Resources and Utilization', 'Natural Hydrogen', 'Fracturing', 'Emerging Technologies'] },
  { title: 'Digitalization and Optimization of Oil & Gas Field operations', items: ['Data Science/Big Data', 'Automation and Digital Operation', 'Remote Operations', 'AI and Machine Learning', 'Smart Field Technologies', 'Digital Operations/Oilfields', 'Computational Fluid dynamics'] },
  { title: 'Health, Safety, Environment (HSE) and Social Responsibility', items: ['Operational HSE', 'Minimising Environmental Discharge', 'Environmental Stewardship and Sustainability', 'Emergency Response and Recovery', 'Sensors and Measurements for Environmental Hazards', 'Digitalisation in HSE - Remote Inspection, Automation'] },
  { title: 'Project Management, Economics, and Contracting', items: ['Project Economics', 'Field Development Planning, Strategies, and Methodologies', 'EPC Project Management', 'Governance, Policy and Regulations'] },
  { title: 'Energy Integration and Transition', items: ['Global Energy Transition Outlook and Future', 'Renewable Energy Integration in O&G', 'Policy Regulation and Market Trends', 'Investment, Economics, and Workforce Development'] },
];

const fees = [
  ['Industrial', '₹15,000 – 17,700'],
  ['Start-up Companies / R&D Labs', '₹15,000 – 17,700'],
  ['Academician', '₹8,000 – 9,440'],
  ['Post-Doc, PhD & PG Students', '₹8,000 – 9,440'],
  ['UG Students', '₹2,600 – 2,960'],
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
    <>
      <style dangerouslySetInnerHTML={{ __html: embeddedStyles }} />
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
              <img className="hero-soet-logo" src="/assets/soet-logo-exact.jpg" alt="School of Energy Technology" />
            </div>
            <img className="hero-icphd-logo" src="/assets/icphd-circle-clean-final.png" alt="ICPHD 2026 logo" />
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
                <p className="org-copy">Department of Petroleum Engineering with Department of Chemical Engineering and Department of Chemistry, Pandit Deendayal Energy University</p>
              </div>

              <div className="association-block">
                <p className="mini-label">IN ASSOCIATION WITH</p>
                <div className="association-logos">
                  <div className="association-slot association-fipi"><img src="/assets/fipi-association-clean-final.png" alt="FIPI" /></div>
                  <div className="association-slot"><img src="/assets/spe-association-clean-transparent.png" alt="SPE PDEU Student Chapter" /></div>
                  <div className="association-slot"><img src="/assets/seg-spg-eage-colored.png" alt="SEG, SPG and EAGE PDEU Student Chapters" /></div>
                  <div className="association-slot"><img src="/assets/iadc-association-colored.png" alt="IADC PDEU Student Chapter" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-strip reveal reveal-delay-1">
        <div className="announcement"><b>Registration Starts: August 20th, 2026</b><b>Sponsorship &amp; Exhibition Opportunities Open</b></div>
        <div className="quick-actions"><a href="#dates">Event Schedule</a><a href="/ICPHD-2026-Preview.pdf" target="_blank" rel="noreferrer">Download Brochure</a><a href="/ICPHD-2026-Flyer.jpg" target="_blank" rel="noreferrer">Download Flyer</a></div>
      </section>

      <section id="about" className="container about anchor-section reveal reveal-delay-2">
        <div><SectionTitle title="About ICPHD 2026" /><p>Welcome to the 4th Edition of the International Conference on Petroleum, Hydrogen, and Decarbonization (ICPHD), organized by the Department of Petroleum Engineering and the Department of Chemical Engineering, Pandit Deendayal Energy University (PDEU), Gandhinagar. The conference brings together leading experts, researchers, academicians, industry professionals, and young researchers to explore cutting-edge developments in petroleum, hydrogen, and decarbonization.</p><p>As we navigate an era marked by the urgent need for sustainable energy solutions, ICPHD focuses on the advances, challenges, and opportunities shaping the future of the energy sector, aiming to highlight recent innovations and address emerging challenges through technical presentations, panel sessions, and knowledge sharing.</p><p>The conference provides a platform for researchers, industry professionals, academicians, and students to exchange ideas, showcase their work, and foster meaningful collaborations toward a future powered by advanced technologies and a strong commitment to sustainability.</p></div>
        <div><SectionTitle title="About the Departments" /><p>The conference is jointly organized by the Department of Petroleum Engineering and the Department of Chemical Engineering, Pandit Deendayal Energy University. The two departments represent complementary domains that play a vital role in the energy and process industries, with a shared focus on innovation, research, technology development, and sustainable solutions.</p><p>The Department of Petroleum Engineering focuses on the exploration, production, processing, and management of petroleum resources while addressing the evolving challenges of the energy sector, encouraging students and researchers to develop innovative solutions across the upstream and broader energy industries.</p><p>The Department of Chemical Engineering combines fundamental sciences and engineering principles to address challenges across chemical processing, energy, petroleum refining, materials, and other industrial applications, promoting interdisciplinary research, industry collaboration, and sustainable development.</p><p>Together, the two departments provide a strong interdisciplinary platform for ICPHD, bringing together expertise from petroleum, chemical, hydrogen, energy, and decarbonization domains to facilitate the exchange of knowledge and encourage technological advancements for a sustainable energy future.</p></div>
        <div><SectionTitle title="About the Institute" /><p>Pandit Deendayal Energy University (PDEU), located in Gandhinagar, Gujarat, is a leading institution dedicated to education, research, innovation, and human resource development in the energy sector, bringing together engineering, science, technology, management, and other allied disciplines.</p><p>With its strong focus on energy education and research, PDEU aims to develop skilled professionals and researchers capable of addressing the evolving challenges of the global energy landscape, promoting innovation, interdisciplinary collaboration, industry interaction, and research-driven learning.</p><p>PDEU&apos;s academic and research ecosystem is supported by its schools, departments, laboratories, industry collaborations, and academic partnerships, providing an appropriate platform for a conference dedicated to petroleum, hydrogen, and decarbonization.</p><p>Through ICPHD, PDEU continues its commitment to bringing together academia, industry, researchers, and students to exchange knowledge, foster collaboration, and explore innovative pathways towards a cleaner, sustainable, and resilient energy future.</p></div>
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
            <div className="theme-grid">{themes.map(theme => <article className="theme-card" key={theme.title}><h3>{theme.title}</h3><ul>{theme.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
          </div>
        </div>
      </section>

      <section className="container registration anchor-section reveal reveal-delay-2" id="registration">
        <SectionTitle title="Registration & Abstract Submission" />
        <div className="registration-grid">
          <article><h3>Registration</h3><ul><li>Delegates are advised to pay first and then complete the registration process.</li><li>Payment via NEFT/SWIFT/Wire Transfer or UPI (Indian participants only).</li><li>Registration form must be completed after payment for confirmation.</li><li>Certificates issued only to registered participants.</li></ul><a className="primary-btn" href={registrationUrl}>Click here for Registration</a><div className="fee-table"><div className="fee-head"><b>Category</b><b>Amount</b></div>{fees.map(([category, amount]) => <div className="fee-row" key={category}><span>{category}</span><b>{amount}</b></div>)}</div></article>
          <article id="abstract"><h3>Abstract Submission</h3><ul><li><b>Title:</b> Times New Roman, 14pt, Bold</li><li><b>Author:</b> Times New Roman, 12pt, Bold</li><li><b>Affiliations:</b> Times New Roman, 11pt, Bold Italic</li><li><b>Abstract:</b> Times New Roman, 12pt, 300–400 words</li><li><b>Keywords:</b> Times New Roman, 11pt, Italic, 3–5 keywords</li><li><b>Format:</b> MS Word-compatible file, A4 Portrait, 1.5 spacing</li><li>Selected abstracts may be offered publication in a reputed journal/proceedings.</li></ul><a className="primary-btn" href={abstractUrl}>Abstract Submission Link</a><div className="bank-placeholder"><b>Bank Details</b><span>Official bank details will be available soon.</span></div></article>
        </div>
      </section>

      <section className="soft venue reveal reveal-delay-2">
        <div className="container"><SectionTitle title="Venue" /><div className="venue-grid"><article className="venue-copy"><img className="venue-building" src="/assets/pdeu-building-new.jpg" alt="PDEU campus building" /><div className="venue-copy-inner"><h3>Pandit Deendayal Energy University Campus</h3><p className="address">Knowledge Corridor, Raysan Village, PDPU Rd, Gandhinagar, Raysan, Gujarat 382426</p><p>ICPHD 2026 will be held at Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat, India. Located in Raisan, on the outskirts of Gandhinagar, the university is well connected to Ahmedabad and other major cities by road, rail, and air.</p></div></article><a className="maps-card" href="https://www.google.com/maps/search/?api=1&query=Pandit+Deendayal+Energy+University+Gandhinagar" target="_blank" rel="noreferrer"><div className="map-preview"><img src="/assets/venue-map.png" alt="PDEU location on Google Maps" /></div><div className="map-card-footer"><span>VENUE LOCATION</span><strong>Open in Google Maps →</strong></div></a></div></div>
      </section>

      <section className="countdown-section reveal reveal-delay-1"><div className="container countdown-wrap"><div><p className="eyebrow">DECEMBER 11–13, 2026</p><h2>See you at ICPHD 2026</h2><p>Driving innovation, enabling transition and shaping the energy future.</p></div><Countdown /></div></section>

      <footer id="contact"><div className="container footer-top"><div className="footer-title"><h2>Contact</h2><p>ICPHD 2026 — Fourth Edition</p><img className="footer-seal-mini" src="/assets/pdeu-seal-new-transparent.png" alt="PDEU seal" /></div>{contacts.map(([name, role, email, phone]) => <div className="contact-card" key={email}><h3>{name}</h3><p>{role}</p><a href={`mailto:${email}`}>{email}</a><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>)}</div><div className="copyright">COPYRIGHT- ICPHD 2026 — Fourth Edition &nbsp;|&nbsp; December 11–13, 2026 &nbsp;|&nbsp; PDEU, Raysan Gandhinagar, 382009</div></footer>
    </main>
    </>
  );
}
