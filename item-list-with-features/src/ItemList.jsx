import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ItemList = ({
  data,
  handleRemove,
  handleEdit,
  showButtons,
  hideButtons,
}) => {
  return (
    <form>
      {data?.map((item) => {
        return (
          <div
            className="box columns"
            key={item.id}
            style={{ paddingTop: 0, paddingBottom: 0, marginTop: 10 }}
            onMouseEnter={() => showButtons(item.id)}
            onMouseLeave={() => hideButtons(item.id)}
          >
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                handleEdit(item.id);
              }}
              style={{ display: item.shown ? "block" : "none" }}
            >
              <span className="icon is-small has-text-info">
                <FontAwesomeIcon icon="edit" />
              </span>
            </button>

            <button
              className="button"
              onClick={() => handleRemove(item.id)}
              style={{ display: item.shown ? "block" : "none" }}
            >
              <span className="icon is-small has-text-danger">
                <FontAwesomeIcon icon="trash" />
              </span>
            </button>
            <div className="column">
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </form>
  );
};
