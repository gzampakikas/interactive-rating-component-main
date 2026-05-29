import iconStar from '../images/icon-star.svg';

function App() {
  return (
    <div className="
      max-w-360
      h-full
      bg-[hsl(213,19%,18%)]
      rounded-sm
      text-white
    ">
      <img src={iconStar} alt="Icon Star" />

      <span className="text-[hsl(0,100%,100%) text-4xl">How did we do?</span>

      <p>
        Please let us know how we did with your support
        request. All feedback is apprecieted to help us 
        improve our offering!
      </p>

      <div className="btns">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>

      <button>SUBMIT</button>
    </div>
  )
}

export default App;

