import { useEffect, useState } from "react";
import "./pageLoader.css";

interface PageLoaderProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Loader contents
   */
  label: string;
}

export const PageLoader = ({
  primary = false,
  backgroundColor,
  label,
}: PageLoaderProps) => {
  const mode = primary
    ? "storybook-page-loader-primary"
    : "storybook-page-loader-secondary";

  // const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth / 2 - 12);
    setHeight(window.innerHeight / 2 - 12);
  }, []);

  return (
    <svg
      className={["storybook-page-loader", mode].join(" ")}
      style={{ backgroundColor }}
    >
      <g transform={`translate(${width}, ${height})`}>
        <path d="M0 0h24v24H0z" fill="black" />
      </g>
    </svg>
  );
};
