

const ListBlock = ({ items }) => {

  return (
    <ul className="mx-8">
      {items.map((item, i) => (
        <li
          key={i}
          className="mt-4 indent-4 text-secondary/90 text-lg lg:text-xl"
        >
          <span className="text-base-100 mr-2 text-xl lg:text-2xl font-bold">
            {String(i + 1).padStart(2, "0")}.
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListBlock;
