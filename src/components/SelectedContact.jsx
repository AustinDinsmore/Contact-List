import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState({})
    useEffect(() => {  async function fetchContact(){
        try { 
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const result = await response.json();
          setContact(result)
        } catch (error) {
          console.error(error);
        }
      }
      fetchContact();
    }, []);
    return (
    <><table>
        <tbody>
          <tr>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>{contact.username}</td>
          </tr>
          <tr>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <td>{contact.website}</td>
          </tr>
        </tbody>
      </table><button onClick={() => setSelectedContactId(null)}>Return</button></> 
      
    )
}