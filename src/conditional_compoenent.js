import './conditional.css'

const PackageList =({name,ispacked})=>{
    let listName = name;


    if(ispacked){
        listName = name + ' ✔'
    }

    // normal condition
    // if(ispacked=== true){
    //     return <>
    //     <li>{name} <i className="fa fa-check" ></i></li>
    //     </>
    // }


    // tarnary operator
    // <li>{ispacked ? name+ ' ✔': name}</li>

    // AND Operator

    // return <li>
    //     {name}{ispacked && ' ✔'}
    // </li>

    return <li>{listName}</li>
    

}


export default PackageList