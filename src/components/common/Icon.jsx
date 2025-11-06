import { useState } from "react";
export default function SocialIcon({
  children,
  color,
  bgColor,
  border,
  hoverColor,
  hoverBg,
  hoverBorder,
}) {
  const [hover, setHover] = useState(false);

  const styles = {
    color: hover ? hoverColor : color,
    backgroundColor: hover ? hoverBg : bgColor,
    border: hover ? hoverBorder : border,
  };

  return (
    <a
      href="#"
      style={styles}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="ease-in hover:-translate-y-1 duration-300 lg:p-3.5 p-2.5 rounded-full lg:text-[22px] text-[16px]"
    >
      {children}
    </a>
  );
}
