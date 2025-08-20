import Image from "next/image";
import AreaCheckbox from "./AreaCheckbox";

export default function BackBody({ areas, selected, toggleSelect }) {
  const getResponsiveClasses = (areaId) => {
    const classes = {
      "upper-back": "top-[22%] -right-[48%] sm:top-[23.5%] sm:-right-[5%] md:top-[23.3%] md:-right-[9%] lg:top-[22.8%] lg:-right-[15.7%]",
      "lower-arms": "top-[36%] -right-[46%] sm:top-[37%] sm:-right-[14%] md:top-[38%] md:-right-[18%] lg:top-[38%] lg:-right-[22%]",
      "outer-thighs": "top-[60%] -right-[75%] sm:top-[58%] sm:-right-[20%] md:top-[60%] md:-right-[25%] lg:top-[62%] lg:-right-[34%]",
      "lower-thighs": "top-[79%] -right-[58%] sm:top-[80.8%] sm:-right-[15%] md:top-[80.5%] md:-right-[18%] lg:top-[80.5%] lg:-right-[25%]",
    };
    return classes[areaId] || "";
  };

  return (
    <div className="text-center relative w-full max-w-48 sm:max-w-md aspect-[3/5] mr-auto xs:mx-auto">
      {/* Body image */}
      <Image
        src="/OBJECTS.webp"
        alt="back side"
        fill
        className="object-contain"
      />

      {/* Overlay Labels */}
      {areas.map((area) => (
        <div
          key={area.id}
          className={`absolute ${getResponsiveClasses(area.id)} -translate-y-1/2 flex items-end flex-row-reverse`}
        >
          <AreaCheckbox 
            area={area} 
            selected={selected} 
            toggleSelect={toggleSelect} 
          />
          <span className="inline-block w-16 sm:w-28 h-0.5 mb-2 bg-[#767676]">
            <div className="w-2 h-2 rounded-full absolute bottom-[5] left-0 bg-[#767676]"></div>
          </span>
        </div>
      ))}
    </div>
  );
}