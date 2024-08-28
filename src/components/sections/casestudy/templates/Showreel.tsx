type Props = {
  showreel: string;
  thumbnail: string;
};

const Showreel = (props: Props) => {
  const { showreel, thumbnail } = props;
  return (
    <video
      src={showreel}
      //   src={showreel || "/"}
      width={1600}
      height={900}
      poster={thumbnail}
      className="object-cover w-full h-full rounded-lg"
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default Showreel;
