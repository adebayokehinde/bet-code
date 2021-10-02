import React from 'react'

export default function PredictionTable() {
    return (
        <div className="predict">
            <ul className="ul-table-heading">
                <li  className="ul-table-heading-li">
                    Time
                </li>
                <li className="ul-table-heading-li">
                    Country
                </li>
                <li className="ul-table-heading-li">
                    Home
                </li>
                <li className="ul-table-heading-li">
                    Away
                </li>
                <li className="ul-table-heading-li">
                    Pick
                </li>
            </ul>
            <ul className="ul-table-heading">
                <li className="ul-table-heading-li">13:30</li>
                <li className="ul-table-heading-li">ENG</li>
                <li className="ul-table-heading-li">Liv</li>
                <li className="ul-table-heading-li">Man. City</li>
                <li className="ul-table-heading-li">1</li>

            </ul>
        </div>
    )
}
