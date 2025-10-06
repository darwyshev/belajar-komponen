"use client";

import { useState } from "react";

export default function Card({ name, price }) {
  const [jumlah, setJumlah] = useState(0);

  const totalHarga = jumlah * price;

  const handleSimpan = () => {
    alert(`Produk "${name}" disimpan dengan total Rp ${totalHarga.toLocaleString()}`);
  };

  const handleHapus = () => {
    setJumlah(0);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 w-72 flex flex-col justify-between hover:shadow-lg transition duration-300">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-500">Harga satuan: Rp {price.toLocaleString()}</p>
        <p className="mt-2 text-sm text-gray-600">Jumlah dibeli: <span className="font-bold">{jumlah}</span></p>
        <p className="text-sm text-gray-600">Total harga: <span className="font-bold text-blue-600">Rp {totalHarga.toLocaleString()}</span></p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => setJumlah(jumlah + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          Tambah
        </button>
        <button
          onClick={handleSimpan}
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
        >
          Simpan
        </button>
        <button
          onClick={handleHapus}
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
