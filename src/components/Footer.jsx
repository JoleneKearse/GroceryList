import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph } from 'dracula-ui'

export default function Footer() {
  const today = new Date();

  return (
    <footer>
      <Paragraph>{today.getDate()}</Paragraph>
    </footer>
  );
}