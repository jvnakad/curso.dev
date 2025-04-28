function Home() {
  function falar() {
    alert("Você é bobucha e tem cheiro.");
  }

  return (
    <div>
      <h2>oi rsrs</h2>
      <button onClick={falar}>Clique aqui!</button>
    </div>
  );
}

export default Home;
