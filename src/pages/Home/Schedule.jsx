import Card from "./Card";
import OCard from "./OCard";
import pic from "../../img/praise.webp";
import { days, hrs, mins, secs } from "../../configs/formatter";
import { useState } from "react";

function Schedule() {
  // Get next day unless if today is that day.
   function nextDay(x, hour, minute, second) {
    var now = new Date();
    now.setDate(now.getDate() + ((x + (7 - now.getDay())) % 7));
    return now;
  }
  // Get next day regardless of if today is that day.
  function nextDate(dayIndex, hour, minute, second) {
    var today = new Date();
    today.setDate(
      today.getDate() + ((dayIndex - 1 - today.getDay() + 7) % 7) + 1
    );
    today.setHours(hour);
    today.setMinutes(minute);
    today.setSeconds(second);
    return today;
  }

  const [sunday, setSunday] = useState(nextDate(0, 10, 0, 0)  - new Date());
  const [tuesday, setTuesday] = useState(
    nextDate(2, 6, 30, 0) - new Date()
  );
  const [thursday, setThursday] = useState(
    nextDate(4, 6, 30, 0) - new Date()
  );

  setInterval(() => {
    setSunday(nextDate(0, 10, 0, 0) - new Date());
    setTuesday(nextDate(2, 6, 30, 0) - new Date());
    setThursday(nextDate(4, 6, 30, 0) - new Date());
  }, 1000);

  const time = {
    sunday: {
      days: days(sunday),
      hours: hrs(sunday),
      minutes: mins(sunday),
      seconds: secs(sunday),
    },
    tuesday: {
      days: days(tuesday),
      hours: hrs(tuesday),
      minutes: mins(tuesday),
      seconds: secs(tuesday),
    },
    thursday: {
      days: days(thursday),
      hours: hrs(thursday),
      minutes: mins(thursday),
      seconds: secs(thursday),
    },
  };

  return (
    <section className="mt-20 mb-10 px-10" id="schedule">
      <h2 className="font-bold dark:text-white text-3xl text-center mb-7 home-underline">
        Schedule
      </h2>
      <div className="flex items-center justify-around gap-x-5">
        <div className="w-full">
          <h2 className="font-bold dark:text-white text-xl underline p-2">
            Main Services
          </h2>
          <div className="grid">
            {/* Item */}
            <Card
              value="SUNDAY SERVICE"
              days={time.sunday.days}
              hours={time.sunday.hours}
              minutes={time.sunday.minutes}
              seconds={time.sunday.seconds}
            />
            <Card
              value="DIGGING DEEP"
              days={time.tuesday.days}
              hours={time.tuesday.hours}
              minutes={time.tuesday.minutes}
              seconds={time.tuesday.seconds}
            />
            <Card
              value="FAITH CLINIC"
              days={time.thursday.days}
              hours={time.thursday.hours}
              minutes={time.thursday.minutes}
              seconds={time.thursday.seconds}
            />
          </div>
          <h2 className="font-bold dark:text-white text-xl underline p-2 mt-8">
            Other Services
          </h2>
          <OCard value="7 DAYS OF GLORY" desc="Last full week of the month" />
          <OCard value="Youth Sunday" desc="Third Sunday of the month (10am)" />
        </div>
        {/* Image */}
        <div className="w-2/3 hidden md:block">
          <img src={pic} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Schedule;
