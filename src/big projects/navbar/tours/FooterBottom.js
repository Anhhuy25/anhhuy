import React from 'react';

const FooterBottom = () => {
  return (
    <div className="grid wide">
      <div className="row row-bottom">
        <div className="col l-8 m-12">
          <div className="footer-bottom-winner">
            <span>
              <img className="img-winner" src="https://res.ivivu.com/hotel/img/ivv-agency-winner.svg" alt="winner" />
            </span>
            <b>iVIVU.com © 2020 - Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam 2020</b>
          </div>

          <div className="footer-bottom-location disappear">
            <p>DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch đầu tư thành phố Hồ Chí Minh</p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <b>HCM: </b> Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh (Xem bản đồ)
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <b>HN: </b> Tầng 12, 70-72 Bà Triệu, Quận Hoàn Kiếm, Hà Nội (Xem bản đồ)
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <b>Cần Thơ: </b> Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ (Xem bản đồ)
            </p>
          </div>

          <div className="footer-bottom-like disappear">
            <span className="footer-bottom-paragraph">Like để cập nhật cẩm nang du lịch</span>
            <button className="footer-bottom-btn"><i className="fas fa-thumbs-up"></i>Thich</button>
            <span className="footer-bottom-email"><i className="fas fa-envelope"></i>tc@ivivu.com</span>
          </div>

          <div className="footer-bottom-social-icon disappear">
            <a href="#/"><img className="footer-bottom-social-img" src="https://res.ivivu.com/hotel/img/home/icon/facebook.svg" alt="facebook" /></a>
            <a href="#/"><img className="footer-bottom-social-img" src="https://res.ivivu.com/hotel/img/home/icon/ic_zalo.svg" alt="zalo" /></a>
            <a href="#/"><img className="footer-bottom-social-img" src="https://res.ivivu.com/hotel/img/home/icon/ic_insta.svg" alt="instagram" /></a>
            <a href="#/"><img className="footer-bottom-social-img" src="https://res.ivivu.com/hotel/img/home/icon/twitter.svg" alt="twitter" /></a>
          </div>
        </div>


        <div className="col l-4 m-12 c-12">
          <p className="footer-bottom-help"><strong>Bạn cần trợ giúp? Hãy gọi ngay</strong></p>
          <p className="footer-bottom-contact-cs">
            <i className="fas fa-phone-alt"></i>
            <strong>CSKH</strong>: (028) 3933 8002
          </p>
          <p className="footer-bottom-contact-hotline">
            <i className="fas fa-phone-alt"></i>
            <strong>Hotline</strong>: 0906 355 542
          </p>
          <p className="footer-bottom-contact-clock">
            <i className="fas fa-clock"></i>
              Từ 8h30 - 18h hằng ngày
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;