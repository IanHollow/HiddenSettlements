import Link from "next/link";

export default function PopupMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="h-full w-full overflow-y-auto bg-white p-4">
        <div className="container mx-auto">
          <div className="text-right">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <Link
            href="/source"
            className="my-4 block text-blue-500 hover:underline"
          >
            Source
          </Link>
          <Link
            href="/about"
            className="my-4 block text-blue-500 hover:underline"
          >
            About
          </Link>
          <Link
            href="/play"
            className="my-4 block text-blue-500 hover:underline"
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
