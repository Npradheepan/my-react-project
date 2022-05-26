import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const setAndSaveItem = (newLists) => {
        setItems(newLists)
        localStorage.setItems("shoppingList", JSON.stringify(newLists))
    }
    // Second methode to handle Check
    const  handleCheck = (id) => {
        const listItem = items.map((item) => item.id==id ? {...item, checked: !item.checked}:item)
        // setItems(listItem)
        // localStorage.setItems("shoppingList", JSON.stringify(listItem));
        setAndSaveItem(listItem)
    }
    // Second methode to handle Delete
    const handleDelete = (id) => {
       const listItem =  items.filter((item)=>item.id !== id)
        setAndSaveItem(listItem);
    }


    return (
       
        <main>
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                onChange={() => handleCheck(item.id)}
                                type="checkbox"
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick = {() => handleCheck(item.id)}
                            >{item.item}
                            </label>
                            <FaTrashAlt
                                role="button"
                                tabIndex="0"
                                onClick={()=>handleDelete(item.id)}
                            />
                        </li>
                    ))}
                </ul>
        </main>
    )
}

export default Content