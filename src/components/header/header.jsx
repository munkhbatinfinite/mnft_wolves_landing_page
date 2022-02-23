export function Header() {
  const header_data = [
    {
      id: "1",
      name: "BUY A WOLF",
      url: "/buy-wolf",
    },
    {
      id: "2",
      name: "ROAD MAP",
    },
    {
      id: "3",
      name: "TEAM",
    },
    {
      id: "4",
      name: "GALLERY",
    },
    {
      id: "5",
      name: "PROVENANCE",
    },
  ];
  return (
    <div className="bg-black text-white px-10 py-10">
      <div className="text-4xl italic font-bold font-mono cursor-pointer">
        MNFT WOLVES
      </div>
      <div className="flex uppercase float-right -mt-8 font-bold">
        {header_data.map((q) => {
          return (
            <div className="flex mr-10 space-x-4 invisible xl:visible cursor-pointer">
              <div key={q.id} className="hover:text-yellow-300 hover:font-bold">
                {q.name}
              </div>
            </div>
          );
        })}
        {/* <div className="ml-4 cursor-pointer invisible xl:visible">
          <Dropdown overlay={menu} trigger={["click"]}>
            <div
              className="text-white hover:text-yellow-300"
              onClick={(e) => e.preventDefault()}
            >
              {locale === "mn" ? "Монгол" : "English"}
            </div>
          </Dropdown>
        </div>
        <Drawer /> */}
      </div>
    </div>
  );
}
