import { useEffect, useState } from "react";
import "./CookieBanner.css";

export default function CookieModal() {
  const [show, setShow] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
    setShowManage(false);
  };

  const manageCookies = () => {
    setShowManage(true);
  };

  if (!show) return null;

  return (
    <>
      {/* MAIN COOKIE MODAL */}
      <div className="cookie-overlay">
        <div className="cookie-modal">
          <h2>We use cookies</h2>
          <p>
            We use cookies to ensure the website works properly and to enhance
            your experience. You can manage your preferences at any time.
          </p>

          <div className="cookie-buttons">
            <button className="manage" onClick={manageCookies}>
              Manage cookies
            </button>

            <button className="accept" onClick={acceptAll}>
              Accept all cookies
            </button>
          </div>
        </div>
      </div>

      {/* MANAGE COOKIES MODAL */}
      {showManage && (
        <div className="manage-overlay">
          <div className="manage-modal">
            <h3>Cookie Preferences</h3>

            <div className="cookie-option">
              <div>
                <strong>Necessary cookies</strong>
                <p>Required for the website to function.</p>
              </div>
              <input type="checkbox" checked disabled />
            </div>

            <div className="cookie-option">
              <div>
                <strong>Analytics cookies</strong>
                <p>Help us improve the website.</p>
              </div>
              <input type="checkbox" />
            </div>

            <div className="cookie-option">
              <div>
                <strong>Marketing cookies</strong>
                <p>Used for personalized content.</p>
              </div>
              <input type="checkbox" />
            </div>

            <div className="manage-actions">
              <button onClick={() => setShowManage(false)}>
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}