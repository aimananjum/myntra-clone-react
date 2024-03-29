import HomeItem from "../components/HomeItem";
import { useMyntra } from "../store/items-list-store";

const MensCategory = () => {
  const { itemsList, search } = useMyntra();
  console.log(itemsList);
  return (
    <main>
      <div className="items-container">
        {itemsList
          .filter((item) => {
            return item.category === "men";
          })
          .map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
      </div>
    </main>
  );
};
export default MensCategory;
