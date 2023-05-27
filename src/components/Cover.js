import mainCover from '../assets/img/main-cover.jpg';
import Navbar from './Navbar';

export default function Cover() {
  return (
    <section id='home'>
      <div className='relative'>
        <div className='relative'>
          <Navbar />
          <img className='w-full h-auto xl:max-h-[1100px]' src={mainCover} />
          <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white'>
            <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:mb-40 mb-10'>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                Instant Knowledge of Exercises and Workouts
              </h1>
              <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl my-2 lg:my-4 xl:my-6 max-w-[14rem] sm:max-w-[16rem] md:max-w-[25rem] lg:max-w-lg xl:max-w-xl'>
                All-in-one place for you to learn about exercises and different
                workout routines and styles.
              </p>
              <button className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
