import React, { useState } from 'react'

const TmtSteelCalculation = () => {
    const [rode, setRode] = useState({})
    const [bundle, setBundle] = useState({})

    const steelArray = [
        { weight: "4.74", bundlePerRode: 10, size: " 8 mm" },
        { weight: "7.4", bundlePerRode: 7, size: "10 mm" },
        { weight: "10.56", bundlePerRode: 5, size: "12 mm" },
        { weight: "18.96", bundlePerRode: 3, size: "16 mm" },
        { weight: "29.62", bundlePerRode: 2, size: "20 mm" },
        { weight: "46.27", bundlePerRode: 1, size: "25 mm" },
        { weight: "75.72", bundlePerRode: 1, size: "32 mm" },
    ]
    return (
        <div>
            <h1>TMT Steel Calculator</h1>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="rowf">Rode size</th>
                            <th scope="col">Rode Per Bundle</th>
                            <th scope="col">Rode </th>
                            <th scope="col">Bundle</th>
                            <th scope="col">Calculated weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {steelArray?.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{item?.size}</th>
                                    <th>{item?.bundlePerRode}</th>
                                    <td><input placeholder="Enter rode" min={0} type="number" value={rode[index] || 0} onChange={(event) => {
                                        setRode({ ...rode, [index]: event?.target?.value })
                                        setBundle({ ...bundle, [index]: Math.floor((event?.target?.value || 0) / steelArray[index]?.bundlePerRode) })
                                    }} /></td>
                                    <td><input placeholder="Enter bundle" min={0} type="number" value={bundle[index] || 0} onChange={(event) => {
                                        setRode({ ...rode, [index]: event?.target?.value * steelArray[index]?.bundlePerRode })
                                        setBundle({ ...bundle, [index]: event?.target?.value })
                                    }} /></td>
                                    <td>{((rode[index] || 0) * steelArray[index]?.weight).toFixed(2)}</td>
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