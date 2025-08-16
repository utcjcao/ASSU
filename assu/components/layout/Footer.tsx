import Text from "../common/Text";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pink mt-auto text-white py-8 px-4">
      <div className="flex justify-around items-center">
        <div>
          <Text as="h2" size="2xl" className="font-[var(--font-sans)]">
            Let's <br /> Connect.
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Text as="h3">
              (416) 978-4903 <br /> students.assu@utoronto.ca
            </Text>
          </div>
          <div>
            <Text as="h3">
              101 St.George Street <br /> Sidney Smith Hall, Room 1068
            </Text>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Image
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Image
                src="/svg/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
