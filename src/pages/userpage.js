import { h, Component } from 'preact';
import { getJsonStat, getVariables } from '../lib/espeasy';

var server_path = "http://192.168.43.224";

class DeviceRow extends Component {
  render() {
    const device = this.props.device;
    const time = device.time;
    const onOff = device.onOff ? undefined : device.onOff;
    const temperature = device.temperature ? undefined : device.temperature;
    return (
      <tr>
        <td>{time}</td>
        <td>{onOff}</td>
        <td>{temperature}</td>
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
          <ProgrammRow
            name={device.name}
            key={device.name} />
        );
      }
      rows.push(
        <DeviceRow
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
            <th>Temperature [min, max]</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const getVars = async () => {
  const vars = await getJsonStat(server_path);
//  console.log(vars);
  const host = window.location.host;
//  console.log(server_path);
}

export class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 1,
          dateTime: '',
          temperature: '',
          programs: this.handlePrograms(),
          date: new Date()};
    
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
        server_path = (window.location.host.indexOf("127") > -1) ? server_path : "http://" + window.location.host;
        this.handlePrograms(this.state.value);
        this.timerID = setInterval(
          () => this.tick(),
          2000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      handlePrograms(id) {
        const prog_id = Number(id);  
        fetch('./progs.json')
        .then(response => {
          console.log(prog_id + " typrof:  " + typeof(prog_id))
          return response.json();
        }).then(result => {
          this.setState({programs : result.filter(object => object.id === prog_id)
          });
//          console.log(this.state.programs)
        }).catch(err => {
          console.log("Error Reading data " + err);
        });
      }

      timeSync(event) {
        const url = server_path + '/control?cmd=setclock,1';
        console.log(url);
        fetch(url).then(response => { 
          return response.text()
        });
      }

      render() {
        return (
            <div>
              <p>{this.state.dateTime}</p>
              <p> {this.state.temperature}</p>
              <h3> Программа №{this.state.value}</h3>
              <p>{JSON.stringify(this.state.programs)}</p>
            </div>
        );
      }
}

