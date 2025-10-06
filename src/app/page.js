import Button from "../components/Button";
import Counter from "@/components/Counter";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button label="Simpan" color="blue" />
      <Button label="Hapus" color="red" />
      <Counter />
      <CardList />
    </main>
  );
}
