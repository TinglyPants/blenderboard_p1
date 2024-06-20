import { useNavigate } from "react-router-dom";

export default function Profile({ username, email, imageURL }) {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/account");
    };

    return (
        <div
            className="align-bottom cursor-pointer mr-[4rem] flex flex-row"
            onClick={handleRedirect}
        >
            {" "}
            {/* Wrapping Div */}
            <div className="h-[3rem] flex flex-col mr-[1rem] text-right">
                {" "}
                {/* Username and email div */}
                <p className="text-white">{username}</p> {/* Username */}
                <p className="text-lightest">{email}</p> {/* Email Address */}
            </div>
            <div className="overflow-hidden size-[3rem] rounded-full">
                {" "}
                {/* Profile picture */}
                <img alt="Currently logged in user" src={imageURL} />
            </div>
        </div>
    );
}
