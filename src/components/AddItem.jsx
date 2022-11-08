import 'dracula-ui/styles/dracula-ui.css'
import { Input } from 'dracula-ui';
import { FaPlus } from 'react-icons/fa';
// import { useRef } from 'react';


export default function AddItem({ newItem, setNewItem, handleSubmit }) {
  // const inputRef = useRef();
  return (
    <form className="inputBlock" onSubmit={() => handleSubmit}>
      <label htmlFor="addItem" className="sr-only">Add Item</label>
      <Input
        color="pink"
        variant="outline"
        borderSize="md"
        my="xs"
        mr='xs'
        size="lg"
        autoFocus
        // ref={inputRef}
        id="addItem"
        type="text"
        placeholder="What do you need?"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <FaPlus
        stoke="#9580ff"
        fill="#ff80bf"
        role="button"
        tabIndex="0"
        aria-label="Add Item"
        onClick={handleSubmit}
      />
    </form>
  );
}