import { useState, useMemo } from 'react';

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
      style={{
        width,
        height,
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          height: dataLength * itemHeight,
        }}
      >
        {[...data].splice(firstIndex, showItems).map((item) => (
          <div
            key={item.id}
            style={{
              width: '100%',
              height: itemHeight,
              position: 'absolute',
              top: item.id * itemHeight,
            }}
          >
            <div
              style={{
                width: '100%',
                height: rowHeight,
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '0 20px',
                borderRadius: 10,
                background: 'darkseagreen'
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
