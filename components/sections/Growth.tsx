import GrowthPath from "./GrowthPath";
import ManageCourses from "./ManageCourses";
/** Section 5 wrapper: gradient background containing both split rows. */
export default function Growth() {
  return <section className="bg-gradient-to-b from-[#f8f9ff] to-[#eef0ff] px-4 py-16 md:px-10"><GrowthPath /><ManageCourses /></section>;
}
