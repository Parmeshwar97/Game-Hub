import { Platform } from "../Hooks/useGames";
import usePlatforms from "../Hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
console.log(data);

  const changeHandler = (event: { target: { value: string } }) => {
    onSelectPlatform(JSON.parse(event.target.value));
  };

  if (error) return null;
  return (
    <select
      value={JSON.stringify(selectedPlatform)}
          onChange={changeHandler}
          style={{ width:'auto'}}
      className="bg-neutral-800 box-border px-2 rounded-md mb-3 py-1.5"
    >
      <option className="hidden">Platforms</option>
      {data.map((platform) => 
      {
          return <option value={JSON.stringify(platform)} key={platform.id}>
          {platform.name}
        </option>}
      ) 
      }
    </select>
  );
};

export default PlatformSelector;
