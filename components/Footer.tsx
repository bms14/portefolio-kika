export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-black px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
    >
      <p className="text-sm">Francisca Alemão © 2026</p>
      <a
        href="mailto:hello@franciscaalemao.com"
        className="text-sm hover:opacity-60 transition-opacity"
      >
        hello@franciscaalemao.com
      </a>
    </footer>
  );
}
