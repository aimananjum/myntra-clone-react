import { useMyntra } from "../store/items-list-store";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeItem = ({ item }) => {
  const notify = (msg) => toast(msg, { className: "toast-message" });
  const {
    bagItemsList,
    wishlistItemsList,
    addItem,
    deleteItem,
    addWishlist,
    removeFromWishlist,
  } = useMyntra();

  const isItemInBag = bagItemsList.some((bagItem) => bagItem.id === item.id);

  const handleAddToBag = () => {
    if (!isItemInBag) {
      addItem(item);
    }
  };

  const handleRemoveFromBag = () => {
    if (isItemInBag) {
      deleteItem(item.id);
    }
  };

  const isItemInWishlist = wishlistItemsList.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const handleAddToWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isItemInWishlist) {
      removeFromWishlist(item.id);
    } else {
      addWishlist(item);
    }
  };

  return (
    <>
      <div className="item-container">
        <Link
          to={`/myntra-clone-react/item-details/${item.id}`}
          className="link-overlay"
        ></Link>

        <div className="wishlist-container">
          <img className="item-image" src={item.image} alt="item image" />

          <div className="bottom-left">
            <div className="rating">
              {item.rating.stars} <IoStar className="star" /> |
              {item.rating.count}
            </div>
          </div>
          <div
            // className={`top-right ${isItemInWishlist ? "colored-heart" : ""}`}
            className="top-right"
            onClick={(event) => handleAddToWishlist(event)}
          >
            <FaHeart
              color={isItemInWishlist ? "#ff3f6c" : "white"}
              onClick={() =>
                isItemInWishlist ? notify("Removed") : notify("Wishlisted")
              }
            />
          </div>
        </div>

        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {!isItemInBag ? (
          <button
            type="button"
            className="move-to-bag"
            onClick={() => {
              handleAddToBag();
              notify("Added to bag");
            }}
          >
            ADD TO BAG
          </button>
        ) : (
          <button
            type="button"
            className="moved-to-bag"
            onClick={() => {
              handleRemoveFromBag();
              notify("Removed");
            }}
          >
            REMOVE FROM BAG
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
