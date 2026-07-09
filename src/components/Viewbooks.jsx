import React from 'react'

const Viewbooks = () => {
  return (
    <div>
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

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6BEh1nXmvY7HMPSegyzAF6H6zuMsPiPhObxGH14oDQ&s=10"
                className="card-img-top"
                style={{ height: "300px", objectFit: "fill" }}
                alt="Harry Potter"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Harry Potter</h5>
                <p className="card-text">
                  Author: J. K. Rowling <br />
                  Price: ₹699
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2Tn785SyJYbjlG9FSxVsGgmEYJNVuI9WSYSqYxI5iRJ5DIoGGB8VZP_2sfE60q-N7cPQLS0AxxeukYYf0ktCMkNmnd0wRdtbu33xDBSRyg6dYz0NdRc_dSw&usqp=CAc"
                className="card-img-top"
                style={{ height: "300px", objectFit: "fill" }}
                alt="Atomic Habits"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Atomic Habits</h5>
                <p className="card-text">
                  Author: James Clear <br />
                  Price: ₹599
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
            <div className="card h-100">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                style={{ height: "300px", objectFit: "fill" }}
                alt="The Hobbit"
              />
              <div className="card-body text-center">
                <h5 className="card-title">The Hobbit</h5>
                <p className="card-text">
                  Author: J. R. R. Tolkien <br />
                  Price: ₹799
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQTlr68z4aOBAHr2dBOYD1zdk98IM7urtEvAFJaYO2g&s"
                className="card-img-top"
                style={{ height: "300px", objectFit: "fill" }}
                alt="Rich Dad Poor Dad"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Rich Dad Poor Dad</h5>
                <p className="card-text">
                  Author: Robert Kiyosaki <br />
                  Price: ₹399
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1GAPD1hr1wUT3IJnY4heVsakb-wB07BNhyL1XfPZ1A&s"
                className="card-img-top"
                style={{ height: "300px", objectFit: "fill" }}
                alt="The Psychology of Money"
              />
              <div className="card-body text-center">
                <h5 className="card-title">The Psychology of Money</h5>
                <p className="card-text">
                  Author: Morgan Housel <br />
                  Price: ₹550
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