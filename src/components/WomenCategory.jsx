import HomeItem from "./HomeItem";
import { useMyntra } from "../store/items-list-store";

const WomenCategory = () => {
  const { itemsList, search } = useMyntra();
  console.log(itemsList);
  return (
    <main>
      <div className="items-container">
        {itemsList
          .filter((item) => {
            return item.category === "women";
          })
          .map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
      </div>
    </main>
  );
};
export default WomenCategory;
