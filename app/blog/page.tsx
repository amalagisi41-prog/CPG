import type { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Property Insights | Casey’s Property Group",
  description: "Practical guidance for property owners, buyers and investors across Connecticut and New York.",
};

const articles = [
  { tag: "Selling Strategy", title: "Should I sell as-is or renovate first?", copy: "How to compare cost, timing, risk and potential market value before committing to improvements.", read: "6 min read" },
  { tag: "Property Value", title: "What is my property actually worth?", copy: "Why condition, use, income potential and development opportunity can all influence the answer.", read: "5 min read" },
  { tag: "Inherited Property", title: "A clear path for an inherited property", copy: "The practical questions to work through before choosing to sell, hold, improve or divide an estate asset.", read: "7 min read" },
  { tag: "Investment", title: "Should I sell or hold my rental property?", copy: "A framework for weighing cash flow, equity, deferred maintenance, taxes and future opportunity.", read: "8 min read" },
  { tag: "Value-Add", title: "Which improvements matter before a sale?", copy: "Focus investment on work that improves marketability, buyer confidence or achievable value.", read: "5 min read" },
  { tag: "Development", title: "Could my property have development potential?", copy: "Early signals that may justify a deeper review of zoning, site conditions and alternative uses.", read: "6 min read" },
];

export default function BlogPage() {
  return (
    <main>
      <header className="site-header subpage-header">
        <a className="brand" href="/" aria-label="Casey's Property Group home"><span className="brand-mark">CPG</span><span className="brand-name">Casey’s Property Group</span></a>
        <nav aria-label="Primary navigation"><a href="/#paths">Buy</a><a href="/#seller-options">Sell</a><a href="/#divisions">Invest</a><a href="/#about">About</a><a href="/team">Team</a><a className="nav-current" href="/blog">Blog</a></nav>
        <a className="button button-dark header-cta" href="/#start">Get started</a>
      </header>

      <section className="page-hero blog-hero">
        <div className="page-hero-copy"><p className="eyebrow">CPG property insights</p><h1>Better decisions<br /><em>start earlier.</em></h1><p>Clear, practical thinking for property owners before they have decided whether to sell, hold, improve, invest or build.</p></div>
        <div className="featured-insight"><span>Featured perspective</span><h2>One property.<br />More than one way forward.</h2><p>The most valuable first step is often comparing the options before selecting a professional or transaction path.</p><a className="text-link light-link" href="/#seller-options">Compare the options <b>→</b></a></div>
      </section>

      <section className="blog-index">
        <div className="blog-heading"><div><p className="eyebrow">Latest thinking</p><h2>Property decisions, explained.</h2></div><p>Useful context for real situations—not generic market commentary.</p></div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <article key={article.title}>
              <div className="article-meta"><span>{article.tag}</span><span>{article.read}</span></div>
              <span className="article-number">0{index + 1}</span>
              <h3>{article.title}</h3>
              <p>{article.copy}</p>
              <span className="article-coming">Full article coming soon</span>
            </article>
          ))}
        </div>
      </section>

      <section className="insight-signup"><div><p className="eyebrow light">Stay informed</p><h2>Property insight, without the noise.</h2><p>Periodic guidance for owners, buyers and investors in Connecticut and New York.</p></div><form><label htmlFor="insight-email">Email address</label><div className="input-row"><input id="insight-email" type="email" placeholder="you@example.com" autoComplete="email" /><button type="submit">Join the list →</button></div></form></section>

      <section className="final-cta compact-cta"><p className="eyebrow">A question about your property?</p><h2>Start with the address.</h2><p>We’ll help you evaluate the available paths.</p><a className="button button-copper" href="/#start">Start a property review</a></section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">CPG</span><p>Casey’s Property Group<br /><small>Stamford, Connecticut · Serving CT &amp; NY</small></p></div>
        <div className="footer-links"><a href="/">Home</a><a href="/#seller-options">Sell</a><a href="/#divisions">Invest</a><a href="/team">Team</a><a href="/blog">Blog</a></div>
        <div className="footer-social-wrap"><div className="social-links" aria-label="Social media"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Instagram"><FaInstagram aria-hidden="true" /></a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on TikTok"><FaTiktok aria-hidden="true" /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Casey’s Property Group on Facebook"><FaFacebookF aria-hidden="true" /></a></div><p className="footer-note">Your property.<br />Your options.</p></div>
      </footer>
    </main>
  );
}
