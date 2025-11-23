const Row = ({ id, onSelect, checked, children }) => {
  const handleCheck = (e) => {
    onSelect(id, e.target.checked);
  };

  return (
    <div className="cursor-pointer w-full flex justify-between py-2 pr-[15px] pl-[22px]">
      <label className="container" htmlFor={`page-${id}`}>
        {children ? children : `Page ${id}`}
        <input
          type="checkbox"
          id={`page-${id}`}
          name={`page-${id}`}
          value={`page-${id}`}
          checked={checked}
          onChange={handleCheck}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Row;
