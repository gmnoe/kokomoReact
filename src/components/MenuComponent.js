import React from 'react';
import { Card } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';

function RenderDrinks({drink}) {
    return (
        <React.Fragment>
                        <span className="float-right font-weight-bold">{drink.price}</span>
                        <h6>{drink.name}</h6>
                        <p>{drink.description}</p>
        </React.Fragment>
    );
}

function RenderDinner({dinner}) {
    return (
        <React.Fragment>
                        <span className="float-right font-weight-bold">{dinner.price}</span>
                        <h6>{dinner.name}</h6>
                        <p>{dinner.description}</p>
        </React.Fragment>
    );
}

function RenderDessert({dessert}) {
    return (
        <React.Fragment>
                        <span className="float-right font-weight-bold">{dessert.price}</span>
                        <h6>{dessert.name}</h6>
                        <p>{dessert.description}</p>
        </React.Fragment>
    );
}

function Menu(props) {

    const drinks1 = props.drinks.filter(item => item.id < 4 ).map(drink => {
        return (
            <div key={drink.id}>
                <RenderDrinks drink={drink} />
            </div>
        );
    });

    const drinks2 = props.drinks.filter(item => item.id > 3 ).map(drink => {
        return (
            <div key={drink.id}>
                <RenderDrinks drink={drink} />
            </div>
        );
    });

    const dinner1 = props.dinner.filter(item => item.id < 4).map(dinner => {
        return (
            <div key={dinner.id}>
                <RenderDinner dinner={dinner} />
            </div>
        );
    });

    const dinner2 = props.dinner.filter(item => item.id > 3).map(dinner => {
        return (
            <div key={dinner.id}>
                <RenderDinner dinner={dinner} />
            </div>
        );
    });

    const dessert1 = props.dessert.filter(item => item.id < 2).map(dessert => {
        return (
            <div key={dessert.id}>
                <RenderDessert dessert={dessert} />
            </div>
        );
    });

    const dessert2 = props.dessert.filter(item => item.id > 1).map(dessert => {
        return (
            <div key={dessert.id}>
                <RenderDessert dessert={dessert} />
            </div>
        );
    });

    return (

        <div className="container">
            <br /><br />
                    <Card>
                        <CardBody>
            <div className="row">
                <div className="col">
                    <h1 class="menu">Cocktails</h1>
                    <p className="text-center">In addition to a full selection of beer and wine, 
                        Kokomo also offers a delicious line up of one-of-kind cocktails. Enjoy!
                    </p>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    {drinks1}
                </div>
                <div className="col-6">
                    {drinks2}
                </div>
            </div>
            <br />
            <div className="row justify-content-center">
                <h1 class="menu">Dinner</h1>
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    {dinner1}
                </div>
                <div className="col-6">
                    {dinner2}
                </div>
            </div>
            <br />
            <div className="menu">
                <h1>Dessert</h1>
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    {dessert1}
                </div>
                <div className="col-6">
                    {dessert2}
                </div>
            </div>
            </CardBody>
                   </Card>
                   <br /><br />
       </div>

    );
}

export default Menu;
