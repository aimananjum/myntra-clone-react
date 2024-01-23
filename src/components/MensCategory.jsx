import HomeItem from "../components/HomeItem";
import { useMyntra } from "../store/items-list-store";

const MensCategory = () => {
  const { itemsList, search } = useMyntra();

  return (
    <main>
      <div className="items-container">
        {itemsList
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.item_name.toLowerCase().includes(search) ||
                  item.company.toLowerCase().includes(search);
          })
          .map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
      </div>
    </main>
  );
};
export default MensCategory;
