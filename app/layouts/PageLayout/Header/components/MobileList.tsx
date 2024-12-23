import { FC } from "react";
import ArrowIcon from "app/icons/chevron-right.svg?react";
import { CustomLink } from "~/a11y/CustomLink";
import clsx from "clsx";

type MobileList = {
  links: { to: string; text: string }[];
};

export const MobileList: FC<MobileList> = ({ links }) => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      {links.map(({ to, text }) => (
        <MobileListItem key={text} to={to} text={text} />
      ))}
    </div>
  );
};

type MobileListItemProps = {
  to: string;
  text: string;
};

const MobileListItem: FC<MobileListItemProps> = ({ to, text }) => {
  return (
    <CustomLink
      to={to}
      external={Boolean(to)}
      className={clsx(
        "px-4 py-5 flex items-center justify-between gap-4 text-content border-b border-gray-100",
        !to && "opacity-50 pointer-events-none"
      )}
    >
      <h4 className="text-card-headline ">{text}</h4>

      <ArrowIcon className="size-6 min-w-6 stroke-current" />
    </CustomLink>
  );
};
