import Image from "next/image";
import AreaCheckbox from "./AreaCheckbox";

export default function FrontBody({ areas, selected, toggleSelect }) {
  const getResponsiveClasses = (areaId) => {
    const classes = {
      "upper-arms": "top-[17%] -left-[42%] sm:top-[20%] sm:-left-[12%] md:top-[20%] md:-left-[14%] lg:top-[22%] lg:-left-[19%]",
      "abdomen": "top-[38%] -left-[50%] sm:top-[39.5%] sm:-left-[6.6%] md:top-[39.4%] md:-left-[10.5%] lg:top-[39%] lg:-left-[17%]",
      "upper-leg": "top-[60%] -left-[38%] sm:top-[58%] sm:-left-[10%] md:top-[60%] md:-left-[10%] lg:top-[62%] lg:-left-[15%]",
      "lower-leg": "top-[79%] -left-[32%] sm:top-[80.8%] sm:-left-[3.4%] md:top-[80.5%] md:-left-[5.5%] lg:top-[80.5%] lg:-left-[10.5%]",
    };
    return classes[areaId] || "";
  };

  return (
    <div className="text-center relative w-full max-w-48 sm:max-w-md aspect-[3/5] ml-auto xs:mx-auto">
      {/* Body image */}
      <Image
        src="/OBJECTS_1.webp"
        alt="front side"
        fill
        className="object-contain"
      />

      {/* Overlay Labels */}
      {areas.map((area) => (
        <div
          key={area.id}
          className={`absolute ${getResponsiveClasses(area.id)} -translate-y-1/2 flex items-end `}
        >
          <AreaCheckbox 
            area={area} 
            selected={selected} 
            toggleSelect={toggleSelect} 
          />
          <span className="inline-block w-16 sm:w-28 h-0.5 mb-2 bg-[#767676]">
            <div className="w-2 h-2 rounded-full absolute bottom-[5] right-0 bg-[#767676]"></div>
          </span>
        </div>
      ))}
    </div>
  );
}
