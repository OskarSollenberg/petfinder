import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Logo and name 
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
          {/*logo*/}
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
              alt="Company name"
            ></img>
            <p className="text-gray-500 text-base">
            Embrace Love, Adopt a Furry Friend Today!
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" aria-hidden="true"/>
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" aria-hidden="true"/>
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" aria-hidden="true"/>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="w-96">
                <h3 className="text-md font-semibold text-gray-400 tracking-wider uppercase">
                Partner companies
                </h3>
                <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <li className="flex justify-center items-center">
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 flex flex-col items-center">
                      <img src="https://www.purina.se/themes/custom/trim_the_tail_th/logo-og.png" alt="Purina Logo" className="h-10 w-auto" />
                      <span className="mt-4">Purina</span>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 flex flex-col items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/If_P%26C_Insurance_logo.svg/800px-If_P%26C_Insurance_logo.svg.png" alt="If-insurance Logo" className="h-10 w-auto" />
                      <span className="mt-4">If-insurance</span>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 flex flex-col items-center">
                      <img src="https://www.kungsmassan.se/Images/Butiker/2arkenzoo_1080x1080.png" alt="ArkenZoo Logo" className="h-14 w-auto" />
                      <span className="">Arken Zoo</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Press
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Claim
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>       
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Animal Adoption Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
