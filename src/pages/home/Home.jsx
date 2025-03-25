import React, { useEffect, useState } from 'react'
import CardSection from '../../components/cardSection/CardSection'
import Carousel from '../../components/carousel/Carousel';
import Img from '../../components/lazyloader/Img'
import NewsLetter from '../../components/newsLetter/NewsLetter';
import { Link } from 'react-router-dom';
import {useAppwrite} from  "../../appwrite/AppwriteContext"
const Home = ({ setFoot, setNav }) => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true)
  const firebase = useAppwrite()
  const fetchdata = (x,setFuction) => {
    firebase.getAllDocuments()
      .then(res => {
        // Handle the JSON data
        setFuction(res.documents)
        console.log(res.documents);
        setLoading(false);
        // console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Fetch error:', error);
      });
  }


  useEffect(() => {
    fetchdata("men-shirts", setData1);
    fetchdata("men-pants", setData2);
    setNav(true)
    setFoot(true);
  }
    , [])
  return (
    <>
      {
        loading ? <>
          <div className='max-w-[1400px] h-[500px] w-full  py-2 relative group bg-slate-200 animate-pulse'>
            <div className='duration-1000 bg-center bg-contain bg-no-repeat'>
            </div>
          </div>
          <div className='h-auto '>
            <div className="flex h-32 justify-center items-center gap-5 flex-col ">
              <h1 className=' h-6 w-48 rounded-md bg-slate-200 animate-pulse'></h1>
              <h1 className=' h-5 w-72 rounded-md bg-slate-200 animate-pulse'></h1>
            </div>
            <div className='flex justify-center items-center gap-20'>
              <div className='[h-80%] sm:h-96 sm:w-[40%]  rounded-lg bg-slate-200 animate-pulse'>
              </div>
              <div className='[h-80%] sm:h-96 sm:w-[40%] rounded-lg bg-slate-200 animate-pulse'>
              </div>
            </div>
          </div>
        </> : <>
          <Carousel />
          <div className='p-5 sm:py-10 sm:px-20 h-auto'>
            <h1 className=' text-xl sm:text-2xl  text-center my-1'>MARBLE DESIGN'S</h1>
            <p className='sm:text-base text-sm text-slate-400 text-center mb-7'>Upgrade your home, temple and your environment with our new fresh designs</p>
            <div className='flex flex-col justify-center gap-2 sm:gap-12 items-center sm:flex-row '>
              <Img className="h-[80%] sm:h-96 object-cover" src="image1.jpg" alt=""   textLines={["Tables Marbles", ]}/>
              <Img className="h-[80%] sm:h-96 object-cover" src="image2.jpg" alt="" textLines={["Floor Marbles"]} />
            </div>
          </div>
          <div className="p-5 sm:py-10 sm:px-20">
  <h1 className="text-xl sm:text-2xl text-center my-1">Explore Products</h1>
  <p className="sm:text-base text-sm text-slate-400 text-center mb-7">Select category</p>

  {/* Responsive Grid with Fixed Card Sizes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
  <Link to="/shopping/floor">
    <div className="rounded-xl overflow-hidden bg-white w-full h-[250px] sm:h-[300px] hover:scale-105 hover:shadow-2xl transition-transform duration-500 shadow-lg">
      <img
        src="https://i.pinimg.com/736x/58/ff/89/58ff89a0f9072e966ab97e1bf04477ac.jpg"
        className="w-full h-[80%] object-cover"
        alt="Floor Marbles"
      />
      <h1 className="font-bold text-lg text-center h-[20%] p-2">Floor Marbles</h1>
    </div>
  </Link>

  <Link to="/shopping/wall">
    <div className="rounded-xl overflow-hidden bg-white w-full h-[250px] sm:h-[300px] hover:scale-105 hover:shadow-2xl transition-transform duration-500 shadow-lg">
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2024/1/377927411/TB/EB/BB/205411933/wall-inlay-9-500x500.jpg"
        className="w-full h-[80%] object-cover"
        alt="Wall Marbles"
      />
      <h1 className="font-bold text-lg text-center h-[20%] p-2">Wall Marbles</h1>
    </div>
  </Link>

  <Link to="/shopping/stairs">
    <div className="rounded-xl overflow-hidden bg-white w-full h-[250px] sm:h-[300px] hover:scale-105 hover:shadow-2xl transition-transform duration-500 shadow-lg">
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2024/3/397669384/EH/IJ/NW/22937853/marble-staircase-design.jpg"
        className="w-full h-[80%] object-cover"
        alt="Stairs Marbles"
      />
      <h1 className="font-bold text-lg text-center h-[20%] p-2">Stairs Marbles</h1>
    </div>
  </Link>

  <Link to="/shopping/temple">
    <div className="rounded-xl overflow-hidden bg-white w-full h-[250px] sm:h-[300px] hover:scale-105 hover:shadow-2xl transition-transform duration-500 shadow-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAXHptdNP8yZuSew8-D7DBg28QD-l2qJ5HA&s"
        className="w-full h-[80%] object-cover"
        alt="Temple Marbles"
      />
      <h1 className="font-bold text-lg text-center h-[20%] p-2">Temple Marbles</h1>
    </div>
  </Link>

  <Link to="/shopping/marbles">
    <div className="rounded-xl overflow-hidden bg-white w-full h-[250px] sm:h-[300px] hover:scale-105 hover:shadow-2xl transition-transform duration-500 shadow-lg">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/1c/b6/91/eb/marble-handicrafts-in.jpg"
        className="w-full h-[80%] object-cover"
        alt="Marbles"
      />
      <h1 className="font-bold text-lg text-center h-[20%] p-2">Marbles</h1>
    </div>
  </Link>

  <Link to="/shopping/table">
    <div className="rounded-xl overflow-hidden bg-white w-full h-[250px] sm:h-[300px] hover:scale-105 hover:shadow-2xl transition-transform duration-500 shadow-lg">
      <img
        src="https://i.etsystatic.com/29921540/r/il/d27a22/4191437150/il_570xN.4191437150_93ew.jpg"
        className="w-full h-[80%] object-cover"
        alt="Table Marbles"
      />
      <h1 className="font-bold text-lg text-center h-[20%] p-2">Table Marbles</h1>
    </div>
  </Link>
</div>
</div>

          {/* <div className='p-5 sm:p-20'>
            <img src="" alt="" />
          </div> */}
          <CardSection data={data1} heading={"New Arrival"} subHead={"Upgrade your wardrobe with our must-have shirts"} />
          <div className='p-5 sm:py-10 sm:px-20'>
            <h1 className=' text-xl sm:text-2xl  text-center my-1'>Your Season To Renivate Your Home</h1>
            <p className='sm:text-base text-sm text-slate-400 text-center mb-7'>Shop and deal with us on our products by contact us.....</p>
            <img className='w-full sm:h-[500px] h-[220px] object-cover' src="https://i.redd.it/marble-handicrafts-of-jaipur-v0-r0fdutzos96c1.jpg?width=1224&format=pjpg&auto=webp&s=ecee8b865965a7ac9d8288fad33b1ef28cbd6848" alt="" />

          </div>
          {/* <CardSeclotion data={data2} heading={"Season's Best Collections"} subHead={"Discover the latest trends in streetwear"} /> */}
        </>
      }
      {/* <NewsLetter /> */}
    </>

  )
}

export default Home