import { AiOutlineFieldNumber } from "react-icons/ai"
import { GiVibratingSmartphone } from "react-icons/gi"
import { MdOutlineAlternateEmail } from "react-icons/md"

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client Info</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <AiOutlineFieldNumber className="icon" />&nbsp;&nbsp;&nbsp;{client?.name}
        </li>
        <li className="list-group-item">
          <MdOutlineAlternateEmail className="icon" />&nbsp;&nbsp;&nbsp;{client?.email}
        </li>
        <li className="list-group-item">
          <GiVibratingSmartphone className="icon" />&nbsp;&nbsp;&nbsp;{client?.phone}
        </li>
      </ul>
    </>
  )
}

export default ClientInfo