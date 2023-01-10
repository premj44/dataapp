import { useEffect } from "react"
import { useState } from "react"

function Data() {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            let res = await fetch('https://premdata.onrender.com/name')
            let data = await res.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getData()
    }, [])


    let obj = {}
    for (let i = 0; i < data.length; i++) {
        if (obj[data[i]] === undefined) {
            obj[data[i]] = 1
        } else {
            obj[data[i]]++
        }

    }
    console.log(obj)

    let arr = []
    for (let key in obj) {
        arr.push({ name: key, times: obj[key] })
    }


    return (
        <div>
            <table className="tablemain">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        arr.map((el, id) => {
                            return <tr key={id} style={el.times > 0 && el.times < 3 ? { backgroundColor: "red" } : el.times > 2 && el.times < 10 ? { backgroundColor: "yellow" } : { backgroundColor: "green" }}>
                                <td>{el.name}</td>
                                <td>{el.times}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Data;