import Datepicker from './components/Datepicker'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 p-6">
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-white mb-4">Hello KBTG — React Datepicker</h1>
        <Datepicker />
      </div>
    </div>
  )
}
