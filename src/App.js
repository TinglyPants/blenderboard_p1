import Logo from "./components/structural/Logo";
import NavBar from "./components/structural/NavBar";
import Profile from "./components/structural/Profile";
import SearchBar from "./components/structural/SearchBar";
import SideBar from "./components/structural/SideBar";

export default function App() {
  return (
    <div className="bg-dark w-screen h-screen flex flex-col font-poppins"> {/* Whole Screen Wrapper Div*/}
      <NavBar>
        <Logo/>
        <SearchBar />
        <Profile 
        username="ExampleUsername"
        email="Us3rname_wowie_woah@example.com"
        imageURL="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </NavBar>
      <div className="flex flex-row h-full"> {/* Container for sidebar and main content (required for flex box) */}
        <SideBar>
          <p>Hello WOrld</p>
        </SideBar>
      </div>
    </div>
  );
}
