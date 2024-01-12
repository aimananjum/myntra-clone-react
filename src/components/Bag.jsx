import BagSummary from "../components/BagSummary";
import BagItems from "../components/BagItems";
import { useMyntra } from "../store/items-list-store";

const Bag = () => {
  const { bagItemsList } = useMyntra();
  const finalItems = bagItemsList;
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems key={item.id} item={item} />
          ))}
        </div>

        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
