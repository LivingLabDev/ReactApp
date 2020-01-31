import React from "react";
import ReactSVG from "react-svg";
import CircleSvg from '../../assets/cirkel.svg';
import "./Circle.css";
import {withRouter} from "react-router-dom";

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {svg: null};
    this.rect = null;

    this.calculateXY = this.calculateXY.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  calculateXY(event) {
    if (event.buttons === 0 || !this.rect) {
      return;
    }

    if (event.touches) {
      event = event.touches[0];
    }

    const {left, top, width, height} = this.rect;
    const {clientX, clientY} = event;

    const x = (clientX - left) / width * 2 - 1;
    const y = (top - clientY) / height * 2 + 1;
    return {x, y};
  }

  static getPage(container) {
    if (container !== null) {
      const percentage = container.style.transform.replace(/translate\(([-.\d]+)%.*\)/, "$1");
      return Math.round(-percentage / 100);
    }
  }

  mouseMove(event) {
    if (this.startAngle !== null) {
      event.preventDefault();
      event.stopPropagation();

      let xy = this.calculateXY(event);
      if (!xy) {
        return;
      }

      let angle = -Math.atan2(xy.y, xy.x) - this.startAngle;
      if (angle > 1.5 * Math.PI) {
        angle -= 2 * Math.PI;
      } else if (angle < -1.5 * Math.PI) {
        angle += 2 * Math.PI;
      }

      const fraction = angle / Math.PI / 2;
      const container = document.querySelector(".react-swipeable-view-container");
      const deltaPage = fraction * 7;

      if (Math.round(this.startPage) !== Math.round(this.startPage + deltaPage)) {
        try {
          this.props.history.replace([
            "/",
            "/sow",
            "/harvest",
            "/miller",
            "/bakery",
            "/baked",
            "/ending",
          ][Math.round(this.startPage + deltaPage)]);
        } catch (e) {}
      }

      this.startPage += deltaPage;
      this.startAngle += angle;

      let page = this.startPage;
      if (page > 6) {
        const overshoot = this.startPage - 6;
        const damped = Math.tanh(overshoot) / 4;
        page = 6 + damped;
      } else if (page < 0) {
        const overshoot = -this.startPage;
        const damped = Math.tanh(overshoot) / 4;
        page = -damped;
      }

      container.style.transform = `translate(${page * -100}%)`;
    }
  }

  mouseDown(event) {
    const element = document.querySelector("svg");
    this.rect = element.getBoundingClientRect();

    let xy = this.calculateXY(event);
    if (!xy) {
      return;
    }

    const radius = Math.sqrt(xy.x * xy.x + xy.y * xy.y);
    if (radius > 1) {
      return;
    }

    event.preventDefault();

    const container = document.querySelector(".react-swipeable-view-container");
    container.style.transition = "all 0s ease 0s";

    this.startPage = Circle.getPage(container);
    this.startAngle = -Math.atan2(xy.y, xy.x);
  }

  mouseUp(event) {
    if (this.startAngle !== null) {
      event.preventDefault();
      this.startAngle = null;

      const container = document.querySelector(".react-swipeable-view-container");
      if (container !== null) {
        container.style.transition = "transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s";
      }

      const rounded = Circle.getPage(container);
      if (rounded !== null && container !== null) {
        container.style.transform = `translate(${rounded * -100}%)`;
      }
    }
  }

  componentDidMount() {
    document.body.addEventListener("mousemove", this.mouseMove);
    document.body.addEventListener("touchmove", this.mouseMove);
    document.body.addEventListener("mouseup", this.mouseUp);
    document.body.addEventListener("touchend", this.mouseUp);

    const svg = (
      <ReactSVG
        onMouseDown={this.mouseDown}
        onTouchStart={this.mouseDown}
        src={CircleSvg}
        renumerateIRIElements={false}
      />
    );
    this.setState({svg});
  }

  render() {
    if (this.state.svg === null) {
      return null;
    }

    const invisible =  "invisible";

    const page = {
      "/": "landing",
      "/sow": "sow",
      "/harvest": "harvest",
      "/miller": "miller",
      "/baked": "baked",
      "/bakery": "bakery",
      "/ending": "ending",
      "/more": invisible,
      "/blockchain": invisible,
      "/login": invisible,
      "/baker": invisible,
      "/farmer": invisible,
      "/farmer/sow" : invisible,
    }[this.props.location.pathname];

    return <div className={`Circle Circle_${page}`}>{this.state.svg}</div>
  }
}

export default withRouter(Circle);
