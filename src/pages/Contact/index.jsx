import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import FormInput, { Area } from "../../components/Input";
import Head from "../../components/Head";

function Contact() {
  function submit(e) {
    let form = e.target;
    let data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };
    axios
      .post("/contact", data)
      .then((response) => {
        toast.success(response.data);
        form.reset();
      })
      .catch((e) => {
        toast.error(e.message);
      });
    e.preventDefault();
  }
  return (
    <>
      <Head
        title="Contact Us"
        desc="Contact us with our super-fast response system"
        img="https://raw.githubusercontent.com/abrahamebij/images/main/previews/contact.webp"
      />
      <section className="grid lg:grid-cols-2 items-center bg-white dark:bg-slate-900">
        {/* Form */}
        <div className="px-3 pb-5 pt-10">
          <h1 className="font-bold text-center text-3xl mb-4 dark:text-white">
            Contact Us
          </h1>
          <form
            className="flex flex-col items-center gap-y-4"
            onSubmit={submit}
          >
            <FormInput type="text" name="Full Name" for="name" />
            <FormInput type="email" name="Email" required={true} for="email" />
            <Area name="Message" required={true} for="message" AreaClassName='h-48' />
            <Button
              value="Send"
              icon={<FaPaperPlane />}
              type="submit"
              className="w-4/5 justify-center py-3 px-5 text-xl md:w-fit"
            />
          </form>
        </div>
        {/* Image */}
        <div>
          <img
            src="/img/wallpaper.jpg"
            className="hidden md:block w-full h-[calc(100vh-52px)]"
            alt="for something"
          />
        </div>
      </section>
    </>
  );
}
export default Contact;
