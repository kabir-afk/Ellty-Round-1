import { useState } from "react";
import Button from "./components/Button";
import Row from "./components/Row";
import Seperator from "./components/Seperator";

function App() {
  const pageIds = [1, 2, 3, 4];
  const [selectedPage, setSelectedPage] = useState([]);
  const handleDataFromChild = (id, isChecked) => {
    if (id === "all") {
      setSelectedPage(isChecked ? pageIds : []);
    } else {
      setSelectedPage((prev) =>
        isChecked ? [...prev, id] : prev.filter((pageId) => pageId !== id)
      );
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(selectedPage);
  };

  return (
    <div className="shadow-[0_8px_15px] shadow-black rounded-md font-montserrat font-light w-[370px] h-[326px] absolute left-1/2 top-1/2 transform -translate-1/2 ">
      <form
        onSubmit={handleOnSubmit}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <Row onSelect={handleDataFromChild} id={"all"}>
          {" "}
          All pages
        </Row>
        <Seperator />
        {pageIds.map((id) => (
          <Row
            key={id}
            onSelect={handleDataFromChild}
            id={id}
            checked={selectedPage.includes(id)}
          />
        ))}
        <Seperator />
        <Button handleOnSUbmit={handleOnSubmit} />
      </form>
    </div>
  );
}

export default App;
