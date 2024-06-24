export default function MainContent({ children }) {
    return (
        <div className="w-full h-full text-white overflow-y-scroll">
            {children}
        </div>
    ); // This is a semantic component, it has no real functionality
}
