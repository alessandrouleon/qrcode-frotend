export default function Header() {
  return (
    <header className="bg- bg-sky-500 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Gera barcode e qrcode{" "}
          <span className="text-gray-800 text-4xl">App</span>
        </h1>
      </div>
    </header>
  );
}
