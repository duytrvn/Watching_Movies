// import SearchIcon from "../../assets/svg/seachIcon";
import "../../assets/css/header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper_header">
        <h1 className="logo">DuyDev</h1>
        <form className="form_search">
          <input type="text" placeholder="Tìm tên phim , diễn viên..." className="input_search"/>
          <button className="btn_search">
          <i className="fas fa-search"></i>
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
