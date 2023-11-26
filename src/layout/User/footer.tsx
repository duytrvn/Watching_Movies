import React from "react";
import "../../assets/css/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="wrapper_footer">
          <div className="logo_footer">
            <h1>DuyDev</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse non
              blanditiis repellat nisi rem reiciendis consequatur obcaecati at
              placeat, id sed velit possimus pariatur doloribus dolore
              architecto laboriosam dolorum saepe!Lorem
            </div>
          </div>
          <div className="menu_footer">
            <ul className="list-item">
              <p className="title">Phim Mới</p>
              <li className="item">
                <a href="#">Phim Khoa Học</a>
              </li>
              <li className="item">
                <a href="#">Phim Kinh Dị</a>
              </li>
              <li className="item">
                <a href="#">Phim Chiếu Rạp</a>
              </li>
              <li className="item">
                <a href="#">Phim Hình Sự</a>
              </li>
              <li className="item">
                <a href="#">Phim Hành Động</a>
              </li>
            </ul>
            <ul className="list-item">
              <p className="title">Phim hay</p>
              <li className="item">
                <a href="#">Phim Âu Mỹ</a>
              </li>
              <li className="item">
                <a href="#">Phim Hàn Quốc</a>
              </li>
              <li className="item">
                <a href="#">Phim Trung Quốc</a>
              </li>
              <li className="item">
                <a href="#">Phim Nhật Bản</a>
              </li>
              <li className="item">
                <a href="#">Phim Thái Lan</a>
              </li>
            </ul>
            <ul className="list-item">
              <p className="title">Thông tin</p>
              <li className="item">
                <a href="#">Giới Thiệu</a>
              </li>
              <li className="item">
                <a href="#">Liên hệ chúng tôi</a>
              </li>
              <li className="item">
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li className="item">
                <a href="#">Chính sách riêng tư</a>
              </li>
              <li className="item">
                <a href="#">Khiếu nại bản quyền</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="wrapper_footer">
          <div className="banquyen">&copy; Trần Văn Duy</div>
          <ul className="contact_list">
            <li className="contact_item">
              <a href="https://www.facebook.com/TrVnDuy.Info">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="contact_item">
              <a href="https://www.instagram.com/duy_dev/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="contact_item">
              <a href="https://www.tiktok.com/@tranvanduyy">
                <i className="fab fa-tiktok"></i>
              </a>
            </li>
            <li className="contact_item">
              <a href="https://github.com/duytrvn">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <div className="return">
              <i className="fas fa-angle-up"></i>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
