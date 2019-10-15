import { h, Component } from 'preact';
import { getJsonStat } from '../lib/espeasy';

const jsonData = [
  {id: 1, time: "08:20:00", pump: 1},
  {id: 2, time: "08:40:00", pump: 0},
  {id: 3, time: "14:00:00", pump: 1},
  {id: 4, time: "14:10:00", pump: 0},
  {id: 5, time: "07:30:00", light: 0},
  {id: 6, time: "19:30:00", light: 1},
]

class CtrlButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      cmd:  ""
    }
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick() {
    this.setState(state => ({
        isOn: !state.isOn
    }));
  }
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>
            {this.state.isOn ? 'Вкл.' : 'Выкл.'}
          </button>
          <label>{this.props.name}</label>
       </div>
    )
  }
}

export class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 1,
          variables: null,
          programs: this.handlePrograms(),
          devices: [{id: 0, time: "00:00:00", pump: 0, light: 0 }],
          date: new Date()};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrograms = this.handlePrograms.bind(this);
      }

      componentDidMount() {
 //       this.handlePrograms();
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

      handlePrograms(){  
        fetch('./progs.json').then(response => {
          return response.json()
        }).then(result => {
          // Work with JSON data here
          console.log(result);
          this.setState({programs : result})
          console.log(this.state.programs)
        }).catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Выбрана Программа №' + this.state.value);
        event.preventDefault();
      }

      renderTableHeader() {
        let header = Object.keys(this.state.devices[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    
      renderTableData() {
          return jsonData.map((device, index) => {
             const {id, time, pump, light } = device //destructuring
             return (
                <tr key={id}>
                   <td>{id}</td>
                   <td>{time}</td>
                   <td>{pump === undefined ? '******' : pump === 1 ? "ON" : "OFF"}</td>
                   <td>{light === undefined ? '******' : light=== 1 ? "ON" : "OFF"}</td>
                </tr>
             );
          });
       }

      render() {
        return (
            <div>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                <div>
                  <CtrlButton name = " Полив" />
                  <CtrlButton name = " Освещение" />
                  <CtrlButton name = " Вентиляция" />
                  <CtrlButton name = " Нагрев" />
                </div>
                <div>
                    <label>
                        Программа&nbsp;&nbsp;:
                        <select defaultValue = "Выберите программу" onChange={this.handleChange}>
                            <option value="1">Программа №1</option>
                            <option value="2">Программа №2</option>
                            <option value="3">Программа №3</option>
                            <option value="4">Программа №4</option>
                        </select>
                    </label>
                    <form onSubmit={this.handleSubmit}>
                      <input type="submit" value="Выбрать" />
                    </form>
                </div>
                <div>
                  <p>{JSON.stringify(this.state.programs)}</p>
                  <button onClick={this.handlePrograms}>
                     Load data ...
                  </button>
                  <table id='device'>
                    <tbody>
                      <tr> {this.renderTableHeader()} </tr>
                      {this.renderTableData()}
                    </tbody>
                  </table>
                </div>
            </div>
        );
      }
}

