import coderLogo from "./coder.png";

function FootC() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <img
        src={coderLogo}
        width="50"
        height="50"
        className="uLogo"
        alt="Ugit Logo"
      />
      <p>Copyright &copy; {year} Amr K. | Built with React.</p>
    </div>
  );
}

export default FootC;
