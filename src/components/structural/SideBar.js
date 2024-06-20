export default function SideBar({ children }) {
    return (
        <div className="text-white w-[21rem] h-full flex flex-col items-center border-r-[1px] border-lightest pt-[2rem]">
            {children}
        </div>
    );
}
