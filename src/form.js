import Button from "./Button"
import './form.css'

function Form(){
    return <>
      <form>
      <input type='text' placeholder='yogesh limabachiya' className='userinput' style={{width:"8rem",height:"1rem"}}/>
      <Button name="submit"/>
      </form>
      </>
    
}

export default Form 