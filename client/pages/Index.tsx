import { useState } from "react";

// Icon Components
const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M14 3H2V4H14V3Z" fill="currentColor" />
    <path d="M14 12H2V13H14V12Z" fill="currentColor" />
    <path d="M14 6H2V7H14V6Z" fill="currentColor" />
    <path d="M14 9H2V10H14V9Z" fill="currentColor" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M14.5001 13.7929L10.7241 10.0169C11.6314 8.92758 12.0839 7.53038 11.9873 6.11596C11.8908 4.70153 11.2526 3.37879 10.2057 2.42288C9.15867 1.46698 7.78347 0.951515 6.36612 0.983723C4.94877 1.01593 3.5984 1.59333 2.59593 2.59581C1.59345 3.59828 1.01605 4.94865 0.983845 6.366C0.951637 7.78335 1.4671 9.15855 2.423 10.2055C3.37891 11.2525 4.70165 11.8907 6.11608 11.9872C7.5305 12.0838 8.9277 11.6313 10.017 10.7239L13.7931 14.5L14.5001 13.7929ZM2.00012 6.5C2.00012 5.60998 2.26404 4.73995 2.75851 3.99993C3.25297 3.25991 3.95578 2.68313 4.77804 2.34254C5.60031 2.00194 6.50511 1.91283 7.37802 2.08646C8.25094 2.2601 9.05276 2.68868 9.6821 3.31802C10.3114 3.94735 10.74 4.74918 10.9137 5.62209C11.0873 6.495 10.9982 7.3998 10.6576 8.22207C10.317 9.04434 9.7402 9.74714 9.00018 10.2416C8.26016 10.7361 7.39013 11 6.50012 11C5.30705 10.9987 4.16323 10.5241 3.3196 9.68052C2.47597 8.83689 2.00144 7.69306 2.00012 6.5Z"
      fill="currentColor"
    />
  </svg>
);

const NotificationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M14.3535 9.6465L13 8.29295V6.5C12.9984 5.26097 12.5374 4.06655 11.7062 3.1477C10.875 2.22884 9.73266 1.65082 8.5 1.5254V0.5H7.5V1.5254C6.26734 1.65082 5.12496 2.22884 4.29377 3.1477C3.46257 4.06655 3.0016 5.26097 3 6.5V8.29295L1.64645 9.6465C1.55269 9.74025 1.50002 9.86741 1.5 10V11.5C1.5 11.6326 1.55268 11.7598 1.64645 11.8536C1.74021 11.9473 1.86739 12 2 12H5.5V12.3884C5.48916 13.0227 5.71276 13.6387 6.12794 14.1183C6.54313 14.598 7.1207 14.9076 7.75 14.9877C8.09757 15.0222 8.44852 14.9836 8.78026 14.8743C9.112 14.765 9.4172 14.5875 9.67622 14.3532C9.93524 14.1189 10.1423 13.8329 10.2842 13.5138C10.4261 13.1946 10.4996 12.8493 10.5 12.5V12H14C14.1326 12 14.2598 11.9473 14.3536 11.8536C14.4473 11.7598 14.5 11.6326 14.5 11.5V10C14.5 9.86741 14.4473 9.74025 14.3535 9.6465ZM9.5 12.5C9.5 12.8978 9.34196 13.2794 9.06066 13.5607C8.77936 13.842 8.39782 14 8 14C7.60218 14 7.22064 13.842 6.93934 13.5607C6.65804 13.2794 6.5 12.8978 6.5 12.5V12H9.5V12.5ZM13.5 11H2.5V10.207L3.8535 8.8535C3.94727 8.75975 3.99997 8.6326 4 8.5V6.5C4 5.43913 4.42143 4.42172 5.17157 3.67157C5.92172 2.92143 6.93913 2.5 8 2.5C9.06087 2.5 10.0783 2.92143 10.8284 3.67157C11.5786 4.42172 12 5.43913 12 6.5V8.5C12 8.6326 12.0527 8.75975 12.1465 8.8535L13.5 10.207V11Z"
      fill="currentColor"
    />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13 6H10V3C9.99956 2.60231 9.84139 2.22103 9.56018 1.93982C9.27897 1.65861 8.89769 1.50044 8.5 1.5H7.4336C7.19314 1.50096 6.96099 1.58814 6.77934 1.7457C6.59768 1.90325 6.47855 2.12074 6.4436 2.35865L6.02095 5.3169L4.2324 8H1V15H11.5C12.4279 14.999 13.3176 14.6299 13.9737 13.9737C14.6299 13.3176 14.999 12.4279 15 11.5V8C14.9994 7.46975 14.7885 6.96139 14.4136 6.58644C14.0386 6.2115 13.5303 6.0006 13 6ZM4 14H2V9H4V14ZM14 11.5C13.9992 12.1628 13.7356 12.7983 13.2669 13.2669C12.7983 13.7356 12.1628 13.9992 11.5 14H5V8.65135L6.9789 5.6831L7.4336 2.5H8.5C8.63258 2.50011 8.75969 2.55282 8.85344 2.64656C8.94718 2.74031 8.99989 2.86742 9 3V7H13C13.2651 7.00033 13.5193 7.10579 13.7067 7.29326C13.8942 7.48072 13.9997 7.73489 14 8V11.5Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M5 8L10 3L10.7 3.7L6.4 8L10.7 12.3L10 13L5 8Z"
      fill="currentColor"
    />
  </svg>
);

const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 11.5C7.85167 11.5 7.70666 11.544 7.58333 11.6264C7.45999 11.7088 7.36386 11.826 7.30709 11.963C7.25033 12.1 7.23548 12.2508 7.26441 12.3963C7.29335 12.5418 7.36478 12.6754 7.46967 12.7803C7.57456 12.8852 7.7082 12.9567 7.85369 12.9856C7.99917 13.0145 8.14997 12.9997 8.28702 12.9429C8.42406 12.8862 8.54119 12.79 8.62361 12.6667C8.70602 12.5433 8.75 12.3983 8.75 12.25C8.75 12.0511 8.67099 11.8603 8.53033 11.7197C8.38968 11.579 8.19892 11.5 8 11.5Z"
      fill="currentColor"
    />
    <path d="M8.5 6.00001H7.5V10.5H8.5V6.00001Z" fill="currentColor" />
    <path
      d="M14.5 15H1.5C1.4141 15 1.32965 14.9779 1.25478 14.9357C1.17992 14.8936 1.11718 14.8329 1.0726 14.7595C1.02802 14.686 1.00311 14.6024 1.00027 14.5165C0.997436 14.4307 1.01677 14.3455 1.0564 14.2693L7.5564 1.76931C7.59862 1.68812 7.66231 1.62008 7.74053 1.5726C7.81875 1.52511 7.9085 1.5 8 1.5C8.09151 1.5 8.18126 1.52511 8.25948 1.5726C8.3377 1.62008 8.40138 1.68812 8.4436 1.76931L14.9436 14.2693C14.9832 14.3455 15.0026 14.4307 14.9997 14.5165C14.9969 14.6024 14.972 14.686 14.9274 14.7595C14.8828 14.8329 14.8201 14.8936 14.7452 14.9357C14.6704 14.9779 14.5859 15 14.5 15ZM2.32535 14H13.6747L13.6757 13.9984L8.001 3.08571H7.999L2.32435 13.9984L2.32535 14Z"
      fill="currentColor"
    />
  </svg>
);

const FlashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M5.80478 14.9601C5.70245 14.9169 5.61742 14.8408 5.5631 14.744C5.50878 14.6471 5.48826 14.5349 5.50478 14.4251L6.41478 8.50006H3.99978C3.92321 8.50212 3.8472 8.48656 3.7776 8.45459C3.70801 8.42261 3.64668 8.37508 3.59837 8.31565C3.55005 8.25622 3.51603 8.18649 3.49894 8.11183C3.48185 8.03717 3.48213 7.95959 3.49978 7.88506L4.99978 1.38506C5.02617 1.27319 5.0903 1.17384 5.18137 1.10371C5.27243 1.03359 5.38488 0.996985 5.49978 1.00006H10.4998C10.5745 0.999803 10.6483 1.01629 10.7158 1.0483C10.7833 1.08032 10.8427 1.12705 10.8898 1.18506C10.9375 1.24372 10.9713 1.31245 10.9886 1.38606C11.0059 1.45968 11.0063 1.53627 10.9898 1.61006L10.1248 5.50006H12.4998C12.5935 5.49987 12.6854 5.52602 12.7649 5.57553C12.8445 5.62503 12.9085 5.69591 12.9498 5.78006C12.9856 5.86083 12.9994 5.94965 12.9897 6.03748C12.9801 6.12531 12.9473 6.20901 12.8948 6.28006L6.39478 14.7801C6.35085 14.8452 6.29219 14.899 6.22356 14.9373C6.15494 14.9755 6.07827 14.997 5.99978 15.0001C5.93287 14.9988 5.86677 14.9852 5.80478 14.9601ZM8.87478 6.50006L9.87478 2.00006H5.89978L4.62978 7.50006H7.58478L6.78978 12.6401L11.4998 6.50006H8.87478Z"
      fill="currentColor"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13 2H11V1H10V2H6V1H5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z"
      fill="currentColor"
    />
  </svg>
);

const RenewIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 4.99998H3.39C4.03668 4.00614 4.98721 3.24789 6.09991 2.83827C7.21262 2.42864 8.4279 2.38957 9.56462 2.72687C10.7013 3.06418 11.6986 3.7598 12.4078 4.71004C13.117 5.66029 13.5001 6.81427 13.5 7.99998H14.5C14.5014 6.66272 14.0903 5.35759 13.3227 4.26253C12.5552 3.16748 11.4686 2.3358 10.2111 1.88091C8.95358 1.42602 7.58637 1.37006 6.29589 1.72065C5.00541 2.07124 3.85447 2.81132 3 3.83998V1.99998H2V5.99998H6V4.99998Z"
      fill="currentColor"
    />
    <path
      d="M10 11H12.61C11.9633 11.9938 11.0128 12.7521 9.90009 13.1617C8.78739 13.5713 7.5721 13.6104 6.43539 13.2731C5.29867 12.9358 4.30139 12.2402 3.59221 11.2899C2.88303 10.3397 2.49993 9.18569 2.5 7.99998H1.5C1.49863 9.33723 1.90973 10.6424 2.67727 11.7374C3.4448 12.8325 4.53141 13.6642 5.78892 14.119C7.04642 14.5739 8.41363 14.6299 9.70411 14.2793C10.9946 13.9287 12.1455 13.1886 13 12.16V14H14V9.99998H10V11Z"
      fill="currentColor"
    />
  </svg>
);

const TimerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8.5007 5.5H7.5007V10H8.5007V5.5Z" fill="currentColor" />
    <path d="M9.5007 1H6.5007V2H9.5007V1Z" fill="currentColor" />
    <path
      d="M14.0007 4.5L13.2907 3.795L12.1657 4.92C11.2448 3.85652 9.94957 3.18872 8.54912 3.05535C7.14867 2.92199 5.75067 3.33332 4.6456 4.20387C3.54052 5.07443 2.81334 6.33727 2.61513 7.73003C2.41692 9.12278 2.76293 10.5384 3.58127 11.6826C4.3996 12.8269 5.62734 13.6119 7.0094 13.8746C8.39146 14.1372 9.82156 13.8572 11.0026 13.0929C12.1836 12.3285 13.0247 11.1385 13.3512 9.77016C13.6777 8.40178 13.4644 6.96022 12.7557 5.745L14.0007 4.5ZM8.0007 13C7.11069 13 6.24066 12.7361 5.50064 12.2416C4.76061 11.7471 4.18384 11.0443 3.84324 10.2221C3.50265 9.39981 3.41354 8.49501 3.58717 7.62209C3.7608 6.74918 4.18939 5.94736 4.81872 5.31802C5.44806 4.68868 6.24988 4.2601 7.1228 4.08647C7.99571 3.91283 8.90051 4.00195 9.72278 4.34254C10.545 4.68314 11.2478 5.25991 11.7423 5.99993C12.2368 6.73995 12.5007 7.60998 12.5007 8.5C12.5007 9.69347 12.0266 10.8381 11.1827 11.682C10.3388 12.5259 9.19418 13 8.0007 13Z"
      fill="currentColor"
    />
  </svg>
);

const ExportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13 12V14H3V12H2V14L2.0038 13.9976C2.00333 14.1288 2.02873 14.2589 2.07854 14.3803C2.12836 14.5017 2.20163 14.6121 2.29414 14.7052C2.38666 14.7983 2.49662 14.8723 2.61774 14.9229C2.73885 14.9734 2.86875 14.9997 3 15H13C13.2652 15 13.5196 14.8946 13.7071 14.7071C13.8946 14.5196 14 14.2652 14 14V12H13Z"
      fill="currentColor"
    />
    <path
      d="M3 6L3.7055 6.7025L7.5 2.9125V12H8.5V2.9125L12.2955 6.7025L13 6L8 1L3 6Z"
      fill="currentColor"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13 15H5.5C5.23488 14.9997 4.9807 14.8942 4.79323 14.7068C4.60576 14.5193 4.5003 14.2651 4.5 14V11H5.5V14H13V3H8.5V2H13C13.2651 2.0003 13.5193 2.10576 13.7068 2.29323C13.8942 2.4807 13.9997 2.73488 14 3V14C13.9997 14.2651 13.8942 14.5193 13.7068 14.7068C13.5193 14.8942 13.2651 14.9997 13 15Z"
      fill="currentColor"
    />
    <path d="M12 5H8.5V6H12V5Z" fill="currentColor" />
    <path d="M12 7.5H8V8.5H12V7.5Z" fill="currentColor" />
    <path d="M12 10H7.5V11H12V10Z" fill="currentColor" />
    <path
      d="M4.5 9.5C3.83718 9.49927 3.20172 9.23565 2.73304 8.76696C2.26435 8.29828 2.00073 7.66282 2 7V1.5H3V7C3 7.39782 3.15804 7.77936 3.43934 8.06066C3.72064 8.34196 4.10218 8.5 4.5 8.5C4.89782 8.5 5.27936 8.34196 5.56066 8.06066C5.84196 7.77936 6 7.39782 6 7V2.5C6 2.36739 5.94732 2.24021 5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2C5.36739 2 5.24021 2.05268 5.14645 2.14645C5.05268 2.24021 5 2.36739 5 2.5V7.5H4V2.5C4 2.10218 4.15804 1.72064 4.43934 1.43934C4.72064 1.15804 5.10218 1 5.5 1C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5V7C6.99927 7.66282 6.73565 8.29828 6.26696 8.76696C5.79828 9.23565 5.16282 9.49927 4.5 9.5Z"
      fill="currentColor"
    />
  </svg>
);

const SortIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.8 10.3L12 12.1V2H11V12.1L9.2 10.3L8.5 11L11.5 14L14.5 11L13.8 10.3Z"
      fill="currentColor"
    />
    <path
      d="M4.5 2L1.5 5L2.2 5.7L4 3.9V14H5V3.9L6.8 5.7L7.5 5L4.5 2Z"
      fill="currentColor"
    />
  </svg>
);

export default function Index() {
  const [activeTab, setActiveTab] = useState("Compliance Info");
  const [noteText, setNoteText] = useState("");

  const tabs = [
    "General",
    "Notifications",
    "Transaction History",
    "Personal",
    "Identification",
    "Documents",
    "Compliance Status",
    "Compliance Q/A",
    "Compliance Info",
    "Beneficiaries",
    "Running Notes",
    "Changes History",
    "Wallet",
  ];

  return (
    <div className="min-h-screen bg-neutral-100 font-nunito">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-neutral-200">
        <div className="flex items-center justify-between px-4 h-12">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-neutral-100 rounded-full">
              <MenuIcon />
            </button>
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
              <g clipPath="url(#clip0_7036_4940)">
                <path
                  d="M0 12.825V17.8365H3.53277V13.4385C3.53277 11.496 4.57317 10.227 7.10438 10.146V6.4635C2.45351 6.546 0 9.0615 0 12.825Z"
                  fill="#FF6100"
                />
                <path
                  d="M20.4077 6.29998C17.131 6.32098 14.7754 8.77498 14.7754 12.15C14.7754 15.525 16.7382 17.673 20.0537 18L22.369 16.179L22.4482 16.2195V17.835H25.9997V12.1485C25.9997 8.60998 23.762 6.27748 20.4077 6.29848V6.29998ZM20.4077 14.4C19.1917 14.4 18.3082 13.4595 18.3082 12.15C18.3082 10.8405 19.1917 9.89998 20.4077 9.89998C21.6236 9.89998 22.4683 10.8405 22.4683 12.15C22.4683 13.4595 21.6049 14.4 20.4077 14.4Z"
                  fill="#FF6100"
                />
                <path
                  d="M12.9688 6.4635H9.4375V17.8365H12.9688V6.4635Z"
                  fill="#FF6100"
                />
                <path
                  d="M11.2038 0C9.90296 0 8.84961 1.0995 8.84961 2.454C8.84961 3.8085 9.9044 4.908 11.2038 4.908C12.5033 4.908 13.558 3.8085 13.558 2.454C13.558 1.0995 12.5047 0 11.2038 0Z"
                  fill="#FF6100"
                />
              </g>
              <defs>
                <clipPath id="clip0_7036_4940">
                  <rect width="26" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 text-xs border border-primary rounded-full hover:bg-neutral-100">
              Do you like it?
              <ThumbsUpIcon />
            </button>
            <button className="p-3 hover:bg-neutral-100 rounded-full">
              <SearchIcon />
            </button>
            <button className="p-3 hover:bg-neutral-100 rounded-full">
              <NotificationIcon />
            </button>
            <div className="flex items-center gap-2 px-3">
              <div className="w-8 h-8 rounded-full bg-info-light flex items-center justify-center text-xs font-bold text-primary">
                NM
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb Bar */}
        <div className="flex items-center justify-between px-4 h-11 border-t border-neutral-200">
          <button className="flex items-center gap-1 text-sm font-bold text-primary">
            <ChevronLeftIcon />
            Back
          </button>
          <div className="flex items-center gap-1 text-right">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-primary">YBC MNCSoK</span>
              <span className="text-xs text-neutral-600">C316520</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-3 pt-0">
        {/* Tabs */}
        <div className="flex items-center gap-0 overflow-x-auto border-b border-neutral-200 bg-neutral-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-3 text-xs whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-primary text-primary font-bold"
                  : "border-neutral-200 text-muted hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="flex items-center gap-1 px-3 py-4 mt-3 bg-warning rounded border-0">
          <WarningIcon />
          <p className="text-xs text-primary">
            ODD review due soon (due date: 04/25/2026). Please start a new
            review
          </p>
        </div>

        {/* Header Info Cards */}
        <div className="flex flex-col lg:flex-row gap-2 mt-3 overflow-x-auto">
          {/* PEP/RCA Card */}
          <div className="bg-white rounded-lg p-2 flex items-center gap-3 min-w-max">
            <div className="flex flex-col items-center gap-1">
              <WarningIcon className="text-yellow-600" />
              <span className="text-xs font-bold text-primary">PEP/RCA</span>
            </div>
            <span className="px-1 text-xs font-bold bg-neutral-800 text-white rounded">
              No
            </span>
          </div>

          {/* Risk Level Card */}
          <div className="bg-white rounded-lg px-2 py-1 flex items-center gap-2 min-w-max">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1 p-2">
                <FlashIcon className="text-red-500" />
                <span className="text-xs font-bold text-primary">Risk</span>
              </div>
              <div className="w-px h-12 bg-neutral-200"></div>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-neutral-800">
                    Level
                  </span>
                  <span className="px-1 text-xs font-bold bg-warning-light text-primary rounded">
                    Medium
                  </span>
                </div>
                <div className="w-px h-8 bg-neutral-200"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-primary">
                    Last Executed
                  </span>
                  <span className="text-sm text-primary">
                    11/25/2024 - 10:45
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Due Diligence Card */}
          <div className="bg-white rounded-lg px-2 py-4 flex flex-col md:flex-row items-start md:items-center gap-2 min-w-max">
            <div className="flex items-center gap-2">
              <CalendarIcon className="text-blue-600" />
              <span className="text-xs font-bold text-primary">
                Due Diligence
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-primary">
                  Approval Date
                </span>
                <span className="text-sm text-primary">11/25/2024 - 10:45</span>
              </div>
              <div className="w-px h-9 bg-neutral-200 hidden md:block"></div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-primary">Approver</span>
                <span className="text-sm text-primary">Kadin Bergson</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-primary">
                  Next Renew Date
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="04/25/2026"
                    className="text-sm text-primary bg-transparent border-0 w-24"
                    readOnly
                  />
                  <CalendarIcon />
                </div>
              </div>
              <button className="flex items-center gap-1 px-4 py-1 border border-primary rounded-full text-xs font-bold text-primary hover:bg-neutral-100">
                <RenewIcon />
                Renew
              </button>
            </div>
          </div>
        </div>

        {/* Remaining Time Card */}
        <div className="bg-warning-light rounded-lg px-4 py-2 mt-3 flex items-start gap-1">
          <TimerIcon />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-primary">Remaining</span>
            <span className="text-xs text-primary">19d 12h 02m 45s</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[355px_1fr] gap-4 mt-3">
          {/* Left Column - Profile Summary */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-xs font-bold text-primary mb-3">
              Customer Profile Summary
            </h3>
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Name
                    </td>
                    <td className="p-1 text-primary bg-white">
                      Carlos Joseph Molina
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      DOB / COB
                    </td>
                    <td className="p-1 text-primary bg-white">
                      01/01/1990 · MX
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Nationality
                    </td>
                    <td className="p-1 text-primary bg-white">Mexico</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Address
                    </td>
                    <td className="p-1 text-primary bg-white">
                      5478 Ocean Breeze Road, San Diego, CA 92109
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Occupation
                    </td>
                    <td className="p-1 text-primary bg-white">
                      Bodyshop Painter
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Source of Funds
                    </td>
                    <td className="p-1 text-primary bg-white">
                      Bank Statements
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Income Range
                    </td>
                    <td className="p-1 text-primary bg-white">
                      $3,000-$4,000 / month
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 font-bold text-primary bg-white">
                      Employer
                    </td>
                    <td className="p-1 text-primary bg-white">
                      Midwest Auto Repairs LLC
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 font-bold text-primary bg-white">
                      Fiscal Residency
                    </td>
                    <td className="p-1 text-primary bg-white">US</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Changes History */}
            <h3 className="text-xs font-bold text-primary mt-4 mb-3">
              Changes History
            </h3>
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white border-b border-neutral-200">
                    <th className="p-1 text-left font-bold text-primary">
                      Date
                    </th>
                    <th className="p-1 text-left font-bold text-primary">
                      Field
                    </th>
                    <th className="p-1 text-left font-bold text-primary">
                      Old Value
                    </th>
                    <th className="p-1 text-left font-bold text-primary">
                      New Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 text-primary">10/26/2024</td>
                    <td className="p-1 text-primary">Occupation</td>
                    <td className="p-1 text-primary">Lawyer</td>
                    <td className="p-1 text-primary">Bodyshop Painter</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-1 text-primary">05/13/2024</td>
                    <td className="p-1 text-primary">Income Range</td>
                    <td className="p-1 text-primary">$2,000 - $3,000</td>
                    <td className="p-1 text-primary">$3,000 - $4,000</td>
                  </tr>
                  <tr>
                    <td className="p-1 text-primary">03/21/2024</td>
                    <td className="p-1 text-primary">Nationality</td>
                    <td className="p-1 text-primary">MX</td>
                    <td className="p-1 text-primary">US</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column - Charts */}
          <div className="space-y-4">
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Avg Send Amount Chart */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xs font-bold text-primary mb-3">
                  Avg. Send Amount
                </h3>
                <div className="h-48 flex items-end justify-around gap-3 relative">
                  {/* Simple bar chart representation */}
                  {[
                    { month: "Jan", blue: 3, orange: 100 },
                    { month: "Feb", blue: 4, orange: 110 },
                    { month: "Mar", blue: 4, orange: 120 },
                    { month: "Apr", blue: 5, orange: 115 },
                    { month: "May", blue: 6, orange: 130 },
                    { month: "Jun", blue: 5, orange: 125 },
                  ].map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 flex-1"
                    >
                      <div className="flex items-end gap-1 h-40">
                        <div className="w-full flex flex-col items-center gap-1">
                          <span className="text-xs text-primary">
                            {data.blue}
                          </span>
                          <div
                            className="w-full bg-info rounded-t"
                            style={{ height: `${data.blue * 2}px` }}
                          ></div>
                        </div>
                        <div className="w-full flex flex-col items-center gap-1">
                          <span className="text-xs text-primary">
                            {data.orange}
                          </span>
                          <div
                            className="w-full bg-orange rounded-t"
                            style={{ height: `${data.orange}px` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-800">
                        {data.month}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-info"></div>
                    <span className="text-muted">Send Frequency</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange"></div>
                    <span className="font-bold text-primary">
                      Avg Send $700 · 2.1/mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Avg Top-Up Amount Chart */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xs font-bold text-primary mb-3">
                  Avg. Top-Up Amount
                </h3>
                <div className="h-48 flex items-end justify-around gap-3">
                  {[
                    { month: "Jan", blue: 3, green: 66 },
                    { month: "Feb", blue: 5, green: 82 },
                    { month: "Mar", blue: 2, green: 55 },
                    { month: "Apr", blue: 6, green: 85 },
                    { month: "May", blue: 3, green: 85 },
                    { month: "Jun", blue: 2, green: 35 },
                  ].map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 flex-1"
                    >
                      <div className="flex items-end gap-1 h-40">
                        <div className="w-full flex flex-col items-center gap-1">
                          <span className="text-xs text-primary">
                            {data.blue}
                          </span>
                          <div
                            className="w-full bg-info rounded-t"
                            style={{ height: `${data.blue * 3}px` }}
                          ></div>
                        </div>
                        <div className="w-full flex flex-col items-center gap-1">
                          <span className="text-xs text-primary">
                            {data.green}
                          </span>
                          <div
                            className="w-full bg-success rounded-t"
                            style={{ height: `${data.green}px` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-800">
                        {data.month}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-info"></div>
                    <span className="text-muted">Number of Top-Ups</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="font-bold text-primary">
                      Avg Top‑Up $1,050/mo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Usage Type */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xs font-bold text-primary mb-3">
                  Usage Type
                </h3>
                <div className="flex items-center justify-center gap-6">
                  <div className="w-32 h-32 rounded-full border-8 border-info relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-warning-light"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-success-light"></div>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-info"></div>
                      <span className="text-primary">P2P</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-warning-light"></div>
                      <span className="text-primary">Remittance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success-light"></div>
                      <span className="text-primary">E-Commerce</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card vs Wallet Usage */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xs font-bold text-primary mb-3">
                  Card vs Wallet Usage
                </h3>
                <div className="flex items-center justify-center gap-6">
                  <div className="w-32 h-32 rounded-full border-8 border-info relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-success-light"></div>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-info"></div>
                      <span className="text-primary">Card (POS+online)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success-light"></div>
                      <span className="text-primary">Wallet Payments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Running Notes Section */}
        <div className="bg-white rounded-lg p-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-primary">Running Notes</h3>
            <button className="flex items-center gap-1 px-4 py-2 border border-primary rounded-full text-xs text-primary hover:bg-neutral-100">
              <ExportIcon />
              Export All Notes
            </button>
          </div>

          <div className="border border-neutral-200 rounded-lg overflow-hidden mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-white border-b border-neutral-200">
                  <th className="p-2 text-left font-bold text-primary">
                    <div className="flex items-center gap-1">
                      Date
                      <SortIcon className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="p-2 text-left font-bold text-primary">
                    <div className="flex items-center gap-1">
                      Contact
                      <SortIcon className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="p-2 text-left font-bold text-primary">
                    <div className="flex items-center gap-1">
                      Note
                      <SortIcon className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="p-2 text-left font-bold text-primary">
                    Attachments
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-2 text-primary">03/03/2025 15:28</td>
                  <td className="p-2 text-primary">C. Molina</td>
                  <td className="p-2 text-primary">
                    Requested additional bank statement due to 180% funding
                    increase. Pending customer response.
                  </td>
                  <td className="p-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-info-light text-primary border border-blue-600 rounded text-xs">
                      <DocumentIcon className="w-4 h-4" />
                      Request_Letter.pdf
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-info-light text-primary border border-blue-600 rounded text-xs ml-2">
                      <DocumentIcon className="w-4 h-4" />
                      HawkAI_Case_11872.png
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-2 text-primary">02/14/2025 09:10</td>
                  <td className="p-2 text-primary">J. Alvarez</td>
                  <td className="p-2 text-primary">
                    Verified employer (Midwest Auto Repairs LLC). No
                    discrepancies.
                  </td>
                  <td className="p-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-info-light text-primary border border-blue-600 rounded text-xs">
                      <DocumentIcon className="w-4 h-4" />
                      Payslip_Jan25.pdf
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-primary">07/01/2025 12:45</td>
                  <td className="p-2 text-primary">S. Patel</td>
                  <td className="p-2 text-primary">
                    New country GT consistent with family link. No EDD required.
                  </td>
                  <td className="p-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-info-light text-primary border border-blue-600 rounded text-xs">
                      <DocumentIcon className="w-4 h-4" />
                      Interview_Notes.pdf
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add Note Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
            <div className="space-y-2">
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note for the next analyst..."
                className="w-full h-32 p-3 border border-neutral-400 rounded text-sm text-muted resize-none focus:outline-none focus:border-primary"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Select a file to upload (attached on Save)
                </span>
                <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full hover:bg-opacity-90">
                  Add Attachments
                </button>
              </div>
            </div>
            <button className="px-6 py-2 border border-neutral-200 text-neutral-600 text-xs rounded-full hover:bg-neutral-100 self-start">
              Save Note
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
