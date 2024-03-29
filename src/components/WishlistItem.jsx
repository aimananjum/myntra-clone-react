import { useMyntra } from "../store/items-list-store";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { IoStar } from "react-icons/io5";
import { toast } from "react-toastify";

const WishlistItem = ({ item }) => {
  const { bagItemsList, wishlistItemsList, addItem, removeFromWishlist } =
    useMyntra();

  const isItemInBag = bagItemsList.some((bagItem) => bagItem.id === item.id);
  const isItemInWishlist = wishlistItemsList.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const handleAddToBag = () => {
    if (!isItemInBag) {
      addItem(item);
    }
  };

  const handleRemoveFromWishlist = (event) => {
    removeFromWishlist(item.id);
    event.preventDefault();
    event.stopPropagation();
  };
  const notify = (msg) => toast(msg, { className: "toast-message" });
  return (
    <div className="item-container paddingbtm">
      <Link
        to={`/myntra-clone-react/item-details/${item.id}`}
        className="link-overlay"
      >
        {/* Empty Link overlay to capture clicks */}
      </Link>

      <div className="wishlist-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div
          className="wishlist-top-right"
          onClick={(event) => {
            handleRemoveFromWishlist(event);
            notify("Removed!");
          }}
        >
          <TiDeleteOutline />
        </div>
        <div className="bottom-left">
          <div className="rating">
            {item.rating.stars} <IoStar className="star" /> |{" "}
            {item.rating.count}
          </div>
        </div>
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {isItemInBag ? (
        <button type="button" className="moved-to-bag" disabled>
          MOVED TO BAG
        </button>
      ) : (
        <button
          type="button"
          className="move-to-bag"
          onClick={() => {
            handleAddToBag();
            notify("Moved!");
          }}
        >
          MOVE TO BAG
        </button>
      )}
    </div>
  );
};

export default WishlistItem;
