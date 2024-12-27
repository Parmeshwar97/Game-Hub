// ! Pending to add 'Order by:' in Select Tag. ✖️

interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({onSelectSortOrder}:Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date " },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    ];

  return (
    <select onChange={(event)=> onSelectSortOrder(event.target.value)}
     className="dark:bg-neutral-800 bg-[#EDEDED] px-2 dark:text-white rounded-md mb-3 py-1.5">
      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
