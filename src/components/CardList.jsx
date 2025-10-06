export default function CardList() {
  const products = [
    { id: 1, name: "Laptop", price: 8000000 },
    { id: 2, name: "Mouse", price: 100000 },
    { id: 3, name: "Keyboard", price: 200000 },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow">
          <h2 className="font-bold">{item.name}</h2>
          <p>Rp {item.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
