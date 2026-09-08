export function BrowserArtwork({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`browser-art ${compact ? "browser-art-compact" : ""}`}
      aria-label="Abstrakte monochrome Vorschau des Browserprojekts"
      role="img"
    >
      <div className="browser-topbar">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-tab">privacy-oriented-browser</span>
        <span className="browser-menu">•••</span>
      </div>
      <div className="browser-toolbar">
        <span className="toolbar-icon">‹</span>
        <span className="toolbar-icon">›</span>
        <span className="toolbar-icon">↻</span>
        <span className="address-bar">https://learn-by-building.local</span>
        <span className="toolbar-icon">⌕</span>
      </div>
      <div className="browser-body">
        <div className="browser-sidebar">
          <span className="sidebar-active" />
          <span />
          <span />
          <span />
        </div>
        <div className="browser-content">
          <span className="content-kicker">SERVO / RUST / PRIVACY</span>
          <strong>Build to understand.</strong>
          <span className="content-line line-long" />
          <span className="content-line line-short" />
          <div className="content-cards">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
