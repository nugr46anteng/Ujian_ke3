import React, { Component } from "react";

 class Resultnilai extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.jawaban.map((jawab) => {
            if (jawab.hasil === "benar") {
              return (
                <li className="list-group-item bg-primary">
                  Jawaban soal {jawab.soal_no} {jawab.hasil}
                </li>
              );
            } else if (jawab.hasil === "salah") {
              return (
                <li className="list-group-item bg-danger">
                  Jawaban soal {jawab.soal_no} {jawab.hasil}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Resultnilai;