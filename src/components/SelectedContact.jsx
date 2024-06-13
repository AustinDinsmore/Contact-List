import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState({})
    useEffect(() => {  async function fetchContact(){
        try { console.log(selectedContactId)
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const result = await response.json();
          console.log(result)
          setContact(result)
          console.log(setContact)
        } catch (error) {
          console.error(error);
        }
      }
      fetchContact();
    }, []);
    return (
      <button onClick={() => setSelectedContactId(null)}>Click Me</button>
    )
}