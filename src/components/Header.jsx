import 'dracula-ui/styles/dracula-ui.css'
import { Box, Heading } from 'dracula-ui'

export default function Header() {
  return (
    <Box color='blackSecondary' m='lg' p='md' rounded='lg' width='md'>
      <Heading color='pinkPurple' m='auto' size='2xl'>Grocery List</Heading>
    </Box>
  );
}