/** 
 *  "StAuth10244: I Utsavkumar Patel, student number 000820474 certify that this material is my original work.
 *                 No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
**
*/

import './App.css';
import deleteImage from './delete.png';
import editImage from './edit.png';
import React, {Component, useState} from 'react';


import{
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

// We can get at the url parameter with this.props.match.params 
// followed by the url parameter name defined in the route.  
class URLParmExample extends React.Component 
{
  render()
  {
    return ( <p>URL parm: {this.props.match.params.someid} </p> );
  }
}


function TODOAPK()
{    

      // todolost constant variable will keep a list of todoitems, last_id, current_Id,buttonTextValue,inputItem   will be sued to 
      // ensure each switch has a unique id, and to_delete is the status of 
      // the delete input textbox
  
      const [todoitems, setItems] = useState([{id: 0, item: "Walk Your Dog"},
                                              {id: 1, item: "Do Your Laundry"},
                                              {id: 2, item: "Take a Nap"}]);
      const[current_Id, setCurrentId] = useState();
      
      const [last_Id, setLastId] = useState(1);
      
      const[buttonTextValue, setButtonText] = useState("ADD");
      
      const [inputItem, setInputItem] = useState("");
      

      // itemChange Function...
      function itemChange(event) 
      { 
        setInputItem(event.target.value) 
      }

      // adding item handling function...
      function enterItem()
      {

        if(buttonTextValue === "ADD")
        {
          let newItem = {item: inputItem, id: last_Id + 1};
          let newlyItems = todoitems; 
          
          //pushing newlyitems to newItem list...
          newlyItems.push(newItem);

          //Increment the last id...
          setLastId(last_Id + 1);
          setItems(newlyItems);
          //clearing the input text box values...
          setInputItem("");
          //Set TextButton to "ADD"...
          setButtonText("ADD");
        }
          
        //Editing part...
        else if(buttonTextValue === "EDIT")
        {
       
          let newlyItems = todoitems;
       
          for(let i = 0; i < newlyItems.length; i++)
          {
            if(newlyItems[i].id === current_Id)
            {
              newlyItems[i].item = inputItem;
              setItems(newlyItems);
            }
          }
           //Set TextButton to "ADD"...
          setButtonText("ADD");
          //clearing the input text box values...
          setInputItem("");
          
        }
 }

  //Edit Item Function...
  function editItem(editItem)
  {
    setInputItem(editItem.item);
    setCurrentId(editItem.id);
    console.log(editItem.id);
   
    //Changing text of ADD to the button to Edit...
    setButtonText("EDIT");
    
  }

  function deleteItem(delete_id)
  {
    //Applying filter ...
    let newlyItems = todoitems.filter( x => delete_id !== x.id);
    
    setItems(newlyItems);
    //Set TextButton to "ADD"...
    setButtonText("ADD");
    //clearing the input text box values...
    setInputItem("");

  }



    return ( 
                <div>
                  
                  <h2>
                       &nbsp; &nbsp; 
                      TODO APP
                  </h2>

                  <strong> &nbsp;  &nbsp; &nbsp;Add Your ToDoList Here : </strong> &nbsp;&nbsp;
                  
                  <input type = "text" onChange={itemChange} value = {inputItem} /> &nbsp;
                  <input type = "submit" onClick= {enterItem} value = {buttonTextValue} /> &nbsp; 
                  
                  <br/> &nbsp;&nbsp;&nbsp;&nbsp;
                  <table>
                      {todoitems.map( (x) => 
                                   
                                    
                                   <tr key={x.id}>
                                        
                                        {x.item} &nbsp;&nbsp;&nbsp;
                                        <button onClick={ () => editItem(x) }>
                                               <img src = {editImage} alt = "editImage" height = "22px" width = "22px"></img>
                                        </button> &nbsp;&nbsp;&nbsp;
                                        
                                        <button onClick={ () => deleteItem(x.id)} >
                                                <img src = {deleteImage} alt = "deleteImage" height = "22px" width = "22px"></img>
                                        </button> <br />

                                    </tr>
                                   
                                    ) }
                    </table>
                </div>
                
     );
     
};

//Home Class...
class Home extends React.Component
{
  render() { return (
                         <h1> Welcome ! This is the Home Page of TODO LIST APP</h1> 
  )
}
};


//Contact Class...
class Contact extends React.Component
{
  //Edit After...
  render()
  { 
    return (
                <table className = "contact">
                <th colSpan="2">
                    <h1>Contact Us: </h1>
                </th>
                <tr>
                    <td>First Name : </td>
                    <td><input type = "text" placeholder="John..." /></td>
                </tr>
                <tr>
                    <td>Last Name : </td>
                    <td><input type = "text" placeholder="Wick..." /></td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td><input type = "email" placeholder="abc@gmail.com.."/> </td>
                </tr>

                <tr>  
                      <td>Country : </td>
                      <td> <select name="country">
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                           </select>
                      </td>     
                </tr>
              
                <tr>
                    <td> Subject :</td>
                    <textarea height="60px" width="120px" value ="Enter your message here.."/>
                </tr>
              
                <tr >
                    <td colSpan="2"><input type = "submit"></input> </td>
                </tr>

                </table>
           ); 
  };
}


class About extends React.Component
{
  render() { return <h2>@Copyright Lab#5 TODO List APP @Utsavkumar Patel(000820474).</h2>;}
}


class App extends Component
{
  render()
  {
    return (
    
      <Router>

        <header>
     
          <ul> 
          {
              // Our NavLinks create navigiation links that React Router 
              // will associate with our routes.  NavLinks will use the 
              // active css class to style themselves when they are the 
              // active link.  See the active css class in App.css.  We
              // need to use the exact property for our root/home path 
              // otherwise home will always be considered active.
            }
               <li><NavLink exact to="/">H0ME</NavLink></li>
          </ul>
          <ul> 
               <li><NavLink to="/todo">TODO</NavLink></li>
          </ul>
          <ul> 
               <li><NavLink to="/contact">C0NTACT</NavLink></li>
          </ul> 
          <ul> 
               <li><NavLink to="/about">ABOUT</NavLink></li>
          </ul> 
          <ul> 
               <li><NavLink to="/urlparm/34">URL PARAM EXAMPLE</NavLink></li>
          </ul>

        
        </header>
        <br/>
        <br/>
        {
            // Render a different component depending on the path, "/" is the 
            // "no path" case.  We add the property exact to have it render 
            // only on exact matches, otherwise "/" would also match for 
            // things like "/about".
        }
          <Route exact path="/" component={Home}/>
          <Route path="/todo" component={TODOAPK}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          

          { 
            // A route with a url parameter in it, :someid after /urlparm 
          }
          <Route path="/urlparm/:someid" component={URLParmExample}/>

         

        
      </Router>
      
    );
  }
}

export default App;
