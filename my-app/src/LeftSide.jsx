import { useState } from "react";
import pic from "./assets/pic.jpeg";

export default function LeftSide() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { icon: "home", label: "Home" },
    { icon: "search", label: "Explore" },
    { icon: "notifications", label: "Notifications" },
    { icon: "message", label: "Messages" },
    { icon: "person", label: "Profile" },
    { icon: "pending", label: "More" },
  ];

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white p-2 rounded-full"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-black w-[80%] sm:w-64 md:w-[20%] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full p-4">
          <div className="md:hidden flex justify-end mb-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close Menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="mb-6">
            <svg className="w-8 fill-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>

          <nav className="space-y-2 text-xl font-semibold">
            {navItems.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 px-5 py-3 rounded-full hover:bg-gray-900 cursor-pointer"
              >
                <span className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </nav>

          <button className="mt-6 w-full bg-[#1d9bf0] text-white rounded-full py-3 font-bold hover:bg-[#1a8cd8] transition">
            Post
          </button>

          <div className="mt-auto pt-6 flex items-center gap-3 p-3 rounded-full hover:bg-gray-800 cursor-pointer">
            <img
              src={pic}
              alt="Fakhir Ahmed Khan"
              className="w-12 h-12 rounded-full"
              loading="lazy"
            />
            <div>
              <div className="text-white font-semibold">Fakhir Ahmed Khan</div>
              <div className="text-gray-500 text-sm">@FakhirAhmed</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
