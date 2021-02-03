import React, { Component } from "react";
import jCheckbox from "../model/jChekbox.json";


class CheckBox_Jawaban extends Component {
  render() {
    return (
      <div>
        <section className="jawaban_checkbox">
          {jCheckbox.map((postCheckbox, index) => {
            return (
              <div className="cardCheckbox">
                <ul className="list-group">
                  <label htmlFor="">soal</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.soal}
                  </li>
                  <label htmlFor="">Jawab : A</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.A}
                  </li>
                  <label htmlFor="">Jawab : B</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.B}
                  </li>
                  <label htmlFor="">Jawab : C</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.C}
                  </li>
                  <label htmlFor="">Jawab : D</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.D}
                  </li>
                  <label htmlFor="">Kunci :</label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.kunci[0]},{postCheckbox.kunci[1]},
                    {postCheckbox.kunci[2]}
                  </li>
                  <label htmlFor="">Score : </label>
                  <li className="list-group-item bg-primary">
                    {postCheckbox.score}
                  </li>
                </ul>
                <button>SUBMIT</button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default CheckBox_Jawaban;