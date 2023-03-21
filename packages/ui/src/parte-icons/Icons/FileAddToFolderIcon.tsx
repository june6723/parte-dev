import { convertIcon, IconProps } from '../component/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
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
        d="M.01 7V5H16v7c0 .55-.45 1-1 1H9.005v-2.99C8.974 8.332 7.644 7 5.996 7H.01ZM15 2H7.416L5.706.29a.996.996 0 0 0-.71-.29H1C.45 0 0 .45 0 1v3h15.99V3c.01-.55-.44-1-.99-1ZM5.997 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.589L.3 14.29a1.003 1.003 0 0 0 1.42 1.42l3.287-3.29v1.59c0 .55.45 1 1 1 .549 0 .999-.45.999-1v-4A1.02 1.02 0 0 0 5.996 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileAddToFolderIcon = convertIcon(Icon, 'file-add-to-folder');
export default FileAddToFolderIcon;
