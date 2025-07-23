import React from "react";

const trends = [
  { title: "Trending in World", tag: "#16181c", posts: "40.2k Posts" },
  { title: "Trending in World", tag: "#Fakhir Ahmed Khan", posts: "50k Posts" },
];

const suggestions = [
  {
    name: "Next.js",
    handle: "@nextjs",
    img: "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_bigger.jpg",
  },
  {
    name: "React.js",
    handle: "@reactjs",
    img: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_bigger.png",
  },
  {
    name: "Vercel",
    handle: "@vercel",
    img: "https://pbs.twimg.com/profile_images/1767351110228918272/3Pndc5OT_bigger.png",
  },
];

const Card = React.memo(({ title, tag, posts, name, handle, img }) =>
  title ? (
    <div className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-bold">{tag}</p>
      <p className="text-sm text-gray-500">{posts}</p>
    </div>
  ) : (
    <div className="flex justify-between items-center hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
      <div className="flex items-center gap-2">
        <img
          src={img}
          alt={name}
          loading="lazy"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold leading-tight">{name}</p>
          <p className="text-sm text-gray-500">{handle}</p>
        </div>
      </div>
      <button className="bg-white text-black text-sm px-4 py-1 rounded-full font-bold">
        Follow
      </button>
    </div>
  )
);

const Section = ({ title, children }) => (
  <section className="bg-[#16181c] rounded-xl p-4 mb-4">
    <h2 className="text-xl font-bold mb-3">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

const RightSide = () => (
  <aside className="w-full lg:w-[30%] xl:w-[25%] px-4 hidden lg:block">
    <div className="py-3 sticky top-0 z-10 bg-black">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-full bg-[#16181c] text-white px-4 py-2 outline-none"
      />
    </div>

    <Section title="What's happening">
      {trends.map((trend, i) => (
        <Card key={i} {...trend} />
      ))}
    </Section>

    <Section title="Who to follow">
      {suggestions.map((user, i) => (
        <Card key={i} {...user} />
      ))}
    </Section>

    <div className="text-blue-600 px-3 cursor-pointer hover:underline mb-6">
      Show more
    </div>

    <footer className="text-xs text-gray-500 px-3 mb-6">
      <nav className="flex flex-wrap gap-2">
        {[
          "Terms of Service",
          "Privacy Policy",
          "Cookie Policy",
          "Accessibility",
          "Ads info",
          "More",
          "© 2024 X Corp.",
        ].map((item, i) => (
          <a key={i} href="#" className="hover:underline whitespace-nowrap">
            {item}
          </a>
        ))}
      </nav>
    </footer>
  </aside>
);

export default RightSide;
