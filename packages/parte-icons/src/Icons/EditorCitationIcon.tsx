import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M15.02 5c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 0 0 3.6 2.94C12.1 9.76 11.14 11 10.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42Zm-11-3c-1.66 0-3 1.34-3 3a2.996 2.996 0 0 0 3.6 2.94C4.1 9.76 3.14 11 2.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42 0-1.66-1.35-3-3-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorCitationIcon = convertIcon(Icon, "editor-citation");
export default EditorCitationIcon;
