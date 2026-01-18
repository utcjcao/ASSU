import Divider from "@/components/common/Divider";
import Text from "@/components/common/Text";
import Link from "@/components/common/Link";
import Image from "next/image";
import HeroText from "@/components/sections/HeroText";

export default function Handbook() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroText text="Academic Handbook"></HeroText>
      <Text as="p" className="text-lg">
        The ASSU Academic Handbook is an essential guide to rules, regulations,
        and services that students need to be aware of at the St. George campus
        of the University of Toronto.
      </Text>
      <Text as="p" className="text-lg">
        You can find paper copies of the handbook in our office at Room 1068 in
        Sidney Smith. You can also download the .pdf of the handbook here:{" "}
        <Link href="/assu_academic_handbook.pdf">Academic Handbook</Link>
      </Text>
      <div className="mt-6 mb-6 w-full">
        <iframe
          src="/assu_academic_handbook.pdf"
          title="ASSU Academic Handbook PDF"
          className="h-[80vh] w-full rounded border border-gray-300 bg-white"
        />
      </div>
      <Divider />
    </div>
  );
}
