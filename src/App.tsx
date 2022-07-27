import './styles.css'
import img from './img/react.png'
import Counter from './Counter'

const App = () => {
  return (
    <div>
      <h1>
        Hello - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={img} alt="react-logo" width="300" />
      <Counter />
    </div>
  )
}

export default App
