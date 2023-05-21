import ImgCard from "./ImgCard";
function Ministers() {
  return (
    <div className="pt-12 px-5">
      <h2 className="home-underline font-bold text-3xl text-center">
        Our Ministerial Team
      </h2>
      <div className="pt-8 px-5 grid sm:flex flex-wrap justify-center gap-x-12 gap-y-8">
        <ImgCard name="Dcn. Sylvester Ogbeibu" src="/img/placeholder.png" />
        <ImgCard name="Pst.(Mrs) Monisola Olujimi" src="/img/placeholder.png" />
        <ImgCard name="Dcn. Daniel Onyemulu" src="/img/placeholder.png" />
        <ImgCard name="Dcn. John Doe" src="/img/placeholder.png" />
        <ImgCard name="Dcn. John Doe" src="/img/placeholder.png" />
      </div>
    </div>
  );
}

export default Ministers;
