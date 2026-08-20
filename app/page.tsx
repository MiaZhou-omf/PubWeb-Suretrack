"use client";

import { useMemo, useState } from "react";

type StateOption = { name: string; code: string };

const states: StateOption[] = [
  { name: "Alabama", code: "AL" }, { name: "Arizona", code: "AZ" },
  { name: "California", code: "CA" }, { name: "Colorado", code: "CO" },
  { name: "Delaware", code: "DE" }, { name: "Florida", code: "FL" },
  { name: "Georgia", code: "GA" }, { name: "Idaho", code: "ID" },
  { name: "Illinois", code: "IL" }, { name: "Indiana", code: "IN" },
  { name: "Iowa", code: "IA" }, { name: "Kansas", code: "KS" },
  { name: "Kentucky", code: "KY" }, { name: "Louisiana", code: "LA" },
  { name: "Maryland", code: "MD" }, { name: "Michigan", code: "MI" },
  { name: "Minnesota", code: "MN" }, { name: "Mississippi", code: "MS" },
  { name: "Missouri", code: "MO" }, { name: "Nebraska", code: "NE" },
  { name: "Nevada", code: "NV" }, { name: "New Jersey", code: "NJ" },
  { name: "New York", code: "NY" }, { name: "North Carolina", code: "NC" },
  { name: "Ohio", code: "OH" },
];

const sampleUrl = "/sample-loan-agreements/NJSTLA0726.pdf";

function DocumentIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2.75h6.8L19 7.95v13.3H7z"/><path d="M13.5 2.75v5.5H19M9.5 12h7M9.5 15h7M9.5 18h4.5"/></svg>;
}

function ArrowIcon({ direction = "down" }: { direction?: "down" | "out" }) {
  return direction === "out"
    ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6"/></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M5 20h14"/></svg>;
}

export default function Home() {
  const [stateCode, setStateCode] = useState("NJ");
  const selectedState = useMemo(() => states.find((state) => state.code === stateCode) ?? states[21], [stateCode]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="desktop-navi" data-node-id="1:4">
          <div className="navi-logo-cell">
            <a href="https://www.onemainfinancial.com/" aria-label="OneMain Financial home">
              <img src="/branding/onemain-logo-desktop.svg" alt="OneMain Financial" width="112" height="44"/>
            </a>
          </div>
          <nav aria-label="Primary navigation">
            <a href="https://www.onemainfinancial.com/personal-loans">Personal Loans</a>
            <a href="https://www.onemainfinancial.com/credit-cards">Credit Cards</a>
            <a href="https://www.onemainfinancial.com/branches">Branches</a>
            <a href="https://www.onemainfinancial.com/personal-loans/resources">Resources</a>
          </nav>
          <div className="header-actions">
            <a className="offer-button" href="https://www.onemainfinancial.com/prequalification">Check for offers</a>
            <a className="login-button" href="https://www.onemainfinancial.com/log-in">
              <img src="/branding/login-icon.svg" alt="" width="24" height="24"/>
              <span>Log in</span>
            </a>
          </div>
        </div>
        <div className="mobile-navi" data-node-id="1:205">
          <a href="https://www.onemainfinancial.com/" aria-label="OneMain Financial home">
            <img src="/branding/onemain-logo-mobile.svg" alt="OneMain Financial" width="111" height="43"/>
          </a>
          <button className="menu-button" type="button" aria-label="Open menu">
            <img src="/branding/menu-icon.svg" alt="" width="24" height="24"/>
            <span>Menu</span>
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="title-band"><div>
          <p className="eyebrow">Legal documents</p>
          <h1>Sample Loan Agreement<br className="mobile-break"/> and Disclosure Statement</h1>
        </div></section>

        <section className="content" id="documents">
          <div className="intro">
            <h2>Choose your state</h2>
            <p>Loan terms and disclosures can vary by state. Select your state to view a sample agreement. The same general example is currently provided for all 25 states.</p>
          </div>

          <div className="selector-card">
            <div className="step-number" aria-hidden="true">1</div>
            <div className="select-copy"><label htmlFor="state-select">Select your state</label><span>25 states available</span></div>
            <div className="select-wrap"><select id="state-select" value={stateCode} onChange={(event) => setStateCode(event.target.value)}>
              {states.map((state) => <option key={state.code} value={state.code}>{state.name}</option>)}
            </select></div>
          </div>

          <section className="document-card" aria-live="polite">
              <div className="document-summary">
                <div className="document-icon"><DocumentIcon/></div>
                <div>
                  <p className="document-kicker">{selectedState.name} · PDF · 6 pages</p>
                  <h3>Sample Loan Agreement and Disclosure Statement</h3>
                  <p className="sample-note">General example used for all listed states. Your actual state-specific agreement may differ.</p>
                </div>
              </div>
              <div className="document-actions" aria-label="Document options">
                <a className="primary-action" href={sampleUrl} target="_blank" rel="noreferrer">Preview in new window <ArrowIcon direction="out"/></a>
                <a className="secondary-action" href={sampleUrl} download="NJ-Sample-Loan-Agreement.pdf">Download PDF <ArrowIcon/></a>
              </div>
              <div className="preview-heading">
                <div><span className="status-dot" aria-hidden="true"/>Previewing {selectedState.name} sample</div>
                <a href={sampleUrl} target="_blank" rel="noreferrer">Open full screen</a>
              </div>
              <div className="pdf-frame-wrap"><iframe className="pdf-frame" src={`${sampleUrl}#view=FitH&toolbar=1`} title={`${selectedState.name} sample loan agreement PDF preview`}/></div>
          </section>

          <aside className="legal-note"><strong>Please note</strong><p>The same sample PDF is shown for every state and is provided for general informational purposes only. It is not an offer of credit. The rates, fees, terms, and disclosures in your actual loan agreement will depend on your state and approved loan terms.</p></aside>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-top">
          <a className="footer-brand" href="https://www.onemainfinancial.com/" aria-label="OneMain Financial home"><img src="/branding/onemain-logo-inverted.svg" alt="OneMain Financial" width="216" height="20"/></a>
          <div className="footer-links">
            <div><strong>Products</strong><a href="#documents">Personal loans</a><a href="#documents">Credit cards</a></div>
            <div><strong>Company</strong><a href="#footer">About us</a><a href="#footer">Careers</a></div>
            <div><strong>Legal</strong><a href="#documents">Loan agreements</a><a href="#footer">Legal & privacy</a></div>
            <div><strong>Support</strong><a href="#footer">Help Center</a><a href="#footer">Contact us</a></div>
          </div>
        </div>
        <div className="footer-bottom"><p>Sample page for demonstration purposes.</p><p>© 2026 OneMain Holdings, Inc. All rights reserved.</p></div>
      </footer>
    </div>
  );
}
