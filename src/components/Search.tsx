import iconSearch from "@/assets/icon-search.svg";
import Image from "next/image";

export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image src={iconSearch} alt="search" />

      <input type="text" placeholder="Buscar" className="bg-transparent outline-none pr-5 text-white placeholder:text-white" />
    </div>
  );
}
