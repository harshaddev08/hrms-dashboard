export const ListIcon = ({
  width = 24,
  height = 24,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83333 18.3334C7.38957 18.3334 8.69672 17.2669 9.06381 15.825C9.17736 15.379 9.53976 15.0001 10 15.0001H15.8333M5.83333 18.3334C3.99238 18.3334 2.5 16.841 2.5 15.0001V4.16675C2.5 2.78604 3.61929 1.66675 5 1.66675H13.3333C14.714 1.66675 15.8333 2.78604 15.8333 4.16675V15.0001M5.83333 18.3334H15.8333C17.3896 18.3334 18.6967 17.2669 19.0638 15.825C19.1774 15.379 18.7936 15.0001 18.3333 15.0001H15.8333M12.5 5.83341H5.83333M9.16667 10.0001H5.83333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
