import Image from "next/image";
import notFound from "../assets/404-Error-Page-not-Found.svg";

const NotFoundPage = () => {
  return (
    <Image
      style={{
        width: "100%",
        justifyContent: "center",
        height: "100vh",
      }}
      src={notFound}
      width={500}
      height={500}
      alt="NOT FOUND"
    />
  );
};

export default NotFoundPage;
