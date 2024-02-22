import puppyImage from "../assets/puppy.jpg";

export default function Hero() {
  return (
    <section>
      <div className="relative h-[40rem]">
        <img
          alt="Slideshow"
          src={puppyImage}
          className={`absolute inset-0 h-full w-full object-cover`}
        />
      </div>
    </section>
  );
}
