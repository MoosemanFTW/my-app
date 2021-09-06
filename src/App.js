function App() {
  return (
    <div>
    <h1>Todo list</h1>
    <form>
      <input type="checkbox" id="gym" name="gym" value="gym"/>
      <label for="gym"> Go to the Gym</label><br/>
      <input type="checkbox" id="laundry" name="laundry" value="laundry"/>
      <label for="laundry"> Do my laundry</label><br/>
      <input type="checkbox" id="food" name="food" value="food"/>
      <label for="food"> Buy groceries</label><br/>
      <input type="checkbox" id="homework" name="homework" value="homework"/>
      <label for="homework"> Do my homework</label>
    </form>
    </div> 
  ); 
}

export default App;
