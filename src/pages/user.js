import { h, Component } from 'preact';
import { getJsonStat, getVariables } from '../lib/espeasy';

var server_path = "http://192.168.43.224";

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

const getVars = async () => {
  const vars = await getJsonStat(server_path);
//  console.log(vars);
  const host = window.location.host;
//  console.log(server_path);
}

export class UserControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 1,
          dateTime: '',
          temperature: '',
          date: new Date()};    
      }

      tick() {
        fetch(server_path + '/json').then(response => {
          return response.json()
        }).then(result => {
          this.setState({dateTime : 'Дата: ' + result.System["Local Time"]});
          this.setState({temperature: 'Температура' + "=" + result.Sensors[0].TaskValues[0].Value});
          });
//          getVars();         
      }

      componentDidMount() {
        server_path = (window.location.host.indexOf("127") > -1) ? server_path : "http://" + window.location.host;
        console.log(server_path);
        this.timerID = setInterval(
          () => this.tick(),
          2000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
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
                <div>
                  <p>{this.state.dateTime}</p>
                  <button onClick={this.timeSync}>Синхронизация времени</button>
                  <p> {this.state.temperature}</p>
                  <CtrlButton port = '57' name = " Полив" />
                  <CtrlButton port = '58' name = " Освещение" />
                  <CtrlButton port = '59' name = " Вентиляция" />
                  <CtrlButton port = '60' name = " Нагрев" />
                </div>
            </div>
        );
      }
}

export class ProgramPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 1,
          programs: this.handlePrograms(),
          date: new Date()};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrograms = this.handlePrograms.bind(this);
      }

      componentDidMount() {
        server_path = (window.location.host.indexOf("127") > -1) ? server_path : "http://" + window.location.host;
        this.handlePrograms(this.state.value);
      }

      componentWillUnmount() {
           ()=>{}
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

      handleChange(event) {
        this.setState({value: event.target.value});
        this.handlePrograms(this.state.value);
      }
    
      handleSubmit(event) { 
        alert('Выбрана Программа №' + this.state.value);
        event.preventDefault();
      }

      render() {
        return (
            <div>
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