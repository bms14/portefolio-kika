// Placeholder arrow — will be replaced with the final SVG from the client.
// Direction rotates the same base shape: down=0°, up=180°, left=-90°, right=90°
export default function ArrowIcon({
  direction = "down",
  size = 24,
  className = "",
}: {
  direction?: "down" | "up" | "left" | "right";
  size?: number;
  className?: string;
}) {
  const rotate = { down: 0, up: 180, left: 90, right: -90 }[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={className}
    >
      <path
        d="M12 4V20M12 20L5 13M12 20L19 13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
