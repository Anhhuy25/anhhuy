import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import { reducer } from "./reducer";
import listMeal from "../ListMeal";
import "./lunchlist.css";
import "../../../grid.css";

// Components
import NavbarEating from "../NavbarEating";
import FooterTop from "../../tours/FooterTop";
import FooterBottom from "../FooterBottom";
import img from "../../../img/Eating/lunch/trung duc thit 1____horizontal-730x456.png";

// localStorage Default State
const getLocalStorageDefaultState = () => {
  let stateNo3 = localStorage.getItem("stateNo3");
  if (stateNo3) {
    return JSON.parse(localStorage.getItem("stateNo3"));
  } else {
    return {
      price: 0,
      dayPerWeek: 0,
      quantity: 1,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false,
      isChecked6: false,
      checkRice: false,
      checkSpoonChopstick: false,
      checkBlackCoffee: false,
      checkLemonTea: false,
      checkMilkCoffee: false,
      quantityRice: 0,
      quantitySpoonChopstick: 0,
      quantityBlackCoffee: 0,
      quantityLemonTea: 0,
      quantityMilkCoffee: 0,
    };
  }
};

const MealNo3 = () => {
  const [stateNo3, dispatch] = useReducer(reducer, getLocalStorageDefaultState());
  const [filterMeal, setFilterMeal] = useState(listMeal);
  const [showRequire, setShowRequire] = useState(false);
  const [showPickDay, setShowPickDay] = useState(false);
  const { listCart, setListCart } = useGlobalContext();

  useEffect(() => {
    const mealChoose = filterMeal.find((meal) => meal.to === "bua-trua-dam-da-vi-bac-standard");
    setFilterMeal(mealChoose);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (showRequire) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showRequire]);
  useEffect(() => {
    if (showPickDay) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showPickDay]);
  useEffect(() => {
    localStorage.setItem("stateNo3", JSON.stringify(stateNo3));
  }, [stateNo3]);

  const { id, mealName, rating, description, chefImg, chefName, restaurantName, price, to } = filterMeal;

  const handleChange = (type) => {
    if (document.getElementById(type).checked) {
      dispatch({ type: "SAVE_CHECKED", payload: type });
    } else {
      dispatch({ type: "UNSAVE_CHECKED", payload: type });
    }
  };

  const handleClick = (type) => {
    if (document.getElementById(type).checked) {
      dispatch({ type: "CLICK", payload: type });
    } else {
      dispatch({ type: "UN_CLICK", payload: type });
    }
  };

  const decreaseMeal = () => {
    if (stateNo3.quantity <= 1) {
      dispatch({ type: "EQUAL_1" });
    } else {
      dispatch({ type: "DECREASE" });
    }
  };
  const increaseMeal = () => {
    if (stateNo3.quantity >= 50) {
      dispatch({ type: "EQUAL_50" });
    } else {
      dispatch({ type: "INCREASE" });
    }
  };

  const addCart = (id) => {
    setListCart([
      ...listCart,
      {
        ...filterMeal,
        id: id + new Date().getTime().toString(),
        quantity: 1,
        price: stateNo3.price,
        dayPerWeek: stateNo3.dayPerWeek,
      },
    ]);
  };

  return (
    <>
      <NavbarEating />
      <div className='lunchlist-container'>
        <div className='grid wide'>
          <div className='row'>
            {/* Breadcrumbs */}
            <nav className='col l-12 m-12 c-12'>
              <ul className='lunchlist-navbar'>
                <li className='lunchlist-item'>
                  <Link className='lunchlist-link' to='/an-uong'>
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li className='lunchlist-item'>
                  <Link className='lunchlist-link' to='/an-uong'>
                    <span>Combo bữa trưa</span>
                  </Link>
                </li>
                <li className='lunchlist-item'>
                  <Link className='lunchlist-choose' to={`${to}`}>
                    <span>{mealName}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Name */}
            <div className='col l-12 m-12 c-12'>
              <h2 className='lunchlist-name'>{mealName}</h2>
            </div>
            <div className='col l-8 m-12 c-12'>
              {/* Rating and Price */}
              <div className='lunchlist-ratingprice'>
                {rating !== undefined ? (
                  <p className='lunchlist-rating'>
                    {rating.map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))}
                  </p>
                ) : (
                  ""
                )}
                <p>
                  {price !== undefined ? <span>{price.toLocaleString()}</span> : ""}
                  <span> đ/tuần</span>
                </p>
              </div>
            </div>
            {/* Info */}
            <div className='col l-8 m-12 c-12'>
              {/* Image and Description */}
              <div className='lunchlist-imgdesc'>
                {description && <span>{description}</span>}
                <img src={img} alt={mealName} className='lunchlist-img' />
              </div>

              {/* Introduce */}
              <div className='lunchlist-introduce'>
                <div className='row'>
                  <div className='col l-6 m-12 c-12'>
                    <div className='lunchlist-whychoose'>
                      <h3>Tại sao bạn nên chọn gói này?</h3>
                      <p>
                        Bạn sẽ được thưởng thức những món ngon chuẩn vị Bắc, ít dầu mỡ như: Trứng đúc hẹ, cá basa kho
                        tiêu, mướp đắng xào thịt, cá quả kho nghệ… ăn kèm với món canh su hào nấu thịt, canh cá nấu
                        măng, canh cải xanh gừng thịt, canh bí đỏ nấu thịt, canh cải thảo nấu thịt...
                      </p>
                      <p>
                        Nổi bật trong thực đơn ăn trưa tuần này là món là gà rang gừng với sự kết hợp hoàn hảo giữa thịt
                        gà mềm thơm, đậm đà hòa quyện với vị cay cay, nồng nồng của gừng cực kỳ đưa cơm, cung cấp nhiều
                        protein mang đến cho bạn bữa ăn trưa bổ dưỡng.
                      </p>
                      <p>
                        Ngoài ra bữa trưa cũng không thể thiếu những món rau thanh mát được đổi vị mỗi ngày: Rau cải
                        xoong xào tỏi, bầu xào nghêu, bầu luộc,… mang đến bữa trưa ngon miệng.
                      </p>
                    </div>
                  </div>

                  <div className='col l-6 m-12 c-12'>
                    <div className='lunchlist-designed'>
                      <h3>Thực đơn được thiết kế bởi</h3>
                      <div className='lunchlist-chefinfo'>
                        <img src={chefImg} alt={chefName} className='chef-img' />
                        <p>{chefName}</p>
                        <p>{restaurantName}</p>
                      </div>
                      <p className='lunclist-chefdesc'>
                        Chu Anh Tiệp Với kinh nghiệm 15 năm trong nghề, từng làm ở nhiều khách sạn 5 sao quốc tế như:
                        InterContinental Hanoi Westlake, Mövenpick Hotel Hanoi... đầu bếp Chu Anh Tiệp có sở trường về
                        những món Âu, Á và đặc biệt là những đặc sản vùng miền. Chắc chắn thực đơn do đầu bếp Chu Anh
                        Tiệp thiết kế sẽ mang đến cho thực khách những món chuẩn vị miền Bắc thanh tao, tròn vị kèm
                        những biến tấu đặc biệt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Week */}
              <div className='lunchlist-menuweek'>
                <div className='menuweek'>
                  <h3>
                    Thực đơn tuần
                    <span>
                      15.02 <i className='fas fa-arrow-right'></i> 19.02
                    </span>
                  </h3>
                  <button onClick={() => setShowPickDay(true)}>Thay đổi</button>
                </div>
                {showPickDay && (
                  <div className={`modal-overlay ${showPickDay ? "show-modal" : ""}`}>
                    <div className='lunchlist-pickdayform'>
                      <i onClick={() => setShowPickDay(false)} className='fas fa-times'></i>
                      <h3>Bỏ bớt ngày không phù hợp</h3>
                      <p>Thứ 2, 15.02 → Thứ 6, 19.02</p>
                      <div>
                        <input
                          id='monday'
                          type='checkbox'
                          checked={stateNo3.isChecked2}
                          onChange={() => handleChange("monday")}
                          onClick={() => handleClick("monday")}
                        />
                        <label htmlFor='monday'>
                          <p>Thứ 2 · Thịt gà rang gừng</p>
                          <p>· Rau cải xoong xào tỏi · Canh cải thảo nấu thịt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='tuesday'
                          type='checkbox'
                          checked={stateNo3.isChecked3}
                          onChange={() => handleChange("tuesday")}
                          onClick={() => handleClick("tuesday")}
                        />
                        <label htmlFor='tuesday'>
                          <p>Thứ 3 · Trứng đúc hẹ</p>
                          <p>· Bầu xào nghêu · Canh bí đỏ nấu thịt </p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='wednesday'
                          type='checkbox'
                          checked={stateNo3.isChecked4}
                          onChange={() => handleChange("wednesday")}
                          onClick={() => handleClick("wednesday")}
                        />
                        <label htmlFor='wednesday'>
                          <p>Thứ 4 · Cá basa kho tiêu</p>
                          <p>· Đậu bắp luộc · Canh cải xanh gừng thịt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='thursday'
                          type='checkbox'
                          checked={stateNo3.isChecked5}
                          onChange={() => handleChange("thursday")}
                          onClick={() => handleClick("thursday")}
                        />
                        <label htmlFor='thursday'>
                          <p>Thứ 5 · Mướp đắng xào thịt</p>
                          <p>· Đậu hũ chiên sả · Canh bí xanh nấu thịt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='friday'
                          type='checkbox'
                          checked={stateNo3.isChecked6}
                          onChange={() => handleChange("friday")}
                          onClick={() => handleClick("friday")}
                        />
                        <label htmlFor='friday'>
                          <p>Thứ 6 · Cá quả kho nghệ</p>
                          <p>· Dưa leo tươi · Canh su hào nấu thịt</p>
                        </label>
                      </div>
                      <div className='lunchlist-pickdayformtotal'>
                        <p>Tổng cộng</p>
                        <p>
                          <span>{stateNo3.price.toLocaleString()} </span>
                          <span> đ/ {stateNo3.dayPerWeek >= 5 ? "tuần" : `${stateNo3.dayPerWeek} ngày`}</span>
                        </p>
                      </div>
                      <div className='lunchlist-pickdayformbtn'>
                        <button onClick={() => setShowPickDay(false)}>Huỷ</button>
                        <button onClick={() => setShowPickDay(false)}>Xác nhận</button>
                      </div>
                    </div>
                  </div>
                )}
                <div className='row'>
                  <div className={`col l-2-4 m-2-4 c-12`}>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 2 15.02</span>
                      </div>
                      <h5>
                        Thịt gà <br /> rang gừng
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Rau cải xoong <br /> xào tỏi
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh cải thảo <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 3 16.02</span>
                      </div>
                      <h5>
                        Trứng <br /> đúc hẹ
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Bầu <br /> xào nghêu
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh bí đỏ <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 4 17.02</span>
                      </div>
                      <h5>
                        Cá basa <br /> kho tiêu
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Đậu bắp <br /> luộc
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh cải xanh <br /> gừng thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 5 18.02</span>
                      </div>
                      <h5>
                        Mướp đắng <br /> xào thịt
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Đậu hủ <br /> chiên xả
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh bí xanh <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 6 19.02</span>
                      </div>
                      <h5>
                        Cá quả <br /> kho nghệ
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Dưa leo <br /> tươi
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh su hào <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className='lunchlist-delivery'>
                <h3>Phương thức giao hàng</h3>
                <p>Bữa trưa được đóng gói trong khay nhựa thực phẩm ngay trước khi giao</p>
                <p>Giao hàng miễn phí từ 11h15 đến 12h00 hàng ngày tại các khu vực:</p>
                <p>
                  <b>Hồ Chí Minh</b>: Quận 1, Quận 10, Quận 11, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8,
                  Quận Bình Thạnh, Quận Gò Vấp, Quận Phú Nhuận, Quận Tân Bình, Quận Tân Phú.
                </p>
                <p>
                  Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách
                  trong thời gian sớm nhất.
                </p>
                <p onClick={() => setShowRequire(true)}>
                  Yêu cầu giao khu vực khác
                  <i className='fas fa-angle-right'></i>
                </p>
              </div>
              {showRequire && (
                <div className={`modal-overlay ${showRequire ? "show-modal" : ""}`}>
                  <div className='lunchlist-sendrequire'>
                    <i onClick={() => setShowRequire(false)} className='fas fa-times'></i>
                    <h3>Yêu cầu giao khu vực khác</h3>
                    <div>
                      <label htmlFor=''>Tên đầy đủ *</label>
                      <input type='text' />
                    </div>
                    <div>
                      <label htmlFor=''>Số di động</label>
                      <input type='text' />
                    </div>
                    <div>
                      <label htmlFor=''>Email</label>
                      <input type='email' />
                    </div>
                    <div>
                      <label htmlFor=''>Địa chỉ giao hàng</label>
                      <input type='text' />
                    </div>
                    <button>Gửi yêu cầu</button>
                  </div>
                </div>
              )}
            </div>

            {/* Price Table */}
            <div className='col l-4 m-12 c-12'>
              <div className='lunchlist-pricetable'>
                <div className='lunchlist-firsttable'>
                  <h4>
                    Thực đơn tuần thứ 2, 15.02
                    <i className='fas fa-arrow-right'></i> thứ 6, 19.02
                  </h4>
                  <div>
                    <div className='lunchlist-quantity'>
                      <button disabled={stateNo3.price === 0} onClick={decreaseMeal}>
                        -
                      </button>
                      <span className='lunchlist-quantitypart'>{stateNo3.quantity}</span>
                      <button disabled={stateNo3.price === 0} onClick={increaseMeal}>
                        +
                      </button>
                      <span className='lunchlist-part'>Phần</span>
                    </div>
                    <div className='lunchlist-tools'>
                      <div className='lunchlist-morerice'>
                        <div>
                          <input
                            type='checkbox'
                            id='morerice'
                            disabled={stateNo3.price === 0}
                            checked={stateNo3.checkRice}
                            onChange={() => handleChange("morerice")}
                            onClick={() => handleClick("morerice")}
                          />
                          <label htmlFor='morerice'>Cơm thêm</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                      <div className='lunchlist-spoonchopstick'>
                        <div>
                          <input
                            type='checkbox'
                            id='spoonchopstick'
                            disabled={stateNo3.price === 0}
                            checked={stateNo3.checkSpoonChopstick}
                            onChange={() => handleChange("spoonchopstick")}
                            onClick={() => handleClick("spoonchopstick")}
                          />
                          <label htmlFor='spoonchopstick'>Muỗng đũa</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='lunchlist-secondtable'>
                  <p>Nước uống dùng kèm</p>
                  <div className='lunchlist-blackcoffee'>
                    <div>
                      <input
                        type='checkbox'
                        id='blackcoffee'
                        disabled={stateNo3.price === 0}
                        checked={stateNo3.checkBlackCoffee}
                        onChange={() => handleChange("blackcoffee")}
                        onClick={() => handleClick("blackcoffee")}
                      />
                      <label htmlFor='blackcoffee'>Cafe đen</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className='lunchlist-lemontea'>
                    <div>
                      <input
                        type='checkbox'
                        id='lemontea'
                        disabled={stateNo3.price === 0}
                        checked={stateNo3.checkLemonTea}
                        onChange={() => handleChange("lemontea")}
                        onClick={() => handleClick("lemontea")}
                      />
                      <label htmlFor='lemontea'>Trà chanh</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className='lunchlist-milkcoffee'>
                    <div>
                      <input
                        type='checkbox'
                        id='milkcoffee'
                        disabled={stateNo3.price === 0}
                        checked={stateNo3.checkMilkCoffee}
                        onChange={() => handleChange("milkcoffee")}
                        onClick={() => handleClick("milkcoffee")}
                      />
                      <label htmlFor='milkcoffee'>Cafe sữa</label>
                    </div>
                    <div>
                      <span>+ 15.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                </div>
                <div className='lunchlist-thirdtable'>
                  <div className='lunchlist-totalprice'>
                    <span>Tổng cộng</span>
                    <p>
                      <span className='lunchlist-total'>{stateNo3.price.toLocaleString()}</span>
                      <span> đ/ {stateNo3.dayPerWeek >= 5 ? "tuần" : `${stateNo3.dayPerWeek} ngày`}</span>
                    </p>
                  </div>
                  <div className='lunchlist-btnaddorder'>
                    <button
                      disabled={stateNo3.price === 0}
                      className={`${stateNo3.price === 0 ? "btnadd-ban" : "lunchlist-btnadd"}`}
                      onClick={() => addCart(id)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      disabled={stateNo3.price === 0}
                      className={`${stateNo3.price === 0 ? "btnorder-ban" : "lunchlist-btnorder"}`}
                    >
                      Đặt ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f9f9f9", padding: "0 8px" }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default MealNo3;
