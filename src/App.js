import './App.css';
import Component1 from './Component1';
import fb from './icon-facebook.svg'
import tw from './icon-twitter.svg'
import ig from './icon-instagram.svg'
import yt from './icon-youtube.svg'




function App() {
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen bg-Bl-300'>

        <div className='flex flex-col items-center w-screen h-screen p-8'>


          <span className='text-3xl font-bold text-white'>Social Media Dashboard</span><br />
          <span className='font-bold text-gray-400'>Total Followers : 23,004</span>


          <div className='flex justify-center w-screen h-screen '>
            <Component1 logo={fb} tp='fb' username="@nathanf" number="1987" today="12" td='+' type='FOLLOWERS' />
            <Component1 logo={tw} tp='tw' username="@nathanf" number="1044" today="99" td='+' type='FOLLOWERS' />
            <Component1 logo={ig} tp='ig' username="@realnathanf" number="11k" today="1099" td='+' type='FOLLOWERS' />
            <Component1 logo={yt} tp='yt' username="@Nathan F." number="8239" today="144" td='-' type='SUBSCRIBERS' />

          </div>



        </div>






      </div>


    </>
  );
}

export default App;
