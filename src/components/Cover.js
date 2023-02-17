import mainCover from '../assets/img/main-cover.jpg';
import Navbar from './Navbar';

export default function Cover() {
  return (
    <section id='home'>
      <div className='container mx-auto relative'>
        <div className='relative'>
          <Navbar />
          <img src={mainCover} />
          <div className='container mx-auto max-w-lg px-2 sm:px-6 lg:px-8 absolute inset-0 flex flex-col justify-center text-white '>
            <div className='mb-12'>
              <h1 className='text-5xl mb-5'>
                Instant Knowledge of Exercises and Workouts
              </h1>
              <p className='text-lg mb-5'>
                All-in-one place for you to learn about exercises and different
                workout routines and styles.
              </p>
              <button className='mb-20'>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
