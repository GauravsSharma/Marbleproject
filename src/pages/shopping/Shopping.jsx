import React, { useEffect, useState } from 'react'
import Card from '../../components/cardSection/Card'
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineFilterList } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useFirebase } from '../../firebase/FirebaseContext';
import Sidebar from './sidebar/Sidebar';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import { useAppwrite } from '../../appwrite/AppwriteContext';
const Shopping = ({ setNav, setFoot }) => {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const {getDocumentsByQuery} = useAppwrite()
  const {category} = useParams()
  const [sort,setSort] = useState(1)

   useEffect(()=>{
    const getAllTheDocuments = async () => {
      setLoading(true);
      const docs = await getDocumentsByQuery(category.toLowerCase());
      setData(docs.documents);
      console.log("Category",docs.documents);      
      setLoading(false);
      return docs.documents;
    }
    getAllTheDocuments()
   },[category])


  return (
    <>
    <div className='flex w-full h-auto relative'>
      {/* <Sidebar /> */}
      <div className="product w-full  sm:p-10 relative  border border-1 min-h">
        <div className="shorting flex justify-between items-center ">
          <h1 className='text-xl sm:text-2xl p-3 font-medium mt-3 sm:mt-0'>Results for "{category}"  {data?.length} products found</h1>
          <form>
            <div className='justify-center items-center hidden md:flex'>
              <label htmlFor="sort" className='text-slate-500 mr-2 font-extralight'>Sort by:</label>
              <select name="" id="sort" className='py-1 px-1 sm:py-2 sm:px-3 border border-1 text-slate-400 border-slate-300 rounded-sm' onClick={()=>{}}>
                <option value="latest" className='h-5'>Latest</option>
                <option value="priceHighToLow" className='py-2 px-3'>Price high to low</option>
                <option value="priceLowToHigh" className='py-2 px-3'>Price low to high</option>
              </select>
            </div>
          </form>
        </div>
        {
          loading ?
            <>
              <div className='h-screen sm:h-[20rem] w-full sm:w-[90vw] px-2 py-8 sm:px-10 sm:pt-10 flex justify-start sm:gap-2 flex-wrap sm:flex-nowrap'>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[60%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[60%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse rounded-lg' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[60%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[60%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>

              </div>
            </> : <>
              <div className="flex relative flex-wrap sm:gap-5 justify-start items-center h-auto">

                {data?.length>0?data?.map((item) => (
                  <Card key={item.$id} thumbnail={item.thumbnail} title={item.title} price={item.price} id={item.$id} />
                )):<div className='h-[50vh] flex-col w-full flex justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696455.jpg?w=740&t=st=1704097849~exp=1704098449~hmac=5687c29893929c2e701b30b28d07e38eb69a69b1cb29215aaa85d6c6c683dd0b" className='h-60 w-60 object-cover' alt="" />
                    <h1 className='-mt-5 text-xl text-slate-500'>Oops!! search not found</h1>
                </div>}
              </div>
              <div className={`h-full bg-slate-700/25 duration-300 w-full fixed left-0 sm:hidden flex justify-center overflow-hidden`} onClick={() => toggleSort("top-full")}>
                <div className={` w-full h-48 bg-slate-100 shadow-2xl p-5 absolute bottom-0`} onClick={(event) =>(event)}>
                  <h2 className='font-bold text-base'>SORT BY</h2>
                  <div className='w-full border-b py-2 mt-5' onClick={()=>("priceHighToLow")}>Price High to Low</div>
                  <div className='w-full border-b py-2' onClick={()=>("priceLowToHigh")}>Price Low to High</div>
                </div>
              </div>
            </>}
        <div className='sm:hidden flex fixed bottom-0 h-14 bg-slate-50 w-full justify-between items-center'>
          <div className="sort w-1/2 flex justify-center items-center">
            <TbArrowsSort className='mr-2' />
            <p className='text-base font-semibold text-red-500' onClick={() =>("top-0")}>SORT</p>
          </div>
          <div className="sort w-1/2 flex justify-center items-center">
            <MdOutlineFilterList className='mr-2' />
            <p className='text-base font-semibold text-red-500' onClick={() =>("block")}>Filter</p>
          </div>
        </div>
      </div>
    </div>
      <NewsLetter/>
      </>
  )
}

export default Shopping