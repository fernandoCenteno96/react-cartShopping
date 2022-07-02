import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 1500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 1500, img: "/productos/lechuga.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (product) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === product.name)) {
      const newCarro = carro.map((x) =>
        x.name === product.name ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...product, cantidad: 1 }),
    });
  };
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };
  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
          carro={this.state.carro}
        />
        <Layout>
          <Title />
          <Productos
            addToCart={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
