"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg text-center w-48">
      <p className="mb-2">Jumlah: {count} </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-3 py-1 rounded-lg"
      >
        Tambah
      </button>
    </div>
  );
}
