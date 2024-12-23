import { Link, LinkProps } from "@remix-run/react";
import { FC, useMemo } from "react";

export const CustomLink: FC<LinkProps & { external?: boolean }> = ({
  children,
  external,
  ...props
}) => {
  const memoizedProps: LinkProps = useMemo(
    () => ({
      ...props,
      ...(external ? { target: "_blank", referrerPolicy: "no-referrer" } : {}),
    }),
    [external, props]
  );

  return <Link {...memoizedProps}>{children}</Link>;
};
