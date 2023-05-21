import { useState } from "react";
import { FaRegCopy, FaCheckCircle } from "react-icons/fa";
import { Bicon } from "../../components/Button";

function Account(props) {
  const [copied, setCopied] = useState(false);
  function offering() {
    navigator.clipboard.writeText(props.acct);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }
  return (
    <div className="flex gap-x-2 justify-center items-center">
      <h3 className="font-semibold pt-3">
        {" "}
        <span className="font-normal">{props.title} - </span> {props.acct}
      </h3>
      {/* Icons */}
      <div className="text-xl pt-4">
        <Bicon
          icon={<FaRegCopy className={copied ? "hidden" : ""} />}
          onClick={offering}
        />
        <Bicon
          icon={
            <FaCheckCircle
              className={`${copied ? "" : "hidden"} text-green-500`}
            />
          }
        />
      </div>
    </div>
  );
}

export default Account;
