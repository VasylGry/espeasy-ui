import { h, Component } from 'preact';

export class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false, isPumpOn: false, isLightOn: false, value: 'Програма1'};
    
        this.handlePump = this.handlePump.bind(this);
        this.handleLight = this.handleLight.bind(this);
        //this.handleClick3 = this.handleClick3.bind(this);
        //this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handlePump() {
        this.setState(state => ({
            isPumpOn: !state.isPumpOn
        }));
      }

      handleLight() {
        this.setState(state => ({
          isLightOn: !state.isLightOn
        }));
      }

      handleClick1() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Выбрана програма: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
                <div>
                    <label>Полив</label>
                    <button onClick={this.handlePump}>
                        {this.state.isPumpOn ? 'ON' : 'OFF'}
                    </button>
                </div>
                <div>
                    <label>Освещение</label>
                    <button onClick={this.handleLight}>
                        {this.state.isLightOn ? 'Вкл.' : 'Выкл.'}
                    </button>
                </div>
                <button onClick={this.handleClick1}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Выберите программу:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="програма1">Програма1</option>
                            <option value="програма2">Програма2</option>
                            <option value="програма3">Програма3</option>
                            <option value="програма4">Програма4</option>
                        </select>
                    </label>
                    <input type="submit" value="Выбрать" />
                </form>
            </div>
        );
      }
}

