import { AiOutlineDelete } from 'react-icons/ai';
import { FcHighPriority } from 'react-icons/fc'
import './Item.css';

export default function Item(props) {
    return (
        <div className="item">
            <span className="item-text">{props.text}</span>
            <div className="item__btns-container">
            <button className="item__delete-btn"><FcHighPriority/></button>
            <button onClick={() => props.deleteItem(props.id)} className="item__delete-btn"><AiOutlineDelete/></button>
            </div>
            </div>
    )
}