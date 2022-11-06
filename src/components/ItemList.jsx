import 'dracula-ui/styles/dracula-ui.css';
import ListLi from './ListLi';
import { Text } from 'dracula-ui';

export default function ItemList({ items, handleCheck, handleDelete }) {

  return (
    <>
      {
        items.length ? (
          <ListLi 
           items={items}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
          ></ListLi>
        ): (
            <Text align = "center" as = "p" style = {{ marginTop: "1.5rem" }}>Empty list.</Text>
  )
}
    </>
  )
}