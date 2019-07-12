import React from 'react';

import "./sidenav.css";

class SideNav extends React.Component {

  constructor(props) {
    super(props)
    this.timer = null;
    this.observer = null
    this.state = {
      pages: this.props.pages
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.observerCallback, {threshold: 0.7});
    setTimeout(() => this.addObserverToTargets(), 1000);
  }

  componentWillUnmount () {
    this.observer = null
    clearTimeout(this.timer);
  }

  observerCallback = (entries, _observer) => {
    const activeTargets = entries.map( (entry) => {
      if (entry.intersectionRatio > 0 ) {
        return entry.target.id;
      }
      return entry.target
    });

    if (activeTargets.length !== this.props.pages.length) {
      const activeHash = activeTargets[0];
      const pages = this.state.pages.map(obj => {
       return obj.hash === activeHash ?
       { ...obj, isActive: true, isActiveBar: true } : {...obj, isActive: false, isActiveBar: false}
      })
      this.setState({ pages })
      this.hideLabels();
      this.addObserverToTargets();
    }

  }

  addObserverToTargets = () => {
    const pages = this.state.pages.map((anc) => {
      const target = document.getElementById(anc.hash);

      if (target && !anc.isObserved) {
        this.observer.observe(target);
        return { ...anc, isObserved: true}
      }

      return anc;
    });
    this.setState({ pages })
  }

  hideLabels () {
    this.timer = setTimeout(() => {
      const pages = this.state.pages.map(obj => {
        return {...obj, isActive: false};
       });
      this.setState({ pages });
    }, 5000);
  }

  handleClick = (pageNumber) => (event) => {
    console.log("page to navigate to", pageNumber)
    this.props.goToPage(pageNumber);
    event.preventDefault();
  }

  render () {
    return (
      <div className="side_bar">
          <ul>
          {
            this.state.pages.map( (anc, index) => (
            <li className="side_bar-item" key={anc.hash}>
              <div
                style={ anc.isActiveBar ? { backgroundColor: anc.bgColor } : { backgroundColor: "#333" } }
                className={`side_bar-tab
                  ${anc.isActiveBar ? "side_bar-tab-active"
                  : "side_bar-tab-hidden"
                }`}>
                </div>
              <a
                className={`side_bar-label
                ${anc.isActive ? "side_bar-label-active"
                : "side_bar-label-hidden"}`}
                href={`#${anc.hash}`}
                data-value={anc.hash}
                style={{color: anc.color}}
                onClick={this.handleClick(index)}
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
