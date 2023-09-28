import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3 className="footerTitle">customer services</h3>

            <ul className="footerList">
              <li className="footerItem">
                <Link to="/">Help & Contact Us</Link>
              </li>

              <li className="footerItem">
                <Link to="/">Return & Refund</Link>
              </li>
              <li className="footerItem">
                <Link to="/">online stores</Link>
              </li>
              <li className="footerItem">
                <Link to="/">terms & conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="footerTitle">company</h3>

            <ul className="footerList">
              <li className="footerItem">
                <Link to="/">what we do </Link>
              </li>

              <li className="footerItem">
                <Link to="/">available service</Link>
              </li>
              <li className="footerItem">
                <Link to="/">latest post</Link>
              </li>
              <li className="footerItem">
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="footerTitle">social media</h3>

            <ul className="footerList">
              <li className="footerItem">
                <Link to="/">twitter</Link>
              </li>

              <li className="footerItem">
                <Link to="/">instagram</Link>
              </li>
              <li className="footerItem">
                <Link to="/">facebook</Link>
              </li>
              <li className="footerItem">
                <Link to="/">pinterest</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
