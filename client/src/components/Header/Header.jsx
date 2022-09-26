// import Esports from "../../assets/Esports.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div id="navbar">
      {/* <img id="logo" src={Esports} alt="logo" /> */}
      <div id="search-container">
        <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
        <input id="searchbar" type="search" placeholder="Search"></input>
      </div>
    </div>
  );
}