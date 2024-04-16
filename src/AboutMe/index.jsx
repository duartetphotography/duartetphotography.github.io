import "./styles.css";

function SemiCircle({ width, height, bgColor }) {
  const marginLeft = width === 150 ? 30 : 0;

  return (
    <div
      className="semi-circle"
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        marginLeft: `${marginLeft}px`,
      }}
    />
  );
}

export default function AboutMe() {
  return (
    <div className="flex h-screen">
      <div className="bg-[#373737] flex-[70%] flex items-center">
        <SemiCircle width={400} height={"100%"} bgColor={"#555555"} />
        {/* <SemiCircle width={150} height={400} bgColor={"#373737"} /> */}
        <div className="w-[60%] z-50 flex ml-[-20%] justify-center items-center flex-col text-white">
          <h1 className="mb-4 font-bold text-7xl">SOBRE MIM</h1>
          <div className="w-[70%]">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aliquid beatae similique sapiente, commodi ea. Aut,
              a laborum natus nesciunt velit, tempore tempora illo quaerat, vero
              placeat in deleniti doloremque?
            </p>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              quo eaque iure exercitationem libero et consequuntur. Quod, nobis
              hic reiciendis adipisci sequi velit quisquam debitis? Tempore et
              qui obcaecati voluptate?
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              aliquam perspiciatis odio dicta amet est beatae ipsam nemo et
              aspernatur. Eaque, minus at ipsam laborum in commodi quia pariatur
              sequi!
            </p>
          </div>
        </div>
        <div className="w-[40%] bg-white h-[60%] flex justify-center items-center inner">
          <p>asadsda</p>
        </div>
      </div>
      <div className="bg-[url('/fundo_marmore.jpg')] bg-cover flex-[30%] flex items-center">
        <img src="/teste.png" alt="DRK" className="w-[95%]" />
      </div>
    </div>
  );
}
