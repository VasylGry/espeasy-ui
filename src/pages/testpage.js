import { h, Component } from 'preact';
import { getJsonStat } from '../lib/espeasy';

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
          programs: null,
          clouds: [],
          date: new Date()};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrograms = this.handlePrograms.bind(this);
      }

      componentDidMount() {
        this.handlePrograms();
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
        fetch('./progs.json').then(res => {
          console.log(res);
          res.json();
        }).then(result => {
          // Work with JSON data here
          console.log(result);
          this.setState({clouds : result});
          console.log(this.state.clouds);
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
                </div>
                <ul>
                  {this.state.clouds.map(item => (
                    <li key={item.name}>
                      {item.name} {item.id}
                    </li>
                  ))}
                </ul>
            </div>
        );
      }
}

