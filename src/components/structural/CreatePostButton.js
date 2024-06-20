import { useNavigate } from "react-router-dom";

export default function CreatePostButton() {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/create-post");
    };

    return (
        <button
            className="bg-highlight rounded-full mt-[2rem] py-[0.75rem] px-[1.25rem] text-lg"
            onClick={handleRedirect}
        >
            Create Post
        </button>
    );
}
