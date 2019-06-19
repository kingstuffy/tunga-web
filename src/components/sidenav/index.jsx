import React from 'react';

import "./sidenav.css";

class SideNav extends React.Component {
  observe = null;

  constructor(props) {
    super(props)
    this.state = {
      anchors: this.props.anchors
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.observerCallback, {threshold: 0.7});
    this.addObserverToTargets();
  }

  observerCallback = (entries, observer) => {
    const activeIds = entries.map(entry => {
      return entry.target.id;
    });
    console.log("activeIds", activeIds);
    if (activeIds.length !== this.props.anchors.length) {
      const activeHash = activeIds[0];
      const anchors = this.state.anchors.map(obj => {  
       return obj.hash === activeHash ? { ...obj, isActive: true } : {...obj, isActive: false}
      })
      this.setState({ anchors })
    }
  }

  addObserverToTargets = () => {
    this.props.anchors.forEach((anc) => {
      const target = document.getElementById(anc.hash);
      this.observer.observe(target);
    });
  }
  
  handleClick = (event) => {
    console.log(event.target.dataset.value)
    const anchors = this.state.anchors.map(obj => {  
      return obj.hash === event.target.dataset.value ? { ...obj, isActive: true } : {...obj, isActive: false}
     })
     this.setState({ anchors })
  }

  render () {
    return (
      <div>
          <ul className="side_bar">
          {
            this.state.anchors.map(anc => (
            <li className="side_bar-item" key={anc.hash}>
              <div
                className={`side_bar-tab
                  ${anc.isActive ? "side_bar-tab-active"
                  : "side_bar-tab-hidden"
                }`}>
                </div>
              <a
                className={`side_bar-label
                ${anc.isActive ? "side_bar-label-active"
                : "side_bar_hidden"}`}
                href={`#${anc.hash}`}
                data-value={anc.hash}
                onClick={this.handleClick}
              >
                {anc.title}
              </a>
            </li>
            ) )
          }  
          </ul>
      </div>
    );
  }
}

export default SideNav;
