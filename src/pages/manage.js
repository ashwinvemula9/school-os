import React from 'react'

function Manage() {
    return (
        <div>
            <nav className="nav">
                <div>
                    <span className="logo">Logo</span>
                </div>
            </nav>

            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                Assigned
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ChildName</th>
                        <th>RollNo</th>
                        <th>Teacher</th>
                        <th>ClassRoom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>1</td>
                        <td>Vamsi</td>
                        <td><select>
                            <option>A</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                Unassigned
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ChildName</th>
                        <th>RollNo</th>
                        <th>Teacher</th>
                        <th>ClassRoom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>1</td>
                        <td>-</td>
                        <td><select>
                            <option>A</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Manage