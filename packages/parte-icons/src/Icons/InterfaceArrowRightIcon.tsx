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
        d="m14.7 7.29-5-5a.965.965 0 0 0-.71-.3 1.003 1.003 0 0 0-.71 1.71l3.29 3.29H1.99c-.55 0-1 .45-1 1s.45 1 1 1h9.59l-3.29 3.29a1.003 1.003 0 0 0 1.42 1.42l5-5c.18-.18.29-.43.29-.71 0-.28-.12-.52-.3-.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceArrowRightIcon = convertIcon(Icon, "interface-arrow-right");
export default InterfaceArrowRightIcon;
