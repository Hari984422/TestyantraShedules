import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Info() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const objectsPerPage = 4;
    const totalPages = Math.ceil(data.length / objectsPerPage);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:1000/Users')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
        }, 8000);

        return () => clearInterval(interval);
    }, [totalPages]);

    const editTask = (id) => {
        navigate(`/editTask/${id}`);
    };

    const renderObjects = () => {
        const startIndex = currentPage * objectsPerPage;
        const endIndex = Math.min(startIndex + objectsPerPage, data.length);
        return data.slice(startIndex, endIndex).map((object, index) => (
            <div className='display_info' key={index}>
                <table border="1">
                    <thead>
                        <tr>
                            <th id="edit" onClick={() => { editTask(object.id) }}>{object.name}</th>
                        </tr>
                        <tr>
                            <th>Time</th>
                            <th>Subject</th>
                            <th>Room</th>
                            <th>Topics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{object.time}</td>
                            <td>{object.subject}</td>
                            <td>{object.room}</td>
                            <td>{object.topics}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ));
    };

    return (
        <div className="info">
            {renderObjects()}
        </div>
    );
}

export default Info;
