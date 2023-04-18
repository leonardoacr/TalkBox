export const MenuItems = () => {
  return (
    <ul className="mt-16 p-4 px-4">
      <li className="mb-2">
        <a className="block px-4 py-2 font-bold text-white hover:bg-gray-800">
          Fake Menu
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
          Home
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
          Dashboard
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
          Profile
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">
          Settings
        </a>
      </li>
    </ul>
  );
};
