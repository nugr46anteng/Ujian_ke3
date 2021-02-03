import React, { Component } from "react";
import jRadio from "../model/Model.json";

 class Radio_jawaban extends Component {
  render() {
    return (
      <div>
        <section className="jawaban_radio">
          {dbRadio.map((postRadio, index) => {
            return (
              <>
                <div className="cardRadio">
                  <ul className="list-group">
                    <label htmlFor="">soal :</label>
                    <li className="list-group-item bg-primary">
                      {postRadio.soal}
                    </li>
                    <label htmlFor="">jawab : A</label>
                    <li className="list-group-item bg-primary">
                      {postRadio.a}
                    </li>
                    <label htmlFor="">jawab : B</label>

                    <li className="list-group-item bg-primary">
                      {postRadio.b}
                    </li>
                    <label htmlFor="">jawab : C</label>

                    <li className="list-group-item bg-primary">
                      {postRadio.c}
                    </li>
                    <label htmlFor="">jawab : D</label>

                    <li className="list-group-item bg-primary">
                      {postRadio.d}
                    </li>

                    <label htmlFor="">kunci :</label>

                    <li className="list-group-item bg-primary">
                      {postRadio.kunci}
                    </li>
                    <label htmlFor="">score :</label>

                    <li className="list-group-item bg-primary">
                      {postRadio.score}
                    </li>
                  </ul>
                  <button>SUBMIT</button>
                </div>
              </>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Radio_Jawaban;