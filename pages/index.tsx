import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image src="/imgs/pagina_em.png" alt="" width="500" height="495" />
    </div>
  );
}

export default Home;
