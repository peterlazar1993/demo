import variables from 'limehome-design-tokens/build/react-native/variables.json'
// import "./App.css"

const colorKeys = ["Primary",
  "Secondary",
  "Greyscale",
  "Background",
  "Text",
  "System",
  "Neutral",
  "Border"] as const

const Content = colorKeys.map(parent => {
  const colors = Object.keys(variables[parent])
  return <div style={{ display: 'flex', marginTop: 10 }} key={parent}><h2 style={{ width: 200 }}>{parent}</h2>{colors.map((color) => { return (<div key={parent + color} style={{ width: 100, height: 100, marginLeft: 10, background: variables[parent][color], }}><h4 style={{ color: 'black' }}>{color}</h4></div>) })}</div>
})

console.log(Content)

function App() {


  return <div>{Content}</div>

}

export default App
