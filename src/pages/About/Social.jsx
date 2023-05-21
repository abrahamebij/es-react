import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
import { Icon } from "../../components/Link";

function Social() {
  return (
    <div className="pt-12 pb-6">
          <h2 className="home-underline font-bold text-3xl text-center">
           Our Handles
          </h2>
          <div className="pt-8 px-5 flex flex-wrap flex-row justify-center gap-x-20 gap-y-5 text-5xl">
            <Icon icon={<FaFacebook />} />
            <Icon icon={<FaTwitter />} />
            <Icon icon={<FaTelegram />} />
          </div>
        </div>
  )
}

export default Social;