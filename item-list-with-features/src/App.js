import "bulma/css/bulma.min.css";
import "./App.css";
import { ItemList } from "./ItemList.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import _ from "lodash";

library.add(faTrash, faEdit);

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleAddItem = () => {
    if (isEditMode) {
      let _data = [...data];
      let index = _.findIndex(_data, { id: editingId });
      _data[index].text = text;
      setEditingId(null);
      setIsEditMode(false);
      setData(_data);
    } else {
      const newData = data.concat({
        text,
        id: uuid(),
        shown: false,
      });

      setData(newData);
    }
    setText("");
  };

  const handleEdit = (id) => {
    let index = _.findIndex(data, { id: id });
    let item = data[index];

    if (item) {
      setIsEditMode(true);
      setEditingId(item.id);
      setText(item.text);
    }
  };

  const handleRemove = (id) => {
    const newData = data.filter((i) => i.id !== id);
    setData(newData);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleShowButtons = (id) => {
    let _data = [...data];
    let index = _.findIndex(data, { id });
    _data[index].shown = true;
    setData(_data);
  };

  const handleHideButtons = (id) => {
    let _data = [...data];
    let index = _.findIndex(data, { id });
    _data[index].shown = false;
    setData(_data);
  };

  return (
    <section className="section">
      <ItemList
        data={data}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
        showButtons={handleShowButtons}
        hideButtons={handleHideButtons}
      />
      <div className="box columns control" style={{ marginTop: 20 }}>
        <input
          className="column input is-focused"
          type="text"
          value={text}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </section>
  );
}

export default App;
