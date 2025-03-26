import React, { useEffect, useState } from 'react'
import CardSection from '../../components/cardSection/CardSection'
import { useFirebase } from '../../firebase/FirebaseContext';
import { useParams } from 'react-router-dom';
import Img from '../../components/lazyloader/Img'
import toast, { Toaster } from 'react-hot-toast'
import ProductReview from './productReview/ProductReview';
import { FaRegHeart } from "react-icons/fa";
import ProductCarousel from './productDetailViewCarousel/ProductCarousel';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import { useAppwrite } from '../../appwrite/AppwriteContext';
const ItemDetail = ({ setNav, setFoot }) => {
    const [carts, setCarts] = useState([]);
    const ProductReviewMemoized = React.memo(ProductReview);
    const [loading, setLoading] = useState(true);
    const [obj, setObj] = useState(null);
    const [mainSrc, setMainSrc] = useState();
    const [data, setData] = useState();
    const [imgArr, setImgArr] = useState();
    const appwrite = useAppwrite();
    const firebase = useFirebase();
    const { id } = useParams();
    const [productCarouselShow,setProductCarouselShow] = useState(false);
    const fetchData = async () => {
        setLoading(true)
        try {
            console.log("called fetch data")
            const res = await appwrite.getDocumentById(id);  
            fetchData2(res)
            setObj(res);
            setImgArr(res?.thumbnail || []);
            setLoading(false);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    const fetchData2 = async (obj) => { 
        try {
            console.log("I was calling but....");
            const res = await appwrite.getDocumentsByQuery(obj.category);
            setData(res.documents);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        // localStorage.removeItem("cart");
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCarts(JSON.parse(storedCart));
        }
        fetchData()
        setFoot(true);
        setNav(true);

    }, [id, setFoot, setNav]);
    const discountPercentage = ((obj?.OPrice - obj?.DPrice) / obj?.OPrice) * 100;
    const handleImgChange = (img) => {
        setMainSrc(img);
    }
    const handleAddToCart = () => {  
        const object = {
               title:obj.title,
               description:obj.description,
               price:obj.price,
               thumbnail:obj.thumbnail,
               id:obj.$id
            }
            firebase.addToCart(object)
    }
    return (
        <>
            {
                loading ? <>
                    <div className='h-full'>
                        <section id="prodetails" className="p-5 sm:px-10 flex flex-col sm:flex-row w-full  items-center h-[70%]">
                            <div className='h-full w-full sm:w-[35%] flex justify-center items-center sm:gap-2 flex-col-reverse sm:flex-row '>
                                <div className='flex gap-1 justify-center items-center flex-row sm:flex-col w-full sm:w-[20%] mt-1'>
                                    <div className='w-[24%] sm:w-full bg-slate-200 animate-pulse h-[5.7rem] ' />
                                    <div className='h-[5.7rem] w-[24%] bg-slate-200 animate-pulse sm:w-full' />
                                    <div className='h-[5.7rem] w-[24%] bg-slate-200 animate-pulse sm:w-full' />
                                    <div className='h-[5.7rem] bg-slate-200 animate-pulse w-[24%] sm:w-full  ' />
                                </div>
                                <div className='w-full h-[350px]  sm:w-80 sm:h-[420px] bg-slate-200 animate-pulse'></div>
                            </div>
                            <div className=" w-full sm:w-[65%] mt-7 sm:px-12 pt-30">
                                <h6 className="text-xl font-semibold my-2 h-5 w-28 bg-slate-200 animate-pulse rounded-md"></h6>
                                <h4 className="text-3xl my-2  h-7 w-40 bg-slate-200 animate-pulse rounded-md"></h4>
                                <h2 className="text-2xl my-2  h-7 w-24 bg-slate-200 animate-pulse rounded-md"></h2>
                                <div className="block py-2 px-4 mb-4 border border-gray-300 focus:outline-none  h-7 w-32 bg-slate-200 animate-pulse rounded-md">
                                </div>
                                <div type="number" className="focus:outline-none w-14 border border-1 mr-3 p-2  h-5 bg-slate-200 animate-pulse rounded-md inline-block" />
                                <button className=' sm:w-1/4 p-2  hover:bg-slate-600  duration-500  
                      h-10 w-44 bg-slate-200 animate-pulse rounded-md
                    '></button>
                                <h4 className="text-2xl py-4  h-7 w-32 bg-slate-200 animate-pulse rounded-md my-3"></h4>
                                <div className="min-h-[100px] max-w-[400px] bg-slate-200 animate-pulse rounded-md"></div>
                            </div>
                        </section>
                    </div>
                </> : <>
                    <div className='h-full'>
                        <section id="prodetails" className=" p-5 sm:px-10 flex flex-col sm:flex-row w-full  items-center h-[70%]">
                            <div className='h-full w-full sm:w-[35%] flex justify-center items-center sm:gap-2 flex-col-reverse sm:flex-row '>
                                <div className='flex gap-1 justify-center items-center flex-row sm:flex-col w-full sm:w-[20%] mt-1'>
                                   
                                </div>
                                <img src={imgArr} className='w-full sm:w-[80%] h-full cursor-pointer' onClick={()=>setProductCarouselShow(true)}/>
                            </div>
                            <div className=" w-full sm:w-[65%] mt-7 sm:px-12 pt-30">
                               
                                <h4 className="sm:text-3xl text-2xl my-1">{obj?.title}</h4>
                                <div className='flex justify-start items-center'>
                                    <h2 className="text-2xl my-1 font-semibold">₹{obj?.price}/sqr-foot</h2>
                
                                </div>
                                <p className='text-slate-400 font-bold'>Free size</p>
                            
                                <div className='flex sm:my-2  left-0 bg-white sm:shadow-sm shadow-2xl p-1 gap-1 w-full z-10 fixed sm:relative bottom-0'>
                                    <button className=' w-1/2 p-3 gap-2 text-base sm:relative sm:w-1/4 sm:p-2 bg-white text-black border hover:bg-slate-600  duration-500 border-slate-800 hover:text-white flex justify-center items-center rounded-md font-semibold ' onClick={() => {
                                        firebase.addToWishlist({
                                            title: obj.title,
                                            price: obj.price,
                                            thumbnail: obj.thumbnail,
                                            id:obj.$id,
                                        }
   
                                        )
                                    }}>
                                        <FaRegHeart />
                                        WISHLIST
                                    </button>
                                    <button className='w-1/2 left-0 p-3 text-base sm:relative sm:w-1/4 sm:p-2 bg-slate-800 text-white border hover:bg-slate-600 rounded-md  font-semibold  duration-500 border-slate-800 hover:text-white' onClick={handleAddToCart}>ADD TO BAG</button>
                                </div>
                                <h4 className="text-2xl py-4">Product details</h4>
                                <span className="leading-5 w-full">{
                                    obj?.dis ? <p>{obj?.dis}</p> : <p>{obj.description}</p>
                                }</span>
                            </div>
                        </section>
                        <ProductReviewMemoized product={obj} fetchData={fetchData}/>
                        <CardSection data={data} heading={"Similar Products"} subHead={"You may also like"} />
                        <Toaster />
                    </div>
                    {productCarouselShow&&<ProductCarousel images={[imgArr]} setProductCarouselShow={setProductCarouselShow} productCarouselShow={productCarouselShow} />}
                </>
            }
            <NewsLetter/>
        </>
    )
}

export default ItemDetail