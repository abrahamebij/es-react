import Card from "./Card";
import OCard from "./OCard";
import { days, hrs, mins, secs } from "../../configs/formatter";
import { useState } from "react";
import {HashRouter} from 'react-router-dom'

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
      <div className="flex flex-col md:flex-row gap-y-5 items-center justify-center gap-x-5">
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
          <OCard value="7 DAYS OF GLORY" desc="Last full week of the month (6pm)" />
          <OCard value="Youth Sunday" desc="Third Sunday of the month (10am)" />
        </div>
        
        {/* Map */}
        <div className="">
        <iframe title="Emmanuel Sanctuary's Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d990.7293085319358!2d3.305944987978656!3d6.657179962738949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b96d234cde637%3A0x52a6f2e8628ef7b1!2sEmmanuel%20Sanctuary!5e0!3m2!1sen!2sng!4v1683297307099!5m2!1sen!2sng" width="360" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    );
}

export default Schedule;
