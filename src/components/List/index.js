import { useState, useMemo } from 'react';
import './styles.css';

const List = ({ width, height, data, rowHeight, spacing = 10 }) => {
  const itemHeight = useMemo(() => rowHeight + spacing, [rowHeight, spacing]);
  const dataLength = useMemo(() => data?.length, [data]);
  const showItems = useMemo(
    () => height / itemHeight + 5,
    [height, itemHeight]
  );
  
  const [firstIndex, setFirstIndex] = useState(0);

  const handleChange = (event) => {
    setFirstIndex(event.target.scrollTop / itemHeight);
  };

  return (
    <div
      onScroll={handleChange}
      className="list_container"
      style={{
        width,
        height,
      }}
    >
      <div
        className="list"
        style={{
          height: dataLength * itemHeight,
        }}
      >
        {[...data].splice(firstIndex, showItems).map((item) => (
          <div
            key={item.id}
            className="list_item_holder"
            style={{
              height: itemHeight,
              top: (item.id + 1) * itemHeight,
            }}
          >
            <div
              className="list_item"
              style={{
                height: rowHeight,
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
