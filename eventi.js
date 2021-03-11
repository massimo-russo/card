
/*classe button per gestire evento puntini info in alto a destra*/

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <nav className="more"onClick={() => this.setState((state) => ({ isOpen: !state.isOpen }))}>
        {this.state.isOpen && (
            <ul>
            <hr></hr>
            <li>Esporta</li>
            <hr></hr>
            <li>Font preferito</li>
            <hr></hr>
            <li>Licenza</li>
          </ul>
        )}
        <div class="more"><i class="fas fa-ellipsis-v"></i></div>
      </nav>
    );
  }
}


/*dichiaro la classe card CON SFONDO INIZIALE BIANCO E SETTO  hoverButton: false*/
class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      bgColor: '#fff',hoverButton: false,
      };
    }
    handleColor = (e) => {
        const color = e.target.textContent;
        this.setState({ bgColor: color, hoverButton: true });
    };
    
  


    /*RENDERIZZO GLI ELEMENTI BUTTON---RICHIAMO LA CLASSE MORE PER I PUNTINI IN ALTO A DESTRA*/
    render() {
        return (
          <div
            className="Card"style={{backgroundColor: this.state.bgColor,transition: this.state.hoverButton && '3s',}}>   
            <Info />
            <header>
             <hr></hr>
              <button onMouseOver={this.handleColor} onMouseOut={() => this.setState({ hoverButton: false })}style={{backgroundColor: this.props.color1, }}>{this.props.color1}
              </button>
              <button onMouseOver={this.handleColor} onMouseOut={() => this.setState({ hoverButton: false })}style={{ backgroundColor: this.props.color2 }}>{this.props.color2}
              </button>
              <button onMouseOver={this.handleColor} onMouseOut={() => this.setState({ hoverButton: false })}style={{ backgroundColor: this.props.color3 }}>{this.props.color3}
              </button>
              <hr></hr>
              </header>
              
              <h2 style={{ fontFamily: this.props.title }}>{this.props.title}</h2><footer style={{ fontFamily: this.props.title }}>
              Lorem ipsum set etiam,si nihil morte cetium vita transcurrit
            </footer>
          </div>
        );
      }
    }
  
/*creo la funzione card container che contiene le varie card con i relativi colori*/

const ContenitoreCard = () => {
    return (
      <div className="CardContainer">
        <Card color1 = "#ff9a00" color2="#ff5700" color3="#032535" title="Helvetica"/>
        <Card color1 = "#00ADB5" color2="#45969B" color3="#ff0340" title="Baskerville"/>
        <Card color1 = "#101325" color2="#2F35C5" color3="#C6B8ED" title="Impact"/>
      </div>
    );
  };

/*creo APP*/
const App = () => {
    return (
      <div className="App">
        <h1>CARD</h1>
        <ContenitoreCard />
      </div>
    );
  };
  
  /*render*/
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )