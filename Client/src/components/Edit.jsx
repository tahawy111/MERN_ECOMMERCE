import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import BarcodeReader from "react-barcode-reader";

const Edit = () => {
  const [result, setResult] = useState("No result");
  const handleScan = useCallback((data) => {
    setResult(data);
  }, []);
  const [inpval, SetInpval] = useState({
    name: "",
    image: "",
    price: "",
    barcode: "",
  });
  const setData = (e) => {
    const { name, value } = e.target;

    SetInpval((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const [bcMood, setBcMood] = useState(false);
  return (
    <div className="container">
      <NavLink to="/">Back To Home</NavLink>
      <h1 className="text-center">Edit</h1>
      <form className="rounded">
        <div className="row">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              name="name"
              onChange={setData}
              type="text"
              value={inpval.name}
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="image" class="fs-5" className="form-label">
              Select Image
            </label>
            <input
              type="file"
              name="image"
              class="form-control form-control-lg"
              value={inpval.image}
              required
            />
          </div>
          <div class="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              onChange={setData}
              class="form-control"
              value={inpval.price}
            />
          </div>
          <div class="mb-3">
            <label className="form-label">Barcode</label>
            <BarcodeReader onScan={handleScan} />
            <br />
            <label>
              <input
                type="checkbox"
                onClick={(e) =>
                  e.target.checked ? setBcMood(true) : setBcMood(false)
                }
              />
              Add Barcode Manually
            </label>
            <input
              type="number"
              value={bcMood === false ? result : inpval.barcode}
              onChange={setData}
              name="barcode"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
