export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-12 rounded-xl">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        poster="/images/video-poster.jpg" // Fallback while loading
      >
        <source src="video/herovideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
