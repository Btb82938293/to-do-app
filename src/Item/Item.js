import { AiOutlineDelete } from 'react-icons/ai';
import { FcHighPriority } from 'react-icons/fc'
import { MdOutlineDone } from 'react-icons/md'
import './Item.css';

export default function Item(props) {
    const styles = {
        backgroundColor: props.isDone ? "green" : "transparent",
        color: props.isDone ? "white" : "black"
    }
    return (
        <div style={styles} className="item">
            <span className="item-text">{props.text}</span>
            <div className="item__btn-container">
            <button className="item__important-btn"><FcHighPriority/></button>
            <button onClick={() => props.getItemDone(props.id)} className="item__done-btn"><MdOutlineDone/></button>
            <button onClick={() => props.deleteItem(props.id)} className="item__delete-btn"><AiOutlineDelete/></button>
            </div>
            </div>
    )
}