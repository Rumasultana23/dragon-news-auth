import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline text-blue-500 w-full flex">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline  w-full ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>

            <div className="p-4  mb-6">
                <h2 className="text-3xl font-semibold">Find Us On</h2>
                <a className='text-lg font-medium flex items-center gap-3 p-4 border rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    FaceBook
                </a>
                <a className='text-lg font-medium flex items-center gap-3 p-4 border-x ' href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='text-lg font-medium flex items-center gap-3 p-4 border rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className="p-4 bg-gray-100 space-y-3 mb-6 flex items-center justify-center ">
                <div>
                    <h2 className="text-3xl font-semibold">Q Zone</h2>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;