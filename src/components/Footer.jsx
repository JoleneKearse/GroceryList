import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph } from 'dracula-ui'

export default function Footer({ length }) {

  return (
    <footer>
      <Paragraph
        color="purple"
        align="center"
      >{length} List {length === 1 ? "Item" : "Items"}</Paragraph>
    </footer>
  );
}