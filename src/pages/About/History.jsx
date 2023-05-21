import Card from "./Card";
import { Btn } from "../../components/Link";

function History() {
  return (
    <div className="pt-12">
      <h2 className="home-underline font-bold text-3xl text-center">
        Our History
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-7 gap-x-5 pt-8 lg:pt-16 px-5">
        <Card
          title="The Beginning"
          desc={[
            "RCCG Emmanuel Sanctuary Parish was inaugurated on the 28th of April 2002 at 34 Agbe Road Abule Egba, Lagos.",
            "It was established as part of the instructions issued by our Daddy, the General Overseer of RCCg worldwide, Pastor E.A. Adeboye to the Ikeja family at the time that we should scatter and spread our tentacles.",
            "The Parish was established by the RCCG Dominion Sanctuary Area, located at 1, Vori Close, Acme Road, Ogba, under the leadership of Pastor Segun Shitta-Bay, who was the Area Pastor at the time.",
          ]}
        />
        <Card
          title="Elevation to Area HQ"
          desc={[
            "In 2003, RCCG Emmanuel Sanctuary with three other parishes were brought together to form the new Gloryland Area under Pastor Paul Adewunmi, with the Area headquarters situated at Gloryland Chapel.",
            "By the grace of the Almighty God who alone has the power to promote, on 1st of November 2005, RCCG Emmanuel Sanctuary became an Area Headquarter with other two parishes were brought together to form the new Emmanuel Sanctuary Area. The two parishes were - RCCG Halleluyh House and RCCG Prince Of Peace.",
            "Pastor Tokunbo Adegboye was later transferred and Pastor(Dr) Sanu was brought as the new Pastor-In-Charge of Area",
          ]}
        />
        <Card
          title="Transition to Zone"
          desc={[
            "In September 2009, RCCG Emmnanuel Sanctuary became Zonal HQ with three other Areas placed under the zone. Pastor John Airuoyo became the first PIC Zone of the new Emmanuel Sanctuary Zone. It is noteworthy that during his tenure the church experienced growth and the property upon which the church is situated till now was acquired as permanent property of the church and the church auditorium was equipped with air conditioning systems.",
            "In 2011, there was a change of leadership and Pastor Osa Odigie was brought in as the new PIC Zone. He transformed the auditorium to a modern worship centre by equipping it with media equipment. At some point, Emmanuel Sanctuary became an Area HQ again by Gods divine arrangement and this paved a way for Pastor Niyi Olujimi to resume as the Pastor In Charge of Area in 2018. By the grace of God, prayers and determination of the people, it was elevated back to a Zonal HQ again in 2019 with Pastor Niyi Olujimi as the PIC Zone.",
          ]}
        />
      </div>
      <Btn value="Read More..." href="/our-history" className="mx-auto my-8" />
    </div>
  );
}

export default History;
