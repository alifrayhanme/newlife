"use client";
import { useAreas } from "../hooks/useAreas";
import FrontBody from "../components/FrontBody";
import BackBody from "../components/BackBody";

export default function Home() {
  const areas = [
    { id: "upper-arms", label: "Upper Arms" },
    { id: "abdomen", label: "Abdomen/Stomach" },
    { id: "upper-leg", label: "Upper Leg" },
    { id: "lower-leg", label: "Lower Leg" },
    { id: "upper-back", label: "Upper Back/Bra Line" },
    { id: "lower-arms", label: "Lower Arms" },
    { id: "outer-thighs", label: "Outer Thighs (Saddlebags)" },
    { id: "lower-thighs", label: "Lower Thighs/Knees" },
  ];

  const { selected, toggleSelect } = useAreas();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-[#767676] mb-2">
        Which areas do you feel most discomfort or heaviness is? (Multiple
        selection possible)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end sm:justify-center items-center gap-12 mb-6">
        <FrontBody 
          areas={areas.slice(0, 4)} 
          selected={selected} 
          toggleSelect={toggleSelect} 
        />
        <BackBody 
          areas={areas.slice(4, 8)} 
          selected={selected} 
          toggleSelect={toggleSelect} 
        />
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold">Selected: {selected.length} areas</p>
      </div>
    </div>
  );
}
