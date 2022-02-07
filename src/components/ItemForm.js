import {React , useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newItemName, setNewItemName] = useState("");
  const [newSelectedCategory, setNewSelectedCategory] = useState("Produce")

  function handleNameChange(event){
    setNewItemName(event.target.value)
  }

  function handleNewCategoryChange(event){
    setNewSelectedCategory(event.target.value)
  }

  const newItem = {
    id: uuid(),
    name: newItemName,
    category: newSelectedCategory,
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit(newItem)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem" >
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newSelectedCategory} onChange={handleNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
