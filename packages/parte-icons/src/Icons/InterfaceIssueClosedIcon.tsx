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
        d="M9.296.104a2.99 2.99 0 0 0-1.003.664 2.987 2.987 0 0 0-.75 1.25 6 6 0 1 0 6.28 4.527c.043-.039.085-.079.127-.12l1.456-1.456A8 8 0 1 1 9.296.105Zm2.532 5.2a.997.997 0 0 1-.707-.294L9.707 3.596a1 1 0 1 1 1.414-1.414l.707.707 1.768-1.768a1 1 0 1 1 1.414 1.415L12.536 5.01a.997.997 0 0 1-.708.293ZM9 12H7v-2h2v2Zm0-3H7V4h2v5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceIssueClosedIcon = convertIcon(Icon, "interface-issue-closed");
export default InterfaceIssueClosedIcon;
