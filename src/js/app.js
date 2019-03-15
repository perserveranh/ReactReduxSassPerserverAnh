import React from 'react';
import { Button } from 'reactstrap';
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <header className="header">App Header 123456</header>
                <section className="body">
                    <h1 className="title">Hello and Welcome, React-Redux-Sass Starter kit is successfully build and your kit is
            ready to use</h1>
                </section>
                <div>
                    <Button color="primary">primary</Button>{' '}
                    <Button color="secondary">secondary</Button>{' '}
                    <Button color="success">success</Button>{' '}
                    <Button color="info">info</Button>{' '}
                    <Button color="warning">warning</Button>{' '}
                    <Button color="danger">danger</Button>{' '}
                    <Button color="link">link</Button>
                </div>
                <div class="container">
                    <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2>
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col col-1">Job Id</div>
                            <div class="col col-2">Customer Name</div>
                            <div class="col col-3">Amount Due</div>
                            <div class="col col-4">Payment Status</div>
                        </li>
                        <li class="table-row">
                            <div class="col col-1" data-label="Job Id">42235</div>
                            <div class="col col-2" data-label="Customer Name">John Doe</div>
                            <div class="col col-3" data-label="Amount">$350</div>
                            <div class="col col-4" data-label="Payment Status">Pending</div>
                        </li>
                        <li class="table-row">
                            <div class="col col-1" data-label="Job Id">42442</div>
                            <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
                            <div class="col col-3" data-label="Amount">$220</div>
                            <div class="col col-4" data-label="Payment Status">Pending</div>
                        </li>
                        <li class="table-row">
                            <div class="col col-1" data-label="Job Id">42257</div>
                            <div class="col col-2" data-label="Customer Name">John Smith</div>
                            <div class="col col-3" data-label="Amount">$341</div>
                            <div class="col col-4" data-label="Payment Status">Pending</div>
                        </li>
                        <li class="table-row">
                            <div class="col col-1" data-label="Job Id">42311</div>
                            <div class="col col-2" data-label="Customer Name">John Carpenter</div>
                            <div class="col col-3" data-label="Amount">$115</div>
                            <div class="col col-4" data-label="Payment Status">Pending</div>
                        </li>
                    </ul>
                </div>
                <footer className="header">App Footer</footer>
            </React.Fragment>
        )
    }
}