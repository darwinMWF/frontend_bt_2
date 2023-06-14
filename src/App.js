import PackageList from "./conditional_compoenent";
import Multioption from "./selection";
// import Form from './form';
// import Button from './Button';
// import List from './list';

// const varName = "rajesh"

{
  /* <h2>{varName}</h2>
<h1>hello world <Button name="remove"/></h1>
<Form />
<Button name = "add"/>
<List name="mukesh" age={25} profile="software developer"/>
<List name="rajesh" age={30}/>
<List name="kali" age={23}/> */
}

const arry = ["mukesh","naresh","yogesh","abx","xyx","hgj","gfsdj"];
const brry = [<li>mukesh</li>,<li>naresh</li>];

const crry = arry.map(x => <li>{x}</li>)

function App() {
  return (
    <>
      <ul>
        <PackageList name="soap" ispacked={true} />
        <PackageList name="oil" ispacked={false} />
        <PackageList name="wheat" ispacked={true} />
        <PackageList name="sugar" ispacked={false} />
      </ul>
      <Multioption />
      <>{arry}</>
      <ul>{brry}</ul>
      <ul>{crry}</ul>
    </>
  );
}

export default App;
