import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h1>Add a new note</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputTag1" class="form-label">
              Tag
            </label>
            <select
              class="form-select"
              id="exampleInputTag1"
              aria-label="Default select example"
            >
              <option selected>Select a Tag</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Add Note
          </button>
        </form>
        <Notes />
      </div>
    </div>
  );
};

export default Home;
