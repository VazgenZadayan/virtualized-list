import List from 'components/List';

function App() {
  return (
    <div className='app'>
      <List
        width={400}
        height={400}
        rowHeight={40}
        data={Array(300000)
          .fill()
          .map((_, index) => ({
            id: index,
            title: `Item ${index}`,
          }))}
      />
    </div>
  );
}

export default App;
