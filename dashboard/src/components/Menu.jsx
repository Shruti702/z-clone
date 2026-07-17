import { Link } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfile, setIsProfile] = useState(false);

  function handleClick(index) {
    setSelectedMenu(index);
  }

  function handlePClick() {
    setIsProfile(!isProfile);
  }

  const mnc = "menu";
  const ac = "menu selected";

  return (
    <div className="menu-container">
      <img src="./logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleClick(0)}
            >
              <p className={selectedMenu === 0 ? ac : mnc}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(1)}
              to="/orders"
            >
              <p className={selectedMenu === 1 ? ac : mnc}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(2)}
              to="/holdings"
            >
              <p className={selectedMenu === 2 ? ac : mnc}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(3)}
              to="/positions"
            >
              <p className={selectedMenu === 3 ? ac : mnc}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(4)}
              to="funds"
            >
              <p className={selectedMenu === 4 ? ac : mnc}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleClick(5)}
              to="/apps"
            >
              <p className={selectedMenu === 5 ? ac : mnc}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handlePClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
