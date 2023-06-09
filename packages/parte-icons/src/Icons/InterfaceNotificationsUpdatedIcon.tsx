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
        d="M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2Zm3.399-13.667-.413.412A2.99 2.99 0 0 0 9 1.99a3 3 0 0 0-3 2.99c0 .8.32 1.558.876 2.114l2.002 1.992A2.99 2.99 0 0 0 13 9.184V10c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V6c0-2.43 1.73-4.45 4.02-4.9 0-.04-.02-.06-.02-.1 0-.55.45-1 1-1s1 .45 1 1c0 .04-.02.06-.02.1a4.97 4.97 0 0 1 2.419 1.233ZM10.29 7.67l-2-1.99a.99.99 0 0 1-.29-.7 1 1 0 0 1 1-.99c.27 0 .52.11.7.29l1.29 1.29 3.28-3.28c.18-.18.42-.29.7-.29.55 0 1 .44 1 .99 0 .28-.11.52-.3.7l-3.98 3.98a.99.99 0 0 1-1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceNotificationsUpdatedIcon = convertIcon(
  Icon,
  "interface-notifications-updated"
);
export default InterfaceNotificationsUpdatedIcon;
