export default function Button({ label, color }) {
  const styles = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
  };

  return (
    <button className={`${styles[color]} text-white px-4 py-2 rounded-lg`}>
      {label}
    </button>
  );
}
