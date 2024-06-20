import CreatePostButton from "./components/structural/CreatePostButton";
import Logo from "./components/structural/Logo";
import MainContent from "./components/structural/MainContent";
import NavBar from "./components/structural/NavBar";
import Profile from "./components/structural/Profile";
import SearchBar from "./components/structural/SearchBar";
import SideBar from "./components/structural/SideBar";
import SideBarItem from "./components/structural/SideBarItem";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className="bg-dark w-screen h-screen flex flex-col font-poppins">
            {" "}
            {/* Whole Screen Wrapper Div*/}
            <NavBar>
                <Logo />
                <SearchBar />
                <Profile
                    username="ExampleUsername"
                    email="Us3rname_wowie_woah@example.com"
                    imageURL="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
            </NavBar>
            <div className="flex flex-row h-full">
                {" "}
                {/* Container for sidebar and main content (required for flex box) */}
                <SideBar>
                    <SideBarItem
                        name="Home"
                        path="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12"
                        url="/"
                    />
                    <SideBarItem
                        name="Search"
                        path="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                        onClick={() => {
                            console.log("Search Clicked");
                        }}
                    />
                    <SideBarItem
                        name="Account"
                        path="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                        url="/account"
                    />
                    <CreatePostButton />
                </SideBar>
                <MainContent>
                    {" "}
                    {/* Main Content Wrapper */}
                    <Routes>
                        {" "}
                        {/* React Router Wrapper */}
                        <Route path="/" element={"Home Test"} />
                        <Route
                            path="/search-results"
                            element={"Search Results"}
                        />
                        <Route path="/account" element={"Account Test"} />
                        <Route
                            path="/create-post"
                            element={"Post creation Test"}
                        />
                        <Route
                            path="/view-post"
                            element={"Post viewing Test"}
                        />
                        <Route
                            path="/edit-post"
                            element={"Post editing Test"}
                        />
                        <Route path="/login" element={"Login Test"} />
                        <Route path="/signup" element={"Signup Test"} />
                    </Routes>
                </MainContent>
            </div>
        </div>
    );
}
