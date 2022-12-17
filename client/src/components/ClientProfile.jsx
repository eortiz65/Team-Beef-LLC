import { deleteClient, updateClient } from "../services/axios"
import { useNavigate } from "react-router-dom";


const ClientProfile = (props) => {
  let navigate = useNavigate()
  // const [isUpdate, setUpdate] = useState(false)  

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteClient(e.target.id)
    props.apiCall()   
    navigate('/clients')
}


  return (
    <div className="clients">
      <div className="center-column">
        <div className="clients-profile" >
          <h1 className="clients">Client Information</h1>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Company:</span> {props.client.company}</h3>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Contact: </span> {props.client.contact}</h3>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Services: </span> {props.client.services}</h3>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Additional Comments: </span> {props.client.comments}</h3>
        </div>
      </div>
      {/* { passwordFormRender } */}
      <div>
        <button className='delete-clients-button' id={props.client.id} onClick={handleDelete}>Delete Client</button>
      </div>
    </div>
  )
}

export default ClientProfile