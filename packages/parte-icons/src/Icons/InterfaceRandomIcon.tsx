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
        d="M11.48 4h1.11l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H11c-.32 0-.59.16-.77.38l-.01-.01L8.28 4.8l1.28 1.6L11.48 4Zm2.23 6.29a1.003 1.003 0 0 0-1.42 1.42l.3.29h-1.11l-7.7-9.62h-.01A.996.996 0 0 0 3 2H1c-.55 0-1 .45-1 1s.45 1 1 1h1.52l7.7 9.62.01-.01c.18.23.45.39.77.39h1.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2ZM2.52 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.32 0 .59-.16.77-.38l.01.01 1.94-2.42L4.44 9.6 2.52 12Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceRandomIcon = convertIcon(Icon, "interface-random");
export default InterfaceRandomIcon;
