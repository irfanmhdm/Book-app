import React from 'react'
import Navbar from './Navbar'

const Addbook = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid bg-info p-5 mt-3 rounded">
        <div className="row">
          <div className="col-12">

            <div className="row g-3">

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Book Code / ISBN</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Publisher</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Category / Genre</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Edition</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Number of Copies</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Publication Year</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Shelf Location</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 text-center mt-3">
                <button className="btn btn-success">Submit</button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Addbook