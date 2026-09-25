export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-name">Michael Nyawade</p>

        <p className="footer-copyright">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}