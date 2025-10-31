import "./style.css";

// Page content templates
const pages = {
  home: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <img src="/tv-icon.png" alt="Planet TV" class="logo-icon">
            <span>Planet TV</span>
          </div>
          <ul class="nav-links">
            <li><a href="#" data-page="home">Home</a></li>
            <li><a href="#" data-page="features">Features</a></li>
            <li><a href="#" data-page="privacy">Privacy Policy</a></li>
            <li><a href="#" data-page="terms">Terms & Conditions</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container">
          <h1>Planet TV</h1>
          <p class="subtitle">Your Ultimate Streaming Companion</p>
          <p>Experience premium streaming with elegant design and seamless performance. Your gateway to endless entertainment.</p>
          <a href="#" class="cta-button" data-page="features">Discover Features</a>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">Why Choose Planet TV?</h2>
          <div class="features-grid">
            <div class="feature-card card">
              <h3>Elegant Design</h3>
              <p>Beautiful, antique-inspired interface with classical typography that makes your viewing experience truly premium.</p>
            </div>
            <div class="feature-card card">
              <h3>Seamless Streaming</h3>
              <p>High-quality video playback with adaptive streaming technology for the best viewing experience on any device.</p>
            </div>
            <div class="feature-card card">
              <h3>Easy Navigation</h3>
              <p>Intuitive channel browsing with smart categorization and search functionality to find your favorite content quickly.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Planet TV</h4>
            <p>Your ultimate streaming companion, designed for the modern viewer who appreciates quality and elegance.</p>
          </div>
          <div class="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#" data-page="privacy">Privacy Policy</a></li>
              <li><a href="#" data-page="terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:support@planettv.app">Contact Support</a></li>
              <li><a href="#" data-page="features">Features</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Planet TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,

  features: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <img src="/tv-icon.png" alt="Planet TV" class="logo-icon">
            <span>Planet TV</span>
          </div>
          <ul class="nav-links">
            <li><a href="#" data-page="home">Home</a></li>
            <li><a href="#" data-page="features">Features</a></li>
            <li><a href="#" data-page="privacy">Privacy Policy</a></li>
            <li><a href="#" data-page="terms">Terms & Conditions</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section class="section">
        <div class="container">
          <h1 class="section-title">Features</h1>
          
          <div class="card">
            <h2>Premium Streaming Experience</h2>
            <p>Planet TV delivers high-quality streaming with advanced video player technology, ensuring smooth playback and optimal viewing quality across all your devices.</p>
          </div>

          <div class="card">
            <h2>Elegant User Interface</h2>
            <p>Our carefully crafted interface features classical typography with fonts like Cinzel, Playfair Display, and Crimson Text, creating a sophisticated and timeless viewing experience.</p>
          </div>

          <div class="card">
            <h2>Smart Channel Management</h2>
            <p>Organize and browse your channels with intelligent categorization, search functionality, and personalized recommendations tailored to your viewing preferences.</p>
          </div>

          <div class="card">
            <h2>Cross-Platform Compatibility</h2>
            <p>Enjoy Planet TV on Android devices with seamless synchronization and consistent experience across all your screens.</p>
          </div>

          <div class="card">
            <h2>Offline Capabilities</h2>
            <p>Save your favorite channels and settings locally with smart caching technology for quick access and improved performance.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2024 Planet TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,

  privacy: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <img src="/tv-icon.png" alt="Planet TV" class="logo-icon">
            <span>Planet TV</span>
          </div>
          <ul class="nav-links">
            <li><a href="#" data-page="home">Home</a></li>
            <li><a href="#" data-page="features">Features</a></li>
            <li><a href="#" data-page="privacy">Privacy Policy</a></li>
            <li><a href="#" data-page="terms">Terms & Conditions</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div class="legal-content">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> October 31, 2024</p>

        <h2>1. Information We Collect</h2>
        <p>Planet TV is committed to protecting your privacy. We collect minimal information necessary to provide our streaming services:</p>
        <ul>
          <li><strong>Device Information:</strong> We may collect device identifiers, operating system version, and app version for technical support and optimization purposes.</li>
          <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve app performance and user experience.</li>
          <li><strong>Preferences:</strong> Your channel preferences and settings are stored locally on your device.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>The information we collect is used to:</p>
        <ul>
          <li>Provide and maintain our streaming services</li>
          <li>Improve app performance and user experience</li>
          <li>Provide technical support when requested</li>
          <li>Ensure app security and prevent misuse</li>
        </ul>

        <h2>3. Data Storage and Security</h2>
        <p>We implement appropriate security measures to protect your information:</p>
        <ul>
          <li>Most data is stored locally on your device</li>
          <li>We use industry-standard encryption for data transmission</li>
          <li>We do not store personal viewing history on our servers</li>
          <li>We regularly update our security practices</li>
        </ul>

        <h2>4. Third-Party Services</h2>
        <p>Planet TV may integrate with third-party services for enhanced functionality. These services have their own privacy policies:</p>
        <ul>
          <li>Google Fonts for typography</li>
          <li>Video streaming providers (as configured by users)</li>
        </ul>

        <h2>5. Children's Privacy</h2>
        <p>Planet TV does not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the information we have about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of data collection where applicable</li>
        </ul>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify users of any material changes through the app or our website.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: <a href="mailto:privacy@planettv.app">privacy@planettv.app</a></p>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2024 Planet TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,

  terms: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <img src="/tv-icon.png" alt="Planet TV" class="logo-icon">
            <span>Planet TV</span>
          </div>
          <ul class="nav-links">
            <li><a href="#" data-page="home">Home</a></li>
            <li><a href="#" data-page="features">Features</a></li>
            <li><a href="#" data-page="privacy">Privacy Policy</a></li>
            <li><a href="#" data-page="terms">Terms & Conditions</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div class="legal-content">
        <h1>Terms and Conditions</h1>
        <p><strong>Last updated:</strong> October 31, 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using Planet TV ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.</p>

        <h2>2. Description of Service</h2>
        <p>Planet TV is a streaming application that allows users to:</p>
        <ul>
          <li>Stream content from user-provided sources</li>
          <li>Organize and manage channel lists</li>
          <li>Customize viewing preferences and settings</li>
          <li>Access an elegant, user-friendly interface</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>As a user of Planet TV, you agree to:</p>
        <ul>
          <li>Use the App only for lawful purposes</li>
          <li>Ensure you have proper rights to access any content you stream</li>
          <li>Not use the App to infringe on intellectual property rights</li>
          <li>Not attempt to reverse engineer or modify the App</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>

        <h2>4. Content and Sources</h2>
        <p>Important information about content:</p>
        <ul>
          <li>Planet TV does not provide, host, or distribute any content</li>
          <li>Users are responsible for providing their own streaming sources</li>
          <li>Users must ensure they have legal rights to access provided content</li>
          <li>We are not responsible for the availability, quality, or legality of user-provided content</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>The Planet TV application, including its design, code, and user interface, is protected by intellectual property laws. You may not:</p>
        <ul>
          <li>Copy, modify, or distribute the App without permission</li>
          <li>Remove or alter any copyright notices</li>
          <li>Use our trademarks without authorization</li>
        </ul>

        <h2>6. Privacy</h2>
        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>

        <h2>7. Disclaimers</h2>
        <p>Planet TV is provided "as is" without warranties of any kind. We disclaim all warranties, including:</p>
        <ul>
          <li>Merchantability and fitness for a particular purpose</li>
          <li>Uninterrupted or error-free operation</li>
          <li>Compatibility with all devices or systems</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>

        <h2>9. Updates and Modifications</h2>
        <p>We reserve the right to:</p>
        <ul>
          <li>Update or modify the App at any time</li>
          <li>Change these Terms and Conditions with notice</li>
          <li>Discontinue the App or any features</li>
        </ul>

        <h2>10. Termination</h2>
        <p>We may terminate or suspend your access to the App at any time for violation of these terms or for any other reason at our discretion.</p>

        <h2>11. Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts.</p>

        <h2>12. Contact Information</h2>
        <p>For questions about these Terms and Conditions, please contact us at:</p>
        <p>Email: <a href="mailto:legal@planettv.app">legal@planettv.app</a></p>

        <h2>13. Severability</h2>
        <p>If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2024 Planet TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
};

// Router functionality
function showPage(pageName) {
  const app = document.querySelector("#app");
  const pageContent = pages[pageName] || pages.home;

  app.innerHTML = `<div class="page">${pageContent}</div>`;

  // Add active class for animation
  setTimeout(() => {
    document.querySelector(".page").classList.add("active");
  }, 50);

  // Update URL without page reload
  history.pushState({ page: pageName }, "", `#${pageName}`);

  // Attach event listeners to new navigation links
  attachNavListeners();
}

function attachNavListeners() {
  document.querySelectorAll("[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      showPage(page);
    });
  });
}

// Handle browser back/forward buttons
window.addEventListener("popstate", (e) => {
  const page = e.state?.page || "home";
  showPage(page);
});

// Initialize the app
function init() {
  const hash = window.location.hash.slice(1);
  const initialPage = hash && pages[hash] ? hash : "home";
  showPage(initialPage);
}

// Start the application
init();
