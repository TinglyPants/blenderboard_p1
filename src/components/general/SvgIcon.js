export default function SvgIcon({ path, name, onClick }) {
    return (
        <svg
            className="w-full h-full px-[0.75rem] stroke-white mx-2 group-hover:stroke-highlight hover:stroke-highlight"
            viewBox="0 0 24 24"
            fill="none"
            title={name}
            onClick={onClick}
        >
            <path d={path} />
        </svg>
    );
}
