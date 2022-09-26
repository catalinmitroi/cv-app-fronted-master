import React from "react";
import "./login.css";
function LogIn() {
  return (
    <div className="App1">
      <div className="App">
        <div className="align-center">
          <div className="form">
            <div className="form-inner">
              <h2>Autentificare</h2>
              <div className="form-group">
                <input type="text" placeholder="Username..." />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password..." />
              </div>
              <div>
                <hr></hr>
                <input type="submit" value="Conecteaza-te" />
                <a href="/">
                  <button>
                    <h1>Ai uitat parola?</h1>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
