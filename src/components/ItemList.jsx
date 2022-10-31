import 'dracula-ui/styles/dracula-ui.css';
import { List, Checkbox } from 'dracula-ui';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function ItemList() {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Ginger Ale sparking water"
    },
    {
      id: 2,
      checked: false,
      item: "Black Diamond cheese sticks"
    },
    {
      id: 3,
      checked: false,
      item: "Olive Tempanade hummus"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  return (
    <List py='sm' pb='sm' size="lg">
      {items.map((item) => (
        <li
          className='item'
          key={item.id}
          py='sm'
          pb='sm'
        >
          <Checkbox
            type="checkbox"
            checked={item.checked}
            color="purple"
            defaultChecked={false}
            className='.drac-mr-lg'
            onChange={(() => handleCheck(item.id))}
          />
          <label
            htmlFor='normal'
            className='drac-text drac-text-white drac-ml-md'
            onDoubleClick={() => handleCheck(item.id)}
            style={(item.checked) ? { textDecoration: 'line-through' } : null}
          >{item.item}</label>
          <FaTrashAlt
            role="button"
            stoke="#9580ff"
            fill='#ff80bf'
          />
        </li>
      ))}
    </List>
  );
}