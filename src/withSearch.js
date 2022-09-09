import React, {useState, useEffect} from 'react'

function withSearch(Component, entity) {
    return function () {
        // return function (props) {
            const [data, setData] = useState([]);
            const [search, setSearch] = useState("");
            useEffect(() => {
                const fetchAPI = async () => {
                    fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                        .then(response => response.json())
                        .then(json => {console.log(json);setData(json)})
                }
                fetchAPI();
            }, [])
            let filteredData = data.slice(0, 15).filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
            return (
                <div>
                    <input type="text" onChange={e => setSearch(e.target.value)} />
                    <Component data = {filteredData} />
                </div>
            )
        // }
    }
}

export default withSearch