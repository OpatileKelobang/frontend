import React, { Component } from 'react'
import PharmacyItem from './Pharmacy/PharmacyItem';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <PharmacyItem />
            </div>
        )
    }
}

export default Dashboard;
