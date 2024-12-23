import { Link } from "@remix-run/react";
import { SOCIALS } from "~/consts/icons";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-[21px]">
      {SOCIALS.map(({ Icon, id, url }) => (
        <Link key={id} to={url} target="_blank" rel="noreferrer">
          <div className="w-9 h-9 flex justify-center items-center">
            <Icon className="fill-current" />
          </div>
        </Link>
      ))}
    </div>
  );
};
