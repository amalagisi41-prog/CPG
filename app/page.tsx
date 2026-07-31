import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const paths = [
  { number: "01", title: "Sell", copy: "Compare market, as-is, direct-sale and improvement options.", href: "#seller-options" },
  { number: "02", title: "Buy", copy: "Find a home, investment property or overlooked opportunity.", href: "#start" },
  { number: "03", title: "Invest", copy: "Evaluate acquisitions, multifamily assets and value-add potential.", href: "#divisions" },
  { number: "04", title: "Appraise", copy: "Understand current value before making the next decision.", href: "#start" },
  { number: "05", title: "Improve", copy: "Explore targeted rehab, renovation and pre-sale improvements.", href: "#divisions" },
  { number: "06", title: "Build", copy: "Assess development, redevelopment and construction opportunities.", href: "#divisions" },
];

const options = [
  ["Sell", "Position and expose the property to the market."],
  ["Sell as-is", "Move forward without repairs, staging or unnecessary preparation."],
  ["Direct sale", "Evaluate speed, convenience and certainty alongside market value."],
  ["Improve + sell", "Determine whether targeted work could increase value or marketability."],
  ["Hold / invest", "Consider whether retaining the property better serves your goals."],
  ["Develop", "Explore redevelopment, additional units or a new use for the property."],
];

const divisions = [
  {
    code: "CRES",
    name: "Casey’s Real Estate Solutions",
    verbs: "Buy · Sell · Appraise · Advise",
    copy: "Representation, valuation and practical options for buyers and property owners.",
  },
  {
    code: "CREI",
    name: "Casey’s Real Estate Investments",
    verbs: "Acquire · Invest · Identify Opportunity",
    copy: "Direct acquisition, investment analysis and opportunity evaluation.",
  },
  {
    code: "CRED",
    name: "Casey’s Real Estate Development",
    verbs: "Improve · Rehab · Build · Develop",
    copy: "Renovation, repositioning and development strategies that create value.",
  },
];

const situations = [
  "Inherited or estate property",
  "Deferred maintenance",
  "Vacant property",
  "Problem rental or landlord exit",
  "Relocation or downsizing",
  "Unfinished renovation",
  "Time-sensitive sale",
  "Development opportunity",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Casey's Property Group home">
          <span className="brand-mark">CPG</span>
          <span className="brand-name">Casey’s Property Group</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#paths">Buy</a>
          <a href="#seller-options">Sell</a>
          <a href="#divisions">Invest</a>
          <a href="#start">Appraise</a>
          <a href="#divisions">Improve</a>
          <a href="#divisions">Build</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-dark header-cta" href="#start">Get started</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Connecticut · New York</p>
          <h1>Your property.<br /><em>Your options.</em></h1>
          <p className="hero-services">Buy · Sell · Invest · Appraise · Improve · Build</p>
          <p className="hero-copy">
            One property company bringing real estate, investment, appraisal,
            improvement and development expertise together.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#paths">Explore your options</a>
            <a className="button button-outline" href="#start">What’s my property worth?</a>
          </div>
        </div>
        <aside className="hero-note note-top">Evaluate<br />the whole<br />opportunity.</aside>
        <aside className="hero-note note-bottom">One property.<br />More than one<br />way forward.</aside>
      </section>

      <section className="property-start" id="start">
        <div>
          <p className="eyebrow light">Start with the property</p>
          <h2>You don’t need to know the solution yet.</h2>
        </div>
        <form className="address-form">
          <label htmlFor="property-address">Property address</label>
          <div className="input-row">
            <input id="property-address" name="property-address" placeholder="Enter a property address" autoComplete="street-address" />
            <button type="submit">Get started <span aria-hidden="true">→</span></button>
          </div>
          <p>Private, no-pressure property review. We’ll help evaluate the available paths.</p>
        </form>
      </section>

      <section className="section paths-section" id="paths">
        <div className="section-heading">
          <p className="eyebrow">Your goals, our starting point</p>
          <h2>What are you looking to do?</h2>
          <p>Come to CPG with the property and your objective. We’ll connect the right capabilities.</p>
        </div>
        <div className="path-grid">
          {paths.map((path) => (
            <a className="path-card" href={path.href} key={path.title}>
              <span>{path.number}</span>
              <h3>{path.title}</h3>
              <p>{path.copy}</p>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="seller-section" id="seller-options">
        <div className="seller-intro">
          <p className="eyebrow light">For property owners</p>
          <h2>One property.<br /><em>More than one way forward.</em></h2>
          <p>
            Most companies see a property through one business model. CPG looks
            at the owner’s situation, current value, market potential, timing
            and opportunity—then compares the paths.
          </p>
          <a className="text-link light-link" href="#start">Compare my options <span>→</span></a>
        </div>
        <div className="option-list">
          {options.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section divisions-section" id="divisions">
        <div className="section-heading centered">
          <p className="eyebrow">One brand. Integrated expertise.</p>
          <h2>Three paths. One purpose.</h2>
        </div>
        <div className="division-grid">
          {divisions.map((division) => (
            <article className="division-card" key={division.code}>
              <div className="division-code">{division.code}</div>
              <p className="division-name">{division.name}</p>
              <h3>{division.verbs}</h3>
              <p>{division.copy}</p>
              <a className="text-link" href="#start">Explore this path <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="advantage">
        <div className="advantage-intro">
          <p className="eyebrow light">The CPG advantage</p>
          <h2>One group.<br />More possibilities.</h2>
        </div>
        <ol className="process">
          <li><span>01</span><h3>You reach out</h3><p>Tell us about the property and your goals.</p></li>
          <li><span>02</span><h3>We evaluate</h3><p>We assess value and opportunity across all three paths.</p></li>
          <li><span>03</span><h3>We recommend</h3><p>We present the best options based on your priorities.</p></li>
          <li><span>04</span><h3>We execute</h3><p>One team coordinates the details and delivers results.</p></li>
        </ol>
      </section>

      <section className="local-section" id="about">
        <div className="local-copy">
          <p className="eyebrow">A modern property company with deep local roots</p>
          <h2>Rooted in Stamford.<br /><em>Focused on value.</em></h2>
          <p>
            The Casey’s name carries a long history of relationships,
            entrepreneurship and commitment to the community. CPG brings that
            foundation to property owners, buyers and investors across
            Connecticut and New York.
          </p>
          <div className="local-stats">
            <div><strong>CT + NY</strong><span>Local market perspective</span></div>
            <div><strong>3</strong><span>Integrated operating arms</span></div>
            <div><strong>1</strong><span>Point of entry</span></div>
          </div>
        </div>
        <div className="local-visual" aria-label="Architectural detail of a modern Connecticut property">
          <div className="local-quote">Real estate.<br />Investments.<br />Development.<small>Solutions that move property forward.</small></div>
        </div>
      </section>

      <section className="situations">
        <div>
          <p className="eyebrow">Complex property? Start here.</p>
          <h2>Every situation deserves a thoughtful review.</h2>
        </div>
        <div className="situation-list">
          {situations.map((situation) => <span key={situation}>{situation}</span>)}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Your property. Your options.</p>
        <h2>Let’s find the right path for your property.</h2>
        <p>Share the address. We’ll help you understand what’s possible.</p>
        <a className="button button-copper" href="#start">Start a property review</a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">CPG</span>
          <p>Casey’s Property Group<br /><small>Stamford, Connecticut · Serving CT &amp; NY</small></p>
        </div>
        <div className="footer-links">
          <a href="#paths">Buy</a><a href="#seller-options">Sell</a><a href="#divisions">Invest</a><a href="#start">Appraise</a><a href="#about">About</a>
        </div>
        <div className="footer-social-wrap">
          <div className="social-links" aria-label="Social media">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Instagram"><FaInstagram aria-hidden="true" /></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on TikTok"><FaTiktok aria-hidden="true" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Facebook"><FaFacebookF aria-hidden="true" /></a>
          </div>
          <p className="footer-note">Casey’s Property Group<br />Your property. Your options.</p>
        </div>
      </footer>
    </main>
  );
}
