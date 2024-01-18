import { useParams } from "react-router-dom";
import { useMyntra } from "../store/items-list-store";
import { BsTruck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { FaTruckFast } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";

const ItemDetails = () => {
  const { itemsList } = useMyntra();
  const { id } = useParams();
  function finditem(item) {
    return item.id === id;
  }

  var item = itemsList.find(finditem);
  console.log(item);
  return (
    <div className="parent-container">
      <div className="left-container">
        <img className="item-image" src={`../${item.image}`} alt="item image" />
        <img className="item-image" src={`../${item.image}`} alt="item image" />
        <img className="item-image" src={`../${item.image}`} alt="item image" />
        <img className="item-image" src={`../${item.image}`} alt="item image" />

        <img className="item-image" src={`../${item.image}`} alt="item image" />
      </div>
      <div className="right-container">
        <div className="company-name1">{item.company}</div>
        <div className="item-name1">{item.item_name}</div>
        <div className="rating1">
          <div className="innerdiv">
            {item.rating.stars} ⭐ | {item.rating.count} Ratings
          </div>
        </div>
        <hr />

        <div className="price1">
          <span className="current-price1">Rs {item.current_price}</span>
          <span className="original-price1">Rs {item.original_price}</span>
          <span className="discount1">({item.discount_percentage}% OFF)</span>
        </div>
        <div className="tax">inclusive of all taxes</div>

        <div className="size-div">
          <div className="size-title">SELECT SIZE</div>
          <div className="options">
            <button className="rounded-circle op">XS</button>
            <button className="rounded-circle op">S</button>
            <button className="rounded-circle op">M</button>
            <button className="rounded-circle op">L</button>
          </div>
        </div>

        <div className="button-div">
          <button className="add-to-bag-btn">
            <FaShoppingCart />
            <span>ADD TO BAG</span>
          </button>
          <button className="wishlist-btn">
            <FaRegHeart />
            <span> WISHLIST</span>
          </button>
        </div>

        <hr />

        <div className="delivery-options">
          <div className="delivery-heading">
            DELIVERY OPTIONS
            <span>
              <BsTruck />
            </span>
          </div>
          <div className="delivery-address">
            <div className="del-name">
              <span>
                234567 (User Name ) <FcApproval />
              </span>
              <button>Change</button>
            </div>
          </div>
          <div className="all-options">
            <div className="option1">
              <FaTruckFast />
              <span>Get it by Mon, Jan 22</span>
            </div>
            <div className="option1">
              <BsCashCoin />
              <span>Pay on delivery available</span>
            </div>
            <div className="option1">
              <FaExchangeAlt />
              <span>Easy 14 days return & exchange available</span>
            </div>
          </div>
        </div>
        <div>100% Original Products</div>
        <div className="product-details">
          <p className="s-heading">PRODUCT DETAILS</p>
          <p className="p-description">
            White Tshirt for men Solid with minimal typography print Regular
            length Round neck Short, regular sleeves Knitted pure cotton fabric
          </p>
          <div className="size">
            <p className="s-heading">Size & Fit</p>
            <p>
              Regular Fit <br />
              The model (height 6') is wearing a size M
            </p>
          </div>
          <div className="specifications">
            <div className="s-heading">Specifications</div>

            <div className="row">
              <div className="col">
                <p>
                  Fabric <br /> <span className="s-list">Pure Cotton</span>
                </p>
                <hr />
                <p>
                  Length
                  <br /> <span className="s-list"> Regular</span>
                </p>
                <hr />
                <p>
                  Multipack Set
                  <br /> <span className="s-list">Single</span>
                </p>
                <hr />
                <p>
                  Occasion <br /> <span className="s-list">Casual</span>
                </p>
                <hr />
                <p>
                  Sleeve Length <br />{" "}
                  <span className="s-list">Short Sleeves</span>
                </p>
                <hr />
                <p>
                  Sustainable <br /> <span className="s-list">Regular</span>
                </p>
                <hr />
                <p>
                  Weave Type <br /> <span className="s-list">Knitted</span>
                </p>
                <hr />
              </div>
              <div className="col">
                <p>
                  Fit <br /> <span className="s-list"> Regular Fit</span>
                </p>
                <hr />
                <p>
                  Main Trend
                  <br /> <span className="s-list">New Basics</span>
                </p>
                <hr />
                <p>
                  Neck <br /> <span className="s-list">Round Neck</span>
                </p>
                <hr />
                <p>
                  Print or Pattern
                  <br /> <span className="s-list">Solid</span>
                </p>
                <hr />
                <p>
                  Sleeve Styling <br />{" "}
                  <span className="s-list">Regular Sleeves</span>
                </p>
                <hr />{" "}
                <p>
                  Wash Care
                  <br /> <span className="s-list">Machine Wash</span>
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
