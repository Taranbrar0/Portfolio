import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20' id='contact'>
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none" 
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          {/* Content */}
          <div className='flex flex-col md:flex-row gap-8 items-center md:gap-16 z-20'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Let&apos;s create something amazing together</h2>
              <p className='text-sm mt-2 md:text-base'>
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>

            {/* Link with button styles */}
            <div> 
              <a 
                href="mailto:taranbrar9117@gmail.com" 
                className='inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 bg-gray-900 text-white z-20' 
                style={{ zIndex: 20 }}  // Ensure high z-index
              >
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
