import './App.css';
import TopNav from './components/TopNav';
import BrowsePanel from './components/BrowsePanel';
import BookShelf from './components/BookShelf';
import Cart from './components/Cart';
import mockServer from './server/Server';
import { bookService } from './services/AppService';


if (process.env.NODE_ENV === "development") {
  mockServer()
  const books = bookService.findBooks('design')
  console.log(books)
}

function App() {
  return (
    <>
      <TopNav />
      <main>
        <BrowsePanel />
        <BookShelf />
        <Cart />
        
      </main>
    </>
  );
}

export default App;
