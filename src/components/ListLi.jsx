import 'dracula-ui/styles/dracula-ui.css';
import { List, Checkbox } from 'dracula-ui';
import { FaTrashAlt } from 'react-icons/fa';

export default function ListLi({ items, handleCheck, handleDelete }) {
  return (
    <List
      py="sm"
      pb="sm"
      size="lg"
    >
      {items.map((item) => (
        <li
          className="item"
          key={item.id}
          py="sm"
          pb="sm"
        >
          <Checkbox
            type="checkbox"
            checked={item.checked}
            color="purple"
            defaultChecked={false}
            className=".drac-mr-lg"
            onChange={(() => handleCheck(item.id))}
          />
          <label
            htmlFor="normal"
            className="drac-text drac-text-white drac-ml-md"
            onDoubleClick={() => handleCheck(item.id)}
            style={(item.checked) ? { textDecoration: "line-through" } : null}
          >{item.item}</label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
            stoke="#9580ff"
            fill="#ff80bf"
            aria-label={`Delete ${item.item}`}
          />
        </li>
      ))}
    </List>
  );
}