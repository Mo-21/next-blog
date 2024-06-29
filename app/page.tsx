import Image from "next/image";
import NavigationBar from "./NavigationBar";
import BlogCards from "./ui/homepage/BlogCards";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="prose my-3">
        <h1>Explore thousands of posts online</h1>
      </div>
      <Image
        src="/computer.jpg"
        width="1000"
        height="500"
        alt="computer"
        className="rounded-md"
      />
      <BlogCards />
    </div>
  );
};

export default Home;
