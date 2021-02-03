import React, { Component } from "react";
import jEssay from "../model/jEssay.json";


 class Essay_Jawaban extends Component {
  render() {
    return (
      <div>
        <section className="jawaban_essay">
          {dbEssay.map((postEssay) => {
            return (
              <div className="cardEssay">
                <ul className="list-group">
                  <label htmlFor="">Soal</label>
                  <li className="list-group-item bg-primary">
                    {postEssay.soal}
                  </li>
                  <label htmlFor="">Kunci :</label>
                  <li className="list-group-item bg-primary">
                    {postEssay.kunci}
                  </li>
                  <label htmlFor="">Score :</label>
                  <li className="list-group-item bg-primary">
                    {postEssay.score}
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

export default Essay_Jawaban;