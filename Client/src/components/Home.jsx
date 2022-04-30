import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn my-2">
          <button className="btn btn-primary">Add data</button>
        </div>

        <table className="table table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Photo</th>
              <th scope="col">Price</th>
              <th scope="col">Barcode</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Keyboard</td>
              <td>img</td>
              <td>$55</td>
              <td>54169854518964</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <FaEye className="fs-5 pb-1" />
                </button>
                <button className="btn btn-primary">
                  <FaPen className="fs-5 pb-1" />
                </button>
                <button className="btn btn-danger">
                  <FaTrash className="fs-5 pb-1" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Keyboard</td>
              <td>img</td>
              <td>$55</td>
              <td>54169854518964</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <FaEye className="fs-5 pb-1" />
                </button>
                <button className="btn btn-primary">
                  <FaPen className="fs-5 pb-1" />
                </button>
                <button className="btn btn-danger">
                  <FaTrash className="fs-5 pb-1" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
