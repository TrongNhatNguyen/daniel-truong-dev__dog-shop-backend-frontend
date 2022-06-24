import React from 'react';
import './DogStyle.scss';
import BoxDog from './BoxDog';

class ListDog extends React.Component {
    render() {
        let listDog = this.props.dogData;
        console.log('>>> call listDogsCPN: ', listDog);

        return (
            <section className="list-dog-container">
                <div className="row">
                    {listDog &&
                        listDog.length > 0 &&
                        listDog.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <BoxDog dog={item} />
                                </div>
                            );
                        })}
                </div>
            </section>
        );
    }
}

export default ListDog;
