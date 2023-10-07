import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200 p-4 rounded-2xl">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-8" to="/">I can be a React component, multiple React components....</Link>
                <Link className="mr-8" to="/">I can be a React component, multiple React components....</Link>
                <Link className="mr-8" to="/">I can be a React component, multiple React components....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;