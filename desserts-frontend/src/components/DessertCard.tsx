import AddToCartButton from "./AddToCartButton";

export type DessertCardProp = {
  name: string;
  category: string;
  price: number;
  image?: {
    thumnbail?: string;
    mobile?: string;
    tablet?: string;
    desktop: string;
  };
};

const DessertCard = (props: DessertCardProp) => {
  return (
    <div className="dessert-card">
      <img src={props.image?.desktop} alt="" />
      <AddToCartButton />
      <h4>{props.category}</h4>
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>
    </div>
  );
};

export default DessertCard;
