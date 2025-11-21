import Text from "../common/Text";
import Image from "next/image";

export default function ContactInfoGrid() {
  return (
    <div className="w-full">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Header Section */}
        <div className="p-6 text-center">
          {/* Pagination Circles */}
          <div className="flex space-x-2 mb-4">
            <div className="w-10 h-10 border border-pink rounded-full"></div>
            <div className="w-10 h-10 bg-pink rounded-full"></div>
            <div className="w-10 h-10 border border-pink rounded-full"></div>
          </div>
          <Text as="h1" className="text-4xl font-semibold mb-6">
            Contact Us
          </Text>
        </div>

        {/* Content Sections */}
        <div className="space-y-0">
          {/* Address */}
          <div className="relative border-t border-gray-500">
            <div className="p-6">
              <h3 className="text-xl text-black mb-3">Address</h3>
              <div className="space-y-1">
                <p className="text-base text-black">100 St. George Street</p>
                <p className="text-base text-black">Sidney Smith Hall,</p>
                <p className="text-base text-black">Room 1068</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="relative border-t border-gray-500">
            <div className="p-6">
              <h3 className="text-xl text-black mb-3">Contact</h3>
              <div className="space-y-2">
                <p className="text-base text-black">
                  Phone: (416) 978-4903 <br />
                  Fax: (416) 971-2161
                </p>
                <p className="text-base text-black mb-3">
                  <a
                    href="mailto:students.assu@utoronto.ca"
                    className="text-black hover:underline underline"
                  >
                    students.assu@utoronto.ca
                  </a>
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/assu.uoft/"
                    aria-label="Facebook"
                    className="hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/facebook-logo.webp"
                      alt="Facebook"
                      className="w-7 h-7"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href="https://x.com/assu_uoft?lang=en"
                    aria-label="Twitter"
                    className="hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/twitter-logo.webp"
                      alt="Twitter"
                      className="w-7 h-7"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/uoft-assu/about/"
                    aria-label="LinkedIn"
                    className="hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/linkedin-logo.webp"
                      alt="LinkedIn"
                      className="w-7 h-7"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/assu_uoft/?hl=en"
                    aria-label="Instagram"
                    className="hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/instagram-logo.webp"
                      alt="Instagram"
                      className="w-7 h-7"
                      width={28}
                      height={28}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="relative border-t border-gray-500">
            <div className="p-6">
              <h3 className="text-xl text-black mb-3">Opening Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-base text-black">Monday</span>
                  <span className="text-base text-black">
                    10:00 am – 5:00 pm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-black">Tuesday</span>
                  <span className="text-base text-black">
                    10:00 am – 5:00 pm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-black">Wednesday</span>
                  <span className="text-base text-black">
                    10:00 am – 6:00 pm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-black">Thursday</span>
                  <span className="text-base text-black">
                    10:00 am – 6:00 pm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-black">Friday</span>
                  <span className="text-base text-black">
                    10:00 am – 5:00 pm
                  </span>
                </div>
                <div className="text-sm text-black mt-2 text-center">
                  (Friday <strong>closed</strong> from May-Aug)
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-black">Weekends</span>
                  <span className="text-base text-black font-semibold">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        className="hidden md:grid md:gap-0"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1.5fr" }}
      >
        {/* Column 1 */}
        <div className="p-6">
          <div className="flex flex-col justify-end h-full">
            {/* Pagination Circles */}
            <div className="flex space-x-2 mb-4">
              <div className="w-12 h-12 border border-pink rounded-full"></div>
              <div className="w-12 h-12 bg-pink rounded-full"></div>
              <div className="w-12 h-12 border border-pink rounded-full"></div>
            </div>
            <Text as="h1" className="text-5xl font-semibold mb-3 text-left">
              Contact Us
            </Text>
          </div>
        </div>

        {/* Column 2 - Address */}
        <div className="relative">
          <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-500"></div>
          <div className="p-6">
            <h3 className="text-2xl text-black mb-4">Address</h3>
            <div className="space-y-1">
              <p className="text-sm md:text-base text-black">
                100 St. George Street
              </p>
              <p className="text-sm md:text-base text-black">
                Sidney Smith Hall,
              </p>
              <p className="text-sm md:text-base text-black">Room 1068</p>
            </div>
          </div>
        </div>

        {/* Column 3 - Contact */}
        <div className="relative">
          <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-500"></div>
          <div className="p-6">
            <h3 className="text-2xl text-black mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm md:text-base text-black">
                Phone: (416) 978-4903 <br />
                Fax: (416) 971-2161
              </p>
              <p className="text-sm md:text-base text-black mb-2">
                <a
                  href="mailto:students.assu@utoronto.ca"
                  className="text-black hover:underline underline"
                >
                  students.assu@utoronto.ca
                </a>
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/assu.uoft/"
                  aria-label="Facebook"
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/facebook-logo.webp"
                    alt="Facebook"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://x.com/assu_uoft?lang=en"
                  aria-label="Twitter"
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/twitter-logo.webp"
                    alt="Twitter"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/uoft-assu/about/"
                  aria-label="LinkedIn"
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/linkedin-logo.webp"
                    alt="LinkedIn"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://www.instagram.com/assu_uoft/?hl=en"
                  aria-label="Instagram"
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/instagram-logo.webp"
                    alt="Instagram"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 - Opening Hours */}
        <div className="relative">
          <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-500"></div>
          <div className="p-6">
            <h3 className="text-2xl text-black mb-4">Opening Hours</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-black">Monday</span>
                <span className="text-sm md:text-base text-black">
                  10:00 am – 5:00 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-black">Tuesday</span>
                <span className="text-sm md:text-base text-black">
                  10:00 am – 5:00 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-black">
                  Wednesday
                </span>
                <span className="text-sm md:text-base text-black">
                  10:00 am – 6:00 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-black">
                  Thursday
                </span>
                <span className="text-sm md:text-base text-black">
                  10:00 am – 6:00 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-black">Friday</span>
                <span className="text-sm md:text-base text-black">
                  10:00 am – 5:00 pm
                </span>
              </div>
              <div className="text-xs md:text-sm text-black mt-2 text-right">
                (Friday <strong>closed</strong> from May-Aug)
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-black">
                  Weekends
                </span>
                <span className="text-sm md:text-base text-black font-semibold text-right">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
