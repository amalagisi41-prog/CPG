import type { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Marketing & Media | Casey’s Property Group",
  description: "Strategic property marketing, internal network distribution and targeted audience campaigns across Connecticut and New York.",
};

const audiences = [
  ["Property owners", "Clear positioning for sellers comparing market, as-is, improvement and direct-sale paths."],
  ["Qualified buyers", "Property-specific campaigns designed to reach likely owner-occupants and active market participants."],
  ["Investors", "Focused distribution for multifamily, value-add, rental and off-market investment opportunities."],
  ["Builders + developers", "Opportunity briefs for land, redevelopment, repositioning and construction-oriented audiences."],
];

const capabilities = [
  ["Strategy", "Define the property story, audience, positioning and desired response before selecting channels."],
  ["Creative", "Build consistent photography, video, copy and campaign materials around the property’s strongest attributes."],
  ["Internal network", "Share relevant opportunities across CPG’s real estate, investment and development relationships."],
  ["Targeted media", "Reach appropriate audiences by market, property type, intent and investment profile."],
  ["Campaign management", "Coordinate launch timing, distribution, inquiries, follow-up and performance review."],
  ["Opportunity routing", "Direct responses to CRES, CREI or CRED based on the inquiry and potential path forward."],
];

export default function MarketingPage() {
  return (
    <main>
      <header className="site-header subpage-header">
        <a className="brand" href="/" aria-label="Casey's Property Group home"><span className="brand-mark">CPG</span><span className="brand-name">Casey’s Property Group</span></a>
        <nav aria-label="Primary navigation"><a href="/#paths">Buy</a><a href="/#seller-options">Sell</a><a href="/#divisions">Invest</a><a href="/#about">About</a><a href="/team">Team</a><a className="nav-current" href="/marketing">Marketing</a><a href="/blog">Blog</a></nav>
        <a className="button button-dark header-cta" href="/#start">Get started</a>
      </header>

      <section className="page-hero marketing-hero">
        <div className="page-hero-copy"><p className="eyebrow">Marketing + media</p><h1>The right story.<br /><em>The right audience.</em></h1><p>CPG combines property strategy, creative execution, internal network distribution and targeted media to move opportunities toward the people most likely to act.</p></div>
        <div className="marketing-signal" aria-hidden="true"><div><span>Property</span><i>01</i></div><div><span>Positioning</span><i>02</i></div><div><span>Audience</span><i>03</i></div><div><span>Action</span><i>04</i></div></div>
      </section>

      <section className="marketing-intro">
        <div><p className="eyebrow">More than exposure</p><h2>Marketing built around the property’s best path forward.</h2></div>
        <div><p>Different properties require different audiences. A move-in-ready home, multifamily asset, inherited property, fixer-upper and development site should not be presented the same way or distributed through the same channels.</p><p>CPG begins with the opportunity, defines the most relevant audiences, then coordinates the message, media and follow-up across one integrated group.</p></div>
      </section>

      <section className="audience-section">
        <div className="section-heading centered"><p className="eyebrow light">Targeted distribution</p><h2>Reach the audiences that fit the opportunity.</h2></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="audience-note">Audience strategies are based on property attributes, geography, market intent and campaign objectives—never protected personal characteristics.</p>
      </section>

      <section className="marketing-capabilities">
        <div className="blog-heading"><div><p className="eyebrow">Connected capabilities</p><h2>One campaign. Coordinated execution.</h2></div><p>From the first property review through inquiry routing, each part of the campaign supports the selected strategy.</p></div>
        <div className="capability-grid">{capabilities.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="network-band"><div><p className="eyebrow light">The CPG network</p><h2>Real estate.<br />Investment.<br />Development.</h2></div><p>CPG can circulate an opportunity across complementary relationships instead of treating every property as a standard listing or a single-channel campaign. That broader view helps surface buyers, investors, improvement strategies and development potential earlier.</p></section>

      <section className="final-cta compact-cta"><p className="eyebrow">Put the property in front of the right audience.</p><h2>Start with the opportunity.</h2><p>We’ll help define the strategy, story and distribution plan.</p><a className="button button-copper" href="/#start">Request a property review</a></section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">CPG</span><p>Casey’s Property Group<br /><small>Stamford, Connecticut · Serving CT &amp; NY</small></p></div>
        <div className="footer-links"><a href="/">Home</a><a href="/#seller-options">Sell</a><a href="/#divisions">Invest</a><a href="/team">Team</a><a href="/marketing">Marketing</a><a href="/blog">Blog</a></div>
        <div className="footer-social-wrap"><div className="social-links" aria-label="Social media"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Instagram"><FaInstagram aria-hidden="true" /></a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on TikTok"><FaTiktok aria-hidden="true" /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Facebook"><FaFacebookF aria-hidden="true" /></a></div><p className="footer-note">Your property.<br />Your options.</p></div>
      </footer>
    </main>
  );
}
