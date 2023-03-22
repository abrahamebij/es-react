import Hero from "../../components/Hero";
import Head from '../../components/Head'
function MV() {
  return (
    <>
    <Head title='Mission and Vision' desc='The mission and vision of RCCG global are six in numbers.' />
    <section>
      <Hero title="MISSION AND VISION" desc='The mission and vision of RCCG'/>
      <div className="flex px-5 py-12">
      <div className="">
        <p>1.) To make heaven.</p>
        <p>2.) To take as many people with us.</p>
        <p>3.) To have a member of RCCG in every family of all nation.</p>
        <p>4.) To accomplish No. 1 above, holiness will be our lifestyle.</p>
        <p>
          5.) To accomplish No. 2 and 3 above, we will plant churches within
          five minutes walking distance in every city and town of developing
          countries and within five minutes driving distance in every city and
          town of developed countries.
        </p>
        <p>
          6.) We will pursue these objectives until every Nation in the world is
          reached for the Lord Jesus Christ.
        </p>
      </div>
      <div className="w-3/5"></div>
      </div>
    </section>
    </>
  );
}
export default MV;
