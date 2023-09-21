import Footer from "../components/auth/footer";
import BackgroundImage from "../../../public/photos/main-background.jpeg";

const MainLayout = ({ children }) => {
  return (
    <div
      className="main-layout"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
