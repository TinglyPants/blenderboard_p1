import SvgIcon from "../general/SvgIcon";
import { useNavigate } from "react-router-dom";

export default function SideBarItem({ name, path, url, onClick }) {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(url);
    };

    return (
        <div
            className="grid grid-cols-3 mx-[2rem] w-[10rem] cursor-pointer mt-[1rem] group"
            onClick={onClick === undefined ? handleRedirect : onClick}
        >
            {" "}
            {/* Wrapper for side bar item, allows better spacing. */}
            <div className="items-center justify-center">
                {" "}
                {/* Wrapper for icon */}
                <SvgIcon path={path} />
            </div>
            <div className="flex flex-row items-center col-span-2 text-white text-lg group-hover:text-highlight">
                {" "}
                {/* Wrapper for text */}
                <p>{name}</p>
            </div>
        </div>
    );
}
