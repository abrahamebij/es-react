import Hero from '../../components/Hero'
import Head from "../../components/Head";
import Card from "./Card";

function History() {
  return (
    <>
    <Head title='Our History'/>
    <Hero title='Our History' />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-7 gap-x-5 py-8 lg:py-16 px-5">
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

        <Card
          title="Emmanuel Sanctuary Pastors over the years"
          desc={[
            "Since inception, RCCG Emmanuel Sanctuary has been blessed to be led by about five different Pastors, they are:-",
            "1.) Pastor Tokunbo Adegboye — 2002 to 2006",
            "2.) Pastor (Dr) Sanu — 2006 to 2009",
            "3.) Pastor John Airuoyo - 2011 to 2017",
            "4.) Pastor Osa Odigie - 2011 to 2017",
            "5.) Pastor Niyi Olujimi — 2018 till date",
          ]}
        />
        <Card
          title="Emmanuel Parish Coordinators"
          desc={[
            "Emmanuel has been blessed with great me of God who served faithfully at one time or the other as the Assistant to the Pastor In Charge, these are known as Parish Coordinators.",
            "1.) Pastor Femi Omolaiye",
            "2.) Pastor (Mrs) Feyi Adeoti",
            "3.) A/P Segun Filani",
            "4.) A/P Abiodun Ishola",
            "4.) A/P Ken Ilalokhoin",
            "4.) A/P Chris Okoh",
            "4.) Deacon Andrew Akala",
          ]}
        />
        <Card
          title="The Church Demography"
          desc={[
            "RCCG Emmanuel Sanctuary is a church of mixed demographies, which creates a balance and an atmosphere very exciting for the young and old, as well as the Teens and Children. It's cultural diverse provides an ambience of family ties and love, as it exists in the true home family. This has made Emmanuel Sanctuary a family church in the neighborhood.",
          ]}
        />
        <Card
          title="Permanent Building"
          desc={[
            "RCCG Emmnauel Sanctuary started with the rental of the present property that it occupies. Between year 2009-2011, under the leadership of Pastor John Airuoyo, the property was permanently acquired and owned by the church. This has been its permanent location since inception.",
            "In 2019, one year after the resumption of Pastor Niyi Olujimi, a piece of land was acquired beside the church which has now created space for expansion and enlargement of the church.",
          ]}
        />
        <Card
          title="Permanent Building"
          desc={[
            "RCCG Emmnauel Sanctuary started with the rental of the present property that it occupies. Between year 2009-2011, under the leadership of Pastor John Airuoyo, the property was permanently acquired and owned by the church. This has been its permanent location since inception.",
            "In 2019, one year after the resumption of Pastor Niyi Olujimi, a piece of land was acquired beside the church which has now created space for expansion and enlargement of the church.",
          ]}
        />
        <Card
          title="The Community"
          desc={[
            "The impact of the church in the Community where it is situated is second to none. The church is engaging and impacting. The church embarks on CSR - Christian Social Responsibility programs which covers medical as well as other welfare activities.",
          ]}
        />
        <Card
          title="The Future"
          desc={[
            "The future is only known unto God. However, our dream and desire is to see RCCG Emmanuel Sanctuary elevated into a Provincial or Regional HQ as the Lord will permit.",
            "By God's special grace, our dream is to see the church impacting the community and larger society more and more through the establishment of the following:",
            "1.) A Community Health Centre: this will end maternal mortality in the community and provide better health care to the people.",
            "2.) Activity Play Ground: to engender connection and networking among the members and deepen our family ties.",
            "3.) Biz Hub: to create employment and source of livelihood for members and the community.",
            "4.) A School: create ambience of learning with spiritual knowledge for a balance understanding for our children as well as provide...",
            "5.) Care Centre: for welfare of destitute.",
            "6.) Events Centre: to help generate more revenue for the church.",
            "7.) Soul Winning: as the heartbeat of the Lord, we hope to do more and bring the light of God into homes and hearts of people.",
          ]}
        />
      </div>
    </>
  );
}

export default History;
