import React from 'react';
import './styles/Branches.css'

export const branches = [
    {
        id: 1,
        location: 'New York, USA',
        address: '123 Main St, New York, NY',
        country: 'USA',
    },
    {
        id: 2,
        location: 'London, UK',
        address: '456 High St, London',
        country: 'UK',
    },
    {
        id: 3,
        location: 'Sydney, Australia',
        address: '789 Park Ave, Sydney',
        country: 'Australia',
    },
];

const Branches = () => {
    return (
        <section className="branches">
            <h2>Branches</h2>
            <ul className="branches-list" style={{columnCount:3}}>
                {branches.map((branch, index) => (
                    <div>
                        <li key={branch.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                            {branch.location}
                        </li>
                        <li key={branch.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                            {branch.address}
                        </li>
                        <li key={branch.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                            {branch.country}
                        </li>
                    </div>
                ))}
            </ul>
        </section>
    );
};

export default Branches;
