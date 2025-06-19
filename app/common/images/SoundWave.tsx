const SoundWave = () => {
  return (
    <svg
      viewBox="0 0 944 944"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-0 pointer-events-none"
      style={{
        width: "720px",
        height: "720px",
        left: "-50px", // მარცხნივ გადაადგილება
        top: "-10px", // ზევით წამოწევა
        opacity: 0.2,
      }}
    >
      <g fill="none" stroke="#fff">
        <circle cx="472" cy="472" r="235.5" />
        <circle cx="472" cy="472" r="270.5" />
        <circle cx="472" cy="472" r="471.5" />
      </g>
    </svg>
  );
};

export default SoundWave;
