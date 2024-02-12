import Test from "./Test";
import Button from "./Button";


function User(props){
    // firstName, secondName, age, phone, email, imageURL, gender
    function test2() {
     return <div style={{width:100, height:100, backgroundColor: "black"}}/>
    }
   return(
       <div style={{border: "1px solid black", margin:"20px 50px"}} className={'user-card'}>
       <div style={props.gender === 'Male' ? {color: "blue"} : {color: "pink"}}>
        <Test firstName={props.firstName} secondName={props.secondName} fun1={test2}/>
           <img src={props.imageURL} alt={props.firstName + ' ' + props.secondName + ' photo'} />
           <h2>{props.age}</h2>
           <p>
               <ul>
                   <li>{props.phone}</li>
                   <li>{props.email}</li>
               </ul>
           </p>
                   <Button text={'Show details'} color={'blue'}/>

       </div>
       </div>
   )
}
export default User;