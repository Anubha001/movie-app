import React from 'react'
import useSortableData from './atoms/SearchBar'
import './Table.css'

const Table = (props) => {

    const { requestSort, sortConfig,items } = useSortableData(props.users);
    const { users, updateUser } = props
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        users.length >  0 ?  <table className = "table1" >
        <caption>Movie</caption>
        <thead className= "thead">
            <tr>
                <th>
                    <button
                        type="button"
                        className={getClassNamesFor('name')}
                    >
                        Movie  Name
          </button>
                </th>
                <th>
                    <button
                        type="button"
                        className={getClassNamesFor('ratings')}
                    >
                        Ratings
          </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('duration')}
                        className={getClassNamesFor('duration')}
                    >
                        Duration
     </button>
                </th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, key) => (
                    <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.ratings}</td>
                        <td>{item.duration}</td>
                        <td>
                            <button
                                className="button"
                                onClick={() => updateUser(key)}
                            >
                                edit
                    </button>
                        </td>
                    </tr>
            ))}
        </tbody>
    </table>:'Add more data ' 
      
    );
};


export default Table;