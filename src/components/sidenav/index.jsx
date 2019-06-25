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
    const activeIds = entries.map( (entry) => {
        if (entry.intersectionRatio > 0 ) {
          return entry.target.id;
        }
        return entry.target
      });
    if (activeIds.length !== this.props.anchors.length) {
      const activeHash = activeIds[0];
      const anchors = this.state.anchors.map(obj => {
       return obj.hash === activeHash ?
       { ...obj, isActive: true, isActiveBar: true } : {...obj, isActive: false, isActiveBar: false}
      })
      this.setState({ anchors })
    }
    this.hideLabels();
  }

  addObserverToTargets = () => {
    this.props.anchors.forEach((anc) => {
      const target = document.getElementById(anc.hash);
      this.observer.observe(target);
    });
  }

  hideLabels = () => {
    setTimeout(() => {
        const anchors = this.state.anchors.map(obj => {
            return  {...obj, isActive: false}
        })
        this.setState({ anchors })
    }, 2000)
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
