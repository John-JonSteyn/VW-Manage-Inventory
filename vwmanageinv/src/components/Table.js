import React from 'react';
import styles from './Table.module.css'

export class Table extends React.Component {
  render() {
    return (
      <section>
        <div className = 'wrapper'>
          <div className = 'accordion'>
            {data.map((item, i) => (
              /* class + id selectors fail in css file
                 inline styling is used */
              <article>
                <div className='title'>
                  <p>
                    <span className='model'>
                      {item.model}
                    </span>
                    <span className='stock'>
                      {item.stock}
                    </span>
                  </p>
                </div>
                <aside className='details'>
                  <p>
                    <span className='features'>
                      {item.features}
                    </span>
                    <span className='price'>
                      {item.price}
                    </span>
                    <span className='buttons'>
                      <button>+</button>
                      <button>-</button>
                      </span>
                  </p>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>   
    );
  }
}

const data = [
  {
    model:    'Polo Vivo Hatch',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 235 200,00',
    stock:    10
  },
  {
    model:    'Polo Sedan',
    make:     'Volkswagen',
    features: 'petrol',
    price:    'R 265 800,00',
    stock:    5
  },
  {
    model:    'Polo',
    make:     'Volkswagen',
    features: 'Metanol',
    price:    'R 315 000,00',
    stock:    3
  },
  {
    model:    'Golf',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 689 800,00',
    stock:    2
  },
  {
    model:    'T-Cross',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 368 900,00',
    stock:    9
  },
  {
    model:    'Polo Vivo Hatch',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 235 200,00',
    stock:    10
  },
  {
    model:    'Polo Sedan',
    make:     'Volkswagen',
    features: 'petrol',
    price:    'R 265 800,00',
    stock:    5
  },
  {
    model:    'Polo',
    make:     'Volkswagen',
    features: 'Metanol',
    price:    'R 315 000,00',
    stock:    3
  },
  {
    model:    'Golf',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 689 800,00',
    stock:    2
  },
  {
    model:    'T-Cross',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 368 900,00',
    stock:    9
  },
  {
    model:    'Polo Vivo Hatch',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 235 200,00',
    stock:    10
  },
  {
    model:    'Polo Sedan',
    make:     'Volkswagen',
    features: 'petrol',
    price:    'R 265 800,00',
    stock:    5
  },
  {
    model:    'Polo',
    make:     'Volkswagen',
    features: 'Metanol',
    price:    'R 315 000,00',
    stock:    3
  },
  {
    model:    'Golf',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 689 800,00',
    stock:    2
  },
  {
    model:    'T-Cross',
    make:     'Volkswagen',
    features: 'Diesel',
    price:    'R 368 900,00',
    stock:    9
  }
]