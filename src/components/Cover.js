import mainCover from '../assets/img/main-cover.jpg';
import Navbar from './Navbar';

export default function Cover() {
  return (
    <section id='home'>
      <div className='container mx-auto relative'>
        <div className='relative'>
          <Navbar />
          <img src={mainCover} />
          <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white'>
            <div className='xl:max-w-xl lg:max-w-md md:max-w-sm max-w-xs mb-20 2xl:mb-40'>
              <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>
                Instant Knowledge of Exercises and Workouts
              </h1>
              <p className='xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs 2xl:my-6 xl:my-6 lg:my-4 my-2 xl:max-w-lg lg:max-w-[25rem] md:max-w-[20rem] sm:max-w-[16rem] max-w-[16rem]'>
                All-in-one place for you to learn about exercises and different
                workout routines and styles.
              </p>
              <button className='xl:text-lg lg:text-base md:text-sm text-xs'>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-8 absolute inset-0 flex flex-col justify-center text-white'>
            <div className='xl:max-w-xl lg:max-w-md md:max-w-sm max-w-xs mb-12 2xl:pb-[12rem] xl:pb-[5rem] lg:pb-[5rem] pt-15'>
              <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>
                Instant Knowledge of Exercises and Workouts
              </h1>
              <p className='xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs 2xl:my-6 xl:my-6 lg:my-4 my-2 xl:max-w-lg lg:max-w-[25rem] md:max-w-[20rem] sm:max-w-[16rem] max-w-[16rem]'>
                All-in-one place for you to learn about exercises and different
                workout routines and styles.
              </p>
              <button className='xl:text-lg lg:text-base md:text-sm text-xs'>
                Sign up
              </button>
            </div>
          </div> */
}
