const SortSelector = () => {

  return (
    <select  className="bg-neutral-800 box-border px-2 rounded-md mb-3 py-1.5">

      <option value="relevance">Relevance </option>
      <option value="date">Date added</option>
      <option value="name">Name </option>
      <option value="release-date">Release Date </option>
      <option value="popularity">Popularity </option>
      <option value="avg-rating">Average rating</option>
    </select>
  );
}

export default SortSelector;