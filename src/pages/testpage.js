import { h, Component } from 'preact';
import { getJsonStat, getVariables } from '../lib/espeasy';

var server_path = "http://192.168.43.224";
const DEVICES = [
  {name: "pump", time: "08:20:00", onOff: 1},
  {name: "pump", time: "08:40:00", onOff: 0},
  {name: "pump", time: "14:00:00", onOff: 1},
  {name: "pump", time: "14:10:00", onOff: 0},
  {name: "light", time: "07:30:00", onOff: 0},
  {name: "light", time: "19:30:00", onOff: 1},
]

class Time extends Component {
  constructor(props){
      super(props);
      this.timer = 0;
      this.state = {
          time: new Date()
      };
  }
  componentWillMount(){
      // set up timer
      this.timer = setTimeout(() => {
          this.setState({
              time: new Date()
          });
          this.componentWillMount();
      }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());
  }
  componentWillUnmount(){
      // remove timer
      clearTimeout(this.timer);
  }
  
  render() {
      // render the current time
      return this.state.time.toLocaleTimeString();
  }
}

class CtrlButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      cmd:  "control?cmd=pcfgpio,{port},1"
    }
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick() {
    this.setState(state => ({
        isOn: !state.isOn
    }));
    const onOff = this.state.isOn ? 0 : 1;
    const url = server_path + '/control?cmd=pcfgpio,' + this.props.port + ',' + onOff;
    console.log(url);
    fetch(url)
      .then(response => response.text())
      .then(cmd => this.setState({ cmd }));
  }
  render() {
    return (
      <div>
          <button onClick={this.handleClick} >
            {this.state.isOn ? 'Вкл.' : 'Выкл.'}
          </button>
          <label>{this.props.name}</label>
       </div>
    )
  }
}

class DeviceRow extends Component {
  render() {
    const name = this.props.name;
    return (
      <tr>
        <th colSpan="2">
          {name}
        </th>
      </tr>
    );
  }
}

class TimeRow extends Component {
  render() {
    const device = this.props.device;
    const time = device.time;
    const onOff = device.onOff ?
      <span style={{color: 'green'}}>
        <b>{"ON"}</b>
      </span>
      :
      <span>
        <b>{"OFF"}</b>
      </span>;
    return (
      <tr>
        <td>{time}</td>
        <td>{onOff}</td>
      </tr>
    );
  }
}

class DeviceTable extends Component {
  render() {
    const rows = [];
    let lastName = null;
    
    this.props.devices.forEach((device) => {
      if (device.name !== lastName) {
        rows.push(
          <DeviceRow
            name={device.name}
            key={device.name} />
        );
      }
      rows.push(
        <TimeRow
          device={device}
          key={device.name} />
      );
      lastName = device.name;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const getVars = async () => {
  const vars = await getJsonStat(server_path);
  console.log(vars);
  const host = window.location.host;
  console.log(server_path);
}

export class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 1,
          dateTime: '',
          temperature: '',
          programs: this.handlePrograms(),
          date: new Date()};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrograms = this.handlePrograms.bind(this);
      }

      tick() {
        fetch(server_path + '/json').then(response => {
          return response.json()
        }).then(result => {
          this.setState({dateTime : 'Дата: ' + result.System["Local Time"]});
          this.setState({temperature: 'Температура' + "=" + result.Sensors[0].TaskValues[0].Value});
          });
          getVars();         
      }

      componentDidMount() {
 //       this.handlePrograms();
        server_path = (window.location.host.indexOf("127") > -1) ? server_path : window.location.host;
        console.log(server_path);
        this.timerID = setInterval(
          () => this.tick(),
          2000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
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
        this.handlePrograms();
        alert('Выбрана Программа №' + this.state.value);
        event.preventDefault();
      }

      render() {
        return (
            <div>
                <div>
                  <p> {this.state.dateTime}</p>
                  <p> {this.state.temperature}</p>
                  <CtrlButton port = '57' name = " Полив" />
                  <CtrlButton port = '58' name = " Освещение" />
                  <CtrlButton port = '59' name = " Вентиляция" />
                  <CtrlButton port = '60' name = " Нагрев" />
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
                </div>
            </div>
        );
      }
}

