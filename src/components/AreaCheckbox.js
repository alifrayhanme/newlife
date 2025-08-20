"use client";

export default function AreaCheckbox({ area, selected, toggleSelect }) {
  return (
    <label className="flex flex-col items-center cursor-pointer text-xs md:text-sm">
      <input
        type="checkbox"
        checked={selected.includes(area.id)}
        onChange={() => toggleSelect(area.id)}
        className="mb-1 w-[18px] h-[18px] accent-[#e5a7df]"
      />
      <span className="px-2 py-0.5 text-[#767676]">
        {area.label}
      </span>
    </label>
  );
}