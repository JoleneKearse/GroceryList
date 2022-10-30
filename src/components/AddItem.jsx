import 'dracula-ui/styles/dracula-ui.css'
import { Input } from 'dracula-ui'

export default function Header() {
  return (
    <Input
      color="pink"
      variant="outline"
      borderSize="md"
      placeholder="What do you need?"
      m="xs"
    />
  );
}