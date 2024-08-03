import BannerImage from '../assets/banner-coffe.svg';
import Header from "../Header/index.jsx";

const Banner = () => {
    return (
        <>
            <div className="w-screen flex flex-row flex-wrap">
                <Header />
                <div>
                <img src={BannerImage} alt="Banner da Coffe Zentea" className='w-full' />
                    <span className='text-6xl text-green-900 font-medium '>
                        Inicie seu dia <br/> Com um Black Coffee
                    </span>
                </div>
            </div>
        </>
    )
}
export default Banner;