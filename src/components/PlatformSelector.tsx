import usePlatforms from "../Hooks/usePlatforms";
import { Platforms } from "../entities/Platforms";

interface Props {
  onSelectPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
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
      {data?.results.map((platform) => {
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
