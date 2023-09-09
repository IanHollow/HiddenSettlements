import Link from "next/link";

export default function PopupNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="h-full w-full overflow-y-auto bg-white">
        <div className="mx-8 mt-3 text-right">
          <button className="mt-3" onClick={onClose}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
        <div className="ml-6 space-y-6 text-2xl font-medium">
          <Link href="/" className="block hover:underline">
            Home
          </Link>
          <Link href="/source" className="block hover:underline">
            Source
          </Link>
          <Link href="/about" className="block hover:underline">
            About
          </Link>
          <Link href="/play" className="block hover:underline">
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
