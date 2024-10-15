export default function Navbar() {
  return (
    <div className="fixed w-full h-[80px] mix-blend-difference flex justify-between items-center px-4 z-10">
      <div className="flex">
        <h1 className="text-3xl font-bold">madebypale</h1>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Work</li>
        <li className="p-4">Contact</li>
      </ul>

      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}
