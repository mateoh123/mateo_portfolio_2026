"use client";
import MobileFilterSidebar from "./sidebarfilter";
import ContactButton from "./contactbutton";

type MobileSidebarProps = {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

export default function MobileSidebar({
  categories,
  activeFilter,
  setActiveFilter,
}: MobileSidebarProps) {
  return (
    <div className="desktopSM:hidden">
      <MobileFilterSidebar
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ContactButton />
    </div>
  );
}
