import usePlatforms from "../Hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  console.log(data);

  if (error) return null;
  return (
    <select className="bg-neutral-800 box-border px-2 rounded-md mb-3 py-1.5">
      <option className="hidden">Platforms</option>
      {data.map((platform) => (
        <option key={platform.id}>{platform.name}</option>
      ))}
    </select>
  );
};

export default PlatformSelector;
