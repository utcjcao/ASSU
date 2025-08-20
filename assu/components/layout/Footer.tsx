import Text from "../common/Text";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pink mt-auto text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Desktop/Tablet Layout - side by side until medium screens */}
        <div className="hidden md:flex md:flex-row justify-between items-start gap-8 lg:gap-12 px-30">
          {/* Left side - Let's Connect */}
          <section>
            <h2 className="font-sans text-2xl lg:text-3xl">
              Let's <br /> Connect.
            </h2>
          </section>

          {/* Right side - Contact Information */}
          <section>
            <h3 className="sr-only">Contact Information</h3>

            <address className="not-italic space-y-4">
              {/* Phone and Email */}
              <div>
                <p>
                  <a
                    href="tel:+14169784903"
                    className="hover:text-gray-300 transition-colors"
                  >
                    (416) 978-4903
                  </a>
                  <br />
                  <a
                    href="mailto:students.assu@utoronto.ca"
                    className="hover:text-gray-300 transition-colors"
                  >
                    students.assu@utoronto.ca
                  </a>
                </p>
              </div>

              {/* Address */}
              <div>
                <a
                  href="https://maps.app.goo.gl/mcLBZGGoDahvxcEr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <p>
                    101 St.George Street <br /> Sidney Smith Hall, Room 1068
                  </p>
                </a>
              </div>
            </address>

            {/* Social Media Navigation */}
            <nav className="mt-6">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/uoft-assu/about/"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/svg/linkedin.svg"
                    alt="LinkedIn icon - Connect with us on LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/assu_uoft/?hl=en"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/svg/instagram.svg"
                    alt="Instagram icon - Follow us on Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </nav>
          </section>
        </div>

        {/* Mobile/Small Tablet Layout - centered friendly view */}
        <div className="md:hidden text-center space-y-8">
          {/* Let's Connect - centered */}
          <section>
            <h2 className="font-sans text-3xl sm:text-4xl mb-6">
              Let's Connect.
            </h2>
          </section>

          {/* Contact Information - centered */}
          <section>
            <h3 className="sr-only">Contact Information</h3>

            <address className="not-italic space-y-6">
              {/* Phone and Email - closer spacing */}
              <div>
                <div className="space-y-0">
                  <div>
                    <a
                      href="tel:+14169784903"
                      className="inline-block min-h-[44px] pt-3 px-3 hover:text-gray-300 transition-colors text-lg leading-relaxed"
                    >
                      (416) 978-4903
                    </a>
                    <br />
                    <a
                      href="mailto:students.assu@utoronto.ca"
                      className="inline-block min-h-[44px] px-3 hover:text-gray-300 transition-colors text-lg leading-relaxed break-words"
                    >
                      students.assu@utoronto.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Address - centered */}
              <div>
                <a
                  href="https://maps.app.goo.gl/mcLBZGGoDahvxcEr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-h-[44px] py-3 px-3 hover:text-gray-300 transition-colors text-lg leading-relaxed"
                >
                  101 St.George Street <br /> Sidney Smith Hall, Room 1068
                </a>
              </div>
            </address>

            {/* Social Media Navigation - centered with larger touch targets */}
            <nav className="mt-8">
              <h4 className="sr-only">Social Media Links</h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/company/uoft-assu/about/"
                  className="flex items-center justify-center w-14 h-14 text-white hover:text-gray-300 transition-colors duration-200 rounded-lg hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Image
                    src="/svg/linkedin.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://www.instagram.com/assu_uoft/?hl=en"
                  className="flex items-center justify-center w-14 h-14 text-white hover:text-gray-300 transition-colors duration-200 rounded-lg hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Image
                    src="/svg/instagram.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </footer>
  );
}
