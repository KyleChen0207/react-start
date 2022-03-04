const item = ({id, note, date, time, deleteData }) => {
  function removeItem() {
    deleteData(function(prev){
        return prev.filter(item => item.id !== id)
    })

  }
  return (
    <div>
        <p>{id}</p>
      <p>{note}</p>
      <p>
        {date} {time}
      </p>
      <button onClick={removeItem}>刪除</button>
    </div>
  );
};

export default item;
