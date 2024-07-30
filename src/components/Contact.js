
import React from "react";
import Location from '../assests/img/location.svg';
import Phone from '../assests/img/Phone.svg';
import email from '../assests/img/email.svg';
const Contact = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between mr-4">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-primary text-[32px] font-bold uppercase  sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Thank you for visiting 'Toner Technical Point'. I'm happy to have you here! Whether you have a question, or simply want to share your thoughts, I'd love to hear from you.
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                   <img src={Location} className="h-8 w-8" alt="location"/>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      C-7 98 Keshav Puram near Keshav Puram Metro Station, Delhi-110035
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                   <img src={Phone} alt="phone icon" className='h-8 w-8'/>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      (+91)9811218480
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      (+91)7290001297
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <img src={email} alt="Email" className="h=8 w-8"/>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      ttp.dalmia@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full px-4 lg:w-1/2 xl:w-5/12 mr-4"> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55998.480114006445!2d77.08858233473029!3d28.692488061525648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0337d3b96e47%3A0xdd264e7e9f830570!2sTONER%20TECHNICAL%20POINT!5e0!3m2!1sen!2sin!4v1719933352972!5m2!1sen!2sin" className="relative rounded-lg ml-10" width="500" height="450" allowFullScreen="" loading="lazy" ReferrerPolicy="no-referrer-when-downgrade" Title="location-map"></iframe>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

