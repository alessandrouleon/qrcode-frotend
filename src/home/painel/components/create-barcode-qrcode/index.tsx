import { useState } from "react";
import api from "../../../../server/api";

export default function LabelForm() {
  const [form, setForm] = useState({
    prefix: "",
    start: "",
    end: "",
    type: "both",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await api.post(
        "/labels",
        {
          prefix: form.prefix,
          start: Number(form.start),
          end: Number(form.end),
          type: form.type,
        },
        {
          responseType: "blob", // importante para receber PDF
          timeout: 30000,
        }
      );

      // Cria um Blob e abre em nova aba
      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);

      setMessage("✅ Etiquetas geradas com sucesso!");
      //   setTimeout(() => setMessage(""), 5000);
      setForm({ prefix: "", start: "", end: "", type: "both" });
    } catch (err) {
      setMessage("Falha ao gerar o PDF");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Gerar Etiquetas
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Prefixo
          </label>
          <input
            type="text"
            name="prefix"
            value={form.prefix}
            onChange={handleChange}
            placeholder="Ex: NOT77-"
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Início
            </label>
            <input
              type="number"
              name="start"
              value={form.start}
              onChange={handleChange}
              placeholder="1"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fim
            </label>
            <input
              type="number"
              name="end"
              value={form.end}
              onChange={handleChange}
              placeholder="10"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="barcode">Barcode</option>
            <option value="qrcode">QR Code</option>
            <option value="both">Ambos</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Gerar"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
