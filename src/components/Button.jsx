const Button = ({ handleOnSUbmit }) => {
  return (
    <div className="w-full h-15 text-center py-2.5 px-[15px] gap-2.5">
      <button
        type="submit"
        className="w-full bg-yellow rounded-sm h-10 py-2.5 px-5"
        onClick={handleOnSUbmit}
      >
        {" "}
        Done
      </button>
    </div>
  );
};

export default Button;
