import Divider from "@/components/common/Divider";
import Text from "@/components/common/Text";
import Link from "@/components/common/Link";
import Image from "next/image";

export default function Handbook() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Divider borderTopWidth="3px" />
      <Text as="h1" className="text-5xl font-sans font-bold">
        Academic Handbook
      </Text>
      <Divider borderTopWidth="3px" />
      <Text as="p" className="text-lg">
        The ASSU Academic Handbook is an{" "}
        <strong>essential guide to rules, regulations, and services</strong>{" "}
        that students need to be aware of at the St. George campus of the
        University of Toronto.
      </Text>
      <Text as="p" className="text-lg">
        You can find paper copies of the handbook in <strong>our office</strong>
        , Sid Smith Rm 1068 <br /> You can also download the .pdf of the
        handbook here:{" "}
        <Link href="https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_0fc2556ac71749e0976805440b15d9dd.pdf">
          Academic Handbook
        </Link>
      </Text>
      <Divider />
      <div className="flex flex-wrap justify-around gap-4 mb-6">
        <Image
          src="/images/handbook-1.avif"
          alt="ASSU Academic Handbook"
          width={200}
          height={200}
          className="flex-1"
        />
        <Image
          src="/images/handbook-2.avif"
          alt="ASSU Academic Handbook"
          width={200}
          height={200}
          className="flex-1"
        />
        <Image
          src="/images/handbook-3.avif"
          alt="ASSU Academic Handbook"
          width={200}
          height={200}
          className="flex-1"
        />
      </div>
      <Divider />
    </div>
  );
}
