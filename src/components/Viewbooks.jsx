import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewbooks = () => {

  const [data, changeData] = useState(

    [
    { "name": "Irfan", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws2ElBI1Vud4VwoUOgeTW9YWE8Ce5LbCVyzc0J3ynaA&s=10",
       "admission no": 12554, "course": "MCA","phone no" : 1234567890 },
    { "name": "Ammu", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqCpM8y-Oy18xp0zeJBOGVT1qEpGQodC07-dldqeJGw&s=10",
       "admission no": 12556, "course": "MCA","phone no" : 12348765890 },
    { "name": "Eashy", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1Jvx3neuaFqVt4WK8vJcb82W4bVW9QNBVJYXuJduxA&s=10",
       "admission no": 12557, "course": "MCA","phone no" : 9876543215 },
    { "name": "Joel", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89v5tBi_voArg3Sq7kVdIc05zm9Tz8sLnadwutsmKAg&s=10",
       "admission no": 12560, "course": "MCA","phone no" : 6543789790 },
    { "name": "Alan", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcidrGnDtsK3cEvYkdpmgKoGmh3jwkWEDX4MEi4sFTJQ&s=10",
       "admission no": 12565, "course": "MCA","phone no" : 9356277890 }

    ]

  )

  return (
    <div>
      <Navbar/>
      <div className="container mt-4">
        <div className="row">

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagRTzIXyIbwO4xAiQeSooLbccX_x515KcuEpLL9VIMIGXv6fMUaHBE-NmqcBRRC_gX04rLOjQRsFoIyNCaKjpWdVY8lQnG9aQxag1pT65&s=10"
                className="card-img-top"
                style={{ height: "300px", objectFit: "fill" }}
                alt="The Alchemist"
              />
              <div className="card-body text-center">
                <h5 className="card-title">The Alchemist</h5>
                <p className="card-text">
                  Author: Paulo Coelho <br />
                  Price: ₹450
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          
            </div>
          </div>

        </div>
      
  )
}

export default Viewbooks