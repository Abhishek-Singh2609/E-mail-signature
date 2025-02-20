import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./BlocksPage.css"; 

const BlocksPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blocks-page-container">
      {/* Header */}
      <header className="header d-flex align-items-center justify-content-between">
        <h2 className="block-heading">Agile</h2>
        {/* <img
          src=""
          alt="Crossware"
          className="logo"
        /> */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-white">
            <i className="bi bi-chat-dots-fill"></i> Feedback
          </button>
          <div
            className="bg-success rounded-circle text-white d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px" }}
          >
            A
          </div>
        </div>
      </header>

      {/* Sidebar
      <nav className={`sidebar ${isExpanded ? "expanded" : ""}`} id="sidebar">
        <div className="nav-items">
          <a href="#" className="sidebar-link">
            <i className="bi bi-house-fill"></i>
            <span>Home</span>
          </a>
          <a href="#" className="sidebar-link">
            <i className="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" className="sidebar-link">
            <i className="bi bi-file-text-fill"></i>
            <span>Documents</span>
          </a>
          <a href="#" className="sidebar-link">
            <i className="bi bi-share-fill"></i>
            <span>Share</span>
          </a>
          <a href="#" className="sidebar-link">
            <i className="bi bi-envelope-fill"></i>
            <span>Messages</span>
          </a>
          <a href="#" className="sidebar-link">
            <i className="bi bi-gear-fill"></i>
            <span>Settings</span>
          </a>
        </div>
        <button className="toggle-sidebar" id="toggleSidebar" onClick={toggleSidebar}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </nav> */}

      {/* Main Content */}
      <main className={`main-content ${isExpanded ? "shifted" : ""}`} id="mainContent">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="page-title">Blocks</h1>
          <div className="d-flex gap-3">
            <input type="search" className="search-box" placeholder="Search" />
            <div className="btn-group">
              <button className="btn btn-light">
                <i className="bi bi-grid-3x3"></i>
              </button>
              <button className="btn btn-light">
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-bookmark-fill"></i> Bookmarks
            </a>
          </li>
        </ul>

        <div className="status-bar">
          Displaying all blocks <span className="badge bg-primary">4 found</span>
        </div>

        <div className="blocks-list">
          {/* Example Disclaimer */}
          <div className="block-card">
            <div className="block-header">
              <h2 className="block-title">Example Disclaimer</h2>
              <button className="btn btn-link">
                <i className="bi bi-bookmark"></i>
              </button>
            </div>
            <p className="block-description">
              This is an example block for an external disclaimer
            </p>
            <div className="block-meta">
              <div className="block-meta-item">
                <span>Applies To:</span>
                <strong>External recipients</strong>
              </div>
              <div className="block-meta-item">
                <span>Email:</span>
                <strong>All emails</strong>
              </div>
              <div className="block-meta-item">
                <span>Placement:</span>
                <strong>Below</strong>
              </div>
              <div className="usage-badge">
                <i className="bi bi-link-45deg"></i> Used in 1 signature
              </div>
            </div>
          </div>

          {/* Example Header */}
          <div className="block-card">
            <div className="block-header">
              {/* <h2 className="block-title">Example Header</h2> */}
              <button className="btn btn-link">
                <i className="bi bi-bookmark"></i>
              </button>
            </div>
            {/* <p className="block-description">
              This is an example header containing links to social media
            </p> */}
            {/* <div className="block-meta">
              <div className="block-meta-item">
                <span>Applies To:</span>
                <strong>External recipients</strong>
              </div>
              <div className="block-meta-item">
                <span>Email:</span>
                <strong>All emails</strong>
              </div>
              <div className="block-meta-item">
                <span>Placement:</span>
                <strong>Above</strong>
              </div>
              <div className="usage-badge">
                <i className="bi bi-link-45deg"></i> Used in 1 signature
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlocksPage;
