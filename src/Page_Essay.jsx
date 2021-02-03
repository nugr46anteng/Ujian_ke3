import { data } from "./model/Model";
import React, { Component } from "react";
import Textarea from "./component/Textarea";
import Essay_Jawaban from "./component/Essay_Jawaban";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { jawabanSoal: [], score: 0, hasilJawabanSoal: [] };
  }

  addJawaban = (jawaban) => {
    let newJawaban = this.state.jawabanSoal.filter((value) => {
      return value.soal_no !== jawaban.soal_no;
    });

    newJawaban.push(jawaban);

    let hasilJawaban = this.kalkulasiNilai(newJawaban);
    hasilJawaban.sort((a, b) => a.soal_no - b.soal_no);

    this.setState({ jawabanSoal: newJawaban, hasilJawabanSoal: hasilJawaban });
  };

  kalkulasiNilai = (jawaban) => {
    let tempHasilJawab = [];
    let booleanJawab = "";
    jawaban.map((jawab) => {
      switch (data[jawab.soal_no - 1].type) {
        case "radio":
        case "essay":
          if (jawab.jawaban === data[jawab.soal_no - 1].kunci) {
            booleanJawab = "benar";
          } else {
            booleanJawab = "salah";
          }
          break;

        case "checkbox":
          if (
            this.equalsIgnoreOrder(jawab.jawaban, data[jawab.soal_no - 1].kunci)
          ) {
            booleanJawab = "benar";
          } else {
            booleanJawab = "salah";
          }
          break;
      }

      tempHasilJawab.push({
        soal_no: jawab.soal_no,
        hasil: booleanJawab,
      });
      booleanJawab = "";
    });

    return tempHasilJawab;
  };

  equalsIgnoreOrder = (a, b) => {
    if (a.length !== b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter((e) => e === v).length;
      const bCount = b.filter((e) => e === v).length;
      if (aCount !== bCount) return false;
    }
    return true;
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <form>
                {data.map((nilai, i) => {
                  if (nilai.type === "essay") {
                    return (
                      <TextArea
                        soal={nilai.soal}
                        no={i + 1}
                        key={i}
                        funcJawab={this.addJawaban}
                      />
                    );
                  }
                })}
              </form>
            </div>
            <div className="col">
              <div className="sticky-top">
                <Essay_Jawaban />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
