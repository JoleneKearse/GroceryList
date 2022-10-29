import 'dracula-ui/styles/dracula-ui.css';
import './styles/index.css';
import { Box } from 'dracula-ui';
import Header from './components/Header';

export default function App() {
  return (
    <Box color='blackSecondary' m='lg' p='md' rounded='lg' width='md'>
      <Header />
    </Box>
  );
}