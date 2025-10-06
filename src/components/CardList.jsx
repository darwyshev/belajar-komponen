import Card from "./Card";

export default function CardList() {
  const products = [
    { id: 1, name: "Laptop", price: 8000000 },
    { id: 2, name: "Mouse", price: 100000 },
    { id: 3, name: "Keyboard", price: 200000 },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((item) => (
        <Card key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
}
