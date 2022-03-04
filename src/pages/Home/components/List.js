import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div>
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          ></Item>
        );
      })}
    </div>
  );
};

export default List;
