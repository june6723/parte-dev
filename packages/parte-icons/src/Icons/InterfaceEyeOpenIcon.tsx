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
        d="M8.002 7.003a1.003 1.003 0 0 0 0 2.005 1.003 1.003 0 0 0 0-2.005Zm7.988.972v-.07a.676.676 0 0 0-.17-.36c-.509-.673-1.118-1.264-1.737-1.806-1.328-1.173-2.846-2.155-4.523-2.546a6.702 6.702 0 0 0-2.925-.06c-.889.18-1.738.541-2.546.992C2.84 4.837 1.692 5.81.694 6.902c-.18.211-.36.411-.53.632a.742.742 0 0 0 0 .932c.51.672 1.119 1.264 1.738 1.805 1.328 1.173 2.846 2.156 4.523 2.547.968.23 1.947.24 2.925.04.889-.18 1.738-.542 2.546-.993 1.248-.712 2.397-1.684 3.395-2.777.18-.2.37-.411.54-.632.09-.1.149-.23.169-.36v-.1c0-.01-.01-.01-.01-.02Zm-7.988 3.038a2.998 2.998 0 0 1-2.995-3.008 2.998 2.998 0 0 1 2.995-3.008 2.998 2.998 0 0 1 2.996 3.008 2.998 2.998 0 0 1-2.995 3.008Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceEyeOpenIcon = convertIcon(Icon, "interface-eye-open");
export default InterfaceEyeOpenIcon;
