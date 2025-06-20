const ShapeSection = () => {
  const shapes = [
    { src: "/shap/round.webp", name: "Round" },
    { src: "/shap/oval.webp", name: "Oval" },
    { src: "/shap/cushion.webp", name: "Cushion" },
    { src: "/shap/emerald.png", name: "Emerald" },
    { src: "/shap/pear.webp", name: "Pear" },
    { src: "/shap/heart.webp", name: "Heart" },
    { src: "/shap/radiant.webp", name: "Radiant" },
    { src: "/shap/princess.png", name: "Princess" },
    { src: "/shap/marquise.webp", name: "Marquise" },
    { src: "/shap/asscher.webp", name: "Asscher" },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white px-4 sm:px-6">
      <h1 className="text-center mb-8 sm:mb-11 mt-6 sm:mt-9 text-2xl sm:text-3xl font-bold">
        Shop By Shape
      </h1>

      {/* Mobile: Grid Layout */}
      <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 lg:hidden gap-6 sm:gap-8 justify-items-center">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 sm:space-y-3 items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img
              src={shape.src}
              alt={shape.name}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <span className="text-sm sm:text-base text-center">
              {shape.name}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop: Original Flex Layout */}
      <div className="hidden xl:flex gap-16 justify-center text-lg text-center items-center overflow-scroll md:overflow-auto">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img
              src={shape.src}
              alt={shape.name}
              width={50}
              className="object-contain"
            />
            <span>{shape.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ShapeSection;
