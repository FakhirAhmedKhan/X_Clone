const postIcons = [
  { icon: "chat_bubble", count: "1k", color: "hover:text-blue-500" },
  { icon: "repeat", count: "1k", color: "hover:text-green-500" },
  { icon: "favorite", count: "1k", color: "hover:text-pink-500" },
  { icon: "bar_chart", count: "1k", color: "hover:text-blue-500" },
];

const IconButton = ({ icon, count, color }) => (
  <div
    className={`flex items-center gap-1 ${color} hover:bg-gray-900 rounded-full p-2 cursor-pointer transition`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    {count}
  </div>
);

const CenterSide = () => {
  return (
    <main className="w-full md:w-[55%] border-x border-gray-700">
      <header className="flex justify-between items-center p-3 sticky top-0 bg-black/80 backdrop-blur z-10 border-b border-gray-600">
        <div className="flex w-full font-bold text-lg">
          <div className="w-1/2 text-center text-white">For You</div>
          <div className="w-1/2 text-center text-gray-400">Following</div>
        </div>
        <span className="material-symbols-outlined text-white cursor-pointer">
          settings
        </span>
      </header>

      {/* Tweet Input */}
      <section className="flex gap-4 p-4 border-b border-gray-700 max-w-2xl mx-auto w-full">
        <img
          className="w-12 h-12 rounded-full"
          src="./src/assets/pic.jpeg"
          alt="Profile"
        />
        <div className="flex-1">
          <input
            type="text"
            placeholder="What is happening?!"
            className="w-full bg-black outline-none text-xl mb-2 text-white"
          />
          <div className="flex items-center text-blue-500 text-sm gap-2 mb-2">
            <span className="material-symbols-outlined">globe_asia</span>
            <span className="font-semibold">Everyone can reply</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-700">
            <div className="flex gap-3 text-blue-500 flex-wrap">
              {[
                "image",
                "gif",
                "ballot",
                "sentiment_satisfied",
                "calendar_month",
              ].map((icon) => (
                <span
                  key={icon}
                  className="material-symbols-outlined cursor-pointer hover:text-blue-400 transition"
                >
                  {icon}
                </span>
              ))}
            </div>
            <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-6 py-2 rounded-full font-bold text-sm transition">
              Post
            </button>
          </div>
        </div>
      </section>

      {/* Sample Post */}
      <article className="post border-b border-gray-800 max-w-2xl mx-auto w-full">
        <div className="flex p-4">
          <img
            className="w-12 sm:w-14 h-12 sm:h-14 rounded-full mr-4"
            src="./src/assets/pic.jpeg"
            alt="Fakhir Ahmed Khan"
            loading="lazy"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-white hover:underline cursor-pointer">
                Fakhir Ahmed Khan
              </span>
              <span className="text-gray-500 text-sm">@FakhirAhmed · 6h</span>
            </div>
            <p className="text-white mt-1">Living legend</p>
            <div className="mt-3">
              <img
                className="rounded-xl max-w-full h-auto"
                src="./src/assets/post-image.jfif"
                alt="Post content"
                width="900"
                height="900"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-4 flex-wrap">
              {postIcons.map((icon) => (
                <IconButton key={icon.icon} {...icon} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default CenterSide;
