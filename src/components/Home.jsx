import HomeItem from "../components/HomeItem";
import { useMyntra } from "../store/items-list-store";

const Home = () => {
  const { itemsList } = useMyntra();

  return (
    <main>
      <div className="items-container">
        {itemsList.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;
