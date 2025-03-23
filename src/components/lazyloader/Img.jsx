// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const Img = ({ src, className = "" }) => {
//     // console.log(className);
//     return (
//         <div className={`${className} relative`}>
//             <div className="absolute flex justify-end flex-col items-start p-10 gap-1  z-30 h-full w-full bg-black/50">
//               <h1 className="text-white text-3xl font-semibold">Beatifull</h1>
//               <h1 className="text-white text-3xl font-semibold">Temple Marble</h1>
//               <h1 className="text-white text-3xl font-semibold"></h1>
//             </div>
//             <LazyLoadImage
//                 className="h-96 w-full"
//                 alt=""
//                 effect="blur"
//                 src={src}
//             />
//         </div>
//     );
// };

// export default Img;

// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const Img = ({ src, className = "" }) => {
//     return (
//         <div className={`${className} relative group overflow-hidden`}>
//             <div className="absolute flex justify-end flex-col items-start p-10 gap-1 z-30 h-full w-full bg-black/50 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//                 <h1 className="text-white text-3xl font-semibold">Beautiful</h1>
//                 <h1 className="text-white text-3xl font-semibold">Temple Marble</h1>
//                 <h1 className="text-white text-3xl font-semibold"></h1>
//             </div>
//             <LazyLoadImage
//                 className="h-96 w-full"
//                 alt=""
//                 effect="blur"
//                 src={src}
//             />
//         </div>
//     );
// };

// export default Img;


import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, textLines = [], className = "" }) => {
    return (
        <div className={`${className} relative group overflow-hidden`}>
            <div className="absolute flex justify-end flex-col items-start p-10 gap-1 z-30 h-full w-full bg-black/50 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                {textLines.map((line, index) => (
                    <h1 key={index} className="text-white text-3xl font-semibold">
                        {line}
                    </h1>
                ))}
            </div>
            <LazyLoadImage
                className="h-96 w-full"
                alt=""
                effect="blur"
                src={src}
            />
        </div>
    );
};

export default Img;
