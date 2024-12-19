import { Props } from "../Card";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Icons from "./Icons";


const  IconsList = ({ game }: Props)=> {
  const iconMap: { [key: string]:IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="flex gap-x-2">
      {game.parent_platforms.map(({ platform }) => (
        <Icons key={platform?.id}
          platformSlug={platform?.slug}
          iconMap={iconMap}
          className=""
        />
      ))}
    </div>
  );
}

export default IconsList;
