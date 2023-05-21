import Head from "../../components/Head";
import Hero from "../../components/Hero";
import Ways from "./Ways";
import Account from "./Account";

function Give() {
  return (
    <>
      <Head title="Online Giving" />
      <Hero
        title="Give"
        desc={
          <>
            <p>
              Give and it shall be given unto you; good measure, pressed down,
              shaken together, and running over, shall men give unto your bosom.
              For with the same measure that ye mete withal it shall be mesured
              to you again
            </p>
            <p className="italic pt-2">- Luke 6:38</p>
          </>
        }
      />

      {/* Ways to Give */}
      <section className="mt-20 mb-10">
        <h2 className="font-bold dark:text-white text-3xl text-center mb-7 home-underline">
          Ways To Give
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-y-5">
          <div className="dark:text-white px-5 sm:px-10">
            <Ways
              title="Give Online"
              desc="Please find below our bank account details for you to make an online donation by copying and pasting them."
            />
            <Ways
              title="Give In Person"
              desc="You can give in person at any one of our services"
            />
            <Ways
              title="Mail A Check"
              desc="Checks can be written for RCCG Emmanuel Sanctuary, Lagos Nigeria, given during any of our services or sent to No. 34, Agbe Road, Abule-Egba, Lagos, Nigeria."
            />
          </div>
          {/* Image */}
          <div className="w-full md:w-3/5 text-xl md:text-2xl text-center pb-2">
            <img
              src="/img/zenith.png"
              alt="Zenith Bank's Logo"
              className="w-1/4 block mx-auto max-w-md md:max-w-full py-2"
            />
            <Account title='Tithe And Offering' acct='1013496350' />
            <Account title='Building Support' acct='1013496855' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Give;
