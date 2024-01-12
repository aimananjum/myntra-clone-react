import { useMyntra } from "../store/items-list-store";

const HomeItem = ({ item }) => {
  const { bagItemsList, addItem, deleteItem } = useMyntra();

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

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
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
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-danger"
          onClick={handleRemoveFromBag}
        >
          Remove from Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
