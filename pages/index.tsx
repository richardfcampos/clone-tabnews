import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('/imgs/brickwall.png')", // Correct property name
        backgroundSize: "auto", // Ensures the image covers the entire background
        backgroundPosition: "center", // Centers the background image
      }}
    >
      <Image
        src="/imgs/pagina_em.png"
        alt=""
        width="500"
        height="495"
        style={{ width: "100vw" }}
      />
    </div>
  );
}

export default Home;
