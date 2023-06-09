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
        d="M15.93 5.63v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37ZM9 2h3.32l1.2 3H9V2ZM3.68 2H7v3H2.48l1.2-3ZM14 14H2V7h5v2.59l-1.29-1.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3a1.003 1.003 0 0 0-1.42-1.42L9 9.59V7h5v7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileCompressedIcon = convertIcon(Icon, "file-compressed");
export default FileCompressedIcon;
