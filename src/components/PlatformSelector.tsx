import { Platform } from "../Hooks/useGames";
import usePlatforms from "../Hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <select
      value={JSON.stringify(selectedPlatform)}
      onChange={(event) => onSelectPlatform(JSON.parse(event.target.value))}
      className="dark:bg-neutral-800 bg-[#EDEDED] dark:text-white box-border px-2 rounded-md mb-3 py-1.5 w-auto"
    >
      <option className="hidden">Platforms</option>
      {data.map((platform) => {
      return (
        <option value={JSON.stringify(platform)} key={platform.id}>
        {platform.name}
        </option>
      );
      })}
    </select>
  );
};

export default PlatformSelector;
