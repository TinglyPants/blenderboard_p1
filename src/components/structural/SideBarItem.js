import SvgIcon from "../general/SvgIcon";

export default function SideBarItem({ name, path, onClick }) {
    return (
        <div
            className="grid grid-cols-3 mx-[2rem] w-[10rem] cursor-pointer mt-[1rem] group"
            onClick={onClick}
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
