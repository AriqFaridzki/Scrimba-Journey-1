import React from "react";

function MainContent() {
  return (
    <>
      <main className="content-wrapper">
        <div className="content-container">
          <div className="content-header">
            <h3>Muhammad Ariq Faridzki</h3>
            <h5>Fullstack Developer</h5>
            <h6>
              <a
                className="content-header-website"
                href="https://www.ariqfaridzki.my.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                ariqfaridzki.my.id
              </a>
            </h6>
          </div>

          <div className="content-buttons">
            <button>Email</button>
            <button>Linkedin</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainContent;
