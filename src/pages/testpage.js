import { h, Component } from 'preact';

export class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isPumpOn: false, 
          isLightOn: true, 
          isFanOn: false, 
          isHeatOn: true, 
          value: 'Програма1',
          programs: null};
    
        this.handlePump = this.handlePump.bind(this);
        this.handleLight = this.handleLight.bind(this);
        this.handleFan = this.handleFan.bind(this);
        this.handleHeat = this.handleHeat.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrograms = this.handlePrograms.bind(this);
      }

      handlePrograms(){  
        fetch('./progs.json').then(response => {
//          console.log(response);
          return response.json();
        }).then(programs => {
          // Work with JSON data here
          console.log(programs);
          return this.setState({programs});
        }).catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
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

      handleFan() {
        this.setState(state => ({
          isFanOn: !state.isFanOn
        }));
      }

      handleHeat() {
        this.setState(state => ({
          isHeatOn: !state.isHeatOn
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
                    <label>Полив       </label>
                    <button onClick={this.handlePump}>
                        {this.state.isPumpOn ? 'Вкл.' : 'Выкл.'}
                    </button>
                </div>
                <div>
                    <label>Освещение   </label>
                    <button onClick={this.handleLight}>
                        {this.state.isLightOn ? 'Вкл.' : 'Выкл.'}
                    </button>
                </div>
                <div>
                <label>Вентиляция  </label>
                  <button onClick={this.handleFan}>
                      {this.state.isFanOn ? 'Вкл.' : 'Выкл.'}
                  </button>
                </div>
                <div>
                <label>Нагрев      </label>
                  <button onClick={this.handleHeat}>
                      {this.state.isHeatOn ? 'Вкл.' : 'Выкл.'}
                  </button>
                </div>
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
                <div>
                  <p>{this.state.programs}</p>
                  <button onClick={this.handlePrograms}>
                     Load data ...
                  </button>
                </div>
            </div>
        );
      }
}

