import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14.72 7.87c-1.54-.67-2.99-2.68-3.7-3.95C10.11 1.95 9.93 0 6.14 0 4.05 0 2.71.61 1.92 2.12 1.27 3.36 1 5.21 1 7.83v.79c0 .65.6 1.18 1.35 1.18.34 0 .64-.11.88-.29.17.48.68.84 1.29.84.41 0 .78-.16 1.03-.42.23.37.67.63 1.19.63.57 0 1.05-.31 1.25-.74l.01.63v4.05c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7.9c.58.41 1.55 1.21 2.47 1.29 1.57.14 1.82-1.07 1.25-1.32Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceHandDownIcon = convertIcon(Icon, "interface-hand-down");
export default InterfaceHandDownIcon;
