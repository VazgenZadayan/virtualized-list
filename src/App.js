import List from 'components/List';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
