import data from "./data.json";
import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [ info, setInfo ] = useState(0);

  const clickHandle = (fd) => {
    if ((info+fd) < 0) {setInfo(data["data"].length-1);}
    else if ((info+fd) === data["data"].length) {setInfo(0);}
    else {setInfo(info+fd);}
  }

  const Title = () => {
    const title = data["data"][info]["title"];
    if (title) {
      return (
        <h1>{title}</h1>
      );
    }
    return;
  }

  const List = () => {
    const list = data["data"][info]["list"];
    const isAnchor = data["data"][info]["listAnchor"];
    if (list) {
      return (
        <ul>
          {
            list.map((l, index) => {
              return <li key={index}>{
                isAnchor
                ? <a href={l}>{l}</a>
                : l
              }</li>;
            })
          }
        </ul>
      )
    }
    return;
  }

  const Text = () => {
    const text = data["data"][info]["text"];
    if (text) {
      return (
        <>
          {
            text.map((t, index) => {
              if (t) {
                return <p key={index}>{t}</p>;
              }
              return <br key={index}/>;
            })
          }
        </>
      );
    }
    return;
  }

  const Content = () => {
    return (
      <div className="content">
        <Title></Title>
        <List></List>
        <Text></Text>
      </div>
    );
  }

  return (
    <div className="App">
      <Content></Content>
      <div className="img">
        <img src={process.env.PUBLIC_URL + "/imgs/" + data["data"][info]["image"]} />
      </div>
      <div className="background">
      <span>Yahya Kemal Beyatlı</span>
      <span>{info+1}</span>
      </div>
      <button
        onClick={() => {clickHandle(-1)}}
        className="prev"
      ><i className="fa fa-arrow-left"></i></button>
      <button
        onClick={() => {clickHandle(1)}}
        className="next"
      ><i className="fa fa-arrow-right"></i></button>
    </div>
  );
}

export default App;
