import React, { useState } from "react";

const App = () => {
  const [nationName, setNationName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [coperMedal, setCoperMedal] = useState(0);
  const [nationList, setNationList] = useState([]);
  const newNation = {
    id: Date.now(),
    name: nationName,
    guem: goldMedal,
    eun: silverMedal,
    dong: coperMedal,
  };

  const newNationName = (e) => {
    setNationName(e.target.value);
    console.log(nationName);
  };

  const newGoldMedal = (e) => {
    setGoldMedal(e.target.value);
    console.log(goldMedal);
  };

  const newSilverMedal = (e) => {
    setSilverMedal(e.target.value);
    console.log(silverMedal);
  };

  const newCoperMedal = (e) => {
    setCoperMedal(e.target.value);
    console.log(coperMedal);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(nationList);
    const data = e.nativeEvent.submitter;

    if (data.value === "addBtn") {
      if (nationName === "") {
        alert("국가명을 입력해주세요.");
        return;
      }

      if (
        nationList.some((e) => {
          return newNation.name === e.name;
        })
      ) {
        alert("이미 존재하는 국가명 입니다.");
        return;
      }

      setNationList([...nationList, newNation]);
      console.log("nationList", nationList);
      return;
    }

    if (data.value === "updateBtn") {
      if (
        nationList.some((e) => {
          return newNation.name === e.name;
        })
      ) {
        nationList.map((e) => {
          return newNation;
        });
      } else {
        alert("존재하지 않는 국가명 입니다.");
      }
    }
  };

  const deleteBtnHandler = (selectedNation) => {
    const res = nationList.filter((e) => {
      if (e.id !== selectedNation.id) return e;
    });
    setNationList(res);
  };

  return (
    <div className="main">
      <div className="form">
        <form onSubmit={onSubmitHandler}>
          <table className="input">
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={nationName}
                    onChange={newNationName}
                  ></input>
                </td>
                <td>
                  <input
                    type="number"
                    value={+goldMedal}
                    onChange={newGoldMedal}
                  ></input>
                </td>
                <td>
                  <input
                    type="number"
                    value={+silverMedal}
                    onChange={newSilverMedal}
                  ></input>
                </td>
                <td>
                  <input
                    type="number"
                    value={+coperMedal}
                    onChange={newCoperMedal}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" value="addBtn" name="action">
            국가 추가
          </button>
          <button type="submit" value="updateBtn" name="action">
            업데이트
          </button>
        </form>
        <br></br>
        <table className="res">
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {nationList.map((e) => {
              return (
                <>
                  <tr key={e.id}>
                    <td>{e.nationName}</td>
                    <td>{e.geum}</td>
                    <td>{e.silver}</td>
                    <td>{e.dong}</td>
                  </tr>
                  <button onClick={() => deleteBtnHandler(e)}>삭제</button>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
