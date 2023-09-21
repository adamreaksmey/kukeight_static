import Footer from "../components/auth/footer";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="content">
        This is the layout.
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
