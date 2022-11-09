import HeaderImage from './../../assets/english2.png';
import section2Image from './../../assets/home-section2.jpg';
import studentsImage from './../../assets/students.png';
import section3Image from './../../assets/rocket.png';
import { Link } from 'react-router-dom';
import Slider from './slider';
export default function Homepage() {
  return (
    <div className="w-full h-full">
      <div className="section1">
        <div className="container">
          <div className="w-full flex gap-x-4 py-14 items-center justify-center md:justify-between">
            <div className="image md:w-[50%] hidden md:block">
              <img src={HeaderImage} alt="learn english" />
            </div>
            <div className="content md:w-[50%] text-center">
              <h1 className="text-slate-900 font-black text-5xl sm:text-4xl lg:text-5xl tracking-tight text-center dark:text-white">
                Boost Your English For Free!
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                Practice English with native speaker volunteers and teachers.
                It's all for free, all you need is your device!
              </p>
              <div className="w-full my-6 flex items-center justify-center">
                <Link to="/signup-student">
                  <button className=" hover:bg-indigo-800 bg-indigo-700 focus:outline-none text-white font-semibold h-10 px-6 rounded-md w-full flex items-center justify-center sm:w-[12rem]">
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <div className="w-full flex flex-wrap gap-[5%] py-20 items-center justify-center md:justify-between">
            <div className="content w-full md:w-[50%] text-center">
              <h1 className="text-slate-900 font-black text-5xl sm:text-4xl md:text-left lg:text-5xl tracking-tight text-center dark:text-white">
                All For Free.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 text-center md:text-left max-w-3xl mx-auto dark:text-slate-400">
                We want to help all people, regardless of their social status,
                to improve their ability to speak English and open more
                opportunities for them to reach their goals. Relying on
                volunteers from English speakers and teachers
              </p>
            </div>
            <div className="image mt-6 md:mt-0 md:w-[45%]">
              <img src={section2Image} alt="help each other to learn" />
            </div>
          </div>
        </div>
      </div>

      {/* this is gonna be a slider */}

      <Slider />
      {/*This section contains the two links to choose user */}
      <div className="section3">
        <div className="container">
          <div className="w-full flex flex-wrap gap-[50px] md:gap-[10%] py-14 items-center justify-center">
            <div className="role p-3 w-full max-w-[400px] md:w-[45%] rounded-[40px] bg-blue-400/50">
              <div className="image md:w-full max-h-[200px] justify-center flex py-4">
                <img src={studentsImage} alt="help each other to learn" />
              </div>
              <div className="content w-full text-center">
                <h1 className="text-slate-900 font-black text-2xl tracking-tight text-center dark:text-white">
                  Improve Your Language
                </h1>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas quae nostrum, vitae consequatur eaque quas rem!
                </p>
                <div className="w-full my-6 flex items-center justify-center">
                  <Link to="/signup-student">
                    <button className=" hover:bg-blue-800 bg-blue-700 focus:outline-none text-white font-semibold h-10 px-6 rounded-md flex items-center justify-center w-[12rem]">
                      Start Learning
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="role p-3 w-full max-w-[400px] md:w-[45%] rounded-[40px] bg-[#fa974663]">
              <div className="image md:w-full max-h-[200px] justify-center flex py-4">
                <img src={studentsImage} alt="help each other to learn" />
              </div>
              <div className="content w-full text-center">
                <h1 className="text-slate-900 font-black text-2xl tracking-tight text-center dark:text-white">
                  Become A Tutor
                </h1>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas quae nostrum, vitae consequatur eaque quas rem!
                </p>
                <div className="w-full my-6 flex items-center justify-center">
                  <Link to="/signup-teacher">
                    <button className=" hover:bg-blue-800 bg-blue-700 focus:outline-none text-white font-semibold h-10 px-6 rounded-md flex items-center justify-center w-[12rem]">
                      Start Teaching
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 bg-pink-300/50">
        <div className="container">
          <div className="w-full flex flex-wrap gap-[5%] py-14 items-center justify-center md:justify-between">
            <div className="image md:w-[45%] pb-8 md:py-0 flex justify-center md:order-2 items-center">
              <img
                className="h-[250px] md:h-[400px]"
                src={section3Image}
                alt="Donate, rocket and stars "
              />
            </div>
            <div className="content w-full md:w-[50%] md:order-1 text-center">
              <h1 className="text-slate-900 font-black text-4xl sm:text-4xl md:text-left lg:text-5xl tracking-tight text-center dark:text-white">
                Help The World.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 text-center md:text-left max-w-3xl mx-auto dark:text-slate-400">
                Our site is not for profit, help us improve it and improve the
                experience of learners and educators by making a donation.
                Together for a better life
              </p>
              <div className="w-full my-6 flex items-center justify-center md:justify-start">
                <Link to="/donate">
                  <button className=" hover:bg-pink-900 bg-pink-800 focus:outline-none text-white font-semibold h-10 px-6 rounded-md flex items-center justify-center w-[12rem]">
                    Donate
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
