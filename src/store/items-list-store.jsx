import { createContext, useState, useContext } from "react";
import { DEFAULT_ITEMS } from "../../data/items";

export const MyntraContext = createContext({
  itemsList: [],
  bagItemsList: [],
  addItem: () => {},
  deleteItem: () => {},
});

const MyntraProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState(DEFAULT_ITEMS);
  const [bagItemsList, setBagItemsList] = useState([]);

  const addItem = (item) => {
    // Add item to bag
    setBagItemsList((prevBagItems) => [...prevBagItems, item]);
  };

  const deleteItem = (itemId) => {
    // Remove item from bag
    setBagItemsList((prevBagItems) =>
      prevBagItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <MyntraContext.Provider
      value={{ itemsList, bagItemsList, addItem, deleteItem }}
    >
      {children}
    </MyntraContext.Provider>
  );
};
export default MyntraProvider;

export const useMyntra = () => {
  return useContext(MyntraContext);
};
