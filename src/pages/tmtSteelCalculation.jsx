import React, { useState } from 'react'

const TmtSteelCalculation = () => {
    // const [rode, setRode] = useState({})
    const [steelArray, setSteelArray] = useState([
        {
            size : 8,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        },
        {
            size : 10,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        },
        {
            size : 12,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        },
        {
            size : 16,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        },
        {
            size : 20,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        },
        {
            size : 25,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        },
        {
            size : 32,
            rods_bundle : "",
            weight_bundle : "",
            weight_rod : "",
            weight_meter : ""
        }
    ])

    const calculateFunc = (value, name, index) => {
        // const {name, value} = event
        const tmp = [...steelArray];
        // tmp[index][name] = value
        // setSteelArray(tmp)
        const curr = steelArray[index]
        if (name === 'rods_bundle') {
            curr['rods_bundle'] = value
            curr['weight_meter'] = ((curr['size'] * curr['size']) / 162).toFixed(3)
            curr['weight_rod'] = (curr['weight_meter'] * 12 ).toFixed(3)
            curr['weight_bundle'] = (curr['weight_rod'] * curr['rods_bundle'] ).toFixed(3)
        } else if (name === 'weight_rod' && curr['rods_bundle'] !== "") {
            curr['weight_rod'] = value

            curr['weight_meter'] = (curr['weight_rod'] / 12).toFixed(3)
            curr['weight_bundle'] = (curr['weight_rod'] * curr['rods_bundle'] ).toFixed(3)
        } else if (name === 'weight_bundle' && curr['rods_bundle'] !== "") {
            curr['weight_bundle'] = value

            curr['weight_rod'] = (curr['weight_bundle'] / curr['rods_bundle'] ).toFixed(3)
            curr['weight_meter'] = (curr['weight_rod'] / 12).toFixed(3)
        } else if (name === 'weight_meter' && curr['rods_bundle'] !== "") {
            curr['weight_meter'] = value
            curr['weight_rod'] = (curr['weight_meter'] * 12 ).toFixed(3)
            curr['weight_bundle'] = (curr['weight_rod'] * curr['rods_bundle'] ).toFixed(3)
        } else {
            curr[name] = value
        }
        tmp[index] = curr
        setSteelArray(tmp)
    }

    return (
        <div>
            <h1>TMT Steel Calculator</h1>
            <h1>Note : TMT Rods / bundle field is naccessary to fill. </h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="rowf">TMT Size (mm)	</th>
                            <th scope="col">TMT Rods / bundle</th>
                            <th scope="col">TMT Weight / bundle</th>
                            <th scope="col">Weight / rod</th>
                            <th scope="col">Weight / meter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {steelArray?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item?.size}</td>
                                    <td><input type="number" min={0} value={item.rods_bundle} onChange={(e) => {calculateFunc(e.target.value, 'rods_bundle', index)}} /></td>
                                    <td><input type="number" min={0} value={item.weight_bundle} onChange={(e) => {calculateFunc(e.target.value, 'weight_bundle', index)}} /></td>
                                    <td><input type="number" min={0} value={item.weight_rod} onChange={(e) => {calculateFunc(e.target.value, 'weight_rod', index)}} /></td>
                                    
                                    <td><input type="number" min={0} value={item.weight_meter} onChange={(e) => {calculateFunc(e.target.value, 'weight_meter', index)}} /></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TmtSteelCalculation