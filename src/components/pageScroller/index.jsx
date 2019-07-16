import * as React from "react";
import ReactPageScroller from "react-page-scroller";
import SideNav from "../sidenav";

class PageScroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: null
        };
        this.reactPageScroller = null;
    }

    componentDidMount() {
        this.setState({screenWidth: window.innerWidth});
    }

    goToPage = (pageNumber) => {
        return this.reactPageScroller.goToPage(pageNumber)
    }

    render() {
        const screen = this.state.screenWidth;
        return(
        <div>
            {
                screen > 700 ? (
                    <div>
                        <ReactPageScroller
                            ref={c => this.reactPageScroller = c}
                            animationTimer={800}
                        >
                            {this.props.children}
                        </ ReactPageScroller>
                        <SideNav pages={this.props.pages}  goToPage={this.goToPage}/>
                    </div>
                ) : (
                    <div>
                        {this.props.children}
                    </div>
                )
            }
        </div>
        );
    }
}

export default PageScroller;
