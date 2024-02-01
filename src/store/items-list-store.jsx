import { createContext, useState, useContext } from "react";
import { DEFAULT_ITEMS } from "../../data/items";

export const MyntraContext = createContext({
  itemsList: [],
  bagItemsList: [],
  wishlistItemsList: [],
  empty: () => {},
  addItem: () => {},
  deleteItem: () => {},
  addWishlist: () => {},
  removeFromWishlist: () => {},
  search: "",
  setSearch: () => {},
  session: false,
  setSession: () => {},
});

const MyntraProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState(DEFAULT_ITEMS);
  const [bagItemsList, setBagItemsList] = useState([]);
  const [wishlistItemsList, setWishlistItemsList] = useState([]);
  const [search, setSearch] = useState("");
  const [session, setSession] = useState(false);

  const addItem = (item) => {
    // Add item to bag
    setBagItemsList((prevBagItems) => [...prevBagItems, item]);
  };
  const addWishlist = (item) => {
    setWishlistItemsList((prevWishlistItems) => [item, ...prevWishlistItems]);
  };

  const empty = () => {
    setBagItemsList((prevBagItems) => []);
    setWishlistItemsList((prevWishlistItems) => []);
  };
  const deleteItem = (itemId) => {
    // Remove item from bag
    setBagItemsList((prevBagItems) =>
      prevBagItems.filter((item) => item.id !== itemId)
    );
  };
  const removeFromWishlist = (itemId) => {
    setWishlistItemsList((prevWishlistItems) =>
      prevWishlistItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <MyntraContext.Provider
      value={{
        itemsList,
        wishlistItemsList,
        bagItemsList,
        search,
        addItem,
        deleteItem,
        addWishlist,
        removeFromWishlist,
        setSearch,
        session,
        setSession,
        empty,
      }}
    >
      {children}
    </MyntraContext.Provider>
  );
};
export default MyntraProvider;

export const useMyntra = () => {
  return useContext(MyntraContext);
};
