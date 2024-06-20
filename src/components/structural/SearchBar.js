import SvgIcon from "../general/SvgIcon";

export default function SearchBar() {
    // Currently has no functionality, as will be added when handling backend.

    return (
        <div className="flex bg-lightest p-5 mx-[2rem] items-center text-white rounded-full w-full">
            <input className="bg-lightest w-full focus:outline-none" />{" "}
            {/* Input for search text*/}
            <SvgIcon
                path="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                name="Search"
            />{" "}
            {/* Search Icon */}
        </div>
    );
}
