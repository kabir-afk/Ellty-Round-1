import { useState } from "react";
import Button from "./components/Button";
import Row from "./components/Row";
import Seperator from "./components/Seperator";
import toast, { Toaster } from "react-hot-toast";

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
    if (selectedPage.length == 0) {
      toast.error("No page selected");
    } else {
      if (selectedPage.length == 4) {
        toast.success("All pages selected");
      } else if (selectedPage.length == 1) {
        toast.success(`Page ${selectedPage} selected`);
      } else {
        toast.success(`Pages ${selectedPage.join(",")} selected`);
      }
    }
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
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
    </div>
  );
}

export default App;
