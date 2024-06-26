import images1 from '../../assets/images (1).jpg'
import images2 from '../../assets/images (2).jpg'
import images3 from '../../assets/images (3).jpg'
import images4 from '../../assets/images (4).jpg'

const Banner = () => {

    
    return (
        <div>
            <div className="relative mb-16 rounded-md">
                <div className="carousel w-full h-96">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={images1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={images2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={images3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={images4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-[30px] text-black text-center space-y-60">
                    <h2 className="text-3xl font-semibold text-white ">BEST Art & Craft </h2>
                   
                    <button className="btn bg-rose-500 border-0 hover:bg-rose-800 text-white uppercase"> Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;