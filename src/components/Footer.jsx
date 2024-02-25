import ExternalMedias from './ExternalMedias.jsx'
import partnerCompanies from './data/partnerCompanies.js'

export default function Footer() {

  const companyPaths = ['Home', 'Sign Up', 'Pets for Adoption', 'Process to adopt pets', 'About Us', 'Reviews'];

  const legalPaths = ['Privacy Statement', 'Terms os Service'];

  
  return (
    <footer className='bg-gray-100' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Logo and name 
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
          {/*logo*/}
            {/* <img
              className='h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-gray-300.svg'
              alt='Company name'
            ></img> */}
            <p className='text-gray-500 text-base'>
            Embrace Love, Adopt a Furry Friend Today!
            </p>

            <div className='flex space-x-6'>
            {ExternalMedias.map((externalMedia, index) =>(
              <a key={index} href='#' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>{externalMedia.nameLink}</span>
                <externalMedia.faIcons className='h-6 w-6' aria-hidden='true'/>
              </a>
            ))}
            </div>
          </div>
          <div className='mt-8 grid md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8 xl:col-span-2'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Company
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {companyPaths.map((companyPath, index)=>(
                    <li key={index}>
                      <a
                        href='#'
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {companyPath}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {legalPaths.map((legalPath, index)=>(
                    <li key={index}>
                      <a
                        href='#'
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {legalPath}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-1 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                Partner companies
                </h3>
                <ul role='list' className='flex justify-center mt-2 md:mt-8 md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2'>
                {partnerCompanies.map(( partnerCompany, index) =>(
                  <li key={index} className='flex text-center md:justify-center items-center p-4'>
                    <a href='#' className=' text-gray-500 hover:text-gray-900 flex flex-col items-center'>
                      <img src={partnerCompany.logoPartner} alt={partnerCompany.namePartner} className='w-20'/>
                      <span className='text-sm md:text-base md:mt-4'>{partnerCompany.namePartner}</span>
                    </a>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>       
        <div className='mt-8 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-400 text-center'>
            &copy; 2024 Animal Adoption Website. 
            <p>All Rights Reserved.</p>
          </p>
        </div>
      </div>
    </footer>
  );
}
