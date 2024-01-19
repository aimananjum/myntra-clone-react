import { useMyntra } from "../store/items-list-store";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const { wishlistItemsList } = useMyntra();
  console.log(wishlistItemsList);
  return (
    <div className="items-container">
      {wishlistItemsList.map((item) => (
        <WishlistItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Wishlist;
