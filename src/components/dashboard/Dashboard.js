import { useEffect, useState } from "react";
import './Dashboard.css'

const Dashboard = () => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if(err) {

        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
  },[])

  const formatPercent = number => 
    `${new Number(number).toFixed(2)}%`

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
      'en-US', 
      { 
        style: 'currency', 
        currency: 'USD',
        maximumSignificantDigits
      })
      .format(number);

  return ( 
    <div className="wrapper container">
      <h2>Dashboard</h2>
      <div className="row d-flex justify-content-center">
        <table className='table col-md-8'>
          <thead>
            <tr>
              <th>Crypto</th>
              <th>24h Change</th>
              <th>Price</th>
            </tr>
          </thead>
            { isPending &&
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> 
            }
            { error && <h2>{ error.name }</h2>}
          <tbody>
            { data && data.map((data) => (
              <tr key={ data.id }>
                <td>
                  <img 
                    src={data.image}
                    style={{width: 25, height:25, marginRight: 10}}
                  />
                  { data.symbol.toUpperCase() }
                </td>
                <td>
                  <span
                    className={ data.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger' }
                  >
                  { formatPercent(data.price_change_percentage_24h) }
                  </span>
                </td>
                <td>{ formatDollar(data.current_price) }</td>
              </tr>              
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
   );
}
 
export default Dashboard;