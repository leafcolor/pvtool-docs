import React from "react"

import { Link } from "gatsby"

import CloudflareLogo from "cloudflare-docs-engine/src/components/cloudflare-logo"
import DocsNavLogoLockup from "cloudflare-docs-engine/src/components/docs-nav-logo-lockup"
import ThemeToggle from "cloudflare-docs-engine/src/components/theme-toggle"

import "../css/components/site-header.css"

const SiteHeader = () => (
  <>
    <div className="SiteHeader">
      <div className="SiteHeader--logo-section">
        <Link className="SiteHeader--cloudflare-logo-link Link Link-without-underline" to="/">
          <DocsNavLogoLockup
            logo={<CloudflareLogo/>}
            text={(
              <>
                <span data-text="pvtool">pvtool</span>
                <span>&nbsp;</span>
                <span data-text="Docs">Developers</span>
              </>
            )}
          />
        </Link>
      </div>

      <div className="SiteHeader--nav">
        <Link className="SiteHeader--nav-link" to="/docs">
          <span>Docs</span>
        </Link>
        <a className="SiteHeader--nav-link" href="https://leafcolor.github.io">
          <span>Open Source</span>
        </a>
        <a className="SiteHeader--nav-link" href="https://weibo.com/pvtool">
          <span>Newsletter</span>
        </a>
      </div>

      <div className="SiteHeader--theme-toggle">
        <ThemeToggle/>
      </div>
    </div>
    <div className="SiteHeader---shadow"></div>
    <div className="SiteHeader---shadow-cover"></div>
  </>
)

export default SiteHeader
