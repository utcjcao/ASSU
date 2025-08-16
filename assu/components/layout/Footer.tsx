import Text from "../common/Text";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pink mt-auto text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left side - Let's Connect */}
          <section>
            <h2 className="font-sans text-2xl md:text-3xl">
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
                  <a href="tel:+14169784903">(416) 978-4903</a>
                  <br />
                  <a href="mailto:students.assu@utoronto.ca">
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
      </div>
    </footer>
  );
}
