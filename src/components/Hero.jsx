function Hero(props) {
  return (
    <section
      className={`relative bg-black/60 bg-wallpaper lg:bg-black/40 bg-cover bg-center text-gray-50 bg-blend-darken`}
    >
      <div className="px-4 py-20 md:py-36 text-white dark:text-black">
        <div className="text-center flex flex-col gap-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            {props.title}
          </h1>
          <p>{props.desc}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
