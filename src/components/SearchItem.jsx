import 'dracula-ui/styles/dracula-ui.css'
import { Input } from 'dracula-ui';

export default function SearchItem({ search, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault}>
      <label htmlFor="search" className="sr-only">Search</label>
      <Input
        color="purple"
        variant="outline"
        borderSize="md"
        my="xs"
        mr='xs'
        size="lg"
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search your list..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}
