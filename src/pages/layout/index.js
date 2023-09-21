import Footer from "../components/auth/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
