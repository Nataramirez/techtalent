/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import getCars from './components/formulate/cars';
import Card from './components/card/card';
import Pagination from './components/pagination/pagination';

import './App.css';


function App() {
  const [cars, setCars] = useState([])
  const [currentPages, setCurrentPages] = useState(1)
  const [carsPerPage] = useState(3)

  useEffect(() => {
    const fullCars = async () => {
      setCars(await getCars())

    }

    fullCars();
  }, [])


  // get current cars
  const indexOfLastCar = currentPages * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar)

  // change page
  const paginate = (pageNumbers) => setCurrentPages(pageNumbers)


  return (
    <main className="bg">
      <header>
        <p className="hola-pedro">Hola Pedro,</p>
        <p className="ahorra-hasta-un-30">Ahorra hasta un 30% agregando un auto en tu viaje a Chicago</p>
      </header>

      <section className="container">
        {
          currentCars.length > 0 ? currentCars.map(element => {
            return (
              <Card
                imageCar={element.imageUrl} imageCompany={element.companyImageUrl} category={element.category}
                model={element.model} passengers={element.passengers} doors={element.doors} dailyRate={element.dailyRate}
                totalRate={element.totalRate}
              />
            )
          }) : <h2 className="loading">Loading...</h2>
        }

      </section>
      <Pagination carsPerPage={carsPerPage} totalCars={cars.length} paginate={paginate} />
    </main>
  );
}

export default App;
