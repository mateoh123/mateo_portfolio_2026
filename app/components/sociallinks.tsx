"use client";

type SocialLinksProps = {
  instagram?: string;
  linkedin?: string;
  email?: string;
  size?: number;
  color?: "black" | "white";
  direction?: "row" | "column";
};

export default function SocialLinks({
  instagram = "https://instagram.com/yourhandle",
  linkedin = "https://linkedin.com/in/yourhandle",
  email = "your@email.com",
  size = 20,
  color = "black",
  direction = "row",
}: SocialLinksProps) {
  return (
    <div
      className={`flex gap-3 ${direction === "column" ? "flex-col" : "flex-row"}`}
    >
      {/* Instagram */}
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-red-600 transition-colors duration-200 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-red-600 transition-colors duration-200 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className={`hover:text-red-600 transition-colors duration-200 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
    </div>
  );
}
