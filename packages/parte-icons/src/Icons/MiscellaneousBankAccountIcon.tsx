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
        d="m15.36 6.46-.62-.14c-.31-1.12-.98-2.15-1.87-2.99l.4-1.77a.438.438 0 0 0-.49-.56c-.85.09-1.6.42-2.14.98-.84-.32-1.87-.51-2.85-.51-2.49 0-4.63 1.17-5.92 2.89-.18-.04-.36-.09-.53-.09-.76 0-1.34.61-1.34 1.4 0 .56.31 1.03.76 1.26-.05.33-.09.7-.09 1.07 0 1.68.71 3.17 1.83 4.34l-.27 1.59c-.09.56.35 1.07.89 1.07h.58c.45 0 .8-.33.89-.79l.04-.37c.94.42 2 .7 3.16.7 1.11 0 2.23-.23 3.16-.7l.05.37c.09.47.45.79.89.79h.58c.53 0 .98-.51.89-1.07l-.27-1.54c.62-.61 1.07-1.35 1.38-2.15l.8-.19c.4-.09.71-.47.71-.93V7.4c.09-.47-.22-.84-.62-.94ZM12 8c-.6 0-1-.7-1-1.5S11.4 5 12 5s1 .7 1 1.5S12.6 8 12 8ZM6.21 4.92c-.41.2-.91.04-1.12-.36-.21-.4-.04-.88.37-1.07 1.35-.65 2.73-.65 4.08 0 .41.2.58.68.37 1.07-.21.4-.71.56-1.12.36-.87-.43-1.71-.43-2.58 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousBankAccountIcon = convertIcon(
  Icon,
  "miscellaneous-bank-account"
);
export default MiscellaneousBankAccountIcon;
