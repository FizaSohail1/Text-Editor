
import './App.css';
import TextForm from './components/TextForm';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    < >
    <h1 className='bg-black text-white text-center py-3 text-2xl sm:text-4xl font-bold'>Text Editor</h1>
      {/* Main Content */}
      <div className="container mx-2 my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>

    </>
);
}
export default App;
