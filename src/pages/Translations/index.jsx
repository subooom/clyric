import TranslationCard from "../../components/TranslationCard";
import data from "./data";

const Translations = () => {
  return (
    <>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4">
            <TranslationCard key={item.id} {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Translations;
