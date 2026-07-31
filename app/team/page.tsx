import type { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Team | Casey’s Property Group",
  description: "Meet the integrated real estate, investment and development team behind Casey’s Property Group.",
};

const groups = [
  {
    code: "CRES",
    title: "Real Estate Solutions",
    focus: "Buy · Sell · Appraise · Advise",
    copy: "Client-facing real estate guidance, market strategy, representation and property valuation.",
  },
  {
    code: "CREI",
    title: "Real Estate Investments",
    focus: "Acquire · Invest · Analyze",
    copy: "Investment evaluation, direct acquisition, multifamily opportunities and value-add strategy.",
  },
  {
    code: "CRED",
    title: "Real Estate Development",
    focus: "Improve · Rehab · Build",
    copy: "Property improvement, rehabilitation, repositioning, construction and development analysis.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <header className="site-header subpage-header">
        <a className="brand" href="/" aria-label="Casey's Property Group home"><span className="brand-mark">CPG</span><span className="brand-name">Casey’s Property Group</span></a>
        <nav aria-label="Primary navigation">
          <a href="/#paths">Buy</a><a href="/#seller-options">Sell</a><a href="/#divisions">Invest</a><a href="/#about">About</a><a className="nav-current" href="/team">Team</a><a href="/blog">Blog</a>
        </nav>
        <a className="button button-dark header-cta" href="/#start">Get started</a>
      </header>

      <section className="page-hero team-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">One team · Multiple perspectives</p>
          <h1>Built around<br /><em>the property.</em></h1>
          <p>CPG brings brokerage, valuation, investment and development thinking to the same table—so every opportunity can be evaluated from more than one angle.</p>
        </div>
        <div className="page-hero-art" aria-hidden="true"><span>Property</span><b>+</b><span>Perspective</span><b>+</b><span>Execution</span></div>
      </section>

      <section className="team-intro">
        <p className="eyebrow">The team model</p>
        <h2>One point of entry.<br />The right expertise at the right time.</h2>
        <p>You should not have to decide whether your situation needs an agent, appraiser, investor or developer before reaching out. The CPG team evaluates the complete opportunity first, then brings the right capabilities forward.</p>
      </section>

      <section className="team-groups">
        {groups.map((group) => (
          <article key={group.code}>
            <span className="team-code">{group.code}</span>
            <p className="eyebrow">{group.title}</p>
            <h2>{group.focus}</h2>
            <p>{group.copy}</p>
          </article>
        ))}
      </section>

      <section className="team-values">
        <div><span>01</span><h3>Local knowledge</h3><p>Deep Stamford roots and practical market perspective across Connecticut and New York.</p></div>
        <div><span>02</span><h3>Aligned advice</h3><p>Recommendations shaped by the owner’s goals—not by a single transaction model.</p></div>
        <div><span>03</span><h3>Accountable execution</h3><p>One coordinated group to carry the selected path from evaluation through completion.</p></div>
      </section>

      <section className="final-cta compact-cta"><p className="eyebrow">Start with the property</p><h2>Bring us the opportunity.</h2><p>We’ll bring the right team to the table.</p><a className="button button-copper" href="/#start">Start a property review</a></section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">CPG</span><p>Casey’s Property Group<br /><small>Stamford, Connecticut · Serving CT &amp; NY</small></p></div>
        <div className="footer-links"><a href="/">Home</a><a href="/#seller-options">Sell</a><a href="/#divisions">Invest</a><a href="/team">Team</a><a href="/blog">Blog</a></div>
        <div className="footer-social-wrap"><div className="social-links" aria-label="Social media"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Instagram"><FaInstagram aria-hidden="true" /></a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on TikTok"><FaTiktok aria-hidden="true" /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Facebook"><FaFacebookF aria-hidden="true" /></a></div><p className="footer-note">Your property.<br />Your options.</p></div>
      </footer>
    </main>
  );
}
