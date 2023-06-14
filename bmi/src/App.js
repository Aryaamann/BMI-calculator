import './App.css';
import '../src/index.css'

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('Normal weight');
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">BMI Calculator</h1>
      <div className="mb-4">
        <label className="mr-2">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="px-2 py-1 border rounded"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Calculate
      </button>
      {
      bmi && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Your BMI: {bmi}</h2>
          <p className="text-xl mt-2">{message}</p>
        </div>
        );
      }
  )  
  

};
export default App;
